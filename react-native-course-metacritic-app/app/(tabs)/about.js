import { ScrollView, Text, View, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { HomeIcon } from '../../components/Icons';
import { Screen } from '../../components/Screen';

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <View>
          <Link href="/" asChild className="text-white text-lg mb-4 mt-20">
            <Pressable>
              {({ pressed }) => (
                <HomeIcon
                  color={pressed ? 'gray' : 'white'}
                  style={{ opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          </Link>

          <Text className="text-white text-2xl font-semibold mb-4">
            Acerca de la app
          </Text>
          <Text className="text-gray-300 text-lg">
            Esta es una aplicación de ejemplo para mostrar cómo se puede
            utilizar React Native con NativeWind para crear aplicaciones móviles
            con un diseño atractivo. La aplicación muestra una lista de juegos
            con su descripción y puntuación.
          </Text>
          <Text className="text-white text-2xl font-semibold mb-4">
            Acerca de la app
          </Text>
          <Text className="text-gray-300 text-lg">
            Esta es una aplicación de ejemplo para mostrar cómo se puede
            utilizar React Native con NativeWind para crear aplicaciones móviles
            con un diseño atractivo. La aplicación muestra una lista de juegos
            con su descripción y puntuación.
          </Text>
          <Text className="text-white text-2xl font-semibold mb-4">
            Acerca de la app
          </Text>
          <Text className="text-gray-300 text-lg">
            Esta es una aplicación de ejemplo para mostrar cómo se puede
            utilizar React Native con NativeWind para crear aplicaciones móviles
            con un diseño atractivo. La aplicación muestra una lista de juegos
            con su descripción y puntuación.
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}
