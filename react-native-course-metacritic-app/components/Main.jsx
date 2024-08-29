import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import { getLatestGames } from '../lib/metacritic';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AnimatedGameCard } from './GameCard';
import { Logo } from './Logo';
import { CircleInfoIcon } from './Icons';

//import Constants from 'expo-constants';
import {
  //StyleSheet,
  //Text,
  View,
  //Image,
  //ScrollView,
  FlatList,
  ActivityIndicator,
  //SafeAreaView,
  Pressable,
} from 'react-native';

import { styled } from 'nativewind';
import { Screen } from './Screen';

const StyledPressable = styled(Pressable);

// Se puede utilizar import o require para importar imágenes
// const icon = require("./assets/icon.png");

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then(data => {
      setGames(data);
    });
  }, [games]);

  return (
    <Screen>
      {/* <Image source={icon} style={{ width: 180, height: 100 }} /> */}
      {/* Para cargar una imagen remota se hace de la siguiente forma */}
      {/* <Image
        source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        style={{ width: 50, height: 50 }}
      /> */}
      {/* StatusBar representa la barra de reloj y fecha, etc del dispositivo */}

      {/* Botón nativo del sistema */}
      {/* <Button title="Press me" onPress={() => alert("Hello World")} /> */}
      {/* Botón personalizado, este botón se puede estilar de cualquier forma */}
      {/* <TouchableHighlight
        underlayColor={"#fff"}
        onPress={() => alert("Hello World")}
        style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Press me</Text>
      </TouchableHighlight> */}
      {/* Mirar el pressable para hacer botones personalizados */}

      {games.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <ActivityIndicator size="large" color="#ffffff" />
        </View>
      ) : (
        <FlatList
          data={games}
          keyExtractor={game => game.slug}
          renderItem={({ item, index }) => (
            <AnimatedGameCard game={item} index={index} />
          )}
        />
      )}
    </Screen>
  );
}

// const styles = StyleSheet.create({
//   safeAreaView: {
//     flex: 1,
//     backgroundColor: '#121212',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 20,
//   },
// });
