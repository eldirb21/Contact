import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../utils/colors';

const Floating = ({onPress, ...props}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.floating}
        onPress={onPress}
        {...props}>
        <Feather name="plus" size={30} color={colors.LD.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    backgroundColor: colors.LD.background,
    borderRadius: 100,
    padding: 1,
  },
  floating: {
    backgroundColor: colors.LD.background,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: colors.LD.white,
    padding: 15,

    shadowColor: colors.LD.black,
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default Floating;
