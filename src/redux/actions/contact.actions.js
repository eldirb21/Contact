import httpClient from '../../utils/httpClient';

const getContact = () => dispatch => {
  dispatch({type: 'GET_CONTACT_LOAD'});
  httpClient
    .ApiGet('contact')
    .then(res => {
      dispatch({
        type: 'GET_CONTACT_SUCCESS',
        payload: JSON.parse(res),
        isLoading: false,
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_CONTACT_FAILED',
        payload: err,
        isLoading: false,
      });
    });
};

const addContact = obj => dispatch => {
  dispatch({type: 'ADD_CONTACT_LOAD'});
  const body = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    age: parseInt(obj.age),
    photo: obj.photo,
  };
  httpClient
    .ApiPost('contact', body)
    .then(() => {
      dispatch({
        type: 'ADD_CONTACT_SUCCESS',
        payload: true,
        isLoading: false,
      });
    })
    .catch(() => {
      dispatch({
        type: 'ADD_CONTACT_FAILED',
        payload: false,
        isLoading: false,
      });
    });
};

const editContact = obj => dispatch => {
  dispatch({type: 'UPDATE_CONTACT_LOAD'});
  const body = {
    age: parseInt(obj?.age),
    firstName: obj.firstName,
    lastName: obj.lastName,
    photo: obj.photo,
  };
  httpClient
    .ApiPut(`contact/${obj.id}`, body)
    .then(() => {
      dispatch({
        type: 'UPDATE_CONTACT_SUCCESS',
        payload: true,
        isLoading: false,
      });
    })
    .catch(() => {
      dispatch({
        type: 'UPDATE_CONTACT_FAILED',
        payload: false,
        isLoading: false,
      });
    });
};

const deleteContact = id => dispatch => {
  dispatch({type: 'DEL_CONTACT_LOAD'});
  httpClient
    .ApiDel(`contact/${id}`)
    .then(res => {
      console.log(res, 'res');
      dispatch({
        type: 'DEL_CONTACT_SUCCESS',
        payload: true,
        isLoading: false,
      });
    })
    .catch(() => {
      dispatch({
        type: 'DEL_CONTACT_SUCCESS',
        payload: false,
        isLoading: false,
      });
    });
};

const reseteditContact = () => dispatch => {
  dispatch({
    type: 'UPDATE_CONTACT_SUCCESS',
    payload: false,
    isLoading: false,
  });
};
const resetdeleteContact = () => dispatch => {
  dispatch({
    type: 'DEL_CONTACT_SUCCESS',
    payload: false,
    isLoading: false,
  });
};
const resetaddContact = () => dispatch => {
  dispatch({
    type: 'ADD_CONTACT_SUCCESS',
    payload: false,
    isLoading: false,
  });
};

export {
  addContact,
  editContact,
  deleteContact,
  getContact,
  resetaddContact,
  resetdeleteContact,
  reseteditContact,
};
