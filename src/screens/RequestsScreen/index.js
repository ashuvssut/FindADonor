import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Pressable,
	Keyboard,
} from "react-native";
import perfectSize from "../../utils/pixelPerfect";

import { Screen } from "../../components/Screen";

export default function RequestsScreen({ navigation }) {
	return (
		<Screen>
			<Pressable style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>
				<Text style={{color: "black", fontSize: 100}}>donorland</Text>
			</Pressable>
		</Screen>
	);
}

const styles = StyleSheet.create({
  
});
