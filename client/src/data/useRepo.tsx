import useSWR from "swr";
import { getRepo } from "../libs/repo";

export function useRepo({ user, repo }: { user: string; repo: string }) {
  const { data, error, isLoading } = useSWR(
    localStorage.getItem("accessToken")
      ? getRepo.url.concat(`/repos/${user}/${repo}`)
      : null,
    getRepo.fn
  );
  return [data, error, isLoading];
}
