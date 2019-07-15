import axios from "axios";

const BASE_URL = "https://api.github.com";

interface Repos {
  data?: any;
  error?: string;
}

interface Orgs {
  data?: any;
  error?: string;
}

enum Resource {
  Repos = 'repos',
  Orgs = 'orgs',
}

const receiveRepos = ({data, error}: Repos) => {
  return {
    type: 'RECEIVE_REPOS',
    headers: ['name', 'forks', 'watchers'],
    resourceName: 'Repos',
    data,
    error,
  }
};

const receiveOrgs = ({data, error}: Orgs) => {
  return {
    type: 'RECEIVE_ORGS',
    headers: ['id', 'login', 'url'],
    resourceName: 'Orgs',
    data,
    error,
  }
};

export const fetchRepos = (username: string) => {
  return (dispatch: any) => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
    return axios.get(url)
    .then(response => dispatch(
      receiveRepos({data: response.data})
    ))
    .catch((error) => {
      dispatch(
        receiveRepos({data: [], error: error.response.data.message})
      )
    });

      // .catch((error: any) => dispatch(
      //   receiveRepos({data: null, error})
      // ));
  }
};

export const fetchOrgs = (username: string) => {
  return (dispatch: any) => {
    const url = `${BASE_URL}/users/${username}/orgs`;
    return axios.get(url)
      .then(response => dispatch(
        receiveOrgs({data: response.data})
      ))
      .catch((error: any) => dispatch(
        receiveOrgs({data: [], error})
      ));
  }
};

export const fetchData = (username: string, resource: string) => {
  switch(resource) {
    case Resource.Repos:
      return fetchRepos(username);
    case Resource.Orgs:
      return fetchOrgs(username);
    default:
      break;
  }
}
