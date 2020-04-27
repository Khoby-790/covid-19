import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import TopRed from '../components/TopRed';
import Navbar from '../components/Navbar';
import WorldReport from '../components/WorldReport';
import CountryReport from '../components/CountryReport';
import Update from '../components/Update';
import Screen from '../components/Screen';
import {Context} from '../context';
import countries from '../countries.json';

const {height} = Dimensions.get('screen');

const App = () => {
  const {countrieSelector, setCountriesSelector, selectCountry} = useContext(
    Context,
  );
  const pickCountry = country => {
    selectCountry(country);
    setCountriesSelector(!countrieSelector);
  };
  return (
    <View style={styles.container}>
      <Screen>
        <Navbar />
        <TopRed />
        <WorldReport />
        <CountryReport />
        <View style={styles.row}>
          <Text style={styles.latestUpdatetTitle}>Latest Updates</Text>
          <Text>{new Date().toLocaleDateString()}</Text>
        </View>
        {[1, 2].map((update, key) => (
          <Update key={key} />
        ))}
      </Screen>
      <Modal visible={countrieSelector} transparent={true}>
        <View style={{backgroundColor: 'grey'}}>
          <View style={styles.modal}>
            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setCountriesSelector(!countrieSelector)}>
              <Text>Close</Text>
            </TouchableOpacity>
            <Screen>
              {countries.map((contry, key) => (
                <TouchableOpacity
                  onPress={() => pickCountry(contry)}
                  style={[styles.pickCountry]}
                  key={key}>
                  <Image
                    source={{
                      uri: `https://www.countryflags.io/${contry.alpha2Code.toLocaleLowerCase()}/flat/64.png`,
                    }}
                    style={{width: 30, height: 30, marginRight: 20}}
                  />
                  <Text>{contry.name}</Text>
                </TouchableOpacity>
              ))}
            </Screen>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  closeBtn: {
    margin: 20,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  pickCountry: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  latestUpdatetTitle: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  modal: {
    height: height * 0.9,
    marginTop: height * 0.1,
    backgroundColor: '#fff',
  },
});
