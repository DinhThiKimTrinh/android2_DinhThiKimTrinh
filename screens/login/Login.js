// import React, { useState } from 'react';
// import { StatusBar, Alert } from 'react-native';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Login = () => {
//   const navigation = useNavigation();

//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

//   const defaultUsername = 'Kimtrinh';
//   const defaultPassword = '1234';

//   const handleLogin = () => {
//     if (username === defaultUsername && password === defaultPassword) {
//       navigation.navigate('TrangChu');
//     } else {
//       setShowAlert(true);
//       setUsername('');
//       setPassword('');
//       setTimeout(() => {
//         setShowAlert(false);
//       }, 3000);
//     }
//   };

//   const handleForgotPassword = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const handleRegister = () => {
//     navigation.navigate('Register');
//   };

//   return (
//     <View style={styles.home}>
//       <Text style={styles.title}>My Account</Text>

//       <TextInput
//         style={styles.input}
//         placeholder="Username"
//         onChangeText={(text) => setUsername(text)}
//         value={username}
//       />

//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         onChangeText={(text) => setPassword(text)}
//         value={password}
//         secureTextEntry={true}
//       />

//       <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
//         <Text style={styles.forgotPasswordText}>Quên mật khẩu</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Đăng nhập</Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={styles.button1} onPress={handleRegister}>
//         <Text style={styles.buttonText}>Đăng ký</Text>
//       </TouchableOpacity>
//       {showAlert && (
//         <View style={styles.alertContainer}>
//           <Text style={styles.alertText}>Sai tài khoản hay mật khẩu</Text>
//         </View>
//       )}

//       <StatusBar style="auto" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   home: {
//     flex: 1,
//     backgroundColor: '#d9f3c5',
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   forgotPassword: {
//     width: 150,
//     left: 100,
//   },
//   input: {
//     width: 300,
//     height: 50,
//     padding: 10,
//     marginBottom: 15,
//     backgroundColor: '#EEEEEE',
//     borderWidth: 1.5,
//     borderColor: '#000000',
//     borderRadius: 15,
//   },
//   button: {
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 20,
//     width: 300,
//     height: 50,
//     bottom: -10,
//   },
//   button1: {
//     backgroundColor: 'black',
//     padding: 10,
//     borderRadius: 20,
//     width: 300,
//     height: 50,
//     bottom: -20,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   forgotPasswordText: {
//     color: 'blue',
//   },
//   alertContainer: {
//     backgroundColor: 'red',
//     padding: 10,
//     borderRadius: 10,
//     marginTop: -200,
//   },
//   alertText: {
//     color: '#fff',
//     textAlign: 'center',
//   },
//   statusBar: {
//   },
// });

// export default Login;


import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome, AntDesign, Entypo } from 'react-native-vector-icons';

const Login = ({navigation}) =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = React.useState(null);
  const handleLogin = () => {
      // Kiểm tra tên đăng nhập và mật khẩu trước khi xử lý đăng nhập
      if (username === '' && password === '') {
        // Xử lý đăng nhập thành công
        console.log('Đăng nhập thành công');
        // Điều hướng đến màn hình chính hoặc trang khác tùy theo ứng dụng của bạn
        navigation.navigate('Signln');
      } else {
        // Xử lý đăng nhập thất bại
        setLoginError('Đăng nhập thất bại');
      }
    };
      const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };
  const handleRegister = () => {
    // Navigate to the "Register" screen
    navigation.navigate('Signln');
  };
  

  
  return (
    <View style={styles.home}>
     
 
  {/* <View style={styles.rgt}>
                <Button title="Bạn chưa có tài khoản?"
                        color="#2F80ED"    
                        onPress={() => navigation.navigate('Login')}   
                />
            </View> */}
      {/* <TouchableOpacity style={styles.forgotPassword} onPress={handleForgotPassword}>
      <Text style={styles.forgotPasswordText1}onPress={handleRegister} >Đăng ký </Text>
        <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.button5} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText} >Đăng kí</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('TrangChu')}>
        <Text style={styles.buttonText}>Đăng nhập Bằng Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={() => navigation.navigate('TrangChu')}>
        <Text style={styles.buttonText}>Đăng nhập Bằng Zalo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button4} onPress={() => navigation.navigate('TrangChu')}>
        <Text style={styles.buttonText}>Đăng nhập Bằng Gmail</Text>
      </TouchableOpacity> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  forgotPassword: {
    width: 150,
    left: 100,
    justifyContent: 'center',
  
   
  },
  
  input: {
    width: 300,
    height: 50,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#EEEEEE',
    borderWidth: 1.5,
    borderColor: '#000000',
    borderRadius: 15,
  },
  button: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 20,
    width: 300,
    height: 50,
    bottom: -10,
  },
  button1: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 20,
    width: 300,
    height: 50,
    bottom: -20,
  },
  button5: {
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 20,
    width: 300,
    height: 50,
    bottom: -20,
    top:-5,
  
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  
  },
  bottomRightIcons: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 100,
    right: 10,
    zIndex: 1,
  },
  socialIcon: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#fff',
  },
  forgotPasswordText1:{
    top:7,
    left:-50,
    borderRadius: 20,

  },
  forgotPasswordText:{
    top:-10,
  },
  button2: {
    backgroundColor: 'blue',
    top:40,
    padding: 10,
    borderRadius: 20,
    width: 250,
    height: 40,
    bottom: -10,
  },
  button3: {
    backgroundColor: 'dodgerblue',
    top:50,
    padding: 10,
    borderRadius: 20,
    width: 250,
    height: 40,
    bottom: -10,
  },
  button4: {
    backgroundColor: 'green',
    top:60,
    padding: 10,
    borderRadius: 20,
    width: 250,
    height: 40,
    bottom: -10,
  },
//   rgt:{
//     top:280,
//     right:90,
//     color:"blue",
//     fontWeight: 'bold',
// },
});

export default Login;
