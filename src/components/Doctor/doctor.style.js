import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: COLORS.white,
    padding:12,
    borderWidth:1,
    borderColor: COLORS.gray3,
    marginTop:10
  },
  icon:{
    width:70,
    height:70,
    marginRight:10,
    borderWidth:2,
    borderColor: '#7ed101',
    borderRadius:1000
  },
  name:{
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray5
  },
  specialty:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray4
  }
})