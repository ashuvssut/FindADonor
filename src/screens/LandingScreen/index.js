import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";

import { Screen } from "../../components/Screen";
import {
	BottomView,
	DonateButton,
	DonateText,
	DonorButton,
	TopView,
} from "./styledComponent";
import { AntDesign } from "@expo/vector-icons";
import { BloodDonation,TopWaveWB } from "svg";
import perfectSize from "../../utils/pixelPerfect";

const LandingScreen = ({ navigation }) => {
	return (
		<Screen>
			{/* <Image
				style={styles.img}
				source={require("../../assets/images/WaveMobile.png")}
			/> */}
			<TopWaveWB width={perfectSize(411)} height={perfectSize(327.33)}/>
			<TopView>
				<Text style={styles.heading}>GIVE THE GIFT OF LIFE.</Text>
				<Text style={styles.heading1}>DONATE BLOOD.</Text>
			</TopView>
			<BottomView>
				{/* <Image
					style={styles.img}
					source={require("../../assets/images/illustration.png")}
				/> */}
				<BloodDonation height={perfectSize(290)} width={perfectSize(282)}/>
				<DonateButton onPress={() => navigation.navigate("Login")}>
					<DonateText>LOGIN</DonateText>
				</DonateButton>
			</BottomView>
		</Screen>
	);
};

export default LandingScreen;

const styles = StyleSheet.create({
	heading: {
		color: "white",
		fontSize: perfectSize("6%"),
	},
	heading1: {
		color: "#343640",
		fontSize: perfectSize("6%"),
	},
	viewHeading: {
		position: "absolute",
		backgroundColor: "blue",
		top: perfectSize("10%"),
		// flex:1,
		marginHorizontal: perfectSize("10%"),
	},
	img: {
		top: 0,
		resizeMode: "contain",
		width: "100%",
	},
});
