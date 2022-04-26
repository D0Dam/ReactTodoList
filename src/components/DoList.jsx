import React from "react";
import DoListItem from "./DoListItem";
import styled from "styled-components";

const DoListDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DoTitle = styled.div`
	font-size: 1.6rem;
	margin-bottom: 1.2rem;
`;

const DoList = ({ todoList, goDidRoot }) => {
	console.log(todoList);

	const goDid = (todo) => {
		goDidRoot(todo);
	};
	return (
		<DoListDiv>
			<DoTitle className="doListTitle">해야할 일</DoTitle>

			<div className="doList">
				{todoList &&
					todoList.map((todo) => (
						<DoListItem
							todo={todo}
							todoId={todo.id}
							goDid={goDid}
							key={todo.id}
						/>
					))}
			</div>
		</DoListDiv>
	);
};

export default DoList;
