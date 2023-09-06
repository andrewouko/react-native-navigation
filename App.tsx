import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "./DetailsScreen";
import HomeScreen from "./HomeScreen";
import { ScreenProps, StackParamList } from "./types";
import CreatePostScreen from "./CreatePostScreen";
import { StyleSheet, Image } from "react-native";

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="Home" options={{ title: "Overview" }}>
          {(props: ScreenProps) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          initialParams={{ id: 1 }}
          options={{
            title: "Application Details",
            headerTitle: () => <LogoTitle />,
          }}
        />
        <Stack.Screen
          name="CreatePost"
          options={{ title: "Create Post" }}
          component={CreatePostScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function LogoTitle() {
  const { image } = styles;
  return (
    <Image
      style={image}
      source={require("@expo/snack-static/react-native-logo.png")}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});
