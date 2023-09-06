import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { ScreenProps } from "./types";
import { useEffect, useState } from "react";

export default function DetailsScreen({ navigation, route }: ScreenProps) {
  // const navigation = useNavigation<ScreenNavigationProp>();
  // const route = useRoute<ScreenRouteProp>();
  const [text, setText] = useState<string>("");
  useEffect(() => {
    if (route.params?.payload?.text) {
      setText(route.params.payload.text);
    }
  }, [route.params?.payload]);
  const { container, text_container, buttons_container } = styles;
  return (
    <View style={container}>
      <View style={text_container}>
        <Text>Details Screen</Text>
        <Text>{`Posted Text: ${text}`}</Text>
        <Text>{`All Params: ${JSON.stringify(route.params)}`}</Text>
      </View>
      <View style={buttons_container}>
        <Button
          title="Go to Details...Again"
          onPress={() =>
            navigation.push<"Details">("Details", {
              id: Math.random(),
            })
          }
        />
        <Button
          title="Update Title"
          onPress={() =>
            navigation.setOptions({
              title: (parseFloat(Math.random().toFixed(4)) * 10000).toString(),
              headerStyle: {
              backgroundColor: `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')}`
              }
            })
          }
        />
        <Button
          title="Home"
          onPress={() => navigation.navigate<"Home">("Home")}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button title="Back to Top" onPress={() => navigation.popToTop()} />
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
  text_container: {
    flex: 3,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  buttons_container: {
    flex: 2,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});
