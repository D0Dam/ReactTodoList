import React from "react";

const DidListItem = ({ did, deleteThis }) => {
	const onClick = () => {
		deleteThis(did);
	};
	return (
		<div className="didListItem">
			<div>{did.todo}</div>
			<button onClick={onClick}>삭제</button>
		</div>
	);
};

export default DidListItem;
