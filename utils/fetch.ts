export const fetcher = (...args) =>
  fetch(...args)
    .then((res) => res.json())
    .then(({ data }) => data);

export const post = <T>(url: string, data: T) => {
  return fetcher(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
};
