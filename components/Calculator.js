import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Calculator = () => {
  const [value, setValue] = useState('');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState(null);

  const handlePress = (type, val) => {
    if (type === 'number') {
      setValue(value + val);
    } else if (type === 'operator') {
      setOperator(val);
      setPreviousValue(value);
      setValue('');
    } else if (type === 'clear') {
      setValue('');
      setPreviousValue('');
      setOperator(null);
    } else if (type === 'calculate') {
      let result = '';
      switch (operator) {
        case '+':
          result = parseFloat(previousValue) + parseFloat(value);
          break;
        case '-':
          result = parseFloat(previousValue) - parseFloat(value);
          break;
        case '*':
          result = parseFloat(previousValue) * parseFloat(value);
          break;
        case '/':
          result = parseFloat(previousValue) / parseFloat(value);
          break;
        default:
          result = value;
      }
      setValue(result.toString());
      setPreviousValue('');
      setOperator(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.outputContainer}>
        <Text style={styles.output}>{value}</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('clear')} style={styles.btn}>
          <Text style={styles.btnText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('operator', '/')} style={styles.btn}>
          <Text style={styles.btnText}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('operator', '*')} style={styles.btn}>
          <Text style={styles.btnText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('number', 7)} style={styles.btn}>
          <Text style={styles.btnText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 8)} style={styles.btn}>
          <Text style={styles.btnText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 9)} style={styles.btn}>
          <Text style={styles.btnText}>9</Text>
        </TouchableOpacity>
		        <TouchableOpacity onPress={() => handlePress('operator', '-')} style={styles.btn}>
          <Text style={styles.btnText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('number', 4)} style={styles.btn}>
          <Text style={styles.btnText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 5)} style={styles.btn}>
          <Text style={styles.btnText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 6)} style={styles.btn}>
          <Text style={styles.btnText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('operator', '+')} style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('number', 1)} style={styles.btn}>
          <Text style={styles.btnText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 2)} style={styles.btn}>
          <Text style={styles.btnText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('number', 3)} style={styles.btn}>
          <Text style={styles.btnText}>3</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePress('number', 0)} style={[styles.btn, styles.zeroBtn]}>
          <Text style={styles.btnText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('calculate')} style={styles.btn}>
          <Text style={styles.btnText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  outputContainer: {
    backgroundColor: '#EFEFEF',
    alignItems: 'flex-end',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: '80%'
  },
  output: {
    color: '#424242',
    fontSize: 40
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  },
  btn: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderRadius: 50,
    elevation: 5
  },
  btnText: {
    color: 'white',
    fontSize: 20
  },
  zeroBtn: {
    width: 120,
    alignItems: 'flex-start'
  }
});


export default Calculator;

 

