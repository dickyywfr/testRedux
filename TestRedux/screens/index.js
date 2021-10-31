import React from "react";
import { View, Text, Button, TextInput } from "react-native";
import { addCount, decreaseCount } from "../actions/count";
import { connect, useDispatch, useSelector } from "react-redux";
import { setSmurfName } from "../actions/name";
import home from "./home";

export default index =({navigation}) => {
    const dispatch = useDispatch();
    const [name, addName] = useState('Empty name');


const loginPress = () => {
    dispatch(setSmurfName(name));
    navigation.navigate(home)
}

return(
        <View style={{
            flex:1,
            alignContent:"center",
            justifyContent:"center"
        }}>
            <TextInput style={{height:50,width:300}} placeholder="Enter your name" onChange={(text)=>addName(text)}/>
           
           
        </View>
    
)
}