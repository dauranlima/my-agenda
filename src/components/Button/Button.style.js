import { StyleSheet } from "react-native";
import {COLORS, FONT_SIZE} from '../../constants/typography.js'

export const styles = StyleSheet.create({
  btn: {
    width:'100%',
    borderRadius:10,
    padding:12,
  },
  texto:{
    fontSize: FONT_SIZE.md,
    fontWeight:'bold',
    color: COLORS.white,
    textAlign:'center',
  },
  primary:{
    backgroundColor: COLORS.blue,
  },
  secondary:{
    backgroundColor: COLORS.gray4,
  },
  danger:{
    backgroundColor: COLORS.red,
  },
  ghost:{
    borderWidth:1,
    borderColor: COLORS.gray1,
  }

})