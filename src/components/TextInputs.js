import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../utils/colors';

const TextInputs = ({
  isError = false,
  error = null,
  containerStyle,
  value,
  ...props
}) => {
  let styled = {
    borderColor: isError ? colors.LD.red : colors.LD.background,
    ...styles.content,
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styled}>
        <TextInput
          style={styles.textInput}
          placeholderTextColor={'grey'}
          {...props}
          value={typeof value !== 'string' ? value && value.toString() : value}
        />

        {isError && (
          <View style={styles.errorIcon}>
            <Ionicons
              name="information-circle-outline"
              size={25}
              color={colors.LD.red}
            />
          </View>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error || null}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 11,
  },
  content: {
    borderWidth: 1,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  textInput: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.LD.white,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  errorIcon: {
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: colors.LD.red,
    fontSize: 12,
    fontWeight: '400',
  },
});

export default TextInputs;
