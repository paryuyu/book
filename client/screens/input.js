import { View, Text, TextInput, DatePickerIOSBase } from "react-native";
import { Entypo } from '@expo/vector-icons';
import { useState } from "react";
function InputInfo() {
    const [mood, setMood] = useState("")
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

        <TextInput placeholder="제목"
            onChangeText={titleChange} />
        <TextInput placeholder="작가"
            onChangeText={authorChange} />
        <TextInput placeholder="재독가능성"

            onChangeText={reReadChange} />

        <TextInput placeholder="Memo"
            onChangeText={memoChange} />


        <Entypo name="emoji-happy" size={24} color="grey" onPress={() => { setMood("good") }} />
        <Entypo name="emoji-sad" size={24} color="grey" onPress={() => { setMood("bad") }} />
        <Entypo name="emoji-neutral" size={24} color="grey" onPress={() => { setMood("soso") }} />
    </View>);
}

export default InputInfo;