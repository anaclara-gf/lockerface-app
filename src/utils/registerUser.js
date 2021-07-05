import { configAzureAPI } from './configAzureAPI';

const fetchInfo = (contentType, body = "") => {
    return {
        'method': 'POST',
        'headers': {...configAzureAPI.headers, 'Content-Type': `application/${contentType}`},
        'body': body
    }
}

export const detectFace = async (image, name, role) => {
    try {
        const response = await fetch(`${configAzureAPI.baseURL}/detect?returnFaceId`, fetchInfo("octet-stream", image));
        const data = await response.json();
        if(data.length === 0) {
            return {
                "status": "error",
                "message": "Nenhuma face detectada"
            };
        } else {
            return identifyFace(data[0].faceId, image, name, role);
        }
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const identifyFace = async (faceId, image, name, role) => {
    const identifyFaceBody = JSON.stringify({
        "personGroupId": "avanade",
        "faceIds": [faceId],
        "confidenceThreshold": 0.5,
        "maxNumOfCandidatesReturned": 1
    });

    try {
        const response = await fetch(`${configAzureAPI.baseURL}/identify`, fetchInfo("json", identifyFaceBody));
        const data = await response.json();
        if(data[0].candidates.length) {
            return {
                "status": "error",
                "message": "Sua Face ID já está cadastrada no sistema"
            };
        } else {
            return createUser(image, name, role);
        }
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const createUser = async (image, name, role) => {
    const createUserBody = JSON.stringify({
        "name": name,
        "userData": role
    })

    try {
        const response = await fetch(`${configAzureAPI.baseURL}/persongroups/avanade/persons`, fetchInfo("json", createUserBody));
        const data = await response.json();
        const personId = data.personId;
        return addFaceToUser(personId, image, name, role);
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const addFaceToUser = async (personId, image, name, role) => {
    try {
        await fetch(`${configAzureAPI.baseURL}/persongroups/avanade/persons/${personId}/persistedFaces`, fetchInfo("octet-stream", image));
        return trainingFace(name, role, personId);
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const trainingFace = async (name, role, personId) => {
    try {
        await fetch(`${configAzureAPI.baseURL}/persongroups/avanade/train`, fetchInfo("json"));
        return addUserLockerFaceAPI(name, role, personId);
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const addUserLockerFaceAPI = async (name, role, personId) => {
    const body = JSON.stringify({
        "name": name,
        "role": role,
        "personId": personId
    })

    const lockerFaceAPIUrl = 'https://lockerface-api.herokuapp.com'; 

    try {
        const result = await fetch(`${lockerFaceAPIUrl}/users`, fetchInfo("json", body));
        const user = await result.json();

        return {
            "status": "success",
            "message": `Olá, ${user.name}\nCadastro concluído com sucesso!`
        };
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
}
