import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";

export const TopView = styled.View`
	position: absolute;
	width: 100%;
	height: ${perfectSize(411)}px;
	background-color: transparent;
	align-items: center;
	justify-content: flex-start;
`;

export const ProfileCircle = styled.View`
	width: ${perfectSize(170)}px;
	height: ${perfectSize(170)}px;
	border-radius: ${perfectSize(85)}px;
	margin-top: ${perfectSize(25)}px;
	background-color: #ebebeb;
`;

export const BottomView = styled.View`
	width: 100%;
	height: ${perfectSize(411)}px;
	align-items: center;
`;

export const Name = styled.Text`
	font-size: ${perfectSize(25)}px;
	font-weight: 700;
	color: #fff;
	align-items: center;
	top: ${perfectSize(20)}px;
`;

export const Role = styled.Text`
	font-size: ${perfectSize(16)}px;
	color: #e4e4e4;
	align-items: center;
	top: ${perfectSize(20)}px;
`;

export const Value = styled.Text`
	font-size: ${perfectSize(25)}px;
	font-weight: bold;
	color: #000;
	text-align: center;
`;

export const Key = styled.Text`
	font-size: ${perfectSize(15)}px;
	color: #b9bbc3;
	text-align: center;
	margin-top: ${perfectSize(7)}px;
`;

export const LogoutView = styled.TouchableOpacity`
	position: absolute;
	width: ${perfectSize(100)}px;
	height: ${perfectSize(30)}px;
	top: ${perfectSize(40)}px;
	right: ${perfectSize(10)}px;
	justify-content: center;
	align-items: center;
`;

export const Box = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const Logout = styled.Text`
	font-size: ${perfectSize(15)}px;
	color: #fff;
`;

export const ActionButton = styled.TouchableOpacity`
	padding: ${perfectSize(10)}px ${perfectSize(28)}px;
	background-color: #f88386;
	justify-content: center;
	align-items: center;
	border-radius: ${perfectSize(7)}px;
	elevation: 5;
`;

// export const LogoutFromAll = styled.TouchableOpacity`
// 	position: relative;
// 	padding: ${pixelPerfect(10)}px;
// 	background-color: #343640;
// 	justify-content: center;
// 	align-items: center;
// 	border-radius: ${pixelPerfect(5)}px;
// 	top: ${pixelPerfect(60)}px;
// `;

export const Card = styled.View`
	background: #fff;
	justify-content: center;
	align-items: flex-start;
	elevation: 5;
	background-color: #fff;
	padding: ${perfectSize(25)}px ${perfectSize(35)}px;
	margin: ${perfectSize(20)}px ${perfectSize(10)}px 0;
	border-radius: 5px;
`;

export const CardButton = styled.Pressable`
	padding: ${perfectSize(7)}px ${perfectSize(15)}px;
	border-color: #f88386;
	border-width: 2px;
	justify-content: center;
	align-items: center;
	border-radius: ${perfectSize(7)}px;
	margin-top: 10px;
`;

export const ButtonText = styled.Text`
	font-size: ${perfectSize(12)}px;
`;
