import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {

  const router = useRouter();

  return (
    <View style={styles.container}>

      <Text style={styles.text}>3 Componentes</Text>

 <Button
  title="TABELA"
  onPress={() => router.push('/tabela')}
/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
  },
});