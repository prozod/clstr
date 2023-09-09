import useSWR from "swr";
import { getToken } from "../libs/token";
import { useSearchParams } from "react-router-dom";

export const useAuthToken = () => {
  const [searchParams] = useSearchParams();

  const { data, error, isLoading } = useSWR(
    searchParams.has("code") && localStorage.getItem("accessToken") == null
      ? getToken.url + searchParams.get("code")
      : null,
    getToken.fn
  );

  // if (data) {
  //   localStorage.setItem("accessToken", data?.access_token as string);
  //   searchParams.delete("code");
  //   setSearchParams(searchParams);
  // }

  // useEffect(() => {
  //   if (
  //     searchParams.has("code") &&
  //     localStorage.getItem("accessToken") == null
  //   ) {
  //     console.log("Calling getToken()");
  //     getToken();
  //     searchParams.delete("code");
  //     setSearchParams(searchParams);
  //     setIsLogged(true);
  //   }
  // }, [searchParams]);
  return [data, error, isLoading];
};
