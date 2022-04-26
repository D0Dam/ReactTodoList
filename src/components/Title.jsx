import React, { useState } from "react";

const Title = ({ getTodo }) => {
	const [value, setValue] = useState("");
	const OnChange = (e) => {
		setValue(e.target.value);
	};
	const preview = () => {
		getTodo(value);
	};
	return (
		<div>
			<div className="title">투두리스트</div>
			<input className="inputDo" value={value} onChange={OnChange} />
			<button className="inputDoBtn" onClick={preview}>
				+
			</button>
		</div>
	);
};

export default Title;
