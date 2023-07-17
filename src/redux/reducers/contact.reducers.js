const initialState = {
  contacts: [],
  isLoading: false,
  errors: '',
  updateSuccess: null,
};

export default function contactReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'GET_CONTACT_LOAD':
      return {...state, isLoading: actions.loading};
    case 'GET_CONTACT_SUCCESS':
      return {...state, isLoading: actions.loading, contacts: actions.payload};
    case 'GET_CONTACT_FAILED':
      return {...state, isLoading: actions.loading, errors: actions.payload};

    case 'ADD_CONTACT_LOAD':
      return {...state, isLoading: actions.loading};
    case 'ADD_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: actions.loading,
        updateSuccess: actions.payload,
      };
    case 'ADD_CONTACT_FAILED':
      return {...state, isLoading: actions.loading, errors: actions.payload};

    case 'UPDATE_CONTACT_LOAD':
      return {...state, isLoading: actions.loading};
    case 'UPDATE_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: actions.loading,
        updateSuccess: actions.payload,
      };
    case 'UPDATE_CONTACT_FAILED':
      return {...state, isLoading: actions.loading, errors: actions.payload};

    case 'DEL_CONTACT_LOAD':
      return {...state, isLoading: actions.loading};
    case 'DEL_CONTACT_SUCCESS':
      return {
        ...state,
        isLoading: actions.loading,
        updateSuccess: actions.payload,
      };
    case 'DEL_CONTACT_FAILED':
      return {...state, isLoading: actions.loading, errors: actions.payload};

    default:
      return state;
  }
}
