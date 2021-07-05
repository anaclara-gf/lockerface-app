import { configAzureAPI } from './configAzureAPI';

const fetchInfo = (contentType, body = "") => {
    return {
        'method': 'POST',
        'headers': {...configAzureAPI.headers, 'Content-Type': `application/${contentType}`},
        'body': body
    }
}

export const detectFace = async (image) => {
    try {
        const response = await fetch(`${configAzureAPI.baseURL}/detect?returnFaceId`, fetchInfo("octet-stream", image));
        const data = await response.json();
        if(data.length === 0) {
            return {
                "status": "error",
                "message": "Nenhuma face detectada, tente novamente! Certifique-se que sua face está desimpedida"
            };
        } else {
            return identifyFace(data[0].faceId);
        }
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};

const identifyFace = async (faceId) => {
    const identifyFaceBody = JSON.stringify({
        "personGroupId": "avanade",
        "faceIds": [faceId],
        "confidenceThreshold": 0.8,
        "maxNumOfCandidatesReturned": 1
    });

    try {
        const response = await fetch(`${configAzureAPI.baseURL}/identify`, fetchInfo("json", identifyFaceBody));
        const data = await response.json();
        if(data[0].candidates.length) {
            const personId = data[0].candidates[0].personId;
            return searchPackages(personId);
        } else {
            return {
                "status": "error",
                "message": "Ops, parece que você ainda não tem cadastro! Tente novamente ou volte para página inicial e registre-se"
            };
        }
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
};
 
const searchPackages = async (personId) => {
    try {
        const lockerFaceAPIUrl = 'https://lockerface-api.herokuapp.com';

        const packagesData = await fetch(`${lockerFaceAPIUrl}/packages/${personId}`);
        const packages = await packagesData.json();

        const userData = await fetch(`${lockerFaceAPIUrl}/users/id/${personId}`);
        const user = await userData.json();

        let lockerNumbers;
        if(packages.length === 0) {
            return {
                "status": "error",
                "message": "Não há pacotes para você! Você quer tentar novamente ou pelo código?"
            }
        }

        if(packages.length === 1) {
            lockerNumbers = packages.toString();
        } else {
            lockerNumbers = packages.join(', ')
        }
        return {
            "status": "success",
            "message": {
                name: user.name, 
                lockerNumbers: lockerNumbers,
                totalLockers: packages.length
            }
        };
    } catch(err) {
        return {
            "status": "error",
            "message": "Internal Error"
        };
    }
}