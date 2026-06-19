import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>3 Componentes</Text>

      <Button
        title="TABELA"
        onPress={() => navigation.navigate('Tabela')}
      />
    </View>
  );
}

function TabelaScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <Text>Nome</Text>
      <Text>Idade</Text>
      <Text>Curso</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="Tabela"
          component={TabelaScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}