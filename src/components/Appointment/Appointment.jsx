import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Appointment.style";
import icon from "../../constants/icon";
import Button from "../Button/Button";

export default function Appoitment(props) {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{props.services} - {props.name}</Text>
			<Text style={styles.specialty}>{props.specialty}</Text>
			<View style={styles.containerRow}>
        <View>
          <Image style={styles.icon} source={icon.calendar} />
  				<Image style={styles.icon} source={icon.clock} />
        </View>
				<View style={styles.containerText}>
					<Text style={styles.date}>{props.BookD}</Text>
					<Text style={styles.hour}>{props.BookH}</Text>
				</View>
				<TouchableOpacity style={styles.btn}>
					<Button text="Cancelar Reserva" theme="danger" />
				</TouchableOpacity>
			</View>
		</View>
	);
}
