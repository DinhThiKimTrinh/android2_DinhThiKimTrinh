// import * as React from "react";
// import {
//   Text,
//   StyleSheet,
//   View,
//   TextInput,
//   TouchableHighlight,
//   Image,
//   TouchableOpacity,
// } from "react-native";

// import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

// const SignUp = ({ navigation }) => {
//   const [username, setName] = React.useState("");
//   const [useremail, setEmail] = React.useState("");
//   const [password, setPassword] = React.useState("");
//   const [confirmpassword, setConfirmPassword] = React.useState("");

//   const handleLogin = () => {
//     // Xử lý đăng ký tại đây
//     console.log("UserName:", username);
//     console.log("Useremail:", useremail);
//     console.log("Password:", password);
//     console.log("ConfirmPassword:", confirmpassword);
//     if (password !== confirmpassword) {
//       alert("Mật khẩu sai.");
//     } else {
//       const data = {
//         name: username,
//         email: useremail,
//         password: password,
//       };

//       fetch('http://192.168.60.200:8080/api/users', {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       })
//         .then((response) => {
//           if (response.status >= 200 && response.status < 300) {
//             return response.json();
//           } else {
//             throw new Error(
//               "Lỗitừ máy chủ." +
//                 response.status
//             );
//           }
//         })
//         .then((data) => {
//           alert("Đăng ký thành công");
//           navigation.navigate("SignIn");
//         })
//         .catch((error) => {
//           console.error("Lỗi gọi API:", error);
//           alert("Đăng ký không thành công. Vui lòng thử lại.");
//         });
//     }
//   };
//   return (
//     <View style={styles.signup}>
//       <View style={styles.icon}>
//         <View style={styles.iconChild} />
//         <Image style={styles.iconItem} contentFit="cover" />
//       </View>
//       {/* <Text style={[styles.welcomeToECom, styles.letsMakeYourTypo]}>
//         Hello
//       </Text> */}
//       <Text style={[styles.letsMakeYour, styles.letsMakeYourTypo]}>
//         Tạo tài khoản nào.
//       </Text>
//       <View style={styles.orLine}>
//         <Text style={[styles.or, styles.amTypo]}>OR</Text>
//         <View style={[styles.orLineChild, styles.linePosition]} />
//         <View style={[styles.orLineItem, styles.linePosition]} />
//       </View>
//       <Text style={[styles.alreadyHaveAnContainer, styles.nameTypo]}>
//         <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
//         <Text style={styles.logIn}> Log In.</Text>
//       </Text>
//       <TouchableHighlight onPress={handleLogin}>
//         <View style={[styles.rectangleParent, styles.groupChildLayout]}>
//           <View style={[styles.groupChild, styles.groupChildLayout]} />

