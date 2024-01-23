import {StyleSheet,Text,View,Image,TouchableHighlight,TouchableOpacity,ToastAndroid } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";
import { GET_IMG } from "../../api/apiService";

const ScreenDetail = ({ route, navigation }) => {
 
  const [cartItems, setCartItems] = useState(0);
  const addToCart = () => {
    setCartItems(quantity);
    // Hiển thị thông báo khi sản phẩm được thêm vào giỏ hàng
    ToastAndroid.show('Sản phẩm đã được thêm vào giỏ hàng!', ToastAndroid.SHORT);
  };
  const { bakery } = route.params;
  const [total, totalPrice] = useState(bakery.price);
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={styles.container}>
      <View style={styles.contentTop}>
        <TouchableOpacity
          style={styles.footerItem}
          onPress={() => navigation.navigate("Trangchu")}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Order</Text>
        <TouchableOpacity
        style={styles.footerItem}
        onPress={() => navigation.navigate("Ma")}
      >
     
        <TouchableHighlight
          style={styles.icon}
          activeOpacity={0.0}
          underlayColor="#FFF"
          onPress={() => {
            const updatedBakery = { ...bakery, quantity: quantity };
            navigation.navigate("TabOderScreen1", {
              bakery: updatedbakery,
            });
          }}
        >
          <View style={styles.icon}>
           <AntDesign style={styles.icon} name="shoppingcart" size={24} color="#001833" />
          </View>
        </TouchableHighlight>
       
        {cartItems > 0 && (
          <View style={styles.cartItemCount}>
            <Text style={styles.cartItemCountText}>{cartItems}</Text>
          </View>
        )}
      </TouchableOpacity>
      </View>
      <View style={styles.image}>
        <Image
          source={{
            uri: GET_IMG("products", bakery.photo),
          }}
          style={{
            width: 190,
            height: 180,
            paddingHorizontal: 22,
            paddingTop: 20,
          }}
          resizeMode="contain"
        />
      </View>
      <View style={styles.content1}>
        <Text style={styles.content}>{bakery.title}</Text>
     
        {/* <Text style={styles.content12}>{bakery.description}</Text>

                <Text style={styles.content11}>{bakery.price}.000$</Text> */}

        <InputSpinner
          style={{
            marginLeft: 220,
            marginTop: -30,
          }}
          max={10}
          min={1}
          step={1}
          skin={"round"}
          color={"#FFF"}
          value={0}
          height={40}
          width={110}
          shadow={false}
          background={"#FFF"}
          shadowBorder={false}
          onChange={(num) => {
            bakery.total = num * bakery.price;
            totalPrice(bakery.total);
            setQuantity(num);
          }}
        />
      </View>

      <View style={styles.content5}>
        <View style={styles.dau}>
        <Text>Ristretto</Text>
        <Image
        style={[styles.rectangleIcon, styles.ChitietChildLayout]}
        resizeMode="cover"
        source={require("../../assets/1.jpg")}
      /></View>
        <Text>Onsite/Takeaway</Text>
        <Text>Volume,ml</Text>

      </View>
      <View style={styles.content6}></View>
      <View style={styles.contentBottom}>
        <View style={styles.totalAmount}>
          <Text style={styles.totalAmount2}>Total Amount</Text>
          <Text style={styles.byn300}>BYN:{total}</Text>
          {/* <Text style={styles.content11}>{bakery.total}</Text> */}
        {/* <Text style={styles.content11}>{bakery.price}</Text>  */}

        </View>
        <TouchableHighlight
          style={{ marginBottom: 20, borderRadius: 15,top:25 }}
          activeOpacity={0.0}
          underlayColor="#FFF"
          onPress={() => {
            const updatedBakery = { ...bakery, quantity: quantity };
            navigation.navigate("TabOderScreen1", {
              bakery: updatedBakery,
            });
          }}
        >
          <View style={styles.rectangView}>
            <Text style={styles.next}>Next</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
          style={{ marginBottom: 20, borderRadius: 15,top:12 }}
          activeOpacity={0.0}
          underlayColor="#FFF"
          onPress={() => {
            const updatedBakery = { ...bakery, quantity: quantity };
            navigation.navigate("ScreenDetail", {
              bakery: updatedbakery,
            });
          }}>
           <TouchableOpacity onPress={addToCart}>
        <View style={styles.rectangView}>
          <Text style={styles.next}>Thêm vào giỏ hàng</Text>
        </View>
      </TouchableOpacity>
        </TouchableHighlight>
      </View>
      <View style={styles.contentend}>

      </View>
    </View>
  );
};
export default ScreenDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    
  },
  contentTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
  },
  image: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F8FB",
    borderRadius: 30,
  },
  content1: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  contentend:{
    
    backgroundColor: "#00FFFF",

  },
  content2: {
    flex: 1,
  },
  content3: {
    flex: 1,
  },
  content4: {
    flex: 1,
  },
  content5: {
    flex: 1,
    fontSize: 16,
    color: "#FAA",
    textAlign: "center",
    left:40,
  },
  content6: {
    flex: 1,
  },
  contentBottom: {
    flex: 1.5,
  },
  title: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "500",
    color: "#001833",
    textAlign: "center",
  },
  content: {
    fontSize: 21,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    color: "#001833",
    textAlign: "left",
    fontWeight: "bold",
    marginTop: -30,
    marginLeft: -230,
  },
  content11: {
    marginTop: -0.5,
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    color: "#001833",
    textAlign: "left",
    fontWeight: "bold",
    marginLeft: -230,
    // marginTop:-1,
  },
  content12: {
    marginTop: 5,

    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    color: "#001833",
    textAlign: "left",
    // fontWeight: "bold",
    marginLeft: -230,
  },
  rectangView: {
    borderRadius: 30,
    backgroundColor: "#324a59",
    height: 46,
    marginHorizontal: 30,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  totalAmount: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 30,
    marginTop: -10,
    
  },
  totalAmount2: {
    fontSize: 16,
    fontWeight: "500",
    color: "#001833",
    textAlign: "left",
    width: 136,
    height: 19,
    fontWeight: "bold",

    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  byn300: {
    fontSize: 16,
    fontWeight: "600",
    fontWeight: "bold",
    color: "#001833",
    textAlign: "right",
    left:-25,
    width: 85,
    height: 19,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  next: {
    fontSize: 14,
    lineHeight: 23,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  rectangleIcon: {
    borderRadius: 16,
    flex: 1,
    width: "100%",
    height: 50
    },
    icon:{
      top:4,
    left:1,

    }
});
