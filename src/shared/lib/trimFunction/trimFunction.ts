export function trimFunction<T>(dataToTrim: {
	[K in keyof T]: T[K];
}): T {
	const data = Object.entries(dataToTrim).reduce(
		(acc: any, [name, value]) => {
			if (typeof value === "string") {
				acc[name] = value.trim();
			}

			return acc;
		},
		dataToTrim
	);
	return data;
}
