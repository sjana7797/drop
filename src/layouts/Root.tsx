import { ReactElement } from "react";
import Header from "../components/global/Header";

type Props = { children: ReactElement };

function Root({ children }: Props) {
  return (
    <>
      <Header />
      <main className="container mx-auto">{children}</main>
    </>
  );
}

export default Root;
