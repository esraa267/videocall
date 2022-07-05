import { Pressable, StyleSheet, View } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
const CallActionBox = () => {
  return (
    <View style={Styles.buttonsContainer}>
      <Pressable style={Styles.iconBtn}>
        <Ionicon name="ios-camera-reverse" size={30} color={"white"} />
      </Pressable>
      <Pressable style={Styles.iconBtn}>
        <MaterialIcons name="camera-off" size={30} color={"white"} />
      </Pressable>
      <Pressable style={Styles.iconBtn}>
        <MaterialIcons name="microphone-off" size={30} color={"white"} />
      </Pressable>
      <Pressable style={[Styles.iconBtn, { backgroundColor: "red" }]}>
        <MaterialIcons name="phone-hangup" size={30} color={"white"} />
      </Pressable>
    </View>
  );
};
export default CallActionBox;
const Styles = StyleSheet.create({
  buttonsContainer: {
    backgroundColor: "#333333",
    padding: 20,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: "auto",
  },
  iconBtn: {
    backgroundColor: "#4a4a4a",
    padding: 10,
    borderRadius: 50,
  },
});
