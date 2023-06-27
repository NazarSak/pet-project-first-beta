const url = 'https://6468f51703bb12ac2082df87.mockapi.io/pet';

export const getAPI = () => {
 return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
};


// export const getAPI = () => {
// return axios.get(url,)
// // .then(data => data.json())
// //       .then(res => console.log(res))
// //       .catch(error => console.log(error));
// };
