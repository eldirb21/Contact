/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
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
import {Swipeable} from 'react-native-gesture-handler';
import {CommonActions, useIsFocused} from '@react-navigation/native';
import Spinner from '../../components/spinner';
import Floating from '../../components/floating';
import FormContact from '../../components/FormContact';

const Contact = props => {
  const focused = useIsFocused();
  const [Items, setItems] = useState(props?.contacts);
  const [search, setsearch] = useState('');
  const [showSearch, setshowSearch] = useState(false);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [ShowAdd, setShowAdd] = useState(false);

  useEffect(() => {
    if (focused) {
      props.getContact();
    }
  }, [focused]);

  useEffect(() => {
    setItems(props?.contacts);
    setisRefreshing(false);
    props.resetdeleteContact();
  }, [props?.contacts, props.isLoading]);

  useEffect(() => {
    if (props?.updateSuccess) {
      setShowAdd(false);
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
  const onDeleteItem = ({item}) => {
    props.deleteContact(item.id);
  };

  const onAddDataItem = datas => {
    props.addContact(datas);
  };

  const renderRightActions = (progress, dragX, onClick) => {
    return (
      <View style={styles.delete}>
        <Button color="red" onPress={onClick} title="DELETE" />
      </View>
    );
  };
  const EmptyListMessage = () => (
    <TouchableOpacity activeOpacity={0.9} onPress={() => props.getContact()}>
      <Text style={styles.emptylist}>No Data Found</Text>
    </TouchableOpacity>
  );

  const renderItem = ({item, index}, onClick) => {
    return (
      <Swipeable
        renderRightActions={(progress, dragX) =>
          renderRightActions(progress, dragX, onClick)
        }
        // onSwipeableOpen={() => {
        // }}
        // // ref={ref => (row[index] = ref)}
        rightOpenValue={-100}>
        <CardContact
          key={index}
          name={item.firstName + ' ' + item.lastName}
          photo={item.photo}
          onCall={() => Linkings('call', '08xxxxxxxxx')}
          onDetail={() => {
            props.navigation.navigate('ContactDetail', {
              data: item,
              ...props,
            });
          }}
          onMessage={() => Linkings('message', '08xxxxxxxxx')}
        />
      </Swipeable>
    );
  };

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
        onProfile={() => {
          props.navigation.navigate('ContactDetail', {
            data: {
              isDevice: true,
              ...{firstName: 'My', lastName: 'Device', age: ''},
            },
          });
        }}
      />

      <FlatList
        keyExtractor={(item, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={props.isLoading}
        indicatorStyle="white"
        data={Items}
        ListEmptyComponent={EmptyListMessage}
        renderItem={v => {
          return renderItem(v, () => {
            onDeleteItem(v);
          });
        }}
      />
      <Spinner
        visible={isRefreshing ? false : props.isLoading}
        message={'Please wait...'}
      />

      <Floating onPress={() => setShowAdd(!ShowAdd)} />

      <FormContact
        isAddItem
        visible={ShowAdd}
        onBack={() => setShowAdd(!ShowAdd)}
        onSubmit={onAddDataItem}
        {...props}
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
