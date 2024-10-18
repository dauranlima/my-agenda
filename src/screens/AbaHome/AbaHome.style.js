import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
    justifyContent: "center",
    padding:12,
  },
  texto:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray5,
    textAlign:'center',
  }
})