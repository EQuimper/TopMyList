import serverConfig from '../../config/serverConfig';

export const FETCH_LIST = 'FETCH_LIST';

export const fetchList = id => {
  const promise = new Promise((resolve, reject) => {
    fetch(`172.20.10.2/toplists/${id}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }) // eslint-disable-line
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

  return {
    type: FETCH_LIST,
    payload: promise
  };
};
