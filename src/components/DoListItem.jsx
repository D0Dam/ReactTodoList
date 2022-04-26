import React from "react";

const DoListItem = ({ todo, goDid, todoId }) => {
	const onClick = () => {
		todo.check = true;
		goDid(todo);
	};
	return (
		<div className="doListItem" id={todoId}>
			<div>{todo.todo}</div>
			<button onClick={onClick}>check!</button>
		</div>
	);
};

export default DoListItem;
