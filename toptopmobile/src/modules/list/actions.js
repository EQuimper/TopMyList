import serverConfig from '../../config/serverConfig';

export const FETCH_LIST = 'FETCH_LIST';

export const fetchList = id => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${serverConfig.ROOT_URL}/toplists/${id}`) // eslint-disable-line
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

  return {
    type: FETCH_LIST,
    payload: promise
  };
};
