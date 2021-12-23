import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Pressable,
	ActivityIndicator,
} from "react-native";

import {
	SignupButton,
	LoginText,
	StyledInput,
	LoginButton,
} from "../LoginScreen/styledComponent";
import { BottomView, TopView } from "./styledComponent";
import DropDownPicker from "react-native-dropdown-picker";
import DisabledButton from "../../components/DisabledButton";
import schema from "../../validators/registerSchema2";
import { registerUserAction } from "../../redux/actions/userAction";
import Errors from "../../components/Errors";
import { Formik } from "formik";
import { connect } from "react-redux";
import perfectSize from "../../utils/pixelPerfect";
import { TopWaveWB } from "svg";
import { KeyboardUsingScreen } from "../../components/KeyboardUsingScreen";

const RegisterScreen2 = ({
	navigation,
	route,
	registerUserAction,
	isLoading,
}) => {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState(null);
	const [items, setItems] = useState([
		{ label: "A +ve", value: "A +ve" },
		{ label: "B +ve", value: "B +ve" },
		{ label: "AB +ve", value: "AB +ve" },
		{ label: "O +ve", value: "O +ve" },
		{ label: "A -ve", value: "A -ve" },
		{ label: "B -ve", value: "B -ve" },
		{ label: "AB -ve", value: "AB -ve" },
		{ label: "O -ve", value: "O -ve" },
	]);
	console.log(route.params);
	const register = async values => {
		const data = { ...values, ...route.params.values, bloodGroup: value };
		console.log(data);
		if (value !== null) {
			await registerUserAction(data);
			return;
		}
		alert("Select Blood Group and Try Again");
		return;
	};

	return (
		<KeyboardUsingScreen>
			<TopWaveWB width={perfectSize(411)} height={perfectSize(327.33)} />
			<Text style={styles.heading}>REGISTER</Text>
			<BottomView>
				<Formik
					validationSchema={schema}
					initialValues={{
						landmark: "",
						city: "",
						district: "",
						state: "",
						password: "",
					}}
					onSubmit={values => register(values)}
					validateOnMount
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						values,
						errors,
						isValid,
						touched,
					}) => (
						<>
							<DropDownPicker
								placeholder="Blood Group"
								open={open}
								value={value}
								items={items}
								setOpen={setOpen}
								setValue={setValue}
								setItems={setItems}
								style={styles.dropdown}
								defaultIndex={0}
								dropDownStyle={styles.dropDownStyle}
								containerStyle={styles.containerStyle}
								onChangeItem={item => console.log(item.label, item.value)}
							/>
							<StyledInput
								placeholder="House No , Landmark , Building"
								value={values.landmark}
								onChangeText={handleChange("landmark")}
								autoCorrect={false}
								onBlur={handleBlur("landmark")}
							/>
							{values.landmark.length !== 0 &&
								errors.landmark &&
								touched.landmark && <Errors texts={errors.landmark} />}
							<StyledInput
								placeholder="City"
								value={values.city}
								onChangeText={handleChange("city")}
								autoCorrect={false}
								onBlur={handleBlur("city")}
							/>
							{values.city.length !== 0 && errors.city && touched.city && (
								<Errors texts={errors.city} />
							)}
							<StyledInput
								placeholder="District"
								value={values.district}
								onChangeText={handleChange("district")}
								autoCorrect={false}
								onBlur={handleBlur("district")}
							/>
							{values.district.length !== 0 &&
								errors.district &&
								touched.district && <Errors texts={errors.district} />}
							<StyledInput
								placeholder="State"
								value={values.state}
								onChangeText={handleChange("state")}
								autoCorrect={false}
								onBlur={handleBlur("state")}
							/>
							{values.state.length !== 0 && errors.state && touched.state && (
								<Errors texts={errors.state} />
							)}
							<StyledInput
								placeholder="Password"
								value={values.password}
								onChangeText={handleChange("password")}
								autoCorrect={false}
								secureTextEntry={true}
								onBlur={handleBlur("password")}
							/>
							{values.password.length !== 0 &&
								errors.password &&
								touched.password && <Errors texts={errors.password} />}
							{isValid && value !== null ? (
								<LoginButton onPress={handleSubmit}>
									<LoginText>REGISTER</LoginText>
								</LoginButton>
							) : isLoading ? (
								<LoginButton onPress={handleSubmit}>
									<ActivityIndicator size="small" color="#fff" />
								</LoginButton>
							) : (
								<DisabledButton>
									<LoginText>REGISTER</LoginText>
								</DisabledButton>
							)}
						</>
					)}
				</Formik>
			</BottomView>
		</KeyboardUsingScreen>
	);
};

const mapStateToProps = state => {
	return { isLoading: state.user.isLoading };
};

export default connect(mapStateToProps, {
	registerUserAction,
})(RegisterScreen2);

const styles = StyleSheet.create({
	heading: {
		color: "white",
		fontSize: perfectSize("6%"),
		position: "absolute",
		top: perfectSize(150),
		textAlign: "center",
		width: "100%",
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
	dropdown: {
		backgroundColor: "transparent",
		height: perfectSize("5.5%"),
		width: perfectSize("80%"),
	},
	dropDownStyle: {
		backgroundColor: "#fafafa",
	},
	containerStyle: {
		height: perfectSize("5.5%"),
		width: perfectSize("80%"),
		marginBottom: perfectSize("2%"),
	},
});
