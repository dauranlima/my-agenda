import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./Login.style";
import Button from "../../components/Button/Button";
import icon from "../../constants/icon";


export default function Login() {
  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icon.logo}/>
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"/>
          <Button text="Acessar"/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}> Criar conta agora</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}