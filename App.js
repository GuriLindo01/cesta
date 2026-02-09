import { Text, SafeAreaView, SafeAreaViewBase } from 'react-native';
import Sobrenome from './src/Telas/Sobrenome';

export default function App() {
  return (
    <SafeAreaView>
      <Text>Gustavo Vinicius</Text>
      <Sobrenome nome='Blazius' />
    </SafeAreaView>
  );
}