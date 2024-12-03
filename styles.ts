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
      justifyContent: 'space-between',
      alignItems: 'center',
    },  
  container: {
      flex: 1,
      backgroundColor: colors.primary,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  containerRunning: {
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
  boldText: {
        color: '#fff',
    userSelect: "none",
    fontWeight: 800,
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
  },
  box: {
    margin: 20,
    padding: 20,
    borderRadius: 16,
    maxHeight: 100,
    flex: 1,
    flexDirection: "row",
    borderColor: colors.primaryLight,
    backgroundColor: colors.primaryLight,
    justifyContent: 'space-between',
    gap: 20,
    alignItems: 'center',
  },


  });
  