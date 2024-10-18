import { StyleSheet } from "react-native";
import { COLORS, FONT_SIZE } from "../../constants/typography";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding:12,
    borderWidth:1,
    borderColor: COLORS.gray2
  },
  name:{
    fontSize: FONT_SIZE.lg,
    color: COLORS.gray5
  },
  specialty:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray4,
    marginTop:5
  },
  containerRow:{
    flexDirection:'row',
    marginTop:10,
  },
  containerText:{
    marginTop:10,
    marginLeft:5,
    flex:1,
  },
  icon:{
    width: 40,
    height: 40,
    marginRight: 1,
  },
  date:{
    fontSize: FONT_SIZE.md,
    color: COLORS.gray4
  },
  hour:{
    marginTop:15,
    fontSize: FONT_SIZE.md,
    color: COLORS.gray4
  },
  btn:{
    justifyContent:'center',
  },
})