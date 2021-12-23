import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";


const ErrorView = styled.View`
	align-items: flex-start;
`;

const ErrorText = styled.Text`
	/* font-family: Montserrat-Regular; */
	color: red;
	font-size: 10px;
	text-align: center;
`;

const Errors = ({ texts }) => {
	return (
		<ErrorView>
			<ErrorText>{texts}</ErrorText>
		</ErrorView>
	);
};

export default Errors;
