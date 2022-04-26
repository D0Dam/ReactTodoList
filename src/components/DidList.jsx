import React from "react";
import DidListItem from "./DidListItem";

const DidList = ({ didList, deleteThisRoot }) => {
	const deleteThis = (did) => {
		deleteThisRoot(did);
	};
	return (
		<div>
			<div className="doListTitle">끝난 일</div>

			<div className="doList">
				{didList &&
					didList.map((did) => (
						<DidListItem did={did} key={did.id} deleteThis={deleteThis} />
					))}
			</div>
		</div>
	);
};

export default DidList;
