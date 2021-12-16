import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Color from './Color'

const NumberContiner = (props) => {
    return (
       <View style={styles.container}>
<Text style={styles.number}>{props.children}</Text>
       </View>
    )
}
const styles=StyleSheet.create({
    container:{
        borderWidth:2,
        borderColor:Color.primary,
        padding:10,
        borderRadius:10,
        margin:10,
        alignItems:'center',
    },
    number:{
        color:Color.secondary,
        fontSize:22
    }
})

export default NumberContiner
