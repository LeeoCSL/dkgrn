import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default class Sueca extends Component {
  state = {
    cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    selected: '',
    rules: [
      'regra A',
      'regra 2',
      'regra 3',
      'regra 4',
      'regra 5',
      'regra 6',
      'regra 7',
      'regra 8',
      'regra 9',
      'regra 10',
      'regra J',
      'regra Q',
      'regra K',
    ],
    selectedRule: '',
  };

  getCard = () => {
    const s = Math.floor(Math.random() * 12) + 1;
    this.setState({
      selected: this.state.cards[s],
      selectedRule: this.state.rules[s]});
  };

  render() {
    const {selected, selectedRule} = this.state;

    return (
      <View>
        <View>
          <Text style={styles.title}> Sueca </Text>

          <Text style={styles.text}>
            CLIQUE NO BOTÃO ABAIXO PARA TIRAR UMA CARTA
          </Text>
        </View>
        <Text style={styles.selectedCard}>{selected ? selected : ''}</Text>

        <Text style={styles.selectedCardRule}>{selectedRule ? selectedRule : ''}</Text>

        <TouchableOpacity style={styles.button} onPress={() => this.getCard()}>
          <Text style={styles.textButton}>Tirar Carta</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Regras')}>
          <Text style={styles.textButton}>Ver Regras</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  text: {
    alignSelf: 'center',
  },
  selectedCard: {
    alignSelf: 'center',
    fontSize: 50,
    marginTop: 50,
  },
  selectedCardRule: {
    alignSelf: 'center',
    fontSize: 30,
    marginTop: 50,
  },
  button: {
    borderRadius: 10,
    width: wp('90%'),
    backgroundColor: '#123',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
