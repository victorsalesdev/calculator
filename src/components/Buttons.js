import React, { Component } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'

import Button from './Button'
import colors from '../utils/colors';

class Buttons extends Component {
  
  operatorSelected = operation => {
    this.props.operation(operation)
  }

  render() {
    const numbers = [
      ['7', '8', '9'],
      ['4', '5', '6'],
      ['1', '2', '3'],
      [',', '0', '='],
    ]
    const operations = ['C', '÷', '×', '-', '+']
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.numbers}>
        {numbers.map((row, i) => 
          <View key={i} style={styles.row}>
            {row.map(char => 
              <Button key={char} char={char} operation={this.operatorSelected} />
            )}
          </View>
        )}
        </SafeAreaView>
        <SafeAreaView style={styles.operations}>
          {operations.map(char => 
            <Button key={char} char={char} operation={this.operatorSelected} />
          )}
        </SafeAreaView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
  },
  operations: {
    flex: 1,
    backgroundColor: colors["blue-dark"]
  }
})

export default Buttons;