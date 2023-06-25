import React from 'react';
import {View, StyleSheet, ActivityIndicator, Modal, Text} from 'react-native';

const Spinner = ({visible = false, message = null}) => {
  return (
    <Modal
      animationType="none"
      visible={visible}
      transparent
      statusBarTranslucent>
      <View style={styles.container}>
        <View>
          <ActivityIndicator size={'large'} color={'#FFF'} />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0,0.4)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  message: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default Spinner;
