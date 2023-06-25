import React from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TextInputs = ({
  isError = false,
  error = null,
  containerStyle,
  value,
  ...props
}) => {
  let styled = {
    borderColor: isError ? 'red' : 'green',
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
              color={'red'}
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
    backgroundColor: '#FFF',
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
    color: 'red',
    fontSize: 12,
    fontWeight: '400',
  },
});

export default TextInputs;
