import React from "react";

const DidList = () => {
	return (
		<div>
			<div className="doListTitle">끝난 일</div>

			<li className="doList">
				<div className="doListItem">
					<div>잠을 야무지게 자기</div>
					<button>삭제</button>
				</div>
			</li>
		</div>
	);
};

export default DidList;
