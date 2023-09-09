import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

const Navigation = () => {
  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const user = userCtx?.user;

  return (
    <nav className="flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <Link
          to="/"
          className="px-4 py-2 font-semibold rounded-md bg-slate-700/50"
        >
          {" "}
          Back
        </Link>
      </div>
      {user && (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              localStorage.removeItem("accessToken");
              localStorage.removeItem("accessExpiry");
              navigate("/");
            }}
            className="px-4 py-2 font-semibold rounded-md bg-slate-700/50"
          >
            Revoke access
          </button>
          <Link to={`/${user.name}`} className=" group font-bold">
            <div className="flex items-center gap-2 text-white  group-hover:text-sky-400 px-3 py-1 rounded-md transition-all">
              {user?.name}
              <img
                src={user?.avatar_url}
                className="aspect-square w-8 rounded-full border-2 border-solid border-sky-400 transition-all"
              />
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
