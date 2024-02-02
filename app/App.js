import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddPostScreen from "./screens/AddPostScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator()


export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen options={{ headerShown: false }} name="Register" component={RegisterScreen} /> */}
        {/* <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
        <Stack.Screen options={{ headerShown: false }} name="AddPost" component={AddPostScreen} /> */}
        <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
      </Stack.Navigator></NavigationContainer>
  );
}


