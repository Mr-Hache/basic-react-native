import { Text, View, Image, ActivityIndicator, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { getGameDetails } from '../../lib/metacritic';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../../components/Screen';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Score } from '../../components/Score';

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [gameInfo, setGameInfo] = useState(null);

  useEffect(() => {
    getGameDetails(id).then(data => {
      setGameInfo(data);
    });
  }, [id]);

  return (
    <Screen>
      <Stack.Screen
        options={{
          headerTitle: '',
          headerStyle: {
            backgroundColor: 'yellow', // Gray-900
          },
          headerTintColor: 'black', // White
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerLeft: () => {},
        }}
      />
      <View className="flex-1 bg-gray-800">
        {gameInfo === null ? (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator color="#F9FAFB" size="large" />
          </View>
        ) : (
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View className="flex-1 justify-center items-center px-6 py-4">
              <Image
                source={{ uri: gameInfo.img }}
                style={{ width: 214, height: 294, borderRadius: 12 }}
                className="mb-6"
              />
              <Score score={gameInfo.score} maxScore={100} />
              <Text className="text-white text-center font-bold text-2xl mb-4">
                {gameInfo.title}
              </Text>
              <Text className="text-gray-300 mt-2 text-center text-base mb-6">
                {gameInfo.description}
              </Text>
              <Link href="/" asChild>
                <Text className="text-blue-400 text-lg underline">
                  Back to Home
                </Text>
              </Link>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
