import { FlatList, View } from "react-native";
import { styles } from "./AbaCalendar.style";
import icon from "../../constants/icon";
import {appointments} from '../../constants/data'
import Appointment from "../../components/Appointment/Appointment";

export default function AbaCalendar() {
  return (
      <View style={styles.container}>
        <FlatList
          data={appointments}
          keyExtractor={(appoint)=> appoint.id_appointment}
          renderItem={({item})=>(
            <Appointment
            name={item.doctor}
            specialty={item.specialty}
            services={item.service}
            BookD={item.booking_date}
            BookH={item.booking_hour}
            />
          )}
        />
      </View>
  );
}