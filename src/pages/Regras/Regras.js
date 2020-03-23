import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default class Regras extends Component {
  state = {
    selected: '',
  };

  selectRule = card => {
    //aqui é definido qual botao o usuario clicou para ver a regra
    this.setState({selected: card});
  };

  getRule = selected => {
    let retorno = '';
    if (selected) {
      retorno = `Insira aqui a lógica de retorno das regras ${selected}`;
    }
    return retorno;
  };

  render() {
    const {selected} = this.state;
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',

            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('A');
            }}>
            <Text style={styles.button1Text}>A</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('2');
            }}>
            <Text style={styles.button1Text}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('3');
            }}>
            <Text style={styles.button1Text}>3</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',

            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('4');
            }}>
            <Text style={styles.button1Text}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('5');
            }}>
            <Text style={styles.button1Text}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('6');
            }}>
            <Text style={styles.button1Text}>6</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',

            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('7');
            }}>
            <Text style={styles.button1Text}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('8');
            }}>
            <Text style={styles.button1Text}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('9');
            }}>
            <Text style={styles.button1Text}>9</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',

            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('10');
            }}>
            <Text style={styles.button1Text}>10</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('J');
            }}>
            <Text style={styles.button1Text}>J</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('Q');
            }}>
            <Text style={styles.button1Text}>Q</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'space-between',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              this.selectRule('K');
            }}>
            <Text style={styles.button1Text}>K</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.rule}>{this.getRule(selected)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button1: {
    width: 100,
    height: 50,
    backgroundColor: '#192f6a',
    marginHorizontal: 10,
    alignContent: 'center',
    borderRadius: 10,
    justifyContent: 'center',
  },
  button1Text: {
    textAlign: 'center',
    alignSelf: 'center',
  },
  rule: {
    fontSize: 32,
    alignSelf: 'center',
    marginTop: 20,

    textAlign: 'center'
  },
});
