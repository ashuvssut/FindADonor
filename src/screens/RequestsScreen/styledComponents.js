import styled from "styled-components";
import perfectSize from "../../utils/pixelPerfect";


export const Body = styled.View`
	/* background-color: aliceblue; */
	flex: 1;
	align-items: center;
	justify-content: space-evenly;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const CardTitle = styled.Text`
	color: #343640;
`;

export const Name = styled.Text`
	position: absolute;
	color: #fff;
	font-size: ${perfectSize("4")}px;
	top: ${perfectSize("25")}px;
	align-self: center;
`;
