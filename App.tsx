import DrawerSlider from './components/drawer-screen';

import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <DrawerSlider />

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
  },
});
