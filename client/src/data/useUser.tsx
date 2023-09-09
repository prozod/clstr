import useSWR from "swr";
import { getUser, getUserStarredRepos } from "../libs/user";

export function useUser() {
  const { data, error, isLoading } = useSWR(
    localStorage.getItem("accessToken") ? getUser.url : null,
    getUser.fn
  );
  return [data, error, isLoading];
}

export function useUserStarredRepos() {
  const { data, error, isLoading } = useSWR(
    localStorage.getItem("accessToken") ? getUserStarredRepos.url : null,
    getUserStarredRepos.fn
  );
  return [data, error, isLoading];
}
