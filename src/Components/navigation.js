import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ContactScreen from '../screens/contactScreen';
import IncommingCallScreen from '../screens/incommingCallScreen';
import VideoCall from '../screens/videocallScreen';
export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={ContactScreen} />
        <Stack.Screen name="VideoCall" component={VideoCall} />
        <Stack.Screen name="incomming" component={IncommingCallScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
