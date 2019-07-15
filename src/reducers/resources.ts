interface Resource {
  headers: Array<any>;
  data: Array<any>;
  resourceName: string;
  error: string;
}

const resources = (state: Resource = { headers: [], data: [], resourceName: '', error: '' }, action: any) => {
  const { headers, data, resourceName, error } = action;
  switch(action.type) {
    case 'RECEIVE_REPOS':
      return { headers, data, resourceName, error };
    case 'RECEIVE_ORGS':
      return { headers, data, resourceName, error };
    default:
      return state;
  }
};

export default resources;
