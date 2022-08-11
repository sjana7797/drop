import { Category } from "../../typing/category";
import Collection from "../components/ui/Collection";
import Hero from "../components/home/Hero";
import { FirebaseClient } from "../lib/firebase/Client";

type Props = {};

function Home({}: Props) {
  const fireBaseClient = new FirebaseClient();
  return (
    <>
      <Hero />
      <Collection
        fireBaseClient={fireBaseClient}
        searchKey={Category.CLOTHING}
      />
      <Collection
        fireBaseClient={fireBaseClient}
        searchKey={Category.ELECTRONICS}
      />
    </>
  );
}

export default Home;
