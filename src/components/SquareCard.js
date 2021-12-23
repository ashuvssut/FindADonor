import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";


const SquaredView = styled.TouchableOpacity`
	width: 40%;
	height: 35%;
	margin-bottom: 10%;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	border-radius: ${perfectSize("1")}px;
	border-width: 2px;
	border-color: #f88386;
`;

const SquaredCard = ({ children, onPress }) => {
	return <SquaredView onPress={onPress}>{children}</SquaredView>;
};

export default SquaredCard;
