import { View, Text, StyleSheet, Button } from 'react-native';
export default function App() {

  return (
    <View style={styles.container}>

      <Text style={styles.text}> Três Componentes</Text>

      <Button title="tabela" onPress={() => alert('1')} />

      <Button title="check" onPress={() => alert('2')} />

      <Button title="text" onPress={() => alert('3')} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7a7a9a',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  text: {
    color: '#b52222',
    fontSize: 24,
  },
  button: {
    color: '#dc7e7e',
  }
});