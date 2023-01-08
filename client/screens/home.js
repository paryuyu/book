import { Text, View, Image, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { Entypo } from '@expo/vector-icons';
function Home() {

//폰트 적용시키기
//구조바꾸기




    return (<View style={styles.homeBox}>
          <Text style={styles.start}>START</Text>
        <TouchableOpacity>
    
            <View style={styles.write}><Entypo name="pencil" size={30} color="white" /></View>

        </TouchableOpacity>

    </View>);
}
//rnss
const styles = StyleSheet.create({
    login:{
        marginBottom:50
    },
    write: {
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 10,
        padding: 6
    },
    homeBox: { flex: 1, backgroundColor: "#333", justifyContent: 'center', alignItems: 'center' },
    start:{
        marginBottom:20,
        fontSize:40,
        color:'#fff'
    }
});
export default Home;