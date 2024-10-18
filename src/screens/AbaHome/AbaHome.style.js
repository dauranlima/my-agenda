import { StyleSheet } from "react-native";
import { COLORS } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    padding:12,
  },
  texto:{
    fontSize: 20,
    color: "white"
  }
})