import * as React from "react";
import {useState,useEffect} from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Import thêm biểu tượng mới
import {  FontAwesome, Ionicons } from "@expo/vector-icons";

import { Image, StyleSheet, Text, View, TouchableOpacity,Animated,Easing} from "react-native";
// import { Image, StyleSheet, View, Text,TouchableOpacity } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../../GlobalStyles";
import { useNavigation } from '@react-navigation/native'; // Import sử dụng để điều hướng
const OrderCompleted = () => {
  const navigation = useNavigation(); 
  const handleTextPress = () => {
    navigation.navigate('Order'); 
  };
  const handleTextPress1 = () => {
    navigation.navigate('TabOderScreen'); 
  };

  const [fadeAnim] = useState(new Animated.Value(0));
  useEffect(() => {
  const startAnimationTimeout = setTimeout(() => { Animated.timing(fadeAnim, {
  toValue: 1,
  duration: 2000,
  easing: Easing.linear,
  useNativeDriver: true,
  }).start();
  }, 500);
  return () => clearTimeout(startAnimationTimeout)
  }, []);


  return (
    <View style={styles.orderCompleted}>
          <Animated.View style={[styles.timeFlexBox ,{ opacity: fadeAnim }]}>
          <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
      <Image
        style={styles.arrowLeftIcon}
        resizeMode="cover"
        source={require("../../assets/arrowleft.png")}
      />
     </TouchableOpacity>
      <View style={[styles.orderCompletedChild, styles.orderLayout]} />
      <View style={[styles.orderCompletedItem, styles.orderLayout]} />
      {/* <Text style={[styles.continueShopping, styles.continueShoppingTypo]}>
        Continue Shopping
      </Text> */}
      <View style={[styles.continueShopping, styles.continueShoppingTypo]}>
      <TouchableOpacity onPress={handleTextPress1}>
        <Text > Continue Shopping</Text>
      </TouchableOpacity>
    </View>
         <View style={[styles.viewOrderDetails, styles.continueShoppingTypo]}>
      <TouchableOpacity onPress={handleTextPress}>
        <Text > View Order Details</Text>
      </TouchableOpacity>
    </View>
      <Image
        style={styles.orderCompletedInner}
        resizeMode="cover"
        source={require("../../assets/group-2.png")}
      />
      <Text style={styles.paymentDoneSuccessfully}>
        Payment Done Successfully and your order has been placed.
      </Text>
      </Animated.View>
      {/* <View style={styles.rectangleView}>
      <TouchableOpacity onPress={() => navigation.navigate('Homechu')}>
        <MaterialCommunityIcons // Thay đổi biểu tượng cho phần này
          style={styles.logoHome}
          name="home"
          size={50}
          color="#324A59"
        />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Bag')}>
        <FontAwesome
          style={styles.logoHome1}
          name="gift"
          size={50}
          color="#324A59"
        />
         </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Profile2')}>
        <Ionicons
          style={styles.logoHome2}
          name="calendar"
          size={50}
          color="#324A59"
        />
         </TouchableOpacity>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  orderLayout: {
    height: 50,
    width: 321,
    borderRadius: Border.br_mini,
    left: 13,
    position: "absolute",
  },
  continueShoppingTypo: {
    textAlign: "left",
    fontSize: FontSize.size_base,
    fontWeight: "700",
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 35,
    width: 24,
    height: 24,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  orderCompletedChild: {
    top: 693,
    backgroundColor: Color.colorLightsalmon,
  },
  orderCompletedItem: {
    top: 640,
    borderStyle: "solid",
    borderColor: Color.colorLightsalmon,
    borderWidth: 1,
    backgroundColor: Color.colorWhite,
    width: 321,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorLightsalmon,
  },
  continueShopping: {
    top: 710,
    left: 115,
    color: Color.colorWhite,
  },
  logoHome: {
    marginLeft: 50,
    marginTop: 6,
  },
  logoHome1: {
    marginLeft: 60,
    marginTop: 6,
  },
  logoHome2: {
    marginLeft: 80,
    marginTop: 6,
  },
  rectangleView: {
  //    height:"100%",
  // width:"800%",
    borderRadius: 25, 
    flexDirection: "row",
    flex: 1,
 
    
  },
  viewOrderDetails: {
    top: 655,
    left: 116,
    color: Color.colorLightsalmon,
  },
  orderCompletedInner: {
    height: "16.87%",
    width: "36.53%",
    top: "35.34%",
    right: "31.73%",
    bottom: "47.78%",
    left: "31.73%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  paymentDoneSuccessfully: {
    top: 444,
    left: 64,
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    width: 248,
    height: 74,
    fontWeight: "700",
    position: "absolute",
  },
  orderCompleted: {
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left:10,
  },
});

export default OrderCompleted;
