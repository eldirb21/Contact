/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Linkings} from '../../utils/helpers';
import AppBar from '../../components/appBar';
import CardContact from '../../components/cardContact';
import {useEffect} from 'react';
import {connect} from 'react-redux';
import {
  addContact,
  editContact,
  deleteContact,
  getContact,
  resetaddContact,
  resetdeleteContact,
  reseteditContact,
} from '../../redux/actions/contact.actions';
import {useIsFocused} from '@react-navigation/native';
import Spinner from '../../components/spinner';
import Floating from '../../components/floating';
import FormContact from '../../components/FormContact';

const Contact = props => {
  const focused = useIsFocused();
  const [Items, setItems] = useState(props?.contacts);
  const [search, setsearch] = useState('');
  const [showSearch, setshowSearch] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [ShowForm, setShowForm] = useState(false);
  const [SelectItem, setSelectItem] = useState({});

  useEffect(() => {
    if (focused) {
      props.getContact();
    }
  }, [focused]);

  useEffect(() => {
    if (props?.contacts) {
      setItems(props?.contacts);
      setisRefreshing(false);
    }
    if (props.isLoading) {
      // props.resetdeleteContact();
    }
  }, [props?.contacts, props.isLoading]);
  useEffect(() => {
    if (props?.updateSuccess) {
      setShowForm(false);
      props.resetaddContact();
      props.getContact();
    }
  }, [props?.updateSuccess]);

  const onSearchText = value => {
    setsearch(value);
    if (value === '') {
      setItems(props?.contacts);
    } else {
      let newItems = [];
      if (value?.length > 2) {
        newItems = props.contacts.filter(x =>
          `${x.firstName} ${x.lastName}`
            .toLowerCase()
            .includes(value.toLowerCase()),
        );
      } else {
        newItems = props?.contacts;
      }
      setItems(newItems);
    }
  };
  const onRefresh = () => {
    setisRefreshing(true);
    props.getContact();
  };

  const onAddDataItem = datas => {
    props.addContact(datas);
    setSelectItem({});
  };

  const onShowForm = item => {
    if (item) {
      setSelectItem(item);
    }
    setShowForm(!ShowForm);
  };

  const EmptyListMessage = () => (
    <TouchableOpacity activeOpacity={0.9} onPress={() => props.getContact()}>
      <Text style={styles.emptylist}>No Data Found</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item, index}) => {
    return (
      <CardContact
        key={index}
        name={item.firstName + ' ' + item.lastName}
        photo={item.photo}
        onCall={() => onShowForm(item)}
        onDetail={() => {
          props.navigation.navigate('ContactDetail', {
            data: item,
            ...props,
          });
        }}
        onMessage={() => Linkings('message', '08xxxxxxxxx')}
      />
    );
  };

  console.log(props.isLoading);
  return (
    <View style={{flex: 1}}>
      <AppBar
        title={'Contact'}
        onSearch={() => {
          setshowSearch(!showSearch);
          setsearch('');
          setItems(props?.contacts);
        }}
        onChangeSearch={onSearchText}
        searchValue={search}
        visibleSearch={showSearch}
      />

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
        indicatorStyle="white"
        data={Items}
        ListEmptyComponent={EmptyListMessage}
        renderItem={renderItem}
      />

      <Floating onPress={onShowForm} />

      <FormContact
        isAddItem
        item={SelectItem}
        visible={ShowForm}
        onBack={() => setShowForm(!ShowForm)}
        onSubmit={onAddDataItem}
        {...props}
      />
      <Spinner
        visible={isRefreshing ? false : props.isLoading}
        message={'Please wait...'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  delete: {
    marginRight: 15,
    alignContent: 'center',
    justifyContent: 'center',
    width: 80,
  },
  btndelete: {
    backgroundColor: 'red',
  },
  emptylist: {
    padding: 10,
    fontSize: 16,
    textAlign: 'center',
  },
});
const mapStateToProps = state => ({
  ...state.contact,
});
export default connect(mapStateToProps, {
  addContact,
  editContact,
  deleteContact,
  getContact,
  resetaddContact,
  resetdeleteContact,
  reseteditContact,
})(Contact);
