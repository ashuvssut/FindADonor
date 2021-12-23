import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";

const LoginButton = styled.Pressable`
	width: ${perfectSize("40%")}px;
	height: ${perfectSize("5.5%")}px;
	background-color: #ccc;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${perfectSize("1%")}px;
	margin-top: ${perfectSize("2")}px;
	elevation: 5;
	flex-direction: row;
	/* border-radius:${perfectSize("3.25%")}px; */
`;

const DisabledButton = ({ children }) => {
	return <LoginButton>{children}</LoginButton>;
};

export default DisabledButton;
