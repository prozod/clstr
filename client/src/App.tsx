import { Outlet, useSearchParams } from "react-router-dom";
import { useAuthToken } from "./data/useAuthToken";
import { Loader } from "./components/Loader";
import { useEffect, useReducer } from "react";
import { initialUserState, userReducer } from "./reducers/userReducer";
import { useUser } from "./data/useUser";
import { UserContext } from "./context/userContext";
import { Authentication } from "./pages/Authentication";
import { Sidebar } from "./components/Sidebar";
import Navigation from "./components/Navigation";

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [user] = useUser();
  const date = new Date();

  const [state, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    dispatch({ type: "instantiate", user: user });
  }, [user]);

  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, _error, isLoading] = useAuthToken();

  if (data) {
    const expiry = date.setHours(
      date.getHours() + (data?.expires_in - 60) / 60 / 60
    );
    localStorage.setItem("accessToken", data?.access_token as string);
    localStorage.setItem("accessExpiry", String(expiry));
    searchParams.delete("code");
    setSearchParams(searchParams);
  }

  useEffect(() => {
    if (
      localStorage.getItem("accessExpiry") &&
      new Date() > new Date(Number(localStorage.getItem("accessExpiry")))
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("accessExpiry");
    }
  }, []);

  return (
    <UserContext.Provider value={state}>
      {user && (
        <div className="grid h-screen grid-cols-panel grid-rows-panel">
          <div className="row-start-1 row-span-full bg-slate-900/50 col-span-1 border-r-[1px] border-r-slate-800">
            <Sidebar />
          </div>
          <div className="col-start-2 row-start 1 flex items-center justify-between bg-slate-900/50 gap-2 border-b-[1px] border-b-slate-800 px-4 py-8">
            <Navigation />
          </div>
          <section className="flex col-start-2 row-start-2 gap-2 p-4 overflow-y-auto">
            <Outlet />
          </section>
        </div>
      )}
      {!user && (
        <div className="w-screen h-screen">
          {isLoading && (
            <div className="flex items-center justify-center w-screen h-screen">
              <Loader text="Loading GitHub profile..." />
            </div>
          )}
          {!isLoading && !user && <Authentication />}
        </div>
      )}
    </UserContext.Provider>
  );
}

export default App;
