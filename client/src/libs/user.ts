import { paginate } from "../utils/paginate";

export const getUser = {
  url: String(import.meta.env.VITE_API_HOSTNAME + "/user"),
  fn: async function getUser(url: string) {
    return await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json());
  },
};

export const getUserStarredRepos = {
  url: String(import.meta.env.VITE_API_HOSTNAME + "/user/starred"),
  fn: async function getUserStarredRepos(url: string) {
    return await paginate(url);
  },
};
