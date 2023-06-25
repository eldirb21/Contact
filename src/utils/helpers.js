import {Alert, Linking, Platform} from 'react-native';

export const Linkings = (type, emailOrPhone, message) => {
  let phoneNumber = emailOrPhone;
  if (type === 'call') {
    if (Platform.OS !== 'android') {
      phoneNumber = `telprompt:${emailOrPhone}`;
    } else {
      phoneNumber = `tel:${emailOrPhone}`;
    }
    Linking.canOpenURL(phoneNumber)
      .then(supported => {
        if (!supported) {
          Alert.alert(
            'Info',
            `Phone number is not available!\ncheck again the number.`,
          );
        } else {
          return Linking.openURL(phoneNumber);
        }
      })
      .catch(() => {});
  } else if (type === 'message') {
    Linking.openURL(`sms:${emailOrPhone}`);
  } else if (type === 'email') {
    Linking.openURL(`mailto:${emailOrPhone}?subject=SendMail&body=Description`);
  }
};

export const isvalidPhoto = image => {
  let validate = [null, undefined, 'n/a', 'string', 'number', 'object', ''];
  let itm =
    typeof image === 'string' || typeof image === 'number'
      ? image.toString().toLowerCase()
      : image;
  let photos = validate.includes(itm)
    ? null
    : itm && itm.length < 9
    ? null
    : itm;
  return photos;
};
