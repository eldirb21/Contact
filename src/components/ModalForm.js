import React from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import AppBar from './appBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isvalidPhoto} from '../utils/helpers';
import {KeyboardAvoidingView} from 'react-native';

const ModalForm = ({
  visible,
  onBack,
  image = null,
  onCancel,
  onSubmit,
  children,
  cancel = 'Cancel',
  submit = 'Submit',
}) => {
  const onImage = () => {};
  return (
    <Modal visible={visible} avoidKeyboard transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <KeyboardAvoidingView behavior={'padding'} style={styles.avoiding}>
          <View style={styles.card}>
            <AppBar
              iconBack="close"
              backStyle={styles.back}
              title={'New Contact'}
              onBack={onBack}
            />
            <View style={styles.carimg}>
              <TouchableOpacity activeOpacity={0.8} onPress={onImage}>
                <View style={styles.iconOverlay}>
                  <Ionicons name="add" size={40} color={'#FFF'} />
                </View>
                {!isvalidPhoto(image) ? (
                  <View style={styles.imgDefault}>
                    <Ionicons name="ios-image" size={60} color={'green'} />
                  </View>
                ) : (
                  <Image
                    resizeMode="contain"
                    source={{uri: image}}
                    style={styles.image}
                  />
                )}
              </TouchableOpacity>
            </View>
            <View style={{padding: 15}}>
              <View>{children}</View>
              <View style={styles.footer}>
                <TouchableOpacity
                  onPress={onCancel}
                  activeOpacity={0.7}
                  style={{
                    ...styles.footerbtn,
                    ...styles.cancel,
                  }}>
                  <Text style={{color: 'green'}}>{cancel}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onSubmit}
                  activeOpacity={0.7}
                  style={{
                    ...styles.footerbtn,
                    ...styles.submit,
                  }}>
                  <Text style={{color: '#FFF'}}>{submit}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0,0.4)',
    flex: 1,
    justifyContent: 'center',
  },
  avoiding: {
    flex: 1,
    justifyContent: 'center',
  },
  back: {
    marginLeft: -10,
  },
  card: {
    backgroundColor: '#FFF',
    margin: 15,
    borderRadius: 10,
  },
  carimg: {
    alignItems: 'center',
    marginTop: 10,
  },
  iconOverlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  imgDefault: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  footerbtn: {
    padding: 10,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  submit: {
    backgroundColor: 'green',
  },
  cancel: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'green',
  },
});

export default ModalForm;
