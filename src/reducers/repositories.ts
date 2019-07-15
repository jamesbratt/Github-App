import { assocPath } from 'ramda';

const repositories = (state: any = { headers: ['name', 'forks', 'watchers'], data: [] }, action: any) => {
  const { headers, data } = action;
  switch(action.type) {
    case 'RECEIVE_REPOS':
      return { headers, data };
    case 'RECEIVE_ORGS':
    default:
      return state;
  }
};

export default repositories;
