import axios from 'axios';
import httpClient from '../../src/utils/httpClient';

jest.mock('axios');

const {ApiGet, ApiDel, ApiPost, ApiPut} = httpClient;

describe('Axios HTTP Request Functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('ApiGet', () => {
    it('should return response data on successful request', async () => {
      const mockResponse = {data: {data: 'response data'}};
      axios.get.mockResolvedValue(mockResponse);

      const url = 'https://contact.herokuapp.com/';

      const response = await ApiGet(url);

      expect(response).toBe(JSON.stringify(mockResponse.data.data));
      expect(axios.get).toHaveBeenCalledTimes(1);
      //   expect(axios.get).toHaveBeenCalledWith(url);
    });

    it('should throw an error on failed request', async () => {
      const mockError = new Error('Request failed');
      axios.get.mockRejectedValue(mockError);

      const url = 'https://contact.herokuapp.com/';

      await expect(ApiGet(url)).rejects.toThrow(mockError);
      expect(axios.get).toHaveBeenCalledTimes(1);
      //   expect(axios.get).toHaveBeenCalledWith(url);
    });
  });

  describe('ApiPost', () => {
    it('should return response data on successful request', async () => {
      const mockResponse = {data: {data: 'response data'}};
      axios.post.mockResolvedValue(mockResponse);

      const url = 'https://contact.herokuapp.com/';
      const reqBody = {name: 'John Doe'};

      const response = await ApiPost(url, reqBody);

      expect(response).toEqual(mockResponse);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(url, reqBody);
    });

    it('should throw an error on failed request', async () => {
      const mockError = new Error('Request failed');
      axios.post.mockRejectedValue(mockError);

      const url = 'https://contact.herokuapp.com/';
      const reqBody = {name: 'John Doe'};

      await expect(ApiPost(url, reqBody)).rejects.toThrow(mockError);
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith(url, reqBody);
    });
  });

  describe('ApiPut', () => {
    it('should return response data on successful request', async () => {
      const mockResponse = {data: {data: 'response data'}};
      axios.put.mockResolvedValue(mockResponse);

      const url = 'https://contact.herokuapp.com/';
      const reqBody = {name: 'John Doe'};

      const response = await ApiPut(url, reqBody);

      expect(response).toEqual(mockResponse);
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(url, reqBody);
    });

    it('should throw an error on failed request', async () => {
      const mockError = new Error('Request failed');
      axios.put.mockRejectedValue(mockError);

      const url = 'https://contact.herokuapp.com/';
      const reqBody = {name: 'John Doe'};

      await expect(ApiPut(url, reqBody)).rejects.toThrow(mockError);
      expect(axios.put).toHaveBeenCalledTimes(1);
      expect(axios.put).toHaveBeenCalledWith(url, reqBody);
    });
  });

  describe('ApiDel', () => {
    it('should return response data on successful request', async () => {
      const mockResponse = {data: {data: 'response data'}};
      axios.delete.mockResolvedValue(mockResponse);

      const url = 'https://contact.herokuapp.com/';

      const response = await ApiDel(url);

      expect(response).toEqual(mockResponse);
      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(url);
    });

    it('should throw an error on failed request', async () => {
      const mockError = new Error('Request failed');
      axios.delete.mockRejectedValue(mockError);

      const url = 'https://contact.herokuapp.com/';

      await expect(ApiDel(url)).rejects.toThrow(mockError);
      expect(axios.delete).toHaveBeenCalledTimes(1);
      expect(axios.delete).toHaveBeenCalledWith(url);
    });
  });
});
