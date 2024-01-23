import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from "react-native";

// import { Image, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import { Color, FontSize, Border, FontFamily } from "../../GlobalStyles";
import { useNavigation } from "@react-navigation/native"; // Import sử dụng để điều hướng
const PayAndOrder = () => {
  const navigation = useNavigation(); // Sử dụng hook useNavigation để truy cập navigation

  const handleTextPress = () => {
    navigation.navigate("OrderCompleted"); // Điều hướng sang trang "CartScreen"
  };

  const [floatAnim] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 20, //fload up
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
        Animated.timing(floatAnim, {
          toValue: -20,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);
  return (
    <View style={styles.payAndOrder}>
      {/* <Animated.View style={[{ transform: [{ translateY: floatAnim }] }]}> */}
        <TouchableOpacity onPress={() => navigation.navigate("TrangChu")}>
          <Image
            style={[styles.arrowLeftIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../../assets/arrowleft.png")}
          />
        </TouchableOpacity>
        <Text style={styles.text}>$90.00</Text>
        <Text style={[styles.checkout, styles.checkoutFlexBox]}>Checkout</Text>
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
          <Text style={styles.text1}>2</Text>
        </View>
        <Text style={[styles.amountPayable, styles.checkoutFlexBox]}>
          Amount Payable
        </Text>
        <View style={[styles.payAndOrderChild, styles.lineViewPosition]} />
        {/* <Text style={[styles.payAndComplete, styles.raghuK44Typo1]}>
        Pay and Complete Order
      </Text> */}
        <View>
        <View style={[styles.payAndComplete, styles.raghuK44Typo1]}>
          <TouchableOpacity onPress={handleTextPress}>
            <Text >
              Pay and Complete Order
            </Text>
          </TouchableOpacity>
          </View>
        </View>
        <Text style={[styles.paymentMethod, styles.raghuK44Typo1]}>
          Payment method
        </Text>

        <Text style={[styles.deliveryAddress, styles.raghuK44Typo1]}>
          Delivery Address
        </Text>
        <View style={[styles.payAndOrderItem, styles.payLayout]} />
        <View style={[styles.payAndOrderInner, styles.payLayout]} />
        <Text style={[styles.raghuK44, styles.raghuK44Typo]}>{`Raghu K,
44, Arden Street,
Down town,
Kodaikanal - 655 789`}</Text>
        <Image
          style={[styles.ellipseIcon, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-25.png")}
        />

        <Text style={[styles.debitCredit, styles.gpayTypo]}>
          Debit / Credit Card
        </Text>
        <Text style={[styles.paypal, styles.gpayTypo]}>Paypal</Text>
        <Text style={[styles.bankTransfer, styles.gpayTypo]}>
          Bank Transfer
        </Text>
        <Text
          style={[
            styles.estimatedDelivery25Container,
            styles.selinaK213Position,
          ]}
        >
          <Text style={styles.raghuK44Typo}>{`Estimated delivery: `}</Text>
          <Text style={styles.checkoutTypo}>25 March 2024</Text>
        </Text>
        <Text style={[styles.gpay, styles.gpayTypo]}>Gpay</Text>
        <View style={styles.addANewAddressParent}>
          <Text style={[styles.addANew, styles.text2Typo]}>
            Add a New Address
          </Text>
          <Text style={[styles.text2, styles.text2Typo]}>+</Text>
        </View>
        <Text style={[styles.selinaK213, styles.selinaK213Position]}>{`Selina K,
21/3, Ragava Street,
Silver tone,
Kodaikanal - 655 789`}</Text>
        <Image
          style={[styles.payAndOrderChild1, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-25.png")}
        />
        <Image
          style={[styles.payAndOrderChild2, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-23.png")}
        />
        <Image
          style={[styles.payAndOrderChild3, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-25.png")}
        />
        <Image
          style={[styles.payAndOrderChild4, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-25.png")}
        />
        <Image
          style={[styles.payAndOrderChild5, styles.payChildLayout1]}
          resizeMode="cover"
          source={require("../../assets/ellipse-25.png")}
        />
        <Image
          style={[styles.payAndOrderChild6, styles.payChildLayout]}
          resizeMode="cover"
          source={require("../../assets/ellipse-19.png")}
        />
        <Image
          style={[styles.payAndOrderChild7, styles.payChildLayout]}
          resizeMode="cover"
          source={require("../../assets/ellipse-24.png")}
        />
        <View style={[styles.lineView, styles.lineViewPosition]} />
        <Image
          style={styles.deliveryShippingTimeIcon1}
          resizeMode="cover"
          source={require("../../assets/4230551-delivery-shipping-time-icon-1.png")}
        />
      {/* </Animated.View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  checkoutFlexBox: {
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineViewPosition: {
    width: 321,
    left: 15,
    position: "absolute",
  },
  raghuK44Typo1: {
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  payLayout: {
    height: 118,
    width: 235,
    top: 421,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  raghuK44Typo: {
    fontWeight: "500",
  },
  payChildLayout1: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  gpayTypo: {
    left: 75,
    fontSize: FontSize.size_base,
    fontWeight: "500",
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  selinaK213Position: {
    left: 85,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },

  payChildLayout: {
    height: 16,
    width: 16,
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
  text: {
    top: 671,
    left: 250,
    fontSize: 30,
    textAlign: "right",
    color: Color.colorLightsalmon,
    fontWeight: "700",
    position: "absolute",
  },
  checkout: {
    top: 34,
    left: 114,
    fontSize: 20,
    fontWeight: "700",
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
  text1: {
    top: "12.5%",
    left: "59.38%",
    fontSize: 10,
    color: Color.colorWhite,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  shoppingBagParent: {
    height: "3.94%",
    width: "8.53%",
    top: "3.33%",
    right: "7.2%",
    bottom: "92.73%",
    left: "84.27%",
    position: "absolute",
  },
  amountPayable: {
    top: 681,
    fontSize: 14,
    left: 27,
  },
  payAndOrderChild: {
    top: 705,
    backgroundColor: Color.colorLightsalmon,
    height: 50,
    borderRadius: Border.br_mini,
    width: 321,
  },
  payAndComplete: {
    top: 720,
    left: 110,
    color: Color.colorWhite,
    fontWeight: "700",
  },
  paymentMethod: {
    top: 111,
    color: Color.colorBlack,
    fontWeight: "700",
    left: 27,
  },
  deliveryAddress: {
    top: 390,
    color: Color.colorBlack,
    fontWeight: "700",
    left: 27,
  },
  payAndOrderItem: {
    backgroundColor: Color.colorBlack,
    left: 27,
  },
  payAndOrderInner: {
    left: 268,
    backgroundColor: "#e8e8e8",
  },
  raghuK44: {
    left: 326,
    top: 440,
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
    color: Color.colorBlack,
  },
  ellipseIcon: {
    left: 282,
    top: 437,
    height: 30,
    width: 30,
  },
  debitCredit: {
    top: 199,
  },
  paypal: {
    top: 244,
  },
  bankTransfer: {
    top: 294,
  },
  checkoutTypo: {
    fontWeight: "700",
  },
  estimatedDelivery25Container: {
    top: 623,
    color: Color.colorBlack,
  },
  gpay: {
    top: 153,
  },
  addANew: {
    left: 20,
    textDecoration: "underline",
  },
  text2: {
    left: 0,
  },
  addANewAddressParent: {
    top: 559,
    width: 167,
    height: 20,
    left: 27,
    position: "absolute",
  },
  selinaK213: {
    fontWeight: "500",
    top: 440,
    color: Color.colorWhite,
  },
  payAndOrderChild1: {
    top: 148,
    left: 27,
  },
  payAndOrderChild2: {
    left: 41,
    top: 437,
    height: 30,
    width: 30,
  },
  payAndOrderChild3: {
    top: 194,
    left: 27,
  },
  payAndOrderChild4: {
    top: 240,
    left: 27,
  },
  payAndOrderChild5: {
    top: 290,
    left: 27,
  },
  payAndOrderChild6: {
    top: 155,
    left: 34,
  },
  payAndOrderChild7: {
    top: 444,
    left: 48,
  },
  lineView: {
    top: 355,
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.4)",
    borderTopWidth: 0.2,
    height: 0,
  },
  deliveryShippingTimeIcon1: {
    top: 609,
    width: 45,
    height: 45,
    left: 27,
    position: "absolute",
    overflow: "hidden",
  },
  payAndOrder: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    left: 11,
  },
});

export default PayAndOrder;
