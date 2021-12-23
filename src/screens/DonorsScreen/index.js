import React, { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import perfectSize from "../../utils/pixelPerfect";

import FilterBar from "../../components/FilterBar";
import { Screen } from "../../components/Screen";
import {
	Avatar,
	Capitalize,
	Card,
	Description,
	Filters,
	Italic,
	Profile,
	ActionButton,
	Title,
} from "./styledComponents";
import { findAllDonors } from "../../redux/actions/donorsAction";
import { connect } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { MaleAvatar } from "svg";

function DonorsScreen({ findAllDonors, donors }) {
	const [distance, setDistance] = useState(null);
	const [blood, setBlood] = useState(null);
	const [isFilterOpen, setIsFilterOpen] = useState(true);
	useFocusEffect(
		React.useCallback(() => {
			const subscribe = async () => findAllDonors();

			subscribe();
		}, []),
	);
	const renderItem = donorObj => {
		const donor = donorObj.item;
		return (
			<Card>
				<Profile>
					<Avatar>
						<MaleAvatar style={styles.avatar} />
					</Avatar>
					<View>
						<Title numberOfLines={1}>{donor.name}</Title>
						<Description>
							{`${donor.bloodGroup} ${donor.role}, `.replace(/^\w/, c =>
								c.toUpperCase(),
							)}

							{donor.age + " years old"}
						</Description>
						<Description>
							<AntDesign name="mail" size={perfectSize("1")} color="#000" />
							{" " + donor.email}
						</Description>
						<Description>
							<AntDesign name="phone" size={perfectSize("1")} color="#000" />
							{" " + donor.phoneNumber}
						</Description>
					</View>
				</Profile>
				<Description numberOfLines={2}>
					<Italic>
						<Capitalize>
							{`${donor.landmark}, ${donor.city}, ${donor.district}, ${donor.state}`}
						</Capitalize>
					</Italic>
				</Description>
				<View style={{ flexDirection: "row" }}>
					<ActionButton>
						<Text style={styles.buttonText}>Request</Text>
					</ActionButton>
					<ActionButton>
						<Text style={styles.buttonText}>Locate</Text>
					</ActionButton>
				</View>
			</Card>
		);
	};
	return (
		<Screen>
			<Filters
				style={
					isFilterOpen
						? { transform: [{ translateY: 0 }] }
						: { transform: [{ translateY: -300 }], height: 0 }
				}
			>
				<FilterBar
					options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]}
					unit={"km"}
					activeOption={distance}
					setActiveOption={setDistance}
					iconName={"swap"}
					iconPack={"antdesign"}
				/>
				<FilterBar
					options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
					unit={""}
					activeOption={blood}
					setActiveOption={setBlood}
					iconName={"blood-drop"}
					iconPack={"fontisto"}
				/>
			</Filters>
			{/* <TouchableOpacity
				style={styles.filterIconBox}
				onPress={() => setIsFilterOpen(!isFilterOpen)}
			>
				<AntDesign
					name="filter"
					size={perfectSize("3")}
					color="#F88386"
					style={{ marginTop: 2 }}
				/>
			</TouchableOpacity> */}
			{/* <FAB
					style={styles.filterIconBox}
					icon="filter"
					color="#F88386"
					onPress={() => setIsFilterOpen(!isFilterOpen)}
				/> */}
			{donors === null ? (
				<Title style={{ marginTop: 30, textAlign: "center" }}>Loading...</Title>
			) : (
				<FlatList
					data={donors}
					renderItem={renderItem}
					keyExtractor={donor => donor._id}
					ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
					contentContainerStyle={{ paddingTop: 10, paddingBottom: 10 }}
				/>
			)}
		</Screen>
	);
}

const mapStateToProps = state => {
	return {
		donors: state.donors.donors,
	};
};

export default connect(mapStateToProps, {
	findAllDonors,
})(DonorsScreen);

const styles = StyleSheet.create({
	avatar: {
		height: "100%",
		width: "100%",
	},
	buttonText: {
		color: "white",
	},
	filterIconBox: {
		width: 50,
		height: 50,
		backgroundColor: "white",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 100,
		elevation: 4,
		bottom: 5,
		// top: "auto",
		right: 5,
		position: "relative",
	},
	// filterIconBox: { // FAB
	// 	backgroundColor: "white",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// 	position: "absolute",
	// 	right: 0,
	// 	bottom: 0,
	// 	padding: 0,
	// 	margin: 16,
	// },
});
