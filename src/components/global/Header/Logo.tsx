import { Link } from "react-router-dom";

type Props = {};

function Logo({}: Props) {
  return (
    <Link to="/">
      <div className="flex flex-row items-center gap-2">
        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-600 to-sky-600"></div>
        <h1 className="text-3xl font-medium text-slate-100">Drop</h1>
      </div>
    </Link>
  );
}

export default Logo;
