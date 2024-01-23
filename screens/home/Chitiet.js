import { StyleSheet, Text, View, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import InputSpinner from "react-native-input-spinner";
import { GET_ALL, GET_IMG } from '../api/apiservice';

// import { TouchableHighlight } from "react-native-gesture-handler";

const Details = ({ route, navigation }) => {
    const { bakery } = route.params;
    // chọn size
    const [selectedIcon, setSelectedIcon] = useState(null);
    const navigateToScreenDetail = (bakery) => {
      if (bakery) {
        const updatedBakery = { ...bakery, total: bakery.price };
        navigation.navigate('PayAndOrder', {
          bakery: updatedBakery,
        });
      }
    };
    const handleIconSelect = (iconName) => {
        setSelectedIcon(iconName);
    };

    const [total, totalPrice] = useState(bakery.price);
    const [quantity, setQuantity] = useState(1);
    return (
        <View style={styles.container}>
            <View style={styles.contentTop}>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('TrangChinh')}>

                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>Order</Text>
                <TouchableOpacity style={styles.footerItem} onPress={() => navigation.navigate('Ma')}>

                    <AntDesign name="shoppingcart" size={24} color="#001833" />
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



                <InputSpinner style={{
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
            {/* <View style={styles.thongtin}>
                    <View style={styles.cach}>
<View style={styles.cach2}>
                            <Text style={styles.text}>Size</Text>
                            <View style={{ flexDirection: 'row', marginLeft: 160 }}>
                                <TouchableOpacity onPress={() => handleIconSelect('icon1')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon1' && styles.selectedIcon]}>
                                        <Image style={{ width: 17, height: 22 }} source={require("../../assets/home/size.png")} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleIconSelect('icon2')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon2' && styles.selectedIcon]}>
                                        <Image style={{ width: 24, height: 31, bottom: 6 }} source={require("../../assets/home/size.png")} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleIconSelect('icon3')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon3' && styles.selectedIcon]}>
                                        <Image style={{ width: 29, height: 38, bottom: 10 }} source={require("../../assets/home/size.png")} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.gach}></View>
                    </View>
                    <View style={styles.cach}>
                        <View style={styles.cach2}>
                            <Text style={styles.text}>Onsite/Takeaway </Text>
                            <View style={{ flexDirection: 'row', marginLeft: 90 }}>
                                <TouchableOpacity onPress={() => handleIconSelect('icon7')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon7' && styles.selectedIcon]}>
                                        <Image style={{ width: 17, height: 22 }} source={require("../../assets/home/tea.png")} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleIconSelect('icon8')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon8' && styles.selectedIcon]}>
                                        <Image style={{ width: 24, height: 31, bottom: 6 }} source={require("../../assets/home/lanh.png")} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.gach}></View>
                    </View>
<View style={styles.cach}>
                        <View style={styles.cach2}>
                            <Text style={styles.text}>Ristretto </Text>
                            <View style={{ flexDirection: 'row', marginLeft: 170 }}>
                                <TouchableOpacity onPress={() => handleIconSelect('icon5')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon5' && styles.selectedIcon]}>
                                        <Image style={{ width: 17, height: 22 }} source={require("../../assets/home/tea.png")} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => handleIconSelect('icon4')}>
                                    <View style={[styles.iconContainer, selectedIcon === 'icon4' && styles.selectedIcon]}>
                                        <Image style={{ width: 24, height: 31, bottom: 6 }} source={require("../../assets/home/lanh.png")} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.gach}></View>
                    </View>
                </View> */}

            <View style={styles.contentBottom}>
                <View style={styles.totalAmount}>
                    <Text style={styles.totalAmount2}>Thành tiền:</Text>
                    <Text style={styles.byn300}>{total}.000.VND</Text>
                </View>
                <TouchableHighlight style={{ marginBottom: 20, borderRadius: 15 }}
                    activeOpacity={0.0}
                    underlayColor="#FFF"
                    onPress={() => {
                        const updatedBakery = { ...bakery, quantity: quantity };
                        navigation.navigate("Oderscreens", {
                            bakery: updatedBakery,
                            quantity: quantity,
                        });
                    }}
                >
                    <View style={styles.rectangView}>
                        <Text style={styles.next}>Next</Text>
                        
                        
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    );
};
export default Details;
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
        marginHorizontal: 30
    },
    thongtin: {
        marginTop:1,
        paddingTop: 1,
        marginHorizontal: 15,
    },
    cach: {
        padding: 5,
    },
    cach2: {
        flexDirection: 'row',
        padding: 5,
        margin: 10,
    },
    text: {
        fontSize: 20,
        marginTop: 20,
        color: '#001833',
    },
    gach: {
        height: 1,
        width: '100%',
backgroundColor: 'gray',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 5,
        
    },
    selectedIcon: {
        backgroundColor: '#FFFF',
    },
    image: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white',
        borderRadius:50,
        marginHorizontal:20,





    },
    content1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 1,
        


    },
    content2: {
        flex: 1
    },
    content3: {
        flex: 1
    },
    content4: {
        flex: 1
    },
    content5: {
        flex: 1
    },
    content6: {
        flex: 1
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
        textAlign: "center"
    },
    content: {
        fontSize: 21,
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        color: "#001833",
        textAlign: "left",
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: -220

    },
    content11: {
        marginTop: 10,

        fontSize: 18,
        letterSpacing: 0,
        lineHeight: 20,
        fontWeight: "500",
        color: "#001833",
        textAlign: "left",
        fontWeight: "bold",
        marginLeft: -230

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
        marginLeft: -230

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
    rectangView2: {
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

        transform: [{
            rotate: "0.14deg",
        },
        ],
    },
    byn300: {
        left: -10,
        fontSize: 16,
        fontWeight: "600",
        fontWeight: "bold",

        color: "#001833",
        textAlign: "right",
        width: 85,
        height: 19,
        transform: [{
            rotate: "0.14deg",
        },
        ],
    },
    next: {
        fontSize: 14,
        lineHeight: 23,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center"
    }
});

