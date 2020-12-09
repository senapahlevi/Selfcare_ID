import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button } from 'native-base';
import { Alert,Text,ActivityIndicator,View } from 'react-native';

//import Modal from '';
import DataItem from '../../components/dataItem';
import {getArticles} from '../../config/services/newsFetch';

export default class tabOne extends Component {
  constructor(props){
      super(props);
        this.state = {
            isLoading:true,
            data:null
        }
    }
    //ini buat run dulu trus baru render dan ini getArticles.then buat
    //buat nyimpen data dan ini telah diloading data nya muncul
    componentDidMount() {
        getArticles().then(data=>{
            this.setState({
                isLoading:false,
                data:data
            });
        },error =>{
            Alert.alert('Error','something wrong!!');
        }
        )
    }
  
  
    render() {
      console.log(this.state.data);
      
      /*cek loading dari isLoading beneran akurat ga ? dan tampilkan
      kalo isLoading false muncul si List nya 
      */
      let view = this.state.isLoading ? (
        <View>
          <ActivityIndicator animating={this.state.isLoading}/>
          <Text style = {{marginTop:10}} children="please wait..." />
        </View>
      ) :(
        <List 
            dataArray = {this.state.data}
            renderRow={(item)=> {
              return( 
              <DataItem onPress={this.handleItemDataOnPress} data ={item}/>
                
                )
            }}/>
      )

    return (
      <Container>
        <Content>
          {view}
        </Content>
      </Container>
    );
  }
}