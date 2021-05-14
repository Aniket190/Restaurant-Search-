import React,{useState,useEffect} from 'react'
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp'
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () =>{

    const [term,setTerm]=useState('');
    const [searchApi,results,errorMessage]= useResults();

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        });
    };

    return (<View style={styles.container}>
        
        <SearchBar term={term} onTermChange={newTerm=>setTerm(newTerm)}
         onTermSubmit={()=>searchApi(term)}
        />
        <Text>we Have Found {results.length}</Text>
        {errorMessage ?<Text>{errorMessage}</Text>:null}
         <ScrollView>
         <ResultsList results={filterResultsByPrice('$')} title={"cost"}/>
         <ResultsList results={filterResultsByPrice('$$')} title={"medium"}/>
         <ResultsList results={filterResultsByPrice('$$$')} title={"expensive"}/>
       </ScrollView>
        </View> 
    )
}

const styles=StyleSheet.create({
  container:{
      flex:1
  }
});
export default SearchScreen;