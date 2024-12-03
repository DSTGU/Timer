import { styles } from "@/styles";
import { getItem } from "@/utils/asyncStorage";
import { calculateAverage, calculateMean, formatTime } from "@/utils/calc";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

type propsType = {
  update: boolean;
};

const AveragesBox = (props: propsType) => {
  const [times, setTimes] = useState<Array<number>>([]);
  useEffect(() => {
    getItem("times").then((res) => setTimes(res));
  }, [props.update]);

  return (
    <View style={styles.box}>
      <View style={{ flex: 1, alignItems: "center", gap: 7 }}>
        <Text style={styles.text}>Ao5:</Text>
        <Text style={styles.text}>{formatTime(calculateMean(times, 5))}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "center", gap: 7 }}>
        <Text style={styles.text}>Ao12:</Text>
        <Text style={styles.text}>{formatTime(calculateMean(times, 12))}</Text>
      </View>
    </View>
  );
};

export default AveragesBox;
