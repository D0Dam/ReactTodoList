import React from "react";
import DoListItem from "./DoListItem";

const DoList = ({ todoList, goDidRoot }) => {
	console.log(todoList);

	const goDid = (todo) => {
		goDidRoot(todo);
	};
	return (
		<div>
			<div className="doListTitle">해야할 일</div>

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
		</div>
	);
};

export default DoList;
