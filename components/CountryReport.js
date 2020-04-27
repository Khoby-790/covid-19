import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
// import countries from '../countries.json';
import {Context} from '../context';

const WorldReport = ({navigation}) => {
  const {country} = React.useContext(Context);
  return (
    <View style={styles.container}>
      <View style={[styles.row, styles.topCard]}>
        <View style={[styles.row, styles.nameAndFlag]}>
          <Image
            source={{
              uri: `https://www.countryflags.io/${country.alpha2Code.toLocaleLowerCase()}/flat/64.png`,
            }}
            style={styles.flag}
          />
          <Text style={styles.WorldReportTitle}>{country.name}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <Text style={styles.btntext}>Change</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.row, styles.detailsHolder]}>
        <View style={styles.col}>
          <Text style={styles.desc}>Total Cases</Text>
          <Text style={[styles.figure, styles.total]}>4,455</Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.total}>{5000}</Text>
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.desc}>Deaths</Text>
          <Text style={[styles.figure, styles.deaths]}>4,455</Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.deaths}>{5000}</Text>
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.desc}>Recovered</Text>
          <Text style={[styles.figure, styles.recovered]}>4,455</Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.recovered}>{5000}</Text>
          </Text>
        </View>
      </View>
      <View>
        <Text>Last updated {new Date().toDateString()}</Text>
      </View>
    </View>
  );
};

export default WorldReport;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 20,
    display: 'flex',
    backgroundColor: '#fff',
    zIndex: 2,
    elevation: 2,
    marginTop: 20,
    // height: 300,
    borderRadius: 12,
  },
  WorldReportTitle: {
    color: '#395174',
    fontSize: 17,
    fontWeight: '700',
  },
  topCard: {justifyContent: 'space-between'},
  btntext: {
    color: 'blue',
    fontWeight: '800',
    fontSize: 16,
  },
  col: {
    flex: 1,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  desc: {
    fontSize: 17,
  },
  figure: {
    fontSize: 25,
  },
  total: {
    color: '#5A93FF',
  },
  recovered: {
    color: '#45BE04',
  },
  deaths: {
    color: '#FF5A5A',
  },
  detailsHolder: {
    marginVertical: 20,
  },
  flag: {
    height: 30,
    width: 30,
    // borderRadius: 30 / 2,
    // backgroundColor: 'grey',
    marginHorizontal: 10,
  },
  nameAndFlag: {
    alignItems: 'center',
  },
});
