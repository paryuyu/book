import { View, Text, TextInput, DatePickerIOSBase, Button, TouchableOpacity, DatePickerIOSComponent } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
import { StyleSheet } from "react-native";
import CustomButtonTwo from "../components/customButtonTwo";
function InputInfo() {
    const [mood, setMood] = useState()
    const titleChange = () => {

    };

    const authorChange = () => {

    };


    const reReadChange = () => {
        //아이콘?
        //뭘로 표시하면 좋을까
        //별점 대신할...
    };

    const memoChange = () => {

    };





    return (<View>
        <View style={styles.textSchBox}>
            <View style={styles.textInputBox}>
                <TextInput
                    style={styles.title}
                    placeholder="제목"
                    onChangeText={titleChange} />

                <TextInput
                    style={styles.author}
                    placeholder="작가"
                    onChangeText={authorChange} />
            </View>


            <TouchableOpacity>
                <View style={styles.schButton}><Text style={styles.buttonText}>검색</Text></View>
            </TouchableOpacity>

        </View>
        <Text style={styles.moodTitle}>책 정보가 기억이 나지 않으신다면 검색기능을 이용해보세요!</Text>

        <TextInput
            style={styles.memo}
            multiline={true}
            placeholder="Memo"
            onChangeText={memoChange} />


        <Text style={styles.moodTitle}>책에 대한 만족도는 어느 정도 입니까?</Text>

        <View style={styles.moodBox}>
            <Entypo style={styles.icons} name="emoji-happy" color={mood === "good" ? "gold" : "#ddd"} size={30} onPress={() => { setMood("good") }} />
            <Entypo style={styles.icons} name="emoji-sad" size={30} color={mood === "bad" ? "gold" : "#ddd"} onPress={() => { setMood("bad") }} />
            <Entypo style={styles.icons} name="emoji-neutral" size={30} onPress={() => { setMood("soso") }} color={mood === "soso" ? "gold" : "#ddd"} />
        </View>


        {/**등록버튼*/}
        <TouchableOpacity>
                <View style={styles.regButton}><Text style={styles.regButtonText}>등록</Text></View>
            </TouchableOpacity>
    </View>);
}

export default InputInfo;

const styles = StyleSheet.create({
    moodBox: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        marginHorizontal: 30,
        marginVertical: 10,
        paddingVertical: 20,
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 10,

    },
    icons: {
        // marginHorizontal:20

    },
    moodTitle: {
        fontSize: 13,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'grey',

    },
    memo: {
        height: 300,
        backgroundColor: 'white',
        margin: 10,
        marginHorizontal: 30,
        borderRadius: 20,
        padding: 20,
        fontSize: 15,
        borderWidth: 2,
        borderColor: '#ddd',

    },
    title: {

        backgroundColor:'white',
        padding:10,
        borderRadius:10


    },
    author: {
       
         backgroundColor:'white',
        padding:10,
        borderRadius:10,
        marginTop:10
        
    },
    textSchBox:{
        flexDirection:'row',
        borderRadius:10,
        marginHorizontal:30,
        marginVertical:10,
        
    },
    textInputBox:{
        flex:2,
        justifyContent:'center',
        marginRight:10
    },
    schButton:{
        backgroundColor:'gold',
        width:'100%',
        flex:1,
        justifyContent:'center',
        padding:10,
        borderRadius:8
    },
    buttonText:{
        color:'grey',
        fontWeight:'bold'
    },
    regButton:{
        backgroundColor:'gold',
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderRadius:8
    },
    regButtonText:{ 
        color:'grey',
    fontWeight:'bold',
    justifyContent:'center',
    height:20

    }
});