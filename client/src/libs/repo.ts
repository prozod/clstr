export const getRepo = {
  url: String(import.meta.env.VITE_API_HOSTNAME),
  fn: async function getUser(url: string) {
    return await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => res.json());
  },
};
