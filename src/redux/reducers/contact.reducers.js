const initialState = {
  contacts: [],
  isLoading: false,
  errors: '',
  updateSuccess: null,
};

export default function contactReducer(state = initialState, actions) {
  switch (actions.type) {
    case 'GET_CONTACT_LOAD':
      return {...state, isLoading: true};
    case 'GET_CONTACT_SUCCESS':
      return {...state, isLoading: false, contacts: actions.payload};
    case 'GET_CONTACT_FAILED':
      return {...state, isLoading: false, errors: actions.payload};

    case 'ADD_CONTACT_LOAD':
      return {...state, isLoading: true};
    case 'ADD_CONTACT_SUCCESS':
      return {...state, isLoading: false, updateSuccess: actions.payload};
    case 'ADD_CONTACT_FAILED':
      return {...state, isLoading: false, errors: actions.payload};

    case 'UPDATE_CONTACT_LOAD':
      return {...state, isLoading: true};
    case 'UPDATE_CONTACT_SUCCESS':
      return {...state, isLoading: false, updateSuccess: actions.payload};
    case 'UPDATE_CONTACT_FAILED':
      return {...state, isLoading: false, errors: actions.payload};

    case 'DEL_CONTACT_LOAD':
      return {...state, isLoading: true};
    case 'DEL_CONTACT_SUCCESS':
      return {...state, isLoading: false, updateSuccess: actions.payload};
    case 'DEL_CONTACT_FAILED':
      return {...state, isLoading: false, errors: actions.payload};

    default:
      return state;
  }
}
