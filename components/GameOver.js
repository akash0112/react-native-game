import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameOver = (props) => {
    return (
      <View style={styles.screen}>
<Text>The Game is Over</Text>
<Text>The Rounds is: {props.roundsNumber}</Text>
<Text>The user Number is: {props.userNumber}</Text>
<Button onPress={props.restart} title="NEW GAME"/>
      </View>
    )
}

export default GameOver
const styles= StyleSheet.create({
screen:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
}
})
