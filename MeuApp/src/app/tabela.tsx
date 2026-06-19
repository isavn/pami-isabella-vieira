import { View, TextInput, StyleSheet, Text } from 'react-native';

export default function Tabela() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>Tabela Preenchível</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
      />

      <TextInput
        style={styles.input}
        placeholder="Idade"
      />

      <TextInput
        style={styles.input}
        placeholder="Curso"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8,
  },
});