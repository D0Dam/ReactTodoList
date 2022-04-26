import React from "react";
import DidListItem from "./DidListItem";
import styled from "styled-components";

const DidListDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DidTitle = styled.div`
	font-size: 1.6rem;
	margin-bottom: 1.2rem;
`;

const DidList = ({ didList, deleteThisRoot }) => {
	const deleteThis = (did) => {
		deleteThisRoot(did);
	};
	return (
		<DidListDiv>
			<DidTitle className="didListTitle">끝난 일</DidTitle>

			<div className="didList">
				{didList &&
					didList.map((did) => (
						<DidListItem did={did} key={did.id} deleteThis={deleteThis} />
					))}
			</div>
		</DidListDiv>
	);
};

export default DidList;
