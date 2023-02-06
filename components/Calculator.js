import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [resultText, setResultText] = useState('');

  const buttons = [
    ['CLEAR', 'DEL'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['.', '0', '=', '+'],
  ];

  const handlePress = (text) => {
    if (text === 'CLEAR') {
      setResultText('');
    } else if (text === 'DEL') {
      setResultText(resultText.slice(0, -1));
    } else if (text === '=') {
      try {
        setResultText(eval(resultText).toString());
      } catch (e) {
        setResultText('Error');
      }
    } else {
      setResultText(resultText + text);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{resultText}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, index) => (
          <View key={index} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <TouchableOpacity
                key={buttonIndex}
                style={styles.button}
                onPress={() => handlePress(button)}
              >
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 2,
    backgroundColor: '#3E3E3E',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  resultText: {
    color: 'white',
    fontSize: 30,
    padding: 20,
  },
  buttonContainer: {
    flex: 8,
    backgroundColor: '#F5F5F5',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    margin: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
  },
});

export default Calculator;
