import { FlatList, Text, View } from "react-native";
import { styles } from "./AbaHome.style";
import icon from "../../constants/icon";
import {doctors} from '../../constants/data'
import Doctor from "../../components/Doctor/Doctor";

export default function AbaHome() {
  return (
      <View style={styles.container}>
          <Text style={styles.texto}>Agende os sesu serviços médicos</Text>
        <FlatList
          data={doctors}
          keyExtractor={(doc)=> doc.id_doctor}
          renderItem={({item})=>(
            <Doctor
            icon={item.icon == "M" ? icon.male : icon.female}
            name={item.name}
            specialty={item.specialty}
            />
          )}
        />
      </View>
  );
}