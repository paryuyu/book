import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useContext, useEffect, useState } from "react";
import BookmarkAPI from "../service/bookmark/bookmarkAPI";
import CustomButtonOne from "./customButton";
import { BookmarkContext } from "../context/bookmarkContext";

//북마크 추가해서 추가삭제기능 만들기
//디테일 추가하기
//description이 없네용....북마크 넣을때 넣어주기

export default function Bookmarkdata({ item }) {
    const [bookChk, setBookChk] = useState(true);
    const serverIp = "192.168.4.25"
    const bookmarkAPI = new BookmarkAPI(`http://${serverIp}:8080`)
    let ctx = useContext(BookmarkContext);
    async function delBook(){
        

        try{
           let del = await bookmarkAPI.delbookmark(item.isbn);
            console.log(del,"[북마크]클라이언트")

        }catch(err){
            console.log(err)}
       
    };

    const pressHandle= ()=>{
        Alert.alert(  "북마크",
        "북마크에서 제거하시겠습니까?",
        [
          {
            text: "Cancel",
            onPress: () => console.log("삭제취소"),
            style: "cancel"
          },
          { text: "OK", onPress: () =>  { 
            ctx.setBookmarkScr(Date.now());
            return delBook()} }
        ])
    }



    return (
    <View style={styles.outline}>
       
        <View style={{ flexDirection: "row", flex: 1, }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.startIndex}</Text>
            </View>
            <Image source={{ uri: item.cover }} style={styles.img} />
        </View>
        <TouchableOpacity  style={styles.button} onPress={pressHandle}>
         <CustomButtonOne >북마크 제거하기</CustomButtonOne>
        </TouchableOpacity>
    </View>)
}


const styles = StyleSheet.create({

    img: { height: 140, width: 100, marginLeft: 10 },
    outline: {
        marginTop:10,
        marginHorizontal:10,
        flex: 1,
        borderWidth: 2,
        borderColor: "#C0C0C0",
        borderRadius: 20,
        backgroundColor: "white",
        padding: 15,
        marginBottom: 10
    },
    bookTitle: {
        fontSize: 20,
        marginBottom: 8

    },
    bookmarkicon:{
        textAlign:"right",
        marginHorizontal:10,
        marginBottom:10

    },
    button:{
        flex:1,
        justifyContent:"flex-end",
        justifyContent:"center"
    }
});

