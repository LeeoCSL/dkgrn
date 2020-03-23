import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerTitle: 'Início',
  };

  render() {
    return (
      <View>
        <Text style={styles.title}> DKG </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Sueca');
          }}>
          <Text style={styles.textButton}>Sueca</Text>
        </TouchableOpacity>

        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#4c669f', '#3b5998', '#192f6a']}
          style={styles.linearGradient}>
          <Text style={styles.buttonText}>Sign in with Facebook</Text>
        </LinearGradient>
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
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  title: {
    alignSelf: 'center',
    fontSize: 32,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 10,
    width: wp('90%'),
    backgroundColor: '#123',
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
