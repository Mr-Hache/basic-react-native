import { Text, Image, View, StyleSheet, Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export function GameCard({ game }) {
  return (
    <View key={game.slug} style={styles.card}>
      {/* <Image source={{ uri: game.image }} style={{ width: 100, height: 100 }} /> */}
      <Text style={styles.title}>{game.title}</Text>
      {game.image && (
        <Image source={{ uri: game.image }} style={styles.image} />
      )}
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 200,
      delay: index * 200,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 15,
    backgroundColor: '#1e1e1e',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  title: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 15,
  },
  description: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10,
  },
  score: {
    color: '#ffffff',
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  // Añadir estilos para imágenes e iconos si es necesario
  // icon: {
  //   width: 180,
  //   height: 100,
  // },
  // logo: {
  //   width: 50,
  //   height: 50,
  // },
  // cardImage: {
  //   width: 100,
  //   height: 100,
  // },
});
