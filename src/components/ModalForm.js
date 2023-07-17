import React from 'react';
import {View, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native';
import AppBar from './appBar';
import {KeyboardAvoidingView} from 'react-native';
import colors from '../utils/colors';

const ModalForm = ({
  visible,
  onBack,
  onCancel,
  onSubmit,
  children,
  cancel = 'Cancel',
  submit = 'Submit',
}) => {
  return (
    <Modal visible={visible} avoidKeyboard transparent statusBarTranslucent>
      <View style={styles.overlay}>
        <KeyboardAvoidingView behavior={'padding'} style={styles.avoiding}>
          <View style={styles.card}>
            <AppBar
              containerStyle={{paddingTop: 0, height: 55}}
              iconBack="close"
              backStyle={styles.back}
              title={'New Contact'}
              onBack={onBack}
            />
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
                  <Text style={{color: colors.LD.background}}>{cancel}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={onSubmit}
                  activeOpacity={0.7}
                  style={{
                    ...styles.footerbtn,
                    ...styles.submit,
                  }}>
                  <Text style={{color: colors.LD.white}}>{submit}</Text>
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
    backgroundColor: colors.LD.white,
    margin: 15,
    borderRadius: 10,
  },
  carimg: {
    alignItems: 'center',
    marginTop: 10,
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
    backgroundColor: colors.LD.background,
  },
  cancel: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: colors.LD.background,
  },
});

export default ModalForm;
