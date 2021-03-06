import React from 'react'
import { ProgressViewIOSComponent, StyleSheet, TextInput, View } from 'react-native'

const Input = (props) => {
    return (
        <View>
            <TextInput {...props} style={{...styles.input,...props.style}} />
        </View>
    )
}

export default Input
const styles=StyleSheet.create({
    input:{
height:30,
borderBottomColor:"grey",
borderBottomWidth:1,
marginVertical:10
    }
})
