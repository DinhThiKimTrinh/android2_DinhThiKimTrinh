// ProductDetail.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductDetail = ({ route }) => {
  const { product } = route.params;

  const handleAddToCart = () => {
    // TODO: Implement logic to add the product to the cart
    alert('Added to cart');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.photo }} style={styles.productImage} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>{`Giá: ${product.price}`}</Text>

      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartButtonText}>Thêm vào giỏ hàng</Text>
        <Icon name="cart-plus" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  productImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
  productPrice: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: 'green',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  addToCartButtonText: {
    color: 'white',
    marginRight: 10,
  },
});

export default ProductDetail;
