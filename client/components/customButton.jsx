import { View,Text,StyleSheet } from "react-native";


export default function CustomButtonOne({children}) {
    return ( <View style={styles.box}><Text style={styles.text}>{children}</Text></View> );
}


const styles = StyleSheet.create({
    box:{
        backgroundColor:"gold",
        padding:12,
        borderRadius:16,
        marginTop:10
    },
    text:{
    color:"#808080",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:15
    }
});