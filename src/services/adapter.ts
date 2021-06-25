import axios from 'axios'; 

const api: string = "https://api.github.com";

export function get(url: string, data?: Object) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: `${api}/${url}`,
      data: data ?? null,
  }).then((response) => {
      resolve(response.data);
    }, (error) => {
      reject(error.response);
    });
  });
}