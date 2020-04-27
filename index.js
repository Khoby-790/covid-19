import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloProvider} from 'react-apollo';
import Context from './context';
import client from './client';

// set up the navigation here ...

const NavigationOnApp = props => (
  <ApolloProvider client={client}>
    <NavigationContainer>
      <Context>
        <App />
      </Context>
    </NavigationContainer>
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => NavigationOnApp);
