import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./account.style";
import Button from "../../components/Button/Button";
import icon from "../../constants/icon";


export default function Account() {
  return (
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image source={icon.logo}/>
        </View>
        <View style={styles.containerInput}>
          <TextInput style={styles.input} placeholder="Nome"/>
          <TextInput style={styles.input} placeholder="E-mail"/>
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Senha"/>
          <Button text="Criar conta"/>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>Já tenho conta.</Text>
          <TouchableOpacity>
            <Text style={styles.footerLink}> Fazer Login</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}