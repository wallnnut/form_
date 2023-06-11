export type HandleChangeFN = {
	data: { name: string; value: string | boolean };
	setData: <T>(prevState: T) => T;
};

export function handleChangeFn({ data, setData }: HandleChangeFN) {}
