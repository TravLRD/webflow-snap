export const createFetchActor = (hostName) => {
  return {
    fetchPage: (/** @type string */ path) => {
      return fetch(`${hostName}${path}`)
        .then((response) => response.text())
        .then((html) => ({ path, html }));
    },
  };
};



export const fetchPageOf = (hostName) => (path) => {
  return fetch(`${hostName}${path}`)
    .then((response) => response.text())
    .then((html) => ({ path, html }));
}