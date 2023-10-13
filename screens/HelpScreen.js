import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestsScreen from "./RequestsScreen";
import RequestDetailsScreen from "./RequestDetailsScreen";

const Stack = createNativeStackNavigator();

const HelpScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Requests' component={RequestsScreen} />
      <Stack.Screen name='Request Details' component={RequestDetailsScreen} />
    </Stack.Navigator>
  );
};

export default HelpScreen;
