import { useIsFocused } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import BookmarkAPI from "../service/bookmark/bookmarkAPI";
import Bookmarkdata from "../components/findDataRst";
import { BookmarkContext } from "../context/bookmarkContext";

function Bookmark() {
    const [findData, setFindData] = useState([]);
    //find 해오기
    const serverIp = "192.168.4.25"
    const bookmarkAPI = new BookmarkAPI(`http://${serverIp}:8080`)
    let focus = useIsFocused();
    let ctx = useContext(BookmarkContext);

    // useEffect(() => {
    //     bookmarkAPI.bookmarkFind()
    //         .then(rc => {
    //             console.log(rc.result)
    //             setFindData(rc.result)
    //         })
    // }, [ctx.bookmarkScr, focus])



    return (<View style={{ flex: 1 }}>
        <FlatList
            data={findData}
            keyExtractor={(item) => item.isbn}
            style={{ flex: 1 }}
            renderItem={({ item, index }) => {
                return <Bookmarkdata item={item} />
            }}
        />

    </View>);
}

export default Bookmark;