/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Linkings, isvalidPhoto} from '../../utils/helpers';
import AppBar from '../../components/appBar';
import ItemIconContact from '../../components/itemIconContact';
import {connect} from 'react-redux';
import Spinner from '../../components/spinner';
import FormContact from '../../components/FormContact';

const RenderInfo = ({lable, value}) => {
  return (
    <View style={styles.info}>
      <Text style={styles.infolable}>{lable}</Text>
      <Text>: </Text>
      <Text style={styles.infovalue}>{value}</Text>
    </View>
  );
};
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
              <Ionicons name="ios-person-sharp" size={100} color={'green'} />
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

        {!data?.isDevice && (
          <ItemIconContact
            onCall={() => Linkings('call', '08xxxxxxxxx')}
            onMessage={() => Linkings('message', '08xxxxxxxx', '')}
            onEmail={() => Linkings('email', 'sample.mail@gmail.com', '')}
            iconStyle={styles.iconContact}
          />
        )}
      </View>
      <View>
        <RenderInfo
          lable={'Age'}
          value={`${Item.age ? Item.age + ' ' + 'year' : '-'} `}
        />
        <RenderInfo lable={'Email'} value={Item.email} />
        <RenderInfo lable={'Phone'} value={Item.phone} />
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
    height: 130,
    width: 130,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'green',
  },
  iconAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 4,
    paddingBottom: 5,
  },
  info: {
    paddingVertical: 15,
    marginHorizontal: 15,
    borderBottomWidth: 1,
    borderColor: '#DBDBDB',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infolable: {
    width: '16%',
    fontSize: 14,
    fontWeight: '600',
  },
  infovalue: {
    fontSize: 14,
    fontWeight: '400',
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
