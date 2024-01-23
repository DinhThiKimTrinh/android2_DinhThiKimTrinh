import React from "react";
import { View, Text, StyleSheet, Image, Pressable,TouchableOpacity} from "react-native";

const MyOrder = ({ navigation }) => {
  return (
    <View style={styles.myOrder}>
      <View style={[styles.myOrderChild, styles.groupItemLayout]} />
      <Text style={[styles.title, styles.timeFlexBox]}>My order</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Bag")}>
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="cover"
          source={require("../../assets/arrowleft.png")}
        />
      </TouchableOpacity>
      <Pressable
        style={styles.wrapper1}
        onPress={() => navigation.navigate("Homechu")}
      >
        <Image
          style={styles.iconLayout}
          contentFit="cover"
          source={require("../../assets/iconlylightoutlinearrow--left.png")}
        />
      </Pressable>
      <View style={[styles.myOrderInner, styles.groupViewPosition]}>
        <View style={[styles.icontickSquareParent, styles.groupPosition]}>
          <View style={[styles.icontickSquare, styles.icontickTransform]} />
          <View style={styles.parentPosition}>
            <Text style={[styles.americano, styles.americanoTypo]}>
              Americano
            </Text>
            <Text style={[styles.byn300, styles.bynTypo]}>BYN 50</Text>
            <Text style={styles.singleTypo}>
              single | iced | medium | full ice
            </Text>
            <Text style={styles.x1Typo}>x 1</Text>
          </View>
        </View>
      </View>
      <View style={[styles.myOrderItem, styles.groupItemLayout]} />
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.icontickSquareParent, styles.groupPosition]}>
          <View style={[styles.icontickSquare1, styles.icontickTransform]} />
          <View style={styles.parentPosition}>
            <Text style={[styles.flatWhite, styles.americanoTypo]}>
              Flat White
            </Text>
            <Text style={[styles.byn3001, styles.bynTypo]}>BYN 500</Text>
            <Text style={styles.singleTypo}>
              single | iced | medium | full ice
            </Text>
            <Text style={styles.x1Typo}>x 1</Text>
          </View>
        </View>
      </View>
      <View style={styles.rectangleParent}>
        <View style={[styles.groupChild, styles.groupChildPosition]} />
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <View style={[styles.groupWrapper, styles.groupPosition]}>
          <View style={[styles.icontickSquareParent, styles.groupPosition]}>
            <View style={[styles.icontickSquare2, styles.icontickTransform]} />
            <View style={styles.parentPosition}>
              <Text style={[styles.cappuccino, styles.americanoTypo]}>
                Cappuchino
              </Text>
              <Text style={[styles.byn3002, styles.bynTypo]}>{`BYN
50`}</Text>
              <Text style={styles.singleTypo}>
                single | iced | medium | full ice
              </Text>
              <Text style={styles.x1Typo}>x 1</Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.iconlylightOutlinedelete, styles.iconlylightLayout]}
        contentFit="cover"
        source={require("../../assets/iconlylightoutlinedelete.png")}
      />
      <View style={[styles.iconlylightarrowLeft3, styles.icontickTransform]} />
      <View style={styles.groupParent}>
        <View style={[styles.groupContainer, styles.groupPosition]}>
          <View style={[styles.totalPriceWrapper, styles.groupInnerPosition]}>
            <Text style={[styles.totalPrice, styles.byn900Position]}>
              Total Price
            </Text>
          </View>
          <Text style={[styles.byn900, styles.byn900Position]}>BYN 9.00</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.rectangleGroupPosition]}>
          <View style={[styles.groupInner, styles.icontickTransform]} />
          <Text style={[styles.next, styles.nextTypo]}>Thêm Vào Giỏ Hàng</Text>
        </View>
        <Image
          style={[styles.iconlylightbuy, styles.iconlylightLayout]}
          contentFit="cover"
          source={require("../../assets/iconlylightbuy3.png")}
        />
      </View>
      <Image
        style={[styles.mugBakeryPng168253Icon, styles.groupChildPosition]}
        contentFit="cover"
        source={require("../../assets/mug-bakery-png16825-3.png")}
      />
      <Image
        style={styles.mugbakeryPng168282Icon}
        contentFit="cover"
        source={require("../../assets/mug-bakery-png16828-21.png")}
      />
      <Image
        style={styles.mugbakeryPng168242Icon}
        contentFit="cover"
        source={require("../../assets/mug-bakery-png16824-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupItemLayout: {
    height: 96,
    borderRadius: 15,
  },
  iconlylightLayout: {
    position: "absolute",
    left: 315,

    overflow: "hidden",
  },
  borderPosition: {
    top: "50%",
    position: "absolute",
  },
  wrapper1: {
    left: 24,
    top: 50,
    width: 54,
    height: 64,
    position: "absolute",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  batteryPosition: {
    right: 0,
    top: "50%",
    position: "absolute",
  },
  groupViewPosition: {
    left: "-2.67%",
    right: "7.94%",
    width: "94.73%",
    height: "8.45%",
    position: "absolute",
  },
  groupPosition: {
    left: "0%",
    position: "absolute",
  },
  icontickTransform: {
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    position: "absolute",
  },
  americanoTypo: {
    textAlign: "left",
    fontSize: 12,
    top: "0%",
    fontWeight: "500",
  },
  bynTypo: {
    lineHeight: 20,
    fontSize: 16,
    left: "77.06%",
    width: "22.93%",
    textAlign: "left",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    color: "#001833",
    fontWeight: "500",
    position: "absolute",
  },
  groupChildPosition: {
    left: 34,
    position: "absolute",
  },
  groupInnerPosition: {
    right: "0%",
    top: "0%",
  },
  byn900Position: {
    left: "0.04%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    position: "absolute",
  },
  rectangleGroupPosition: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
  },
  nextTypo: {
    fontWeight: "600",
    left: 20,
  },
  myOrderChild: {
    top: 153,
    width: 327,
    backgroundColor: "#f7f8fb",
    height: 96,
    borderRadius: 15,
    left: 24,
    position: "absolute",
  },
  iconR: {
    top: "7.39%",
    right: "9.33%",
    bottom: "89.66%",
    left: "84.27%",
    display: "none",
    width: "6.4%",
    height: "2.96%",
    maxWidth: "100%",
  },
  time: {
    marginTop: -11.5,
    fontSize: 15,
    color: "#000",
    width: 54,
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
    left: 0,
  },
  cellularConnectionIcon: {
    height: 11,
    width: 17,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  border: {
    marginTop: -5.67,
    right: 2,
    borderRadius: 3,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    height: 11,
  },
  capIcon: {
    marginTop: -2,
    width: 1,
    height: 4,
    opacity: 0.4,
  },
  capacity: {
    marginTop: -3.67,
    right: 4,
    borderRadius: 1,
    backgroundColor: "#000",
    width: 18,
    height: 7,
  },
  battery: {
    marginTop: -6.5,
    width: 24,
    height: 11,
  },
  timeParent: {
    marginTop: -393,
    left: 16,
    width: 348,
    height: 23,
  },
  title: {
    marginTop: -350,
    left: "45%",
    fontSize: 20,
    lineHeight: 24,
    color: "#001833",
    fontWeight: "500",
    letterSpacing: 0,
    textAlign: "center",
    top: "50%",
  },
  iconlylightOutlinearrowL: {
    top: "7.02%",
    right: "86.67%",
    bottom: "90.02%",
    left: "6.93%",
    width: "6.4%",
    height: "2.96%",
    maxWidth: "100%",
  },
  icontickSquare: {
    left: "0.01%",
    bottom: "56.36%",
    right: "94.78%",
    top: "20.03%",
    width: "5.21%",
    height: "23.61%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  americano: {
    width: "48.35%",
    textAlign: "left",
    fontSize: 12,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    left: "0%",
    color: "#001833",
    position: "absolute",
  },
  byn300: {
    top: "11.75%",
    lineHeight: 20,
    fontSize: 16,
    left: "77.06%",
    width: "22.93%",
  },
  singleTypo: {
    color: "#757575",
    fontWeight: "300",
    fontSize: 10,
    top: "32.31%",
    width: "69.46%",
    height: "25.43%",
    textAlign: "left",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    left: "0%",
    position: "absolute",
  },
  x1Typo: {
    color: "rgba(0, 0, 0, 0.57)",
    top: "66.09%",
    width: "31.23%",
    height: "33.91%",
    fontWeight: "600",
    textAlign: "left",
    fontSize: 12,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    left: "0%",
    position: "absolute",
  },
  parentPosition: {
    left: "38.44%",
    bottom: "0.8%",
    width: "61.56%",
    height: "99.2%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    right: "0%",
    top: "0%",
    position: "absolute",
  },
  icontickSquareParent: {
    bottom: "0%",
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
    left: "0%",
  },
  myOrderInner: {
    top: "20.94%",
    bottom: "70.61%",
  },
  myOrderItem: {
    top: 386,
    width: 327,
    backgroundColor: "#f7f8fb",
    height: 96,
    borderRadius: 15,
    left: 24,
    position: "absolute",
  },
  icontickSquare1: {
    left: "0.01%",
    bottom: "56.36%",
    right: "94.78%",
    top: "20.03%",
    width: "5.21%",
    height: "23.61%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  flatWhite: {
    width: "48.35%",
    textAlign: "left",
    fontSize: 12,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    left: "0%",
    color: "#001833",
    position: "absolute",
  },
  byn3001: {
    top: "13.22%",
    lineHeight: 20,
    fontSize: 16,
    left: "77.06%",
    width: "22.93%",
  },
  groupView: {
    top: "49.63%",
    bottom: "41.92%",
  },
  groupChild: {
    top: 1,
    height: 96,
    borderRadius: 15,
    width: 327,
    backgroundColor: "#f7f8fb",
  },
  groupItem: {
    top: 0,
    left: 372,
    backgroundColor: "#ffe5e5",
    width: 48,
    height: 96,
    borderRadius: 15,
    position: "absolute",
  },
  icontickSquare2: {
    left: "0.01%",
    bottom: "56.36%",
    right: "94.78%",
    top: "20.03%",
    width: "5.21%",
    height: "23.61%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
  },
  cappuccino: {
    width: "48.35%",
    textAlign: "left",
    fontSize: 12,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    left: "0%",
    color: "#001833",
    position: "absolute",
  },
  byn3002: {
    top: "11.75%",
    left: 10,
    lineHeight: 20,
    fontSize: 16,
    left: "77.06%",
    width: "22.93%",
  },
  groupWrapper: {
    height: "70.76%",
    width: "84.58%",
    top: "18.56%",
    right: "15.42%",
    bottom: "10.69%",
  },
  rectangleParent: {
    top: 269,
    left: -69,
    width: 420,
    height: 97,
    position: "absolute",
  },
  iconlylightOutlinedelete: {
    top: "37.56%",
    right: "9.6%",
    bottom: "59.48%",
    left: "84%",
    width: "6.4%",
    height: "2.96%",
    maxWidth: "100%",
  },
  iconlylightarrowLeft3: {
    top: 648,
    left: 345,
    height: 17,
    width: 17,
  },
  totalPrice: {
    width: "99.96%",
    color: "rgba(0, 24, 51, 0.22)",
    textAlign: "left",
    fontSize: 12,
    top: "0%",
    fontWeight: "500",
  },
  totalPriceWrapper: {
    height: "41.27%",
    width: "93.03%",
    bottom: "58.73%",
    left: "6.97%",
    position: "absolute",
  },
  byn900: {
    height: "52.06%",
    width: "81.05%",
    top: "47.35%",
    fontSize: 22,
    textAlign: "right",
    fontWeight: "600",
    color: "#001833",
  },
  groupContainer: {
    height: "85.01%",
    width: "41.06%",
    right: "58.94%",
    bottom: "14.99%",
    top: "0%",
    left: "0%",
  },
  groupInner: {
    height: "99.22%",
    width: "99.92%",
    bottom: "0.78%",
    left: "0.08%",
    borderRadius: 30,
    backgroundColor: "#324a59",
    right: "0%",
    top: "0%",
  },
  next: {
    top: 15,
    left: 71,
    fontSize: 14,
    lineHeight: 23,
    color: "#fff",
    textAlign: "center",
    position: "absolute",
  },
  rectangleGroup: {
    width: "51.64%",
    left: "52.56%",
    position: "absolute",
  },
  iconlylightbuy: {
    height: "46%",
    width: "7.64%",
    top: "26.84%",
    right: "34.78%",
    bottom: "27.16%",
    left: "57.58%",
  },
  groupParent: {
    height: "6.42%",
    width: "83.82%",
    top: "89.53%",
    right: "7.38%",
    bottom: "4.04%",
    left: "8.8%",
    position: "absolute",
  },
  mugBakeryPng168253Icon: {
    top: 171,
    width: 82,
    height: 61,
  },
  mugBakeryPng168282Icon: {
    top: 283,
    width: 93,
    height: 68,
    left: 0,
    position: "absolute",
  },
  mugBakeryPng168242Icon: {
    top: 404,
    left: 39,
    width: 72,
    height: 57,
    position: "absolute",
  },
  myOrder: {
    backgroundColor: "#fff",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  arrowLeftIcon: {
    flex: 1,
    height: 10,
  },
});

export default MyOrder;
