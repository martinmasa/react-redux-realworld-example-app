const defaultState = {
  appName: 'Conduit',
  token: null
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'APP_LOAD':
      return {
        ...state,
        token: action.token || null,
        currentUser: action.payload ? action.payload.user : null,
        appLoaded: true
      };
    case 'REDIRECT':
      return {
        ...state,
        redirectTo: null
      };
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        token: action.error ? null : action.payload.user.token,
        currentUser: action.error ? null : action.payload.user
      };
    case 'SETTINGS_SAVED':
      return {
        ...state,
        redirectTo: action.error ? null : '/',
        currentUser: action.error ? null : action.payload.user
      }
    case 'DELETE_ARTICLE':
      return {
        ...state,
        redirectTo: '/'
      };
    case 'LOGOUT':
      return {
        ...state,
        redirectTo: '/',
        currentUser: null,
        token: null
      };
  }

  return state;
};