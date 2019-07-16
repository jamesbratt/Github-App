interface Resource {
  headers: Array<any>;
  data: Array<any>;
  error: string;
  isLoading: boolean;
}

const resources = (state: Resource = { headers: [], data: [], error: '', isLoading: false }, action: any) => {
  const { headers, data, error, isLoading } = action;
  switch(action.type) {
    case 'RECEIVE_REPOS':
      return { headers, data, error, isLoading };
    case 'RECEIVE_ORGS':
      return { headers, data, error, isLoading };
    default:
      return state;
  };
};

export default resources;
