import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import {
  addContact,
  editContact,
  deleteContact,
  getContact,
} from '../../src/redux/actions/contact.actions';
import httpClient from '../../src/utils/httpClient';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

beforeEach(() => {
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
});

describe('Contact Actions', () => {
  it('getContact GET_CONTACT_SUCCESS', async () => {
    // Mock the successful response from ApiGet
    const store = mockStore({});
    const mockResponse = {data: {data: 'contact data'}};
    httpClient.ApiGet = jest
      .fn()
      .mockResolvedValue(JSON.stringify(mockResponse));

    // Define the expected actions to be dispatched
    const expectedActions = [
      {type: 'GET_CONTACT_LOAD'},
      {
        type: 'GET_CONTACT_SUCCESS',
        payload: mockResponse,
        isLoading: false,
      },
    ];

    // Dispatch the getContact action
    await store.dispatch(getContact());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('addContact ADD_CONTACT_SUCCESS', async done => {
    const store = mockStore({});
    const mockContact = {
      firstName: 'John',
      lastName: 'Doe',
      age: 25,
      photo: 'example.jpg',
    };

    // Mock the successful response from ApiPost
    httpClient.ApiPost = jest.fn().mockResolvedValue();

    // Define the expected actions to be dispatched
    const expectedActions = [
      {type: 'ADD_CONTACT_LOAD'},
      {type: 'ADD_CONTACT_SUCCESS', payload: true, isLoading: false},
    ];

    // Dispatch the addContact action
    await store.dispatch(addContact(mockContact));
    setTimeout(() => {
      // Check the dispatched actions
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }, 1000); // Adjust the timeout as needed
  });

  it('editContacth UPDATE_CONTACT_SUCCESS', async done => {
    const store = mockStore({});
    const mockContact = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      photo: 'example.jpg',
    };

    // Mock the successful response from ApiPut
    httpClient.ApiPut = jest.fn().mockResolvedValue();

    // Define the expected actions to be dispatched
    const expectedActions = [
      {type: 'UPDATE_CONTACT_LOAD'},
      {type: 'UPDATE_CONTACT_SUCCESS', payload: true, isLoading: false},
    ];

    // Dispatch the editContact action
    await store.dispatch(editContact(mockContact));
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }, 1000);
  });

  it('deleteContact DEL_CONTACT_SUCCESS', async done => {
    const store = mockStore({});
    const mockContactId = 1;

    // Mock the successful response from ApiDel
    httpClient.ApiDel = jest.fn().mockResolvedValue();

    // Define the expected actions to be dispatched
    const expectedActions = [
      {type: 'DEL_CONTACT_LOAD'},
      {type: 'DEL_CONTACT_SUCCESS', payload: true, isLoading: false},
    ];

    // Dispatch the deleteContact action
    await store.dispatch(deleteContact(mockContactId));
    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    }, 1000);
  });
});
