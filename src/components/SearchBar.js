import React from 'react'
import {View,Text,StyleSheet, TextInput} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 

const SearchBar = ({term,onTermChange,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <FontAwesome5  
             style={styles.iconStyle}
            name="search" size={24} color="black" />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              style={styles.inputStyle}
              placeholder="Search"
              value={term}
              onChangeText={newTerm=> onTermChange(newTerm)}
              onEndEditing={()=>onTermSubmit(term)}
           />
         </View>
    )
}

const styles = StyleSheet.create({
    background:{
        marginTop:10,
        backgroundColor:"#cec4ca",
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection:'row',
        // alignItems:'center'


    },
    inputStyle:{
        // borderColor:'black',
        // borderWidth:1,
        flex: 1
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
});

export default SearchBar
