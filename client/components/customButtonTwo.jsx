import { View,Text,StyleSheet, TouchableOpacityBase, TouchableHighlight } from "react-native";


export default function CustomButtonTwo({children}) {
    return (<View style={styles.box}> <Text style={styles.text}>{children}</Text></View> );
}


const styles = StyleSheet.create({
    box:{
        backgroundColor:"#808080",
        padding:12,
        borderRadius:16,
        marginTop:10
    },
    text:{
    color:"#f7f7f7",
    textAlign:"center",
    fontWeight:"bold",
    fontSize:15
    }
});