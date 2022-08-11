import {
  doc,
  getDoc,
  getFirestore,
  query,
  orderBy,
  limit,
  collection,
  getDocs,
  where,
} from "firebase/firestore";
import { Product } from "../../../typing/api";
import { app } from "./index";
class FirebaseClient {
  static store = getFirestore(app);
  async getProducts(key: string) {
    const products: Product[] = [];
    const productsRef = collection(FirebaseClient.store, "products");
    const q = query(
      productsRef,
      orderBy("name"),
      limit(4),
      where("category", "==", key)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      products.push({ ...doc.data(), id: doc.id } as Product);
      console.log(doc.id, " => ", doc.data());
    });
    return products;
  }
  async getProduct(productId: string){
  const productRef = doc(FirebaseClient.store, "products",productId);
  const productSnap = await getDoc(productRef);
  if (productSnap.exists()) {
  console.log("Document data:", productSnap.data());
  return productSnap.data() as Product;
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
  return null
}

  }
}

export { FirebaseClient };
