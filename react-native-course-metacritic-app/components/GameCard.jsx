import { Text, Image, View, Animated, Pressable } from 'react-native';
import { useEffect, useRef } from 'react';
import { Score } from './Score';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
  return (
    <Link
      href={`/game/${game.slug}`}
      asChild
      className="my-4 mx-6 p-6 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl shadow-2xl"
    >
      <StyledPressable className="active:opacity-90 border-transparent border-2 active:border-pink-300 transition-all duration-200 transform active:scale-95">
        <View key={game.slug} className="items-center">
          {game.image && (
            <Image
              source={{ uri: game.image }}
              className="w-36 h-36 rounded-lg mb-4"
              resizeMode="cover"
            />
          )}
          <Text className="text-white text-2xl font-extrabold mb-2 text-center">
            {game.title}
          </Text>
          <Text className="text-gray-100 text-sm mb-4 text-center">
            {game.description}
          </Text>
          <Score score={game.score} maxScore={100} />
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 600,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

// Los estilos en StyleSheet han sido reemplazados por clases de NativeWind:
//   card: {
//     marginVertical: 10,
//     marginHorizontal: 20,
//     padding: 15,
//     backgroundColor: '#1e1e1e',
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.25,
//     shadowRadius: 5,
//     elevation: 5, // Sombra en Android
//   },
//   title: {
//     color: '#ffffff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   image: {
//     width: 120,
//     height: 120,
//     borderRadius: 15,
//   },
//   description: {
//     color: '#ffffff',
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   score: {
//     color: '#ffffff',
//     fontSize: 16,
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
// });
