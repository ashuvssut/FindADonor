import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const FilterView = styled.Pressable`
	position: absolute;
	bottom: ${perfectSize("5")}px;
	left: ${perfectSize("5")}px;
	width: ${perfectSize("30")}px;
	height: ${perfectSize("6")}px;
	border-radius: ${perfectSize("1")}px;
	background-color: black;
	justify-content: space-around;
	align-items: center;
	flex-direction: row;
`;

export const FilterText = styled.Text`
	color: white;
	font-size: ${perfectSize("2.4")}px;
`;

export const MapCard = styled.View`
	width: ${perfectSize("60")}px;
	border-radius: ${perfectSize("1")}px;
	background-color: black;
	justify-content: flex-start;
	align-items: flex-start;
	padding: ${perfectSize("2")}px ${perfectSize("2")}px ${perfectSize("2")}px ${perfectSize("2")}px;
`;

export const Profile = styled.View`
	flex-direction: row;
`;

export const Avatar = styled.View`
	width: ${perfectSize("15")}px;
	height: ${perfectSize("15")}px;
	margin: ${perfectSize("2")}px;
	border-radius: 200px;
	background-color: #0f0;
`;

export const Title = styled.Text`
	color: white;
	font-size: ${perfectSize("2.4")}px;
	margin-bottom: ${perfectSize("1")}px;
`;
export const Description = styled.Text`
	color: white;
	font-size: ${perfectSize("1.3")}px;
`;
export const Capitalize = styled.Text`
	text-transform: capitalize;
`;
export const Bold = styled.Text`
	font-weight: bold;
`;
export const Italic = styled.Text`
	font-style: italic;
`;

export const RequestButton = styled.TouchableOpacity`
	width: 100%;
	height: ${perfectSize("5")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: space-evenly;
	border-radius: 100px;
	margin-top: 10px;
	elevation: 5;
	flex-direction: row;
`;