//           <TouchableOpacity onPress={handleLogin}>
//           <Text style={styles.login}>Đăng kí</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableHighlight>
//       <View style={[styles.fullNameForm, styles.formLayout]}>
//         <Image
//           style={[styles.systemIcon24pxuser, styles.iconLayout]}
//           contentFit="cover"
//         />
//         <Text style={[styles.name, styles.nameTypo]}></Text>
//         <TextInput
//           style={[styles.Name]}
//           placeholder="Name"
//           value={username}
//           onChangeText={(text) => setName(text)}
//         />
//       </View>
//       <View style={[styles.emailForm, styles.formLayout]}>
//         <Image
//           style={[styles.systemIcon24pxuser, styles.iconLayout]}
//           contentFit="cover"
//         />
//         <Text style={[styles.name, styles.nameTypo]}></Text>
//         <TextInput
//           style={[styles.Emai]}
//           placeholder="Email"
//           value={useremail}
//           onChangeText={(text) => setEmail(text)}
//         />
//       </View>
//       <View style={[styles.passwordForm, styles.formLayout]}>
//         <Image
//           style={[styles.systemIcon24pxuser, styles.iconLayout]}
//           contentFit="cover"
//         />
//         <Text style={[styles.name, styles.nameTypo]}></Text>
//         <TextInput
//           style={[styles.Pass]}
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//         />
//       </View>
//       <View style={[styles.passwordAgainFrom, styles.formLayout]}>
//         <Image
//           style={[styles.systemIcon24pxuser, styles.iconLayout]}
//           contentFit="cover"
//         />
//         <Text style={[styles.name, styles.nameTypo]}></Text>
//         <TextInput
//           style={[styles.confPassword]}
//           placeholder="Confirm Password"
//           value={confirmpassword}
//           secureTextEntry
//           onChangeText={(text) => setConfirmPassword(text)}
//         />
//       </View>
//       <View style={styles.image13Parent}>
//         <Image
//           style={[styles.image13Icon, styles.iconPosition]}
//           contentFit="cover"
//         />
//         <Image
//           style={[styles.groupItem, styles.iconPosition]}
//           contentFit="cover"
//         />
//         <Text style={styles.loginUsing}>Đăng nhập</Text>
//         <Image
//           style={[styles.image17Icon, styles.iconPosition]}
//           contentFit="cover"
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   amTypo: {
//     fontSize: FontSize.size_sm,
//     textAlign: "left",
//     position: "absolute",
//   },
//   Pass: {
//     top: 10,
//     left: 50,
//     fontSize: 17,
//   },
//   confPassword: {
//     top: 10,
//     left: 50,
//     fontSize: 17,
//   },
//   Emai: {
//     top: 10,
//     left: 50,
//     fontSize: 17,
//   },
//   Name: {
//     top: 10,
//     left: 50,
//     fontSize: 17,
//   },
//   iconLayout: {
//     width: 24,
//     height: 24,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   letsMakeYourTypo: {
//     // right:"-5",
//     letterSpacing: 2,
//     textAlign: "center",
//     fontSize: FontSize.size_lg,
//     position: "absolute",
//   },
//   linePosition: {
//     height: 1,
//     borderTopWidth: 1,
//     borderColor: Color.colorGainsboro,
//     borderStyle: "solid",
//     top: 10,
//     position: "absolute",
//   },
//   nameTypo: {
//     fontSize: FontSize.size_xs,
//     letterSpacing: 1,
//     position: "absolute",
//   },
//   formLayout: {
//     height: 48,
//     borderWidth: 1,
//     borderColor: Color.colorLavender,
//     left: 10,
//     borderRadius: Border.br_8xs,
//     borderStyle: "solid",
//     width: 343,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   iconPosition: {
//     height: 35,
//     top: 38,
//     position: "absolute",
//   },
//   am: {
//     top: 4,
//     color: Color.colorBlack,
//     textAlign: "left",
//     left: 0,
//   },
//   antDesignwifiOutlinedIcon: {
//     left: 315,
//     top: 0,
//   },
//   bibatteryIcon: {
//     left: 349,
//     top: 0,
//   },
//   amParent: {
//     top: 7,
//     left: 20,
//     width: 373,
//     height: 24,
//     position: "absolute",
//   },
//   iphone11ProMax32Inner: {
//     width: 414,
//     height: 38,
//     left: 0,
//     top: 0,
//     position: "absolute",
//     overflow: "hidden",
//     backgroundColor: Color.backgroundWhite,
//   },
//   iconItem: {
//     height: "100%",
//     width: "100%",
//     top: "27.78%",
//     right: "27.78%",
//     bottom: "27.78%",
//     left: "10.78%",
//     maxWidth: "100%",
//     maxHeight: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   icon: {
//     top: 97,
//     left: 171,
//     width: 72,
//     height: 72,
//     position: "absolute",
//   },
//   welcomeToECom: {
//     top: 195,
//     left: 95,
//     lineHeight: 27,
//     color: "#324a59",
//     textAlign: "center",
//     fontWeight: "700",
//   },
//   letsMakeYour: {
//     top: 222,
//     left: 95,
//     lineHeight: 32,
//     color: Color.colorGray,
//     textAlign: "center",
//   },
//   or: {
//     left: 162,
//     letterSpacing: 0.1,
//     lineHeight: 21,
//     fontFamily: FontFamily.poppinsBold,
//     color: Color.colorGray,
//     fontWeight: "700",
//     textAlign: "left",
//     top: 0,
//   },
//   orLineChild: {
//     width: 135,
//     left: 0,
//   },
//   orLineItem: {
//     left: 206,
//     width: 138,
//   },
//   orLine: {
//     top: 600,
//     left: 10,
//     height: 21,
//     width: 343,
//     position: "absolute",
//   },
//   alreadyHaveAn: {
//     color: Color.colorGray,
//   },
//   logIn: {
//     color: "#324a59",
//     fontWeight: "700",
//   },
//   alreadyHaveAnContainer: {
//     top: 690,
//     left: 95,
//     lineHeight: 18,
//     textAlign: "center",
//   },
//   groupChild: {
//     borderRadius: Border.br_8xs,
//     height: 52,
//     width: 345,
//     backgroundColor: "grey",
//     left: 0,
//     top: 0,
//     position: "absolute",
//   },
//   login: {
//     top: 14,
//     left: 150,
//     color: 'black',
//     fontSize: FontSize.size_lg,
//     textAlign: "left",
//     position: "absolute",
//   },
//   rectangleParent: {
//     top: 516,
//     left: 11,
//     height: 52,
//     width: 345,
//     position: "absolute",
//   },
//   systemIcon24pxuser: {
//     top: 12,
//     left: 16,
//   },
//   name: {
//     top: 13,
//     left: 50,
//     lineHeight: 22,
//     color: Color.neutralGrey,
//     width: 277,
//     textAlign: "left",
//   },
//   fullNameForm: {
//     top: 282,
//     left:-20,
//     backgroundColor: Color.backgroundWhite,
//   },
//   emailForm: {
//     top: 336,
//     backgroundColor: Color.backgroundWhite,
//   },
//   passwordForm: {
//     top: 394,
//   },
//   passwordAgainFrom: {
//     top: 850,
//   },
//   image13Icon: {
//     left: 72,
//     width: 35,
//     height: 35,
//     top: 38,
//   },
//   groupItem: {
//     left: 150,
//     width: 35,
//     height: 35,
//     top: 38,
//   },
//   loginUsing: {
//     left: 34,
//     fontSize: 15,
//     color: "#323232",
//     textAlign: "left",
//     top: 0,
//     position: "absolute",
//   },
//   image17Icon: {
//     width: 29,
//     height: 35,
//     top: 38,
//     left: 0,
//   },
//   image13Parent: {
//     top: 646,
//     left: 114,
//     width: 185,
//     height: 73,
//     position: "absolute",
//   },
//   signup: {
//     backgroundColor: 'pink',
//     flex: 1,
//     height: 896,
//     overflow: "hidden",
//     width: "100%",
//   },
// });

// export default SignUp;
import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  TouchableOpacity,
} from "react-native";

