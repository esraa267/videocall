import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
const ContactScreen = () => {
  const voximplant = Voximplant.getInstance();
  const navigation = useNavigation();
  useEffect(() => {
    voximplant.on(Voximplant.ClientEvents.IncomingCall, incomcallEvent => {
      navigation.navigate('IncommingCallScreen');
    });
    return () => {
      voximplant.off(Voximplant.ClientEvents.IncomingCall);
    };
  }, []);
  const call = () => {
    navigation.navigate('VideoCall');
  };
  return (
    <Pressable onPress={call}>
      <Text>Call</Text>
    </Pressable>
  );
};
export default ContactScreen;
