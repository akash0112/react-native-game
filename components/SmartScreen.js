import React, { useState } from "react";
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import Card from "./Card";
import Color from "./Color";
import Input from "./Input";
import NumberContiner from "./NumberContiner";
const SmartScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectednumber, setselectedNumber] = useState("");
  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };
  const resetInput = () => {
    setEnteredValue("");
    setConfirmed(false);
  };
  const confirmInputHandler = () => {
    const choosenNumber = parseInt(enteredValue);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("!Invalid Number", "Number has to be Invalid", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    setConfirmed(true);
    setselectedNumber(choosenNumber);
    setEnteredValue("");
    Keyboard.dismiss();
  };
  let confirmedoutput;
  if (confirmed) {
    confirmedoutput = (
      <Card style={styles.card}>
        <Text>You Selected</Text>
        {/* <View>
        <Text>{selectednumber}</Text>
      </View> */}
        <NumberContiner>{selectednumber}</NumberContiner>
        <Button title="START GAME" onPress={()=>props.onStartGame(selectednumber)} />
      </Card>
    );
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Start</Text>
        <Card style={styles.inputContainer}>
          <Text>SELECT A NUMBER</Text>
          {/* <TextInput /> */}
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button
                onPress={resetInput}
                title="RESET"
                color={Color.primary}
              />
            </View>
            <View style={styles.btn}>
              <Button
                title="SUBMIT"
                onPress={confirmInputHandler}
                color={Color.secondary}
              />
            </View>
          </View>
        </Card>
        {confirmedoutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SmartScreen;
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    width: "100%",
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
    fontFamily:"open-sans-bold"
  },
  btn: {
    width: 70,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
  card: {
    marginTop: 10,
    paddingHorizontal: 50,
    alignItems: "center",
  },
});
