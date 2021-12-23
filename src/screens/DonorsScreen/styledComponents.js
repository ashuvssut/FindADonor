import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const Flex = styled.View`
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const Filters = styled.View`
	background-color: #fff;
	padding-bottom: 15px;
	elevation: 2;
`;

export const Card = styled.View`
	background-color: #fff;
	padding: 10px 15px;
	margin: 0px 10px;
	elevation: 5;
	border-radius: 5px;
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
	color: #707070;
	font-size: ${perfectSize("2.4")}px;
	margin-bottom: ${perfectSize("0.2")}px;
	font-weight: 600
	margin-left: 10px;
`;
export const Description = styled.Text`
	color: #909090;
	font-size: ${perfectSize("1.3")}px;
	margin-left: 10px;
`;

export const ActionButton = styled.TouchableOpacity`
	height: ${perfectSize("3.5")}px;
	background-color: #f88386;
	align-items: center;
	justify-content: center;
	padding: 0 20px;
	border-radius: 10px;
	margin-top: 10px;
	margin-right: 10px;
	flex-direction: row;
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

export const Name = styled.Text`
	position: absolute;
	color: #fff;
	font-size: ${perfectSize("4")}px;
	top: ${perfectSize("25")}px;
	align-self: center;
`;
