import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import HorizontalList from './HorizontalList';
const BreakingNews = ({data}) => {
    return (
       <HorizontalList title="Pola makan" data={data}/>
    );
}
const styles = StyleSheet.create({
});

export default BreakingNews;



