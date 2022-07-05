import {useNavigation} from '@react-navigation/core';
import {useEffect, useState} from 'react';
import {View, Text, ImageBackground, Pressable, Button} from 'react-native';
import {StyleSheet} from 'react-native';
import bg from '../../assets/images/bg.jpg';
const IncommingCallScreen = () => {
  const [caller, Setcaller] = useState('');
  const navigation = useNavigation();
  useEffect(() => {
    Setcaller('user2');
  }, []);
  const calling = () => {
    navigation.navigate('VideoCall', {incomingcall: true});
  };
  return (
    <View style={{height: '100%'}}>
      <ImageBackground source={bg} style={Styles.bg} resizeMode="cover">
        <Text>{caller}</Text>
        <Pressable onPress={calling}>
          <View>
            <Text style={Styles.btn}>Answer</Text>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default IncommingCallScreen;
const Styles = StyleSheet.create({
  btn: {
    backgroundColor: '#5FBDEC',
    color: '#ffff',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
    borderRadius: 20,
    marginTop: 200,
  },

  bg: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
});
