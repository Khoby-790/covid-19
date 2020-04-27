import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useQuery} from 'react-apollo';
import {GLOBAL_DATA} from './queries';

const WorldReport = props => {
  const {data, loading} = useQuery(GLOBAL_DATA);
  const [stats, setDAta] = useState({
    cases: 'N/A',
    deaths: 'N/A',
    recovered: 'N/A',
    todayCases: 'N/A',
    todayDeaths: 'N/A',
    todayrecovered: 'N/A',
  });
  useEffect(() => {
    if (data) {
      console.log(data.globalTotal);
      setDAta({
        ...stats,
        ...data.globalTotal,
      });
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.WorldReportTitle}>Corona virus Global</Text>
      </View>
      <View style={[styles.row, styles.detailsHolder]}>
        <View style={styles.col}>
          <Text style={styles.desc}>Total Cases</Text>
          <Text style={[styles.figure, styles.total]}>{stats.cases}</Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.total}>{stats.todayCases}</Text>
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.desc}>Deaths</Text>
          <Text style={[styles.figure, styles.deaths]}>{stats.deaths}</Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.deaths}>{stats.todayDeaths}</Text>
          </Text>
        </View>
        <View style={styles.col}>
          <Text style={styles.desc}>Recovered</Text>
          <Text style={[styles.figure, styles.recovered]}>
            {stats.recovered}
          </Text>
          <Text style={[styles.small]}>
            New: <Text style={styles.recovered}>{stats.todayrecovered}</Text>
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
});
