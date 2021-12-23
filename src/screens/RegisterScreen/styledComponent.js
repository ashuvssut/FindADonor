import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const BottomView = styled.View`
	flex: 1;
	/* background-color: aliceblue; */
	align-items: center;
`;

export const CheckBoxView = styled.View`
	width: ${perfectSize("80%")}px;
	height: ${perfectSize("5%")}px;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
`;

export const RoleText = styled.Text`
	font-size: ${perfectSize("2%")}px;
`;
