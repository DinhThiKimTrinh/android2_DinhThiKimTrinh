import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.header}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo/logo.png')}
      />

     
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 10,
    flex: 1,
    marginLeft: 10,
    borderRadius: 15,
  },
  searchInput: {
    height: 40,
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
  logo: {
    width: 40,
    height: 40,
  },
});

export default Header;
