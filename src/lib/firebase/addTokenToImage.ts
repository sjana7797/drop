import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from ".";
const storage = getStorage(app);
export const imageURLParser = async (url: string): Promise<string> => {
  try {
    const gsReference = ref(storage, url);
    console.log(gsReference);
    const uri = await getDownloadURL(gsReference);
    console.log(uri);
    return uri;
  } catch (error) {
    return "Error";
  }
};
