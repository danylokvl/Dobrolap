import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RequestsScreen from "../screens/help/RequestsScreen";
import RequestDetailsScreen from "../screens/help/RequestDetailsScreen";
import HelpVariantsScreen from "../screens/help/HelpVariantsScreen";
import AlreadyHelpedScreen from "../screens/help/AlreadyHelpedScreen";
import TopAppNavigation from "../components/TopAppNavigation";
import AnotherProfileScreen from "../screens/account/AnotherProfileScreen";
import DonateScreen from "../screens/help/DonateScreen";
import PaymentMethodScreen from "../screens/help/PaymentMethodScreen";
import ThankYouScreen from "../screens/help/ThankYouScreen";

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
          options={{
            animation: "slide_from_right",
            header: (props) => (
              <TopAppNavigation {...props} add2StepsProgressBar />
            ),
          }}
        />
        <Stack.Screen
          name='Payment Methods'
          component={PaymentMethodScreen}
          options={{
            animation: "slide_from_right",
            header: (props) => (
              <TopAppNavigation
                {...props}
                add2StepsProgressBar
                //   additionalButton1='plus'
              />
            ),
          }}
        />
        <Stack.Screen
          name='Thank You Screen'
          component={ThankYouScreen}
          options={{ animation: "slide_from_right", headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default HelpScreenNavigator;
