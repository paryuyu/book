import { useEffect, useState } from "react";
import { Text, View, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import CustomButtonOne from "../components/customButton";
import Rst from "../components/searchingRst";
import SearchingAladin from "../service/bookmark/searching";
import BouncyCheckbox from "react-native-bouncy-checkbox";

function Searching({ bookmarkAPI }) {
    const [text, setText] = useState("")
    const [searchText, setSearchText] = useState("")
    const [search, setSearch] = useState([]);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);
    const [keyword, setKeyword] = useState("Keyword");
    const [isChecked, setisChecked] = useState();
    const [rstVal, setRstVal] = useState(false);
    const changeHandle = (one) => {
        setText(one)
    }



    const pressHandle = () => {
        const ttbkey = "ttbfeelvu0959001";
        fetch(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=${ttbkey}&Query=${text}&output=JS&QueryType=${keyword}&Cover=Big`)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setSearch(res.item);
            })
            .then(() => {
            setRstVal(true);
            setText("");}
            )
            .catch((err) => console.log(err))
            
        }

    return (<View style={{ flex: 1 }}>


        <View style={styles.chkOut}>
            <BouncyCheckbox
                size={20}
                textComponent={<Text style={styles.chktext}> 작가/제목</Text>}
                onPress={(isChecked) => {
                    if (isChecked) {
                        setKeyword("Keyword")
                    }
                }}
            />
            <BouncyCheckbox
                size={20}
                textComponent={<Text style={styles.chktext}> 제목</Text>}
                onPress={(isChecked) => {
                    if (isChecked) {
                        setKeyword("Title")
                    }
                }}
            />
            <BouncyCheckbox
                size={20}
                textComponent={<Text style={styles.chktext}> 저자</Text>}
                onPress={(isChecked) => {
                    if (isChecked) {
                        setKeyword("Author")
                    }
                }}
            />

            <BouncyCheckbox
                size={20}
                textComponent={<Text style={styles.chktext}> 출판사</Text>}
                onPress={(isChecked) => {
                    if (isChecked) {
                        setKeyword("Publisher")
                    }
                }}
            />
        </View>






        <View style={styles.schBox}>
            <TextInput
                onChangeText={changeHandle}
                placeholder="검색해보세요"
                style={styles.input}
                value={text}
            />
            <TouchableOpacity onPress={pressHandle} style={styles.buttonBox}>
                <CustomButtonOne>검색</CustomButtonOne>
            </TouchableOpacity>
        </View>
        <FlatList
            data={search}
            renderItem={({ index, item }) => {
                return <Rst item={item} />
            }}

            keyExtractor={(item) => { item.isbn13 }}

            style={{ flex: 1, paddingHorizontal: 10 }}
        />


    </View>);
}

const styles = StyleSheet.create({
    schBox: {
        flexDirection: "row"
    },
    title: {
        textAlign: "center",
        fontSize: 20,
        margin: 5
    },

    input: {
        marginHorizontal: 10,
        // backgroundColor:"#C0C0C0",
        minWidth: 300,
        height: 40,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: "#C0C0C0",
        marginTop: 30,
        paddingVertical:5,
        color:"#303030",
        paddingHorizontal:14,
        marginBottom:10
    },
    buttonBox: {
        marginTop: 22
    },
    chktext: {
        marginRight: 10,
        fontSize: 15,
        color: "#686763"
    },
    chkOut: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 15
    }
});

export default Searching;