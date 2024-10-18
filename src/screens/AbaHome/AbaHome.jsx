import { Image, Text, TextInput, View } from "react-native";
import { styles } from "./AbaHome.style";
import Button from "../../components/Button/Button";
import icon from "../../constants/icon";


export default function AbaHome() {
  return (
      <View style={styles.container}>
        <View>
          <Image source={icon.logo}/>
        </View>
        <View>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"/>
          <Button text="Acessar"/>
        </View>
        <View>
          <Text style={styles.text}>Não tem uma conta? <Text style={styles.text1}>Cadastre-se</Text></Text>
        </View>
      </View>
  );
}