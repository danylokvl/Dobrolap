import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/login-signup/LoginScreen";
import TopAppNavigation from "../components/TopAppNavigation";
import SignUp1Screen from "../screens/login-signup/SignUp1Screen";
import SignUp2Screen from "../screens/login-signup/SignUp2Screen";
import SignUp3Screen from "../screens/login-signup/SignUp3Screen";
import SignUp4Screen from "../screens/login-signup/SignUp4Screen";

const Stack = createNativeStackNavigator();

const AuthenticationNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={LoginScreen} />
      <Stack.Group
        screenOptions={{
          headerShown: true,
          header: (props) => <TopAppNavigation {...props} />,
        }}
      >
        <Stack.Screen name='Sign Up 1' component={SignUp1Screen} />
        <Stack.Screen
          name='Sign Up 2'
          component={SignUp2Screen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name='Sign Up 3'
          component={SignUp3Screen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name='Sign Up 4'
          component={SignUp4Screen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthenticationNavigator;
