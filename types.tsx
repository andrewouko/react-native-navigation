import { RouteProp } from "@react-navigation/native";
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";

type NoParamScreens = "Home";
type WithParamScreens = "Details" | "CreatePost";
type Screens = NoParamScreens | WithParamScreens;

/**
 * Params type for screens with params
 * (params should contain minimal data, consider using store to rebuild all required data)
 */
type ScreenParams = { id: number; payload?: { text: string } };

/**
 * ParamList for each screen
 */
type NoParamScreenType = Record<NoParamScreens, undefined>;
type WithParamsScreenType = Record<WithParamScreens, ScreenParams>;
export type StackParamList = NoParamScreenType & WithParamsScreenType;

/**
 * Returns Naviation props for the screens in the stack
 */
type ScreenNavigationProp = NativeStackNavigationProp<StackParamList, Screens>;

/**
 * Route prop for each screen in the stack
 */
type ScreenRouteProp = RouteProp<StackParamList, Screens>;

/**
 * Returns the navigation and route props for each screen in the stack
 */
export type ScreenProps = NativeStackScreenProps<StackParamList, Screens>;
