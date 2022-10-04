import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from "@coconnorco/turboui-button";
import {FancyText} from "@coconnorco/turboui-fancytext";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!!!</Text>
      <Button text='Howdy' onClick={null} />
        <FancyText text={'there partner'} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
