import { Text, View, StyleSheet, Pressable } from "react-native";
import { styles } from "@/styles";
import { useEffect, useState } from "react";

const UPDATE_DELAY = 17;

const zeroPad = (num: number, length: number) => {
  let str = num.toString();

  while (str.length < length) {
    str = "0" + str;
  }
  return str;
};

const formatTime = (time: number) => {
  let str = "";

  if (time > 60000) {
    //minutes
    str += Math.floor(time / 60000) + ":";
  }

  str +=
    zeroPad(Math.floor((time % 60000) / 1000), 2) +
    "." +
    zeroPad(Math.floor((time % 1000) / 10), 2);

  return str;
};

export default function TimerScreen() {
  const [holdIgnore, setHoldIgnore] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    let interval: any;

    if (running) {
      interval = setInterval(() => {
        setTime(Date.now() - startTime);
      }, UPDATE_DELAY);

      setStartTime(Date.now());
    } else {
      clearInterval(interval);
      setTime(Date.now() - startTime);
    }

    return () => clearInterval(interval);
  }, [startTime, running]);

  return (
    <Pressable
      onPressIn={() => {
        setPressed(true);
        if (running) {
          setRunning(false);
          setHoldIgnore(true);
        }
      }}
      onPressOut={() => {
        setPressed(false);
        if (!running) {
          if (holdIgnore) {
            setHoldIgnore(false);
          } else {
            setRunning(true);
          }
        }
      }}
      style={pressed ? styles.containerPressed : styles.container}
    >
      <Text style={styles.text}>{formatTime(time)}</Text>
    </Pressable>
  );
}
