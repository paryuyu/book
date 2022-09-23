import { Text, View, Image, StyleSheet, ImageBackground } from "react-native";

function Home() {
    return (<View style={{ flex: 1 , backgroundColor:"white" }}><ImageBackground source={require("../assets/img/home.png")} style={styles.homeImg} /></View>);
}
//rnss
const styles = StyleSheet.create({
    homeImg: {
       // flex:1,
       // justifyContent:"center",
      //  alignItems:"center",
      //  alignContent:"center",
        height:300,
        marginVertical:150

    }
});
export default Home;