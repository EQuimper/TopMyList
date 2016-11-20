import serverConfig from '../../config/serverConfig';

export const FETCH_TOPLIST_FEED = 'FETCH_TOPLIST_FEED';

export const fetchTopListFeed = () => {
  const promise = new Promise((resolve, reject) => {
    fetch(`${serverConfig.ROOT_URL}/toplists`) // eslint-disable-line
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

  return {
    type: FETCH_TOPLIST_FEED,
    payload: promise
  };
};
