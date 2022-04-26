import React, { useState } from "react";
import styled from "styled-components";

const TitleDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleName = styled.div`
	font-size: 3.6rem;
	margin-bottom: 2.4rem;
	padding-bottom: 0.6rem;
	border-bottom: 0.2rem solid #dcd6f7;
`;

const InputBox = styled.div`
	display: grid;
	width: 36rem;
	height: 2.4rem;
	grid-template-columns: 1fr 3.6rem;
`;

const Button = styled.button`
	font-size: 1.2rem;
`;
const Title = ({ getTodo }) => {
	const [value, setValue] = useState("");
	const OnChange = (e) => {
		setValue(e.target.value);
	};
	const onClick = () => {
		getTodo(value);
		setValue("");
	};
	const onKeyPress = (e) => {
		if (e.key == "Enter") {
			onClick();
		}
	};
	return (
		<TitleDiv>
			<TitleName className="title">TODOLIST</TitleName>
			<InputBox>
				<input
					className="inputDo"
					value={value}
					onChange={OnChange}
					onKeyPress={onKeyPress}
				/>
				<Button className="inputDoBtn" onClick={onClick}>
					+
				</Button>
			</InputBox>
		</TitleDiv>
	);
};

export default Title;
