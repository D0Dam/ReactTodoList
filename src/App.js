import React, { useRef, useState } from "react";
import Title from "./components/Title";
import DoList from "./components/DoList";
import DidList from "./components/DidList";
import styled from "styled-components";

const Template = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const TodoTitle = styled.div`
	margin: 3.6rem 1rem 3.6rem 1rem;
`;
const Contents = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

function App() {
	const [todos, setTodos] = useState([
		{
			id: 1,
			todo: "예시입니다.",
			check: false,
		},
	]);
	const [dids, setDids] = useState([
		{
			id: 0,
			todo: "did의 예시입니다.",
			check: true,
		},
	]);
	const todoId = useRef(2);
	const getTodo = (value) => {
		const newTodo = { id: todoId.current, todo: value, check: false };
		setTodos(todos.concat(newTodo));
		todoId.current += 1;
	};
	const goDidRoot = (did) => {
		setDids(dids.concat(did));
		setTodos(todos.filter((todo) => todo.id !== did.id));
	};
	const deleteThisRoot = (deleteDid) => {
		setDids(dids.filter((did) => did.id !== deleteDid.id));
	};
	return (
		<Template className="App">
			<TodoTitle>
				<Title getTodo={getTodo} />
			</TodoTitle>
			<Contents>
				<DoList todoList={todos} goDidRoot={goDidRoot} />
				<DidList didList={dids} deleteThisRoot={deleteThisRoot} />
			</Contents>
		</Template>
	);
}

export default App;
