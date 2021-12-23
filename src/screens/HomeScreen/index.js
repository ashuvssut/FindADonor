import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

import { Screen } from "../../components/Screen";
import { BottomView, CardTitle, Name } from "./styledComponent";
import SquaredCard from "../../components/SquareCard";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { connect } from "react-redux";
import {TopWave,Banner} from "svg";
import perfectSize from "../../utils/pixelPerfect";

const { width } = Dimensions.get('window');

const HomeScreen = ({ name, navigation }) => {
	return (
		<Screen>
			<TopWave width={width} height={perfectSize(327.33)}/>
			<Name>Hi ! {name ? name.split(" ")[0] : "User"}</Name>
			<BottomView>
				<SquaredCard onPress={() => navigation.navigate("Donor")}>
					<MaterialCommunityIcons
						name="account-search-outline"
						size={50}
						color="#f88386"
					/>
					<CardTitle>FIND A DONOR</CardTitle>
				</SquaredCard>
				<SquaredCard onPress={() => navigation.navigate("Bank")}>
					<MaterialCommunityIcons name="blood-bag" size={50} color="#f88386" />
					<CardTitle>BLOOD BANK</CardTitle>
				</SquaredCard>
				<SquaredCard>
					<FontAwesome name="envelope-o" size={40} color="#f88386" />
					<CardTitle>REQUESTS</CardTitle>
				</SquaredCard>
				<SquaredCard onPress={() => navigation.navigate("Profile")}>
					<MaterialCommunityIcons
						name="face-profile"
						size={50}
						color="#f88386"
					/>
					<CardTitle>PROFILE</CardTitle>
				</SquaredCard>
			</BottomView>
		</Screen>
	);
};
const mapStateToProps = state => {
	return { name: state.user.userData.name };
};

export default connect(mapStateToProps)(HomeScreen);
const styles = StyleSheet.create({
	img: {
		resizeMode: "contain",
		width: perfectSize("100"),
	},
});
