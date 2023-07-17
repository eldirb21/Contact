import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import Feather from 'react-native-vector-icons/Feather';
const ItemIconContact = ({onCall, onMessage, onEmail, iconStyle}) => {
  return (
    <View style={styles.rows}>
      {onCall && (
        <TouchableOpacity
          onPress={onCall}
          activeOpacity={0.9}
          style={[styles.btnAction, iconStyle]}>
          <Feather name="edit-2" color={'#000'} size={18} />
        </TouchableOpacity>
      )}
      {onMessage && (
        <TouchableOpacity
          onPress={onMessage}
          activeOpacity={0.9}
          style={[styles.btnAction, iconStyle]}>
          <AntDesign name="delete" color={'#000'} size={18} />
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
    padding: 8,
    margin: 1,
    borderRadius: 100,
  },
});

export default ItemIconContact;
