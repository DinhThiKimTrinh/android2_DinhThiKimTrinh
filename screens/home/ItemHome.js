import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

const ItemHome = ({imageSource,textContent, textPrice}) => {
  // const [bakeryData, setBakeryData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
    // Use the GET_ALL function to fetch data from your API
  //   GET_ALL("products")
  //     .then((response) => {
  //       const responseData = response.data;
  //       if (responseData && Array.isArray(responseData.content)) {
  //         setbakeryData(responseData.content); // Update the state with the "content" array
  //       } else {
  //         console.error(
  //           "Data received from the API is not in a supported format."
  //         );
  //       }
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //       setIsLoading(false);
  //     });
  // }, []);

  return (
    <SafeAreaView>
      {/* <ScrollView style={{ marginBottom: "auto" }}>
        <View style={styles.Content}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : (
            bakeryData.map((bakery, index) => (
              <Item
                key={index}
                imageSource={GET_IMG("products", bakery.photo)}
                textContent={bakery.title}
              />
            ))
          )}
        </View>
      </ScrollView> */}
      <View style={styles.menuItem}>
        <Image
          style={styles.menuImage}Home
          resizeMode="contain"
          source={{
            uri: imageSource
          }}
        />
        <Text style={styles.menuTitle}>{textContent}</Text>
        {/* <Text style={styles.menuTitle}>{textPrice}đ</Text> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Define your styles here
  menuItem: {
    marginTop:"10%",
    marginBottom: 10,
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    overflow: "hidden",
    marginLeft:4,
    width:"95.6%"
  },
  menuImage: {
    width: 130,
    height: 110,
    marginHorizontal:"auto",
    marginLeft:"1.5%",
  },
  menuTitle: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    // fontWeight: "bold",
    color:"#220000"
  },
  menuPrice: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color:"#220000"
  },
  menuDescription: {
    marginTop: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },

});

export default ItemHome;