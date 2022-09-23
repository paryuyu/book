import { Text,View ,Image,StyleSheet} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from "react";
import BookmarkAPI from "../service/bookmark/bookmarkAPI";
  
function Rst({item}) {
   const [bookmark, setBookmark ] = useState([]);
   const [bookChk, setBookChk] = useState(false);


    const pressHandle = () => {
        //북마크의 현재 불리언 값의 반댓값으로 설정해주기.
        setBookChk((current) => !current)
        setBookmark(item)
    }
console.log(bookmark.title,"!!")
    //북마크하면 fetch로 데이터베이스에 저장하기.
    //서버 아이피 보내주기
    const serverIp = "192.168.4.25"
    const bookmarkAPI = new BookmarkAPI(`http://${serverIp}:8080`)
    
    useEffect(()=>{
        let createdAt = new Date();

        if(bookChk){
            bookmarkAPI.bookmark(bookmark.title,bookmark.author,bookmark.publisher,bookmark.pubDate,bookmark.cover, createdAt , bookmark.isbn )
            .then(rc => {
                console.log(rc,"client response")
            })

        }
    },[bookChk])

    
    useEffect(()=>{
        if(!bookChk){
            bookmarkAPI.delbookmark(bookmark.isbn)
            .then(rc => {
                console.log(rc,"client response2")
            })

        }
    },[!bookChk])

    
    console.log(bookmark,"북마크")

return ( <View style={styles.outline}>

<Ionicons name={ bookChk? "md-bookmarks" : "md-bookmarks-outline"} size={24} color="black" style={styles.bookmarkicon} onPress={pressHandle}/>

<View style={{flexDirection:"row", flex: 1, }}>

<View style={{flex:1}}>
<Text style={styles.bookTitle}>{item.title}</Text>
<Text>{item.description}</Text>
<Text>{item.startIndex}</Text>
</View>
<Image source={{uri:item.cover}} style={styles.img}/>
</View>
    </View> );
}

const styles = StyleSheet.create({
    bookmarkicon:{
        textAlign:"right",
        marginHorizontal:10,
        marginBottom:10

    },
    img:{height:140,width:100, marginLeft:10},
    outline:{
        flex:1,
        borderWidth:2,
        borderColor:"#C0C0C0",
        borderRadius:20,
        backgroundColor:"white",
        padding:15,
        marginBottom:10
    },
    bookTitle:{
        fontSize:20,
        marginBottom:8
      
    }
});


export default Rst;