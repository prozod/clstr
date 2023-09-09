function iterator(URL: string) {
  let reqURL = URL;

  const reqOptions = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    method: "GET",
    mode: "cors" as RequestMode,
  };

  return {
    [Symbol.asyncIterator]: function () {
      return {
        next: async function () {
          if (!reqURL) return { done: true };
          try {
            const response = await fetch(reqURL, reqOptions);
            const data = await response.json();
            reqURL = ((response.headers.get("link") || "").match(
              /<([^>]+)>;\s*rel="next"/
            ) || [])[1];
            return { value: data, done: !reqURL };
          } catch (error: any) {
            if (error.status !== 409) throw error;
            reqURL = "";
            return {
              value: {
                status: 200,
                headers: {},
                data: [],
              },
            };
          }
        },
      };
    },
  };
}

function gather(results: any[], iterator: AsyncIterableIterator<any>) {
  return iterator.next().then((result) => {
    if (result.done) {
      if (result?.value) {
        results = results.concat(result.value);
      }
      return results;
    }
    results = results.concat(result.value);
    return gather(results, iterator);
  });
}

export function paginate(URL: string) {
  return gather(
    [],
    iterator(URL)[Symbol.asyncIterator]() as AsyncIterableIterator<any>
  );
}
