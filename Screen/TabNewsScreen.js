import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading,Content, Text,Left, Body, Right, Title  } from 'native-base';
import { Ionicons,FontAwesome5 } from '@expo/vector-icons';
import Tab1 from './tabs/tabOne';
import Tab2 from './tabs/tabTwo';
import Tab3 from './tabs/tabThree';
/* <Header style={{backgroundColor:'#3490dc'}} hasTabs>
 <Left/>
                <Body>
                    <Title>NEWSAPP</Title>
                </Body>
                <Right />
*/
export default class TabNewsScreen extends Component {
    render() {
        return (
          <Container>
           <Tabs>
          <Tab heading="health">
            <Tab1 />
          </Tab>
          <Tab heading="Mental-health">
            <Tab2 />
          </Tab>
         
        </Tabs>
          </Container>
        );
      }
    }