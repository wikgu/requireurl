import https from "https";

export default (url) => {
  let body = [];
  return new Promise((resolve, reject) => {
    try {
      https
        .request(url, (res) => {
          res.on("data", (chunk) => body.push(chunk));
          res.on("end", () => resolve(eval(Buffer.concat(body).toString())));
        })
        .end();
    } catch (error) {
      reject(error);
    }
  });
};
