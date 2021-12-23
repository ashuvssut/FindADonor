import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Dimensions,
	Image,
	Pressable,
	ActivityIndicator,
} from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import perfectSize from "../../utils/pixelPerfect";

import { Screen } from "../../components/Screen";
import {
	FilterText,
	FilterView,
	SideView,
	MapCard,
	Title,
	Description,
	BoldText,
	Italic,
	Capitalize,
	Avatar,
	Profile,
	RequestButton,
} from "./styledComponent";
import { AntDesign } from "@expo/vector-icons";
import Animated, {
	useSharedValue,
	Easing,
	useAnimatedStyle,
	withTiming,
} from "react-native-reanimated";
import { connect } from "react-redux";
import { findAllDonors } from "../../redux/actions/donorsAction";
import { useFocusEffect } from "@react-navigation/native";

const SearchScreen = ({ navigation, location, findAllDonors, donors }) => {
	const startWidth = -perfectSize("100");
	const endWidth = perfectSize("0");
	const translateX = useSharedValue(startWidth);

	useFocusEffect(
		React.useCallback(() => {
			const subscribe = async () => await findAllDonors();

			subscribe();
		}, []),
	);

	const viewStyle = useAnimatedStyle(() => {
		return {
			transform: [{ translateX: translateX.value }],
		};
	});

	const openDrawer = () => {
		translateX.value = withTiming(endWidth, {
			duration: 500,
			easing: Easing.out(Easing.exp),
		});
	};

	const closeDrawer = () => {
		translateX.value = withTiming(startWidth, {
			duration: 500,
			easing: Easing.out(Easing.exp),
		});
	};

	return (
		<Screen>
			{location && donors !== null ? (
				<>
					<MapView
						initialRegion={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
							latitudeDelta: 0.0922,
							longitudeDelta: 0.0421,
						}}
						customMapStyle={require("../../utils/map.json")}
						style={styles.map}
					>
						<Marker
							key={1}
							coordinate={location.coords}
							title="Me"
							pinColor="aqua"
							description="My Location"
						/>
						{/* {console.log(donors)} */}
						{donors.map((donor, index) => (
							<Marker
								key={index}
								coordinate={donor.location}
								title={donor.name}
								pinColor="red"
								description="Donor"
							>
								<Callout tooltip>
									<MapCard>
										<Profile>
											<Avatar>
												<Image
													style={styles.avatar}
													source={require("../../assets/images/Avatar.png")}
												/>
											</Avatar>
											<View>
												<Title numberOfLines={1}>{donor.name}</Title>
												<Description>
													{`${donor.bloodGroup} ${donor.role}, `.replace(
														/^\w/,
														c => c.toUpperCase(),
													)}

													{donor.age + " years old"}
												</Description>
												<Description>
													<AntDesign name="phone" size={perfectSize("1")} color="#fff" />
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
										<RequestButton>
											<Text>Request the Donor</Text>
										</RequestButton>
									</MapCard>
								</Callout>
							</Marker>
						))}
					</MapView>
					<FilterView onPress={() => openDrawer()}>
						<AntDesign name="filter" size={perfectSize("3")} color="#fff" />
						<FilterText>FILTER</FilterText>
					</FilterView>
					<Animated.View style={[styles.sideMenu, viewStyle]}>
						<View style={styles.menu}></View>
						<Pressable
							onPress={() => closeDrawer()}
							style={styles.backdrop}
						></Pressable>
					</Animated.View>
				</>
			) : (
				<ActivityIndicator style={{ alignSelf: "center" }} size="large" />
			)}
		</Screen>
	);
};

const mapStateToProps = state => {
	return {
		location: state.user.location ? state.user.location : null,
		donors: state.donors.donors,
	};
};

export default connect(mapStateToProps, {
	findAllDonors,
})(SearchScreen);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		// alignItems: 'center',
		// justifyContent: 'center',
	},
	map: {
		flex: 1,
	},
	sideMenu: {
		position: "absolute",
		flexDirection: "row",
		width: perfectSize("100"),
		height: perfectSize("110"),
	},
	menu: {
		backgroundColor: "#f88386",
		width: perfectSize("70"),
		height: perfectSize("110"),
	},
	backdrop: {
		width: perfectSize("30"),
		height: perfectSize("110"),
	},
	avatar: {
		position: "relative",
		resizeMode: "contain",
		width: "100%",
		height: "100%",
	},
});
