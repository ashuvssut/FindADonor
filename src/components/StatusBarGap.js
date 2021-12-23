import React from "react";
import styled from "styled-components";
import perfectSize from "../utils/pixelPerfect";

import { View } from "react-native";


const StatusBarGap = ({height}) => {
  const heightFinal = height ? perfectSize(height): perfectSize(2.4);
  
	return (
		<View
			style={{
				height: heightFinal,
				// backgroundColor: "red",
        // width: 100,
			}}
		/>
	);
};

export default StatusBarGap;
