import {useRoute} from '@react-navigation/core';
import {useEffect, useRef, useState} from 'react';
import {Alert, PermissionsAndroid, Platform, View} from 'react-native';
import {Voximplant} from 'react-native-voximplant';
const VideoCall = () => {
  const [permision, setPermision] = useState(false);
  const [callState, setCallState] = useState('initializing....');
  const [LocalVideoId, setLocalVideoId] = useState('');
  const route = useRoute();
  const {incomingcall} = route.params;
  const voximplant = Voximplant.getInstance();
  const permisions = [
    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    PermissionsAndroid.PERMISSIONS.CAMERA,
  ];
  let call = useRef(incomingcall);

  useEffect(() => {
    const getPermisions = async () => {
      const granded = await PermissionsAndroid.requestMultiple(permisions);
      const recordAudio =
        granded[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === 'granted';
      const camera =
        granded[PermissionsAndroid.PERMISSIONS.CAMERA] === 'granted';
      if (!camera || !recordAudio) {
        Alert.alert('No permision');
      } else {
        setPermision(true);
      }
    };
    if (Platform.OS === 'android') {
      getPermisions();
    } else {
      setPermision(true);
    }
  }, []);
  useEffect(() => {
    if (!permision) {
      return;
    }
    const callSetting = {
      video: {
        sendVideo: true,
        receiveVideo: true,
      },
    };
    const answerCall = async () => {
      subscribeToCall();
      call.current.answer(callSetting);
    };
    const makecall = async () => {
      call.current = await voximplant.call('user2', callSetting);
      subscribeToCall();
    };
    const subscribeToCall = async () => {
      call.current.on(Voximplant.CallEvents.Failed, callEvent => {
        Alert.alert(callEvent.reason);
      });
      call.current.on(Voximplant.CallEvents.ProgressToneStart, callEvent => {
        setCallState('calling...');
      });
      call.current.on(Voximplant.CallEvents.Connected, callEvent => {
        setCallState('connecting...');
      });
      call.current.on(
        Voximplant.CallEvents.LocalVideoStreamAdded,
        callEvent => {
          setLocalVideoId(callEvent.videoStream.id);
        },
      );
    };
    if (incomingcall) {
      answerCall();
    } else {
      makecall();
    }
    return () => {
      call.off(Voximplant.CallEvents.Failed);
    };
  }, [permision]);
  return (
    <View>
      <Voximplant.VideoView
        videoStreamId={LocalVideoId}
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#ffff6e',
          position: 'absolute',
          right: 10,
          top: 100,
        }}
      />
      <Text>{callState}</Text>
    </View>
  );
};
export default VideoCall;
