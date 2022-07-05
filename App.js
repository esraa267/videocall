/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, Pressable, Alert} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
export default function App() {
  const voximplant = Voximplant.getInstance();
  const navigation = useNavigation();
  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();
      if (status) {
        await voximplant.connect();
      }
    };
    connect();
  }, []);
  const call = async () => {
    try {
      const username = `user1@test.esraamohamed.voximplant.com`;
      await voximplant.login(username, password);
      navigation.navigate('ContactScreen');
    } catch (e) {
      Alert.alert(e.name);
    }
  };
  return (
    <Pressable style={{margin: 50}} onPress={call}>
      <Text> Login</Text>
    </Pressable>
  );
}
