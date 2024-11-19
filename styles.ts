import { StyleSheet } from "react-native";

export const colors = {
    primary : "#7a00d1",
    primaryLight: "#9603ff",
    primaryDark: "#b623ff",
    text: "#fff"
}

export const styles = StyleSheet.create({
    containerPressed: {
      flex: 1,
      backgroundColor: colors.primaryLight,
      justifyContent: 'center',
      alignItems: 'center',
    },  
  container: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  flatList: {
    backgroundColor: colors.primary,
    height: "100%",
    alignSelf: "center"
  },
  text: {
    color: '#fff',
    userSelect: "none"
  },
  mainText: {
    color: colors.text,
    userSelect: "none",
    fontSize: 72,
  },
  timePill: {
    color: colors.text,
    borderRadius: 16,
    borderColor: colors.primaryLight,
    backgroundColor: colors.primaryLight,
    padding: 20,
    margin: 10,
  }


  });
  