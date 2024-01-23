import * as React from "react";
import {useState,useEffect} from "react";
import { Text, StyleSheet, Image, View, TouchableOpacity,Animated,Easing} from "react-native";

// import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../../GlobalStyles";
import { useNavigation } from '@react-navigation/native'; // Import sử dụng để điều hướng
const Bag = () => {
  const navigation = useNavigation(); // Sử dụng hook useNavigation để truy cập navigation

  const handleTextPress = () => {
    navigation.navigate('Order'); // Điều hướng sang trang "CartScreen"
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
    <View style={styles.bag}>
        <Animated.View style={[styles.timeFlexBox ,{ opacity: fadeAnim }]}>

         <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Image
        style={[styles.arrowLeftIcon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../../assets/arrowleft.png")}
      />
      </TouchableOpacity>
      <Text style={[styles.text, styles.textTypo7]}>đ50.000</Text>
      <Text style={[styles.text1, styles.textTypo6]}>đ10.000</Text>
      <Text style={[styles.text2, styles.textTypo6]}>đ40.000</Text>
      <Text style={[styles.shoppingBag, styles.textTypo6]}>pay</Text>
      <View style={styles.shoppingBagParent}>
        <Image
          style={[styles.shoppingBagIcon, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../../assets/shoppingbag.png")}
        />
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          resizeMode="cover"
          source={require("../../assets/ellipse-2.png")}
        />
        <Text style={styles.text3}>2</Text>
      </View>
      <Text style={[styles.bagTotal, styles.totalTypo]}>Bag Total</Text>
      <Text style={[styles.shipping, styles.totalTypo]}>Shipping</Text>
      <Text style={[styles.subTotal, styles.totalTypo]}>Sub Total</Text>
      <Image
        style={[styles.bagChild, styles.bagLayout]}
        resizeMode="cover"
        source={require("../../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.bagItem, styles.bagLayout]}
        resizeMode="cover"
        source={require("../../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.bagInner, styles.bagInnerPosition]}
        resizeMode="cover"
        source={require("../../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.bagInnerPosition]}
        resizeMode="cover"
        source={require("../../assets/ellipse-17.png")}
      />
      <Image
        style={[styles.bagChild1, styles.bagChildPosition]}
        resizeMode="cover"
        source={require("../../assets/ellipse-13.png")}
      />
      <Image
        style={[styles.bagChild2, styles.bagChildPosition]}
        resizeMode="cover"
        source={require("../../assets/ellipse-13.png")}
      />
      <Text style={[styles.text4, styles.textTypo3]}>+</Text>
      <Text style={[styles.text5, styles.textTypo3]}>+</Text>
      <Text style={[styles.text6, styles.textTypo2]}>1</Text>
      <Text style={[styles.text7, styles.textTypo2]}>1</Text>
      <Text style={[styles.m, styles.textTypo3]}>M</Text>
      <Text style={[styles.s, styles.textTypo3]}>S</Text>
      <Text style={[styles.text8, styles.textTypo1]}>-</Text>
      <Text style={[styles.text9, styles.textTypo1]}>-</Text>
      <View style={[styles.rectangleView, styles.bagChild4Layout]}>
      <View >
      <TouchableOpacity onPress={handleTextPress}>
        <Text style={[styles.proceedToCheckout, styles.textTypo]}> Proceed to Checkout</Text>
      </TouchableOpacity>
    </View>
      </View>
      {/* <Text style={[styles.proceedToCheckout, styles.textTypo]}>
        Proceed to Checkout
      </Text> */}
      
      <Image
        style={[styles.rectangleIcon, styles.bagChild3Layout]}
        resizeMode="cover"
        source={require("../../assets/1.jpg")}
      />
      <Image
        style={[styles.bagChild3, styles.bagChild3Layout]}
        resizeMode="cover"
        source={require("../../assets/1.jpg")}
      />
      <Text style={[styles.greyTShirt, styles.textTypo]}>Grey T-shirt</Text>
      <Text style={[styles.cottonQueenT, styles.textTypo]}>Cotton queen T</Text>
      <Text style={[styles.text10, styles.textTypo]}>đ20.000</Text>
      <Text style={[styles.text11, styles.textTypo]}>đ20.000</Text>
      <Image
        style={[styles.trash2Icon, styles.trash2IconPosition]}
        resizeMode="cover"
        source={require("../../assets/trash2.png")}
      />
      <Image
        style={[styles.trash2Icon1, styles.trash2IconPosition]}
        resizeMode="cover"
        source={require("../../assets/trash2.png")}
      />
        
          </Animated.View>

      <View style={[styles.bagChild4, styles.bagChild4Layout]} />
      <View style={styles.bagChild5} />
      <Text style={[styles.apply, styles.textTypo]}>Apply</Text>
      <Text style={[styles.promoCode, styles.totalTypo]}>Promo Code</Text>
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.bagChild6, styles.lineViewLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo7: {
    // fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  textTypo6: {
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    // fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  totalTypo: {
    // fontFamily: FontFamily.quicksandRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bagLayout: {
    height: 30,
    width: 30,
    left: 124,
    position: "absolute",
  },
  bagInnerPosition: {
    left: 318,
    height: 30,
    width: 30,
    position: "absolute",
  },
  bagChildPosition: {
    left: 204,
    height: 30,
    width: 30,
    position: "absolute",
  },
  textTypo3: {
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
  },
  textTypo2: {
    left: 177,
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  textTypo1: {
    left: 216,
    // fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  bagChild4Layout: {
    height: 50,
    width: 321,
    borderRadius: Border.br_mini,
    left: 27,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    textAlign: "center",
    position: "absolute",
  },
  bagChild3Layout: {
    height: 85,
    width: 76,
    borderRadius: Border.br_mini,
    left: 27,
    position: "absolute",
  },
  trash2IconPosition: {
    left: 321,
    height: 24,
    width: 24,
    position: "absolute",
    overflow: "hidden",
  },
  lineViewLayout: {
    height: 0,
    borderTopWidth: 0.2,
    borderColor: Color.colorGray,
    borderStyle: "solid",
    width: 321,
    left: 27,
    position: "absolute",
  },
  arrowLeftIcon: {
    top: 35,
    height: 30,
    width: 30,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 560,
    left: 238,
    fontSize: 30,
    color: Color.colorLightsalmon,
    textAlign: "right",
    position: "absolute",
  },
  text1: {
    top: 521,
    left: 270,
  },
  text2: {
    top: 481,
    left: 270,
  },
  shoppingBag: {
    top: 34,
    left: 114,
  },
  shoppingBagIcon: {
    height: "75%",
    width: "75%",
    top: "25%",
    right: "25%",
    bottom: "0%",
    left: "0%",
  },
  groupChild: {
    height: "62.5%",
    width: "62.5%",
    top: "0%",
    right: "0%",
    bottom: "37.5%",
    left: "37.5%",
  },
  text3: {
    top: "12.5%",
    left: "59.38%",
    fontSize: 10,
    // fontFamily: FontFamily.robotoMedium,
    color: Color.colorWhite,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  shoppingBagParent: {
    height: "3.84%",
    width: "8.53%",
    top: "3.33%",
    right: "7.2%",
    bottom: "92.73%",
    left: "84.27%",
    position: "absolute",
  },
  bagTotal: {
    top: 530,
    left: 27,
    // fontFamily: FontFamily.quicksandRegular,
  },
  shipping: {
    top: 490,
    left: 27,
    // fontFamily: FontFamily.quicksandRegular,
  },
  subTotal: {
    top: 555,
    left: 27,
    // fontFamily: FontFamily.quicksandRegular,
  },
  bagChild: {
    top: 284,
  },
  bagItem: {
    top: 166,
  },
  bagInner: {
    top: 229,
  },
  ellipseIcon: {
    top: 111,
  },
  bagChild1: {
    top: 284,
  },
  bagChild2: {
    top: 166,
  },
  text4: {
    left: 135,
    // fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
    top: 290,
  },
  text5: {
    top: 172,
    left: 135,
    // fontFamily: FontFamily.quicksandMedium,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  text6: {
    top: 287,
  },
  text7: {
    top: 169,
  },
  m: {
    top: 235,
    left: 327,
    fontSize: FontSize.size_sm,
    // fontFamily: FontFamily.quicksandMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  s: {
    top: 117,
    left: 329,
    fontSize: FontSize.size_sm,
    // fontFamily: FontFamily.quicksandMedium,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  text8: {
    top: 290,
  },
  text9: {
    top: 172,
  },
  rectangleView: {
    top: 638,
    backgroundColor: Color.colorLightsalmon,
  },
  proceedToCheckout: {
    top:12,
    left: 90,
    color: Color.colorWhite,
    // fontFamily: FontFamily.quicksandBold,
    fontWeight: "700",
  },
  rectangleIcon: {
    top: 229,
  },
  bagChild3: {
    top: 111,
  },
  greyTShirt: {
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 229,
    left: 124,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  cottonQueenT: {
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    top: 111,
    left: 124,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text10: {
    top: 254,
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    left: 124,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  text11: {
    top: 136,
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    left: 124,
    fontSize: FontSize.size_base,
    color: Color.colorBlack,
  },
  trash2Icon: {
    top: 169,
  },
  trash2Icon1: {
    top: 287,
  },
  bagChild4: {
    top: 429,
    backgroundColor: "#e8e8e8",
  },
  bagChild5: {
    top: 434,
    left: 258,
    borderRadius: 11,
    backgroundColor: "#42d1f0",
    width: 85,
    height: 40,
    position: "absolute",
  },
  apply: {
    top: 444,
    left: 279,
    // fontFamily: FontFamily.quicksandMedium,
    fontWeight: "500",
    color: Color.colorWhite,
  },
  promoCode: {
    top: 445,
    left: 46,
    width: 86,
    opacity: 0.2,
  },
  lineView: {
    top: 522,
  },
  bagChild6: {
    top: 384,
  },
  bag: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    left:5,
  },
});

export default Bag;
