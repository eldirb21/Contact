/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {isvalidPhoto} from '../../utils/helpers';
import AppBar from '../../components/appBar';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import FormContact from '../../components/FormContact';
import colors from '../../utils/colors';

const ContactDetail = props => {
  let {editContact, reseteditContact, getContact, data} = props.route.params;
  let dataItem = Object.assign(
    {},
    ...props.contacts?.filter(x => x?.id === data?.id),
  );

  const [Item, setItem] = useState(data);
  const [ShowEdit, setShowEdit] = useState(false);

  useEffect(() => {
    setItem({...dataItem, email: '-', phone: '-'});
  }, [props.contacts]);

  const onShowEdit = () => {
    setShowEdit(!ShowEdit);
  };

  const onSubmit = obj => {
    editContact({
      id: dataItem?.id,
      ...obj,
    });
  };

  useEffect(() => {
    if (props.updateSuccess && !props.isLoading) {
      onShowEdit();
      reseteditContact();
      getContact();
    }
  }, [props.updateSuccess, props.isLoading]);

  let InitialName = `${Item.firstName} ${Item.lastName}`
    .split(' ')
    .map(word => word.charAt(0).toUpperCase())
    .join('');

  return (
    <View style={styles.container}>
      <AppBar
        title={'Contact Detail'}
        onBack={() => props.navigation.goBack()}
      />

      <View style={styles.cardUser}>
        <View style={styles.cardImage}>
          {!data.isDevice && (
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.btnEdit}
              onPress={onShowEdit}>
              <Feather name="edit" color={'#000'} size={20} />
            </TouchableOpacity>
          )}

          <View>
            <View style={[styles.iconAvatar, styles.photo]}>
              <Text style={styles.initialName}>{InitialName}</Text>
            </View>

            <Image
              resizeMode="contain"
              style={{...styles.photo, position: 'absolute'}}
              source={{uri: isvalidPhoto(Item.photo)}}
            />
          </View>
        </View>
        <Text style={styles.userName}>
          {Item.firstName + ' ' + Item.lastName}
        </Text>
        <View style={styles.info}>
          <Text style={styles.infolable}>{'Age'}</Text>
          <Text style={styles.infovalue}>{Item.age} year</Text>
        </View>
      </View>

      <FormContact
        isAddItem={false}
        visible={ShowEdit}
        onBack={onShowEdit}
        onSubmit={item => onSubmit(item)}
        {...props}
      />

      <Spinner visible={props.isLoading} message={'Please wait...'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardUser: {
    alignItems: 'center',
    padding: 15,
  },
  cardImage: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContact: {
    marginHorizontal: 6,
    paddingVertical: 15,
  },
  btnEdit: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 10,
    borderRadius: 100,
  },
  userName: {
    fontSize: 18,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginTop: 6,
  },
  photo: {
    height: 90,
    width: 90,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.LD.background,
  },
  iconAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.LD.background,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  infolable: {
    fontSize: 12,
    fontWeight: '500',
    marginRight: 10,
  },
  infovalue: {
    fontSize: 12,
    fontWeight: '500',
  },
  initialName: {
    color: colors.LD.white,
    fontSize: 20,
    fontWeight: '600',
  },
});

const mapStateToProps = state => ({
  ...state.contact,
});
export default connect(mapStateToProps, {
  // editContact,
  // deleteContact,
  // reseteditContact,
})(ContactDetail);
