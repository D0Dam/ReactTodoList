import React from "react";
import styled from "styled-components";

const ListItem = styled.div`
	display: flex;
	width: 20rem;
	height: 1.6rem;
	justify-content: space-between;
	margin: 1rem 0 1rem 0;
	font-size: large;
`;

const DidText = styled.div`
	border-bottom: 0.2rem solid #dcd6f0;
`;

const Button = styled.button`
	width: 3.2rem;
`;

const DidListItem = ({ did, deleteThis }) => {
	const onClick = () => {
		deleteThis(did);
	};
	return (
		<ListItem className="didListItem">
			<DidText>{did.todo}</DidText>
			<Button onClick={onClick}>삭제</Button>
		</ListItem>
	);
};

export default DidListItem;
