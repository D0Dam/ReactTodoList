import React from "react";

const DoList = () => {
	return (
		<div>
			<div className="doListTitle">해야할 일</div>

			<li className="doList">
				<div className="doListItem">
					<div>컴퓨터 하기</div>
					<button>check!</button>
				</div>
			</li>
		</div>
	);
};

export default DoList;
