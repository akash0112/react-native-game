import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GameOver from "./components/GameOver";
import GameScreen from "./components/GameScreen";
import Header from "./components/Header";
import SmartScreen from "./components/SmartScreen";
import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';
const fetchfonts = () => {
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};
export default function App() {
  const [dataLoaded, setdataLoaded] = useState(false);
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setguessRounds] = useState(0);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchfonts}
        onFinish={() => {setdataLoaded(true)}}
        onError={console.warn}
      />
    );
  }

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setguessRounds(0);
  };
  const restart = () => {
    setguessRounds(0);
    setUserNumber(null);
  };
  const gameOver = (numOfRounds) => {
    setguessRounds(numOfRounds);
  };
  let content = <SmartScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOver} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOver
        roundsNumber={guessRounds}
        userNumber={userNumber}
        restart={restart}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
