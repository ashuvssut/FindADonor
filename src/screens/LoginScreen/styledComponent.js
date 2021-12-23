import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const LoginButton = styled.TouchableOpacity`
	width: ${perfectSize("40%")}px;
	height: ${perfectSize("5.5%")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${perfectSize("1%")}px;
	margin-top: ${perfectSize("2")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${perfectSize("3.25%")}px; */
`;

export const SignupButton = styled.TouchableOpacity`
	width: ${perfectSize("40%")}px;
	height: ${perfectSize("5.5%")}px;
	background-color: #343640;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${perfectSize("1%")}px;
	margin-top: ${perfectSize("3")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${perfectSize("3.25%")}px; */
`;

export const LoginText = styled.Text`
	color: white;
	font-size: ${perfectSize("2%")}px;
`;

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;

export const StyledInput = styled.TextInput`
	width: ${perfectSize("80%")}px;
	height: ${perfectSize("5.5%")}px;
	border-width: 1px;
	border-radius: ${perfectSize("1%")}px;
	margin-bottom: ${perfectSize("2%")}px;
	padding: ${perfectSize("0%")}px ${perfectSize("2%")}px;
`;

export const BreakLine = styled.View`
	border-width: 0.4px;
	margin: ${perfectSize("5%")}px ${perfectSize("0%")}px;
	width: ${perfectSize("80%")}px;
`;

export const ExtraText = styled.Text`
	color: #c4c4c4;
`;
