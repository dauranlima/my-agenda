import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "space-between",
    padding:50,
  },
  containerLogo:{
    alignItems:'center',
  },
  logo:{
    width: 100,
    height: 23,
  },
  containerInput:{
    gap: 10,
  },
  input:{
    backgroundColor: COLORS.gray2,
    padding:10,
    borderRadius:10
  },
  text:{
  },
  footer:{
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
  },
  footerLink:{
    color: COLORS.blue,
  }
})