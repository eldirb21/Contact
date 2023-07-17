import React from 'react';
import {
  View,
  StyleSheet,
  StatusBar,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isvalidPhoto} from '../utils/helpers';
import colors from '../utils/colors';

const AppBar = ({
  onProfile,
  onBack,
  onSearch,
  onChangeSearch,
  title,
  visibleSearch,
  searchValue,
  iconBack,
  backStyle,
  containerStyle,
}) => {
  return (
    <>
      <StatusBar
        animated
        backgroundColor={'green'}
        barStyle={'light-content'}
      />
      <View style={[styles.content, containerStyle]}>
        <View style={styles.headLeft}>
          {onBack && (
            <TouchableOpacity
              onPress={onBack}
              style={[styles.backbtn, backStyle]}>
              <Ionicons
                name={iconBack || 'chevron-back'}
                color={colors.LD.white}
                size={25}
              />
            </TouchableOpacity>
          )}
          <Text style={styles.headTitle}>{title}</Text>
        </View>
        <View style={styles.headRight}>
          {onSearch && !visibleSearch && (
            <TouchableOpacity onPress={onSearch}>
              <Ionicons name="search" color={colors.LD.white} size={25} />
            </TouchableOpacity>
          )}
          {onProfile && (
            <TouchableOpacity style={styles.onProfile} onPress={onProfile}>
              <View style={[styles.iconAvatar, styles.photo]}>
                <Ionicons
                  name="ios-person-sharp"
                  size={25}
                  color={colors.LD.white}
                />
              </View>

              <Image
                resizeMode="contain"
                style={{...styles.photo, position: 'absolute'}}
                source={{uri: isvalidPhoto(null)}}
              />
            </TouchableOpacity>
          )}
        </View>
        {visibleSearch && (
          <View
            style={[
              styles.searchContent,
              !onProfile && styles.fullSearchField,
            ]}>
            <View style={styles.iconSearch}>
              <Ionicons name="search" size={18} color={'grey'} />
              <TextInput
                value={searchValue}
                style={styles.searchInput}
                onChangeText={onChangeSearch}
                placeholder="Search"
                placeholderTextColor={'grey'}
              />
            </View>
            <TouchableOpacity
              onPress={onSearch}
              activeOpacity={0.9}
              style={styles.btnclose}>
              <Ionicons name="close" size={18} color={'grey'} />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingTop: Platform.OS === 'ios' ? 40 : 0,
    height: Platform.OS === 'ios' ? 100 : 65,
    backgroundColor: colors.LD.background,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headTitle: {
    color: colors.LD.white,
    fontSize: 18,
    fontWeight: '500',
  },
  headRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  headLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backbtn: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginRight: 10,
  },
  photo: {
    height: 45,
    width: 45,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.LD.white,
    zIndex: 9999,
  },
  iconAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 2,
    paddingBottom: 4,
  },
  searchContent: {
    top: Platform.OS === 'ios' ? 50 : 0,
    position: 'absolute',
    left: 14,
    right: '20%',
    backgroundColor: colors.LD.white,
    borderRadius: 50,
    borderWidth: 1,
    flexDirection: 'row',
  },
  searchInput: {
    color: '#000',
    borderRadius: 50,
    padding: 8,

    flex: 1,
    zIndex: 999,
  },
  btnclose: {
    justifyContent: 'center',
    padding: 10,
  },
  iconSearch: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
  },
  onProfile: {
    marginLeft: 15,
  },
  fullSearchField: {
    right: '5%',
  },
});

export default AppBar;
