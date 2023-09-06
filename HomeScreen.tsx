import { Button, StyleSheet, Text, View } from "react-native";
import { ScreenProps } from "./types";
import { useEffect } from "react";

export default function HomeScreen({ navigation }: ScreenProps) {
  // const navigation = useNavigation<ScreenNavigationProp>();
  // const route = useRoute<ScreenRouteProp>();
  const { container, buttons_container } = styles;
  useEffect(() => {
    navigation.setOptions({
      title: "Home Screen",
    });
  });
  return (
    <View style={container}>
      <Text>Home Screen</Text>
      <View style={buttons_container}>
        <Button
          title="Go to Details..."
          onPress={() =>
            navigation.navigate<"Details">("Details", { id: Math.random() })
          }
        />
        <Button
          title="Create Post"
          onPress={() =>
            navigation.navigate<"CreatePost">("CreatePost", {
              id: Math.random(),
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttons_container: {
    flex: 0.2,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