// import { View } from "react-native";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   Image,
//   Button,
//   TouchableOpacity,
//   ScrollView,
// } from "react-native";

// const Details = ({ navigation }) => {
//   //tinh so luong
//   const [count, setCount] = useState(0);
//   const incrementCount = () => {
//     setCount(count + 1);
//   };
//   const gia = 10;
//   const tong = count * gia;

//   const decrementCount = () => {
//     if (count > 0) {
//       setCount(count - 1);
//     }
//   };
//   // chọn size
//   const [selectedIcon, setSelectedIcon] = useState(null);
//   const handleIconSelect = (iconName) => {
//     setSelectedIcon(iconName);
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View style={styles.dau}>
//           <Text> Order</Text>
//         </View>
//         <View style={styles.rectangle}>
//           <Image
//             style={styles.img1}
//             source={require("../../assets/1.jpg")}
//           ></Image>
//         </View>
//         <View style={styles.thongtin}>
//           <View style={styles.cach}>
//             <View style={styles.cach2}>
//               <Text style={styles.text}>Cappucino </Text>
//               <View style={styles.diem}>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={decrementCount}
//                 >
//                   <Text style={styles.buttonText}>-</Text>
//                 </TouchableOpacity>
//                 <Text style={styles.countText}>{count}</Text>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={incrementCount}
//                 >
//                   <Text style={styles.buttonText}>+</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View style={styles.gach}></View>
//           </View>
//           <View style={styles.cach}>
//             <View style={styles.cach2}>
//               <Text style={styles.text}>Ristretto </Text>
//               <View style={{ flexDirection: "row", marginLeft: 120 }}>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon1")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon1" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 17, height: 22 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon2")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon2" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 24, height: 31, bottom: 6 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon3")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon3" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 29, height: 38, bottom: 10 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>
//             <View style={styles.gach}></View>
//           </View>
//           <View style={styles.cach}>
//             <View style={styles.cach2}>
//               <Text style={styles.text}>Onsite/Takeaway </Text>
//               <View style={{ flexDirection: "row", marginLeft: 120 }}>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon1")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon1" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 17, height: 22 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon2")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon2" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 24, height: 31, bottom: 6 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <View style={styles.gach}></View>
//           </View>

//           <View style={styles.cach}>
//             <View style={styles.cach2}>
//               <Text style={styles.text}>Size </Text>
//               <View style={{ flexDirection: "row", marginLeft: 120 }}>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon1")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon1" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 17, height: 22 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon2")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon2" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 24, height: 31, bottom: 6 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleIconSelect("icon3")}>
//                   <View
//                     style={[
//                       styles.iconContainer,
//                       selectedIcon === "icon3" && styles.selectedIcon,
//                     ]}
//                   >
//                     <Image
//                       style={{ width: 29, height: 38, bottom: 10 }}
//                       source={require("../../assets/1.jpg")}
//                     ></Image>
//                   </View>
//                 </TouchableOpacity>
//               </View>
//             </View>

//             <View style={styles.gach}></View>
//           </View>
//         </View>
//         <View style={styles.voucher}></View>
//         <View style={styles.tongtien}>
//           <Text style={{ fontSize: 20, marginLeft: 20 }}>Thành Tiền:</Text>
//           <Text style={{ fontSize: 20, marginLeft: 200 }}>{tong} VND.</Text>
//         </View>
//         <View style={styles.next}></View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "pink",
//   },
//   dau: {
//     marginTop: 30,
//     padding: 20,
//     alignItems: "center",
//   },
//   rectangle: {
//     alignItems: "center",
//     margin: 15,
//     width: 380,
//     height: 164,
//     backgroundColor: "#FFFFFF",
//     borderRadius: 20,
//   },
//   img1: {
//     height: 121,
//     width: 152,
//     margin: 20,
//   },

//   thongtin: {
//     padding: 10,
//     marginHorizontal: 15,
//     backgroundColor: "pink",
//   },
//   cach: {
//     padding: 5,
//   },
//   cach2: {
//     flexDirection: "row",
//     padding: 5,
//     margin: 10,
//   },
//   text: {
//     fontSize: 20,
//     marginTop: 20,
//   },
//   gach: {
//     height: 1, // Độ dày của đường thẳng
//     width: "100%", // Độ rộng của đường thẳng
//     backgroundColor: "gray", // Màu sắc của đường thẳng
//   },
//   countText: {
//     fontSize: 20,
//     padding: 5,
//   },
//   diem: {
//     marginLeft: 120,
//     backgroundColor: "pink",
//     flexDirection: "row",
//     marginTop: 10,
//     borderRadius: 10,
//   },
//   button: {
//     backgroundColor: "pink",
//     padding: 10,
//     borderRadius: 5,
//     marginHorizontal: 5,
//   },
//   buttonText: {
//     fontSize: 18,
//   },
//   voucher: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: "red",
//     width: "95%",
//     height: 50,
//     borderRadius: 20,
//   },
//   next: {
//     padding: 10,
//     margin: 10,
//     backgroundColor: "red",
//     width: "95%",
//     height: 50,
//     borderRadius: 20,
//   },
//   tongtien: {
//     flexDirection: "row",
//   },
//   //chọn size
//   iconContainer: {
//     padding: 10,
//     borderRadius: 5,
//     backgroundColor: "pink",
//   },
//   selectedIcon: {
//     backgroundColor: "#FFFF", // Màu sắc khi được chọn
//   },
// });

// export default Details;
