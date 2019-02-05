import CONSTANTS from '../utils/constants';

const { HOST, PATH } = CONSTANTS.API;
const { BID } = PATH;

const handleErrors = (res) => {
  if (!res.ok) {
    throw Error(res.statusText);
  }

  return res.json();
};

const get = ({ path }) => {
  const config = `${HOST}/${path}`;
  const req = new Request(config);
  return fetch(req).then(res => handleErrors(res));
};

const api = {
  getBids: () => {
    const config = {
      path: BID,
    };

    return get(config);
  },
};

export default api;
