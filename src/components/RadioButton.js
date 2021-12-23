import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";


const OuterBorder = styled.View`
	width: ${perfectSize("6%")}px;
	height: ${perfectSize("6%")}px;
	justify-content: center;
	align-items: center;
	border-radius: ${perfectSize("3%")}px;
	border-width: 1px;
`;

const InnerCircle = styled.View`
	width: ${perfectSize("4%")}px;
	height: ${perfectSize("4%")}px;
	background-color: #343640;
	border-radius: ${perfectSize("2%")}px;
`;

const RadioButton = ({ active }) => {
	return <OuterBorder>{active ? <InnerCircle /> : null}</OuterBorder>;
};

export default RadioButton;
