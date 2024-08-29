import { View, Text } from 'react-native';

export function Score({ score, maxScore }) {
  const getColors = () => {
    const percentage = (score / maxScore) * 100;
    if (percentage >= 98) {
      return 'bg-green-300';
    }
    if (percentage >= 97) {
      return 'bg-yellow-300';
    }
    if (percentage >= 95) {
      return 'bg-orange-300';
    }
    return 'bg-red-300 ';
  };
  const colorClassName = getColors();

  //Text no hereda el color del padre, por lo que se debe agregar el color de texto

  return (
    <View
      className={`${colorClassName} flex-row items-center justify-center p-3 rounded-full shadow-md`}
    >
      <Text className=" text-xl font-bold">{score}</Text>
      <Text className=" text-xl font-bold mx-2">/</Text>
      <Text className=" text-xl font-bold">{maxScore}</Text>
    </View>
  );
}
