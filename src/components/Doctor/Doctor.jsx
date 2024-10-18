import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./doctor.style";
import icon from "../../constants/icon";

export default function Doctor(props) {
  return (
      <TouchableOpacity style={styles.container}>
        <Image style={styles.icon} source={props.icon}/>
        <View>
          <Text style={styles.name}>{props.name}</Text>
          <Text style={styles.specialty}>{props.specialty}</Text>
        </View>
      </TouchableOpacity>
  );
}