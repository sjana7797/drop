import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { useEffect, useState } from "react";
import { app } from ".";

const storage = getStorage(app);
export const useFirebaseImgParser = (url: string) => {
  const [img, setImg] = useState("");

  useEffect(() => {
    const getImage = async () => {
      try {
        const gsReference = ref(storage, url);
        console.log(gsReference);
        const uri = await getDownloadURL(gsReference);
        return uri;
      } catch (error) {
        return "Error";
      }
    };
    getImage().then((uri) => setImg(uri));
  }, []);

  return img;
};
