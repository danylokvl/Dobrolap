import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestsScreen from "./RequestsScreen";
import RequestDetailsScreen from "./RequestDetailsScreen";
import HelpVariantsScreen from "./HelpVariantsScreen";
import AlreadyHelpedScreen from "./AlreadyHelpedScreen";
import TopAppNavigation from "../../components/TopAppNavigation";
import AnotherProfileScreen from "../account/AnotherProfileScreen";
import DonateScreen from "./DonateScreen";

const Stack = createNativeStackNavigator();

const HelpScreenNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <TopAppNavigation {...props} />,
      }}
    >
      <Stack.Screen
        name='Requests'
        component={RequestsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Group>
        <Stack.Screen
          name='Request Details'
          component={RequestDetailsScreen}
          options={{
            header: (props) => (
              <TopAppNavigation
                {...props}
                additionalButton1='bookmark-outline'
                additionalButton2='dots-horizontal'
              />
            ),
          }}
        />
        <Stack.Screen
          name='Already Helped'
          component={AlreadyHelpedScreen}
          options={{
            animation: "slide_from_right",
            header: (props) => (
              <TopAppNavigation {...props} headline='Вже допомогли' />
            ),
          }}
        />
        <Stack.Screen
          name='Another Profile'
          component={AnotherProfileScreen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen name='Help Variants' component={HelpVariantsScreen} />
        <Stack.Screen
          name='Donate'
          component={DonateScreen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HelpScreenNavigator;
