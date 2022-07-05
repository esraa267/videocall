import { Image, View, Text, Button } from "react-native";
import { useState, useEffect } from "react";
import { Camera } from "expo-camera";
export default function Cam() {
  const [haspermission, setpermmision] = useState(null);
  const [camera, setcamera] = useState(null);
  const [img, setimg] = useState(null);
  const [type, settype] = useState(Camera.Constants.Type.back);
  useEffect(() => {
    (async () => {
      const camerastatus = await Camera.requestCameraPermissionsAsync();
      setpermmision(camerastatus.status === "granted");
    })();
  }, []);

  const takepic = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      setimg(data.url);
    }
  };
  if (haspermission === false) {
    return <Text>No</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Camera
          ref={(ref) => setcamera(ref)}
          type={type}
          style={{ flex: 1, aspectRatio: 1 }}
          ratio={"1:1"}
        />
      </View>
      <Button
        title="flip"
        onPress={() => {
          settype(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
      />
      <Button title="tack pic" onPress={takepic}></Button>
      {img && <Image source={{ url: img }} style={{ flex: 1 }}></Image>}
    </View>
  );
}
