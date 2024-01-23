// Product.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Product = () => {
  const [games, setGames] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch data from API or any other source
    // For simplicity, using a static array here
    const data = [
      { id: 1, title: 'Game 1', description: 'Description 1', price: 20, photo: 'image1.jpg' },
      { id: 2, title: 'Game 2', description: 'Description 2', price: 25, photo: 'image2.jpg' },
      // Add more items as needed
    ];
    setGames(data);
  }, []);
// getAPI();
// }, []);

  const navigation = useNavigation();

  const handleMoreButton = (id) => {
    const selectedProduct = games.find(item => item.id === id);
    if (selectedProduct) {
      navigation.navigate('ProductDetails', { product: selectedProduct });
    }
  };

  const handleAddToCart = (id) => {
    const selectedProduct = games.find(item => item.id === id);
    if (selectedProduct) {
      setCart([...cart, selectedProduct]);
      alert('Added to cart');
    }
  };

  const renderProduct = ({ item }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => handleMoreButton(item.id)}
    >
      <Image source={{ uri: item.photo }} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      <Text style={styles.productPrice}>{`Giá: ${item.price}`}</Text>

      <TouchableOpacity
        style={styles.shoppingCartContainer}
        onPress={() => handleAddToCart(item.id)}
      >
        <Icon name="cart-plus" size={30} color="green" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderProduct}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
  },
  productContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  productImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
  },
  productPrice: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
  shoppingCartContainer: {
    marginTop: 10,
    alignItems: 'flex-end',
  },
});

export default Product;
