import React, { useRef, useState, useEffect } from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import NumberContiner from "./NumberContiner";
const generatebetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exclude) {
    return generatebetween(min, max, exclude);
  } else {
    return random;
  }
};
const GameScreen = (props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generatebetween(1, 100, props.userChoice)
  );
  const [rounds, setrounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const { userChoice, onGameOver } = props;
  useEffect(() => {
    console.log(currentGuess, userChoice);
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, onGameOver, userChoice]);
  const nextguessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("dont Lie", "You know that this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextnumber = generatebetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextnumber);
    setrounds((currounds) => currounds + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent Guess</Text>
      <NumberContiner>{currentGuess}</NumberContiner>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={nextguessHandler.bind(this, "lower")} />
        <Button
          title="GREATER"
          onPress={nextguessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

export default GameScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
});
