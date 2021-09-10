/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

  const Calculadora = () => {
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView>
        <text style={styles.titulo}>CALCULADORA DE IMC</text>
        <textinput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Insira a altura"
            keyboardType="numeric"
        />
         <textinput
            style={styles.input}
            placeholder="Insira seu peso"
            keyboardType="numeric"
        />
        <Button
            title="calcular"
        />
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;
