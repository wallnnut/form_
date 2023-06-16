import React, { FC } from "react";
export interface ISymbolsCounter {
	string: string;
}

const SymbolsCounter: FC<ISymbolsCounter> = ({ string }) => {
	const count = string.trim().length;
	return <div>{count}/200 символов</div>;
};

export default SymbolsCounter;
