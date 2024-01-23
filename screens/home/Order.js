import { View, StyleSheet, Text, Image, Animated, PanResponder, ScrollView,TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather, AntDesign } from '@expo/vector-icons';
const Order = ({ navigation }) => {

  const animatedValue2 = new Animated.Value(0);
  const animatedValue3 = new Animated.Value(0);
  const animatedValue = new Animated.Value(0);
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx } = gestureState;
      animatedValue.setValue(dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      const { dx } = gestureState;
      if (dx < -100) {
        // Handle deletion here
      } else {
        Animated.spring(animatedValue, { toValue: 0, tension: 10, friction: 2, useNativeDriver: false }).start();
      }
    },
  });
  const renderBackIcon = () => {
    if (animatedValue._value < 10) { // You can adjust the threshold as needed
      return (
        <AntDesign name="delete" size={50} color="red" style={styles.backIcon} />
      );
    } else {
      return null;
    }
  };
  const panResponder2 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx } = gestureState;
      animatedValue2.setValue(dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      const { dx } = gestureState;
      if (dx < -100) {
        // Xử lý xóa ở đây cho blackUnderline2
      } else {
        Animated.spring(animatedValue2, { toValue: 0, tension: 10, friction: 2, useNativeDriver: false }).start();
      }
    },
  });

  const panResponder3 = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const { dx } = gestureState;
      animatedValue3.setValue(dx);
    },
    onPanResponderRelease: (evt, gestureState) => {
      const { dx } = gestureState;
      if (dx < -100) {
        // Xử lý xóa ở đây cho blackUnderline3
      } else {
        Animated.spring(animatedValue3, { toValue: 0, tension: 10, friction: 2, useNativeDriver: false }).start();
      }
    },
  });
  return (
    
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <View style={styles.containerTopLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="arrow-back-sharp" size={50} color="black" />
          </TouchableOpacity>
          <Text style={styles.myOrderText}>My Order</Text>
          <ScrollView >
            <View style={styles.shag}>
              <View style={styles.blackUnderline} {...panResponder.panHandlers}>

                <Animated.View style={[styles.menu, { marginLeft: animatedValue }]}>
                  {renderBackIcon()}
                  <Image
                    style={styles.menuImage}
                    resizeMode="contain"
                    source={require("../../assets/order.png")}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText1}>Americano</Text>
                    <Text style={styles.hh}>Single | iced | medium | full ice</Text>
                    <Text style={styles.myOrderText2}>x1</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText3}>BYN</Text>
                    <Text style={styles.myOrderText4}>3.00</Text>
                  </View>
                </Animated.View>
              </View>
              <View style={styles.blackUnderline1} {...panResponder2.panHandlers}>
                <Animated.View style={[styles.menu, { marginLeft: animatedValue2 }]}>
                  {renderBackIcon()}
                  <Image
                    style={styles.menuImage1}
                    resizeMode="contain"
                    source={require("../../assets/order1.png")}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText1}>Americano</Text>
                    <Text style={styles.hh}>Single | iced | medium | full ice</Text>
                    <Text style={styles.myOrderText2}>x1</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText3}>BYN</Text>
                    <Text style={styles.myOrderText4}>3.00</Text>
                  </View>
                </Animated.View>
              </View>
              <View style={styles.blackUnderline1} {...panResponder3.panHandlers}>
                <Animated.View style={[styles.menu, { marginLeft: animatedValue3 }]}>
                  {renderBackIcon()}
                  <Image
                    style={styles.menuImage1}
                    resizeMode="contain"
                    source={require("../../assets/order.png")}
                  />
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText1}>Americano</Text>
                    <Text style={styles.hh}>Single | iced | medium | full ice</Text>
                    <Text style={styles.myOrderText2}>x1</Text>
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.myOrderText3}>BYN</Text>
                    <Text style={styles.myOrderText4}>3.00</Text>
                  </View>
                </Animated.View>
              </View>
            </View>
          </ScrollView>

          <View style={styles.mm}>
            <View style={styles.nn}>
              <Text style={styles.tt}> Total Price</Text>
              <Text style={styles.byn}>BYN 9.00</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('PayAndOrder')}>
            <View style={styles.blackUnderlineXX}>
              <Feather name="shopping-bag" size={24} color="white" />
              <Text style={styles.xxText}>Next</Text>
            </View>
           </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  shag: {
backgroundColor:"#FFF",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  containerTop: {
    flex: 1.5,
    backgroundColor: "#FFF",
    flexDirection: "row",
  },
  containerTopLeft: {
    flex: 1,
    paddingLeft: 20,
    marginTop:"10%",
    flexDirection: "column",
  },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 400,
  },
  myOrderText: {
    marginTop: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  myOrderText1: {
    marginLeft: -20,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 15,
  },
  myOrderText2: {
    marginLeft: -20,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  myOrderText3: {
    marginLeft: 14,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  myOrderText4: {
    marginLeft: 14,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 1,
  },
  blackUnderline: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    height: 120,
    marginTop: 50,
    marginLeft: 5,
    marginRight: 20,
  },

  blackUnderline1: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    height: 120,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 20,
  },
  blackUnderline2: {
    backgroundColor: "#EEEEEE",
    borderRadius: 20,
    height: 120,
    marginTop: 30,
    marginLeft: 5,
    marginRight: 20,
  },

  menu: {
    flexDirection: "row",
    fontWeight: "bold",
  },
  menuImage: {
    width: 130,
    height: 130,
    marginTop: 3,
    marginLeft: 6
  },
  menuImage1: {
    width: 130,
    height: 130,
    marginTop: 3,
    marginLeft: 6
  },
  menuImage2: {
    width: 180,
    height: 180,
    marginTop: -33,
    marginLeft: -30
  },
  textContainer: {
    marginLeft: 10,
    flexDirection: "column",
  },

  chu: {
    flexDirection: "column",
  },
  hh: {
    marginTop: 15,
    marginLeft: -20,
    fontSize: 10
  },
  byn: {

    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 30
  },
  mm: {
    flexDirection: "row",
    height: 180
  },
  blackUnderlineXX: {
    backgroundColor: "#324A59",
    borderRadius: 15,
    height: 60,
    width: 150,
    marginTop: 80,
    marginLeft: 30,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",

  },
  xxText: {
    marginLeft: 25,
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
  },
  nn: {
    flexDirection: "column",
  },
  tt: {

    marginTop: 70,
    marginLeft: 30,
    fontSize: 15
  }


});

export default Order;
