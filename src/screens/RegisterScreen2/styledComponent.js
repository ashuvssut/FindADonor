import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const DonateButton = styled.TouchableOpacity`
	width: ${perfectSize("70%")}px;
	height: ${perfectSize("6.5%")}px;
	background-color: #c4c4c4;
	align-items: center;
	justify-content: center;
	border-radius: ${perfectSize("1%")}px;
	margin-top: ${perfectSize("3%")}px;
	elevation: 5;
`;

export const DonateText = styled.Text`
	color: white;
	font-size: ${perfectSize("3%")}px;
`;

export const DonorButton = styled.TouchableOpacity`
	width: ${perfectSize("70%")}px;
	elevation: 5;
	height: ${perfectSize("6.5%")}px;
	background-color: #343640;
	align-items: center;
	justify-content: center;
	border-radius: ${perfectSize("1%")}px;
	margin-top: ${perfectSize("3%")}px;
`;

export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;
