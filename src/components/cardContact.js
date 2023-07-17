import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import ItemIconContact from './itemIconContact';
import {isvalidPhoto} from '../utils/helpers';
import colors from '../utils/colors';

const CardContact = ({onDetail, onCall, onMessage, name, phone, photo}) => {
  let InitialName = name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');
  return (
    <View style={styles.card}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{flex: 1}}
        onPress={onDetail}>
        <View style={styles.rows}>
          <View>
            <View style={[styles.iconAvatar, styles.photo]}>
              <Text style={styles.initialName}>{InitialName}</Text>
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
    backgroundColor: colors.LD.white,
    marginHorizontal: 15,
    marginVertical: 5,
    padding: 8,
    borderRadius: 10,

    shadowColor: colors.LD.black,
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
    color: colors.LD.black,
    textTransform: 'capitalize',
    textAlign: 'left',
  },
  desc: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 14,
    color: colors.LD.black,
  },
  photo: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.LD.background,
  },
  iconAvatar: {
    justifyContent: 'center',
    backgroundColor: colors.LD.background,
    alignItems: 'center',
  },
  initialName: {
    color: colors.LD.white,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default CardContact;
