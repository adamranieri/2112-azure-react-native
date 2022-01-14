import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import EntryView from './components/entry-view';
import HomeView from './components/home-view';
import LogView from './components/log-view';
import { planetStore } from './store';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Provider store={planetStore}>

      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeView}/>
        <Drawer.Screen name='Logs' component={LogView}/>
        <Drawer.Screen name='Entry' component={EntryView}/>
      </Drawer.Navigator>

    </Provider>
  </NavigationContainer>
  );
}


