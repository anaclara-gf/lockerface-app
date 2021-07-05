
import { AZURE_URL, AZURE_PASSWORD} from "@env";

export const configAzureAPI = {
  baseURL: AZURE_URL,
  headers: {
    'Ocp-Apim-Subscription-Key': AZURE_PASSWORD
  }
}
