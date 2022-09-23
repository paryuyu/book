import { useEffect, useState } from "react";
import { Text, View, TextInput, Button, FlatList ,StyleSheet } from "react-native";
import Rst from "../components/searchingRst";





function Searching({bookmarkAPI}) {
    const [text, setText] = useState("")
    const [searchText, setSearchText] = useState("")
    const [search, setSearch] = useState([]);
    const [rstVal, setRstVal] = useState(false);
    
    const changeHandle = (one) => {
        setText(one)

    }
    const pressHandle = () => {
        setSearchText(text)
      
            fetch(`http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbfeelvu0959001&Query=${searchText}&output=JS`)
                .then(res => res.json())
                .then(res => 
                   { console.log(res);
                    setSearch(res.item);})
                .then( ()=> setRstVal(true))
                .catch((err)=>console.log(err))
    }

    useEffect(() => {
        pressHandle();
      }, []);



    return (<View style={{flex:1}}>
        <TextInput
            onChangeText={changeHandle}
            placeholder="검색해보세요"
            style={styles.input}
        />
        <Button title="검색" onPress={pressHandle} />

        <FlatList data={search}
           renderItem={({index, item})=>{
            return <Rst item={item} />
           }}
        keyExtractor={(item)=>{item.itemId}}
        style={{flex:1, paddingHorizontal:10}}
        />


    </View>);
}

const styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:20,
        margin:5
    },

    input:{
        margin:10,
       // backgroundColor:"#C0C0C0",
       padding:15,
        height:50,
        borderRadius:30,
        borderWidth:2,
        borderColor:"#C0C0C0"
    }
});

export default Searching;