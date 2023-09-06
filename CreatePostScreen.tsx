import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreenProps } from "./types";
import { useState } from "react";

export default function CreatePostScreen({ navigation }: ScreenProps) {
  // const navigation = useNavigation<ScreenNavigationProp>();
  // const route = useRoute<ScreenRouteProp>();
  const [text, setText] = useState<string>("");
  return (
    <View>
      <Text>Create Post</Text>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.input}
        value={text}
        onChangeText={(text: string) => setText(text)}
      />
      <Button
        title="Done"
        onPress={() =>
          navigation.navigate<"Details">("Details", {
            id: Math.random(),
            payload: { text },
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 200,
    padding: 10,
    backgroundColor: "#fff",
  },
});
