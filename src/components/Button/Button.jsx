import { Alert, Text, TouchableOpacity } from "react-native";
import { styles } from "./Button.style";

export default function Button(props) {
  return(
    <>
      <TouchableOpacity style={[
        styles.btn,
        props.theme === 'danger' && styles.danger,
        props.theme === 'ghost' && styles.ghost,
        props.theme === 'secondary' && styles.secondary,
        (!props.theme || props.theme === "primary") && styles.primary
      ]}>
          <Text style={styles.texto}>{props.text}</Text>
      </TouchableOpacity>
    </>
  )
}