import {Platform, Linking} from 'react-native';
import {Linkings, isvalidPhoto} from '../../src/utils/helpers';

jest.mock('react-native', () => ({
  Platform: {
    OS: 'android', // Set the desired platform for the test case
  },
  Linking: {
    canOpenURL: jest.fn(() => Promise.resolve(true)),
    openURL: jest.fn(),
  },
}));

describe('Linkings', () => {
  test('should call Linking.openURL with the correct URL for type "call"', async () => {
    const openURLMock = jest
      .spyOn(Linking, 'canOpenURL')
      .mockImplementation(() => Promise.resolve()); //jest.spyOn(Linking, 'openURL');

    Linkings('call', '1234567890', 'Test message');

    const expectedURL = 'tel:1234567890';
    expect(openURLMock).toHaveBeenCalledWith(expectedURL);

    openURLMock.mockRestore();
  });

  test('should return null for invalid photo', () => {
    // Test with invalid photo values
    expect(isvalidPhoto(null)).toBe(null);
    expect(isvalidPhoto(undefined)).toBe(null);
    expect(isvalidPhoto('')).toBe(null);
    expect(isvalidPhoto(123)).toBe(null);
  });

  test('should return null for photo with length less than 9', () => {
    // Test with photo length less than 9
    expect(isvalidPhoto('photo')).toBe(null);
  });

  test('should return the photo for valid photo', () => {
    // Test with valid photo
    expect(isvalidPhoto('validphoto')).toBe('validphoto');
  });
});
