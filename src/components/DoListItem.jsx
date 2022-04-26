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

const DoText = styled.div`
	border-bottom: 0.2rem solid #dcd6f0;
`;

const Button = styled.button`
	width: 3.2rem;
`;

const DoListItem = ({ todo, goDid, todoId }) => {
	const onClick = () => {
		todo.check = true;
		goDid(todo);
	};
	return (
		<ListItem className="doListItem" id={todoId}>
			<DoText>{todo.todo}</DoText>
			<Button onClick={onClick}>check!</Button>
		</ListItem>
	);
};

export default DoListItem;
