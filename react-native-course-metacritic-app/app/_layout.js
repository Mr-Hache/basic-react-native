import { View } from 'react-native';
import { Stack } from 'expo-router';
import { Logo } from '../components/Logo';
import { CircleInfoIcon } from '../components/Icons';
import { Link } from 'expo-router';
import { styled } from 'nativewind';
import { Pressable } from 'react-native';

const StyledPressable = styled(Pressable);

export default function Layout() {
  return (
    <View className="flex-1 bg-slate-600">
      <Stack
        screenOptions={{
          //headerShown: false,
          headerTitle: '',
          headerStyle: {
            backgroundColor: '#111827', // gray-900 de Tailwind
          },
          headerTintColor: '#ffffff', // Color del texto en el header
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link href="/about" asChild>
              <StyledPressable className={`active:opacity-50`}>
                <CircleInfoIcon />
              </StyledPressable>
            </Link>
          ),
        }}
      />
    </View>
  );
}
