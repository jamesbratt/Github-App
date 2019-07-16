import axios from "axios";

const BASE_URL = "https://api.github.com";

interface Resource {
  data?: any;
  isLoading: boolean,
  error?: string;
}

enum ResourceTypes {
  Repos = 'repos',
  Orgs = 'orgs',
}

const receiveRepos = ({data, isLoading, error}: Resource) => {
  return {
    type: 'RECEIVE_REPOS',
    headers: ['name', 'forks', 'watchers', 'language'],
    data,
    isLoading,
    error,
  }
};

const receiveOrgs = ({data, isLoading, error}: Resource) => {
  return {
    type: 'RECEIVE_ORGS',
    headers: ['id', 'login', 'url'],
    data,
    isLoading,
    error,
  }
};

const fetchRepos = (username: string) => {
  return (dispatch: any) => {
    dispatch(
      receiveRepos({data: [], isLoading: true})
    )
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
    return axios.get(url)
    .then(response => dispatch(
      receiveRepos({data: response.data, isLoading: false})
    ))
    .catch((error) => {
      dispatch(
        receiveRepos({data: [], isLoading: false, error: error.response.data.message})
      )
    });
  }
};

const fetchOrgs = (username: string) => {
  return (dispatch: any) => {
    dispatch(
      receiveRepos({data: [], isLoading: true})
    )
    const url = `${BASE_URL}/users/${username}/orgs`;
    return axios.get(url)
      .then(response => dispatch(
        receiveOrgs({data: response.data, isLoading: false})
      ))
      .catch((error) => {
        dispatch(
          receiveOrgs({data: [], isLoading: false, error: error.response.data.message})
        )
      });
  }
};

export const fetchData = (username: string, resource: string) => {
  switch(resource) {
    case ResourceTypes.Repos:
      return fetchRepos(username);
    case ResourceTypes.Orgs:
      return fetchOrgs(username);
    default:
      return fetchRepos(username);
  }
}
