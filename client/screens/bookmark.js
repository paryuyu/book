import { useEffect } from "react";
import { Text } from "react-native";
import BookmarkAPI from "../service/bookmark/bookmarkAPI";
function Bookmark() {
    //find 해오기
    const serverIp = "192.168.4.25"
    const bookmarkAPI = new BookmarkAPI(`http://${serverIp}:8080`)

    useEffect(()=>{
        bookmarkAPI.bookmarkFind()
        .then(rc => {
            console.log(rc,"find")
        })
    },[])
    return ( <Text>qnrakzm</Text> );
}

export default Bookmark;