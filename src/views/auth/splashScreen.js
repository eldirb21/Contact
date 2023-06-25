import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Spinner from '../../components/spinner';

const SplashScreen = ({navigation}) => {
  let isFocused = useIsFocused();
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setisLoading(true);
      let timer = setTimeout(() => {
        setisLoading(false);
        navigation.navigate('Contact');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
