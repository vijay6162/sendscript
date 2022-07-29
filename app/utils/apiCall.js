const baseUrl = "http://localhost:8080/api/";
const REQUEST_METHOD = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const apiCall = (apiUrl,postData) => {
  return new Promise((resolve, reject) => {
    fetch(baseUrl + apiUrl, {
      method: REQUEST_METHOD.POST,
      body : JSON.stringify(postData)
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
