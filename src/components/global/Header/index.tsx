import Logo from "./Logo";
import Nav from "./Nav";
type Props = {};

function Header({}: Props) {
  return (
    <header className="container mx-auto border-b border-solid border-slate-700 bg-slate-900 p-5 shadow-sm shadow-primary-800">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:gap-0">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}

export default Header;
