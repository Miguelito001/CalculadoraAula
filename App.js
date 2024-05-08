// Importações necessárias
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';

// Função de componente da calculadora
const Calculator = () => {
  // Estado para armazenar a expressão e o resultado
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  // Função para lidar com os botões de dígitos e operadores
  const handleButtonPress = (value) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  // Função para calcular o resultado da expressão
  const calculateResult = () => {
    try {
      setResult(eval(expression));
    } catch (error) {
      setResult('Erro');
    }
  };

  // Função para limpar a expressão e o resultado
  const clear = () => {
    setExpression('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      {/* Visor */}
      <Text style={styles.expression}>{expression}</Text>
      <Text style={styles.result}>{result}</Text>

      {/* Botões */}
      <View style={styles.buttons}>
        <View style={styles.row}>
          <Button onPress={() => handleButtonPress('7')} ><Text style={styles.button}>7</Text></Button>
          <Button onPress={() => handleButtonPress('8')} ><Text style={styles.button}>8</Text></Button>
          <Button onPress={() => handleButtonPress('9')} ><Text style={styles.button}>9</Text></Button>
          <Button onPress={() => handleButtonPress('/')} ><Text style={styles.button}>/</Text></Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => handleButtonPress('4')} ><Text style={styles.button}>4</Text></Button>
          <Button onPress={() => handleButtonPress('5')} ><Text style={styles.button}>5</Text></Button>
          <Button onPress={() => handleButtonPress('6')} ><Text style={styles.button}>6</Text></Button>
          <Button onPress={() => handleButtonPress('*')} ><Text style={styles.button}>*</Text></Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => handleButtonPress('1')} ><Text style={styles.button}>1</Text></Button>
          <Button onPress={() => handleButtonPress('2')} ><Text style={styles.button}>2</Text></Button>
          <Button onPress={() => handleButtonPress('3')} ><Text style={styles.button}>3</Text></Button>
          <Button onPress={() => handleButtonPress('-')} ><Text style={styles.button}>-</Text></Button>
        </View>
        <View style={styles.row}>
          <Button onPress={() => handleButtonPress('0')} ><Text style={styles.button}>0</Text></Button>
          <Button onPress={() => handleButtonPress('.')} ><Text style={styles.button}>.</Text></Button>
          <Button onPress={calculateResult} ><Text style={styles.button}>=</Text></Button>
          <Button onPress={() => handleButtonPress('+')} ><Text style={styles.button}>+</Text></Button>
        </View>
        <Button onPress={clear} mode="contained" style={styles.clearButton}>
          Limpar
        </Button>
      </View>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  expression: {
    fontSize: 24,
    marginBottom: 10,
  },
  result: {
    fontSize: 36,
    marginBottom: 20,
  },
  buttons: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    fontSize:20,
  },
  clearButton: {
    marginTop: 10,
  },
});

export default Calculator;
