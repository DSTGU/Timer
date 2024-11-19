import { styles } from "@/styles";
import { formatTime } from "@/utils/calc";
import { Text, View } from "react-native";

type propsType = {
  time: number;
};

export function TimePill(props: propsType) {
  const time = props.time;
  return (
    <View style={styles.timePill}>
      <Text style={styles.text}> {formatTime(time)} </Text>
    </View>
  );
}
