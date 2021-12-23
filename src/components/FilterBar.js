import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";

import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Icon from "./Icon";

const FilterBar = ({
	options,
	unit,
	activeOption,
	setActiveOption,
	iconName,
	iconPack,
}) => {
	return (
		<Root style={{ width: "100%" }}>
			<IconBox style={{ height: "100%" }}>
				<Icon
					iconPack={iconPack}
					name={iconName}
					size={perfectSize("2")}
					color="#F88386"
				/>
			</IconBox>

			<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
				<View style={styles.optionsContainer}>
					{options.map((option, i) => {
						return (
							<Option
								key={`option-${i}`}
								onPress={() =>
									option === activeOption
										? setActiveOption(null)
										: setActiveOption(option)
								}
							>
								<Text
									style={
										activeOption === option
											? styles.activeOption
											: styles.optionText
									}
								>
									{option + unit}
								</Text>
							</Option>
						);
					})}
				</View>
			</ScrollView>
		</Root>
	);
};

export default FilterBar;

const styles = StyleSheet.create({
	optionsContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "center",
		paddingLeft: 3,
		paddingTop: 3,
		paddingBottom: 3,
	},
	optionText: {
		backgroundColor: "#fff",
		color: "#F88386",
		height: "100%",
		width: "100%",
		textAlign: "center",
		paddingTop: 3,
	},
	activeOption: {
		backgroundColor: "#F88386",
		color: "#fff",
		height: "100%",
		width: "100%",
		textAlign: "center",
		paddingTop: 3,
	},
});

const Option = styled.TouchableOpacity`
	width: 50px;
	height: 27px;
	justify-content: center;
	align-items: center;
	color: white;
	font-weight: bold;
	margin: 0 3px;
	border-radius: 5px;
	border-color: #f88386;
	border-width: 1px;
	overflow: hidden;
`;

const Root = styled.View`
	flex-direction: row;
	position: relative;
	align-items: center;
	justify-content: center;
	padding-top: 10px;
`;
const IconBox = styled.View`
	width: 30px
	align-items: center;
	justify-content: center;
	flex-direction: row;
	padding-left: 5px;
`;
