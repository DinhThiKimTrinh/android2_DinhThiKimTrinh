import Header from '../home/Header.js';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, FlatList, Text, TouchableOpacity, ScrollView, TouchableHighlight } from 'react-native';
import { GET_ALL, GET_IMG } from '../api/apiservice.js';
import ItemHome from './ItemHome.js';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { SearchBar } from "react-native-elements";
export default function TrangChu({ route, navigation }) {
  const [coffeeData, setCoffeeData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredCoffeeData, setFilteredCoffeeData] = useState([]);

  useEffect(() => {
    GET_ALL('products')
      .then((response) => {
        const responseData = response.data;
        if (responseData && Array.isArray(responseData.content)) {
          setCoffeeData(responseData.content);
          setFilteredCoffeeData(responseData.content); // Initialize filtered data with all items
        } else {
          console.error('Data received from the API is not in a supported format.');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        setIsLoading(false);
      });
  }, []);;
  useEffect(() => {
    // Filter coffeeData based on search
    const filteredData = coffeeData.filter((coffee) =>
      coffee.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCoffeeData(filteredData);
  }, [coffeeData, search]);
  const navigateToScreenDetail = (coffee) => {
    if (coffee) {
      const updatedCoffee = { ...coffee, total: coffee.price };
      navigation.navigate('Chitiet', {
        coffee: updatedCoffee,
      });
    }
  };
  return (
    <View style={styles.trangchu}>
      <Header />
      <View style={styles.tk}>
        <SearchBar
          placeholder="Tìm kiếm sản phẩm..."
          onChangeText={(text) => setSearch(text)}
          value={search}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainer}
          inputStyle={styles.searchBarInput}
        />
      </View>
      <Image
        style={styles.banner}
        source={require('../../assets/images/slider.png')}
      />
      <Text style={styles.title}>Sản phẩm</Text>
      < ScrollView>
      <View style={styles.content}>
            {isLoading ? (
              <Text>Loading</Text>
            ) : filteredCoffeeData.length ? (
              filteredCoffeeData.map((coffee, index) => (
                <TouchableHighlight
                  key={coffee.id}
                  style={{ marginBottom: 10, borderRadius: 15 }}
                  activeOpacity={0.0}
                  underlayColor="#FFF"
                  onPress={() => navigateToScreenDetail(coffee)}
                >
                  <ItemHome
                    key={index}
                    imageSource={GET_IMG('products', coffee.photo)}
                    textContent={coffee.title}
                    textPrice={coffee.price}
                  />
                </TouchableHighlight>
              ))
            ) : (
              <Text style={{textAlign:'center',marginLeft:"20%" , marginTop:"10%", color:"black", fontSize:20}}>Không tìm thấy kết quả!</Text>
            )}
          </View>
        
      </ScrollView>
      {/* <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      /> */}

    </View>
  );
}
const styles = StyleSheet.create({
  trangchu: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'black',
    fontSize: 20,
    top:-50,
  },
  banner: {
    width: 350,
    height: 200,
    top:-60,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  image: {
    width: 180,
    height: 180,
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    padding: 10,
  },
  icon: {
    marginRight: 20,
  },
  tk: {
    marginTop: '10%',
    paddingHorizontal: 40,
    top:-85,
    left:30,
  },
  searchBarContainer: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
  },
  searchBarInputContainer: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    height: '2%',
  },
  searchBarInput: {
    fontSize: 16,
  },
});