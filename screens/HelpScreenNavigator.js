import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestsScreen from "./RequestsScreen";
import RequestDetailsScreen from "./RequestDetailsScreen";
import HelpVariantsScreen from "./HelpVariantsScreen";

const Stack = createNativeStackNavigator();

const HelpScreenNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Requests' component={RequestsScreen} />
      <Stack.Screen name='Request Details' component={RequestDetailsScreen} />
      <Stack.Screen name='Help Variants' component={HelpVariantsScreen} />
    </Stack.Navigator>
  );
};

export default HelpScreenNavigator;
