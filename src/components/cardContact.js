import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemIconContact from './itemIconContact';
import {isvalidPhoto} from '../utils/helpers';

const CardContact = ({onDetail, onCall, onMessage, name, phone, photo}) => {
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flex: 1}}
        onPress={onDetail}>
        <View style={styles.rows}>
          <View>
            <View style={[styles.iconAvatar, styles.photo]}>
              <Ionicons name="ios-person-sharp" size={44} color={'green'} />
            </View>

            <Image
              resizeMode="contain"
              style={{...styles.photo, position: 'absolute'}}
              source={{uri: isvalidPhoto(photo)}}
            />
          </View>
          <View style={styles.contentText}>
            <Text style={styles.name}>{name}</Text>
            {phone && <Text style={styles.desc}>{phone}</Text>}
          </View>
        </View>
      </TouchableOpacity>

      <ItemIconContact onCall={onCall} onMessage={onMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 8,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0.5,
      height: 0.2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  rows: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAction: {
    paddingVertical: 20,
    paddingHorizontal: 4,
  },
  contentText: {
    marginHorizontal: 15,
    flex: 1,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  desc: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 14,
    color: '#000',
  },
  photo: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green',
  },
  iconAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
    paddingBottom: 4,
  },
});

export default CardContact;
