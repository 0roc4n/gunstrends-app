import { View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <ThemedView style={{ flex: 1 }}>
      <p className='text-red-300'>Hello</p>
    </ThemedView>
  );
}
