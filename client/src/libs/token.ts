export const getToken = {
  url: String(import.meta.env.VITE_SERVER_HOSTNAME + "/token?code="), // add ?code= param value when calling
  fn: async function getToken(url: string) {
    return await fetch(url).then((res) => res.json());
  },
};