import { Border, FontSize, Color, FontFamily } from "../../GlobalStyles";

const SignUp = ({ navigation }) => {
  const [username, setName] = React.useState("");
  const [useremail, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmPassword] = React.useState("");

  const handleLogin = () => {
    // Xử lý đăng ký tại đây
    console.log("UserName:", username);
    console.log("Useremail:", useremail);
    console.log("Password:", password);
    console.log("ConfirmPassword:", confirmpassword);
    if (password !== confirmpassword) {
      alert("Mật khẩu và mật khẩu xác nhận không khớp. Vui lòng nhập lại.");
    } else {
      const data = {
        name: username,
        email: useremail,
        password: password,
      };

      fetch("http://192.168.11.244:8080/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json();
          } else {
            throw new Error(
              "Lỗi không mong muốn từ máy chủ. Mã trạng thái: " +
              response.status
            );
          }
        })
        .then((data) => {
          alert("Đăng ký thành công");
          navigation.navigate("SignIn");
        })
        .catch((error) => {
          console.error("Lỗi cuộc gọi API:", error);
          alert("Đăng ký thất bại. Vui lòng thử lại.");
        });
    }
  };
  return (
    <View style={styles.signup}>
      <View style={styles.icon}>
        <View style={styles.iconChild} />
        <Image style={styles.iconItem} contentFit="cover" />
      </View>
      <Text style={[styles.welcomeToECom, styles.letsMakeYourTypo]}>
      Wellcome
      </Text>
      {/* <Text style={[styles.letsMakeYour, styles.letsMakeYourTypo]}>
      đến với cửa hàng
      </Text> */}
      
      <Text style={[styles.alreadyHaveAnContainer, styles.nameTypo]}>
        <Text style={styles.alreadyHaveAn}>Already have an account?</Text>
        <Text style={styles.logIn}> Log In.</Text>
      </Text>
      <TouchableHighlight onPress={handleLogin}>
        <View style={[styles.rectangleParent, styles.groupChildLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />

          <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.login}>Đăng ký</Text>
          </TouchableOpacity>
        </View>
      </TouchableHighlight>
      <View style={[styles.fullNameForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxuser, styles.iconLayout]}
          contentFit="cover"
        />
        <Text style={[styles.name, styles.nameTypo]}></Text>
        <TextInput
          style={[styles.Name]}
          placeholder="Tên tài khoản"
          value={username}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={[styles.emailForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxuser, styles.iconLayout]}
          contentFit="cover"
        />
        <Text style={[styles.name, styles.nameTypo]}></Text>
        <TextInput
          style={[styles.Emai]}
          placeholder="Email"
          value={useremail}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={[styles.passwordForm, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxuser, styles.iconLayout]}
          contentFit="cover"
        />
        <Text style={[styles.name, styles.nameTypo]}></Text>
        <TextInput
          style={[styles.Pass]}
          placeholder="Nhập mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={[styles.passwordAgainFrom, styles.formLayout]}>
        <Image
          style={[styles.systemIcon24pxuser, styles.iconLayout]}
          contentFit="cover"
        />
        <Text style={[styles.name, styles.nameTypo]}></Text>
        <TextInput
          style={[styles.confPassword]}
          placeholder="Nhập lại mật khẩu"
          value={confirmpassword}
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  amTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  Pass: {
    top: 10,
    left: 50,
    fontSize: 17,
  },
  confPassword: {
    top: 10,
    left: 50,
    fontSize: 17,
  },
  Emai: {
    top: 10,
    left: 50,
    fontSize: 17,
  },
  Name: {
    top: 10,
    left: 50,
    fontSize: 17,
  },
  iconLayout: {
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  letsMakeYourTypo: {
    letterSpacing: 1,
    textAlign: "center",
    fontSize: FontSize.size_lg,
    position: "absolute",
    fontSize: 30,
  },
  linePosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorGainsboro,
    borderStyle: "solid",
    top: 10,
    position: "absolute",
  },
  nameTypo: {
    fontSize: FontSize.size_xs,
    letterSpacing: 1,
    position: "absolute",
  },
  formLayout: {
    height: 48,
    borderWidth: 1,
    borderColor: Color.colorLavender,
    left: 10,
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    width: 343,
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    height: 35,
    top: 38,
    position: "absolute",
  },
  am: {
    top: 4,
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
  },
  antDesignwifiOutlinedIcon: {
    left: 315,
    top: 0,
  },
  bibatteryIcon: {
    left: 349,
    top: 0,
  },
  amParent: {
    top: 7,
    left: 20,
    width: 373,
    height: 24,
    position: "absolute",
  },
  iphone11ProMax32Inner: {
    width: 414,
    height: 38,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.backgroundWhite,
  },
  iconItem: {
    height: "100%",
    width: "100%",
    top: "27.78%",
    right: "27.78%",
    bottom: "27.78%",
    left: "10.78%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    top: 97,
    left: 171,
    width: 72,
    height: 72,
    position: "absolute",
  },
  welcomeToECom: {
    top: 130,
    left: 116,
    lineHeight: 27,
    color: "black",
    textAlign: "center",
    fontWeight: "900",
  },
  letsMakeYour: {
    top: 222,
    left: 95,
    lineHeight: 32,
    color: Color.colorGray,
    textAlign: "center",
  },
  or: {
    left: 162,
    letterSpacing: 0.1,
    lineHeight: 21,
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray,
    fontWeight: "500",
    textAlign: "left",
    top: 0,
  },
  orLineChild: {
    width: 135,
    left: 0,
  },
  orLineItem: {
    left: 206,
    width: 138,
  },
  orLine: {
    top: 600,
    left: 10,
    height: 21,
    width: 343,
    position: "absolute",
  },
  alreadyHaveAn: {
    color: Color.colorGray,
  },
  logIn: {
    color: "#324a59",
    fontWeight: "700",
  },
  alreadyHaveAnContainer: {
    top: 690,
    left: 95,
    lineHeight: 18,
    textAlign: "center",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    height: 52,
    width: 345,
    backgroundColor: "#324a59",
    left: 0,
    top: 0,
    position: "absolute",
  },
  login: {
    top: 14,
    left: 130,
    color: 'white',
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  rectangleParent: {
    top: 516,
    left: 11,
    height: 52,
    width: 345,
    position: "absolute",
  },
  systemIcon24pxuser: {
    top: 12,
    left: 16,
  },
  name: {
    top: 13,
    left: 50,
    lineHeight: 22,
    color: Color.neutralGrey,
    width: 277,
    textAlign: "left",
  },
  fullNameForm: {
    top: 282,
    left: -20,
    backgroundColor: 'white',
  },
  emailForm: {
    top: 336,
    backgroundColor: 'white',
  },
  passwordForm: {
    top: 394,
    backgroundColor: 'white',
  },
  passwordAgainFrom: {
    top: 450,
    backgroundColor: 'white',
  },
  image13Icon: {
    left: 72,
    width: 35,
    height: 35,
    top: 38,
  },
  groupItem: {
    left: 150,
    width: 35,
    height: 35,
    top: 38,
  },
  loginUsing: {
    left: 34,
    fontSize: 15,
    color: "#323232",
    textAlign: "left",
    top: 0,
    position: "absolute",
  },
  image17Icon: {
    width: 29,
    height: 35,
    top: 38,
    left: 0,
  },
  image13Parent: {
    top: 646,
    left: 114,
    width: 185,
    height: 73,
    position: "absolute",
  },
  signup: {
    flex: 1,
    height: 896,
    overflow: "hidden",
    width: "100%",
    backgroundColor: 'pink',
  },
});

export default SignUp;
