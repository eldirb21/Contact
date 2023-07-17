import httpClient from '../../utils/httpClient';

const getContact = () => dispatch => {
  dispatch({type: 'GET_CONTACT_LOAD', loading: true});
  httpClient
    .ApiGet('contact')
    .then(res => {
      dispatch({
        type: 'GET_CONTACT_SUCCESS',
        payload: JSON.parse(res),
        loading: false,
      });
    })
    .catch(err => {
      dispatch({
        type: 'GET_CONTACT_FAILED',
        payload: err,
        loading: false,
      });
    });
};

const addContact = obj => dispatch => {
  dispatch({type: 'ADD_CONTACT_LOAD', loading: true});
  const body = {
    firstName: obj.firstName,
    lastName: obj.lastName,
    age: parseInt(obj.age),
    photo: obj.photo,
  };
  // httpClient
  //   .ApiPost('contact', body)
  //   .then(res => {
  //     console.log(res, 'resssss');
  //     dispatch({
  //       type: 'ADD_CONTACT_SUCCESS',
  //       payload: true,
  //       loading: false,
  //     });
  //   })
  //   .catch(err => {
  //     console.log(err, 'errererer');
  //     dispatch({
  //       type: 'ADD_CONTACT_FAILED',
  //       payload: false,
  //       loading: false,
  //     });
  //   });
};

const editContact = obj => dispatch => {
  dispatch({type: 'UPDATE_CONTACT_LOAD', loading: true});
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
        loading: false,
      });
    })
    .catch(() => {
      dispatch({
        type: 'UPDATE_CONTACT_FAILED',
        payload: false,
        loading: false,
      });
    });
};

const deleteContact = id => dispatch => {
  dispatch({type: 'DEL_CONTACT_LOAD', loading: true});
  httpClient
    .ApiDel(`contact/${id}`)
    .then(res => {
      dispatch({
        type: 'DEL_CONTACT_SUCCESS',
        payload: true,
        loading: false,
      });
    })
    .catch(() => {
      dispatch({
        type: 'DEL_CONTACT_SUCCESS',
        payload: false,
        loading: false,
      });
    });
};

const reseteditContact = () => dispatch => {
  dispatch({
    type: 'UPDATE_CONTACT_SUCCESS',
    payload: false,
    loading: false,
  });
};
const resetdeleteContact = () => dispatch => {
  dispatch({
    type: 'DEL_CONTACT_SUCCESS',
    payload: false,
    loading: false,
  });
};
const resetaddContact = () => dispatch => {
  dispatch({
    type: 'ADD_CONTACT_SUCCESS',
    payload: false,
    loading: false,
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
