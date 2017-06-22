export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'REGISTER':
      return {
        ...state,
        inProgress: false,
        errors: action.error ? action.payload.errors : null
      };
    case 'ASYNC_START':
      return {
        ...state,
        inProgress: true
      };
    case 'UPDATE_FIELD_AUTH':
      return {
        ...state,
        [action.key]: action.value
      };
      
  }
  
  return state;
};