import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const ItemIconContact = ({onCall, onMessage, onEmail, iconStyle}) => {
  return (
    <View style={styles.rows}>
      {onCall && (
        <TouchableOpacity
          onPress={onCall}
          activeOpacity={0.9}
          style={[styles.btnAction, iconStyle]}>
          <Feather name="phone-call" color={'#000'} size={18} />
        </TouchableOpacity>
      )}
      {onMessage && (
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.9}
          style={[styles.btnAction, iconStyle]}>
          <Ionicons
            name="chatbubble-ellipses-outline"
            color={'#000'}
            size={18}
          />
        </TouchableOpacity>
      )}
      {onEmail && (
        <TouchableOpacity
          onPress={onEmail}
          activeOpacity={0.9}
          style={[styles.btnAction, iconStyle]}>
          <Ionicons name="mail-outline" color={'#000'} size={18} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAction: {
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
});

export default ItemIconContact;
