import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CharacterViewer from './components/character-viewer';
import MassEffectDesc from './components/mass-effect-desc';
import SloganGenerator from './components/slogan-generator';

export default function App() {
  return (
    <View >
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Mass Effect 2 is the best game ever!!!!!</Text>
      <MassEffectDesc/>
      <CharacterViewer/>
      <SloganGenerator/>
    </View>
  );
}


