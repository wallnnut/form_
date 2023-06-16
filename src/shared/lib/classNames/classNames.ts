type Mods = Record<string, string | boolean>;

export function classNames(
	cls: string,
	mods?: Mods,
	additionalClasses?: string[]
) {
	if (additionalClasses && mods) {
		return [
			cls,
			...additionalClasses.filter(Boolean),
			Object.entries(mods)
				.filter(([className, value]) => Boolean(value))
				.map(([className]) => className),
		].join(" ");
	}
	if (additionalClasses) {
		return [cls, ...additionalClasses.filter(Boolean)].join(" ");
	}
	if (mods) {
		return [
			cls,
			Object.entries(mods)
				.filter(([className, value]) => Boolean(value))
				.map(([className]) => className),
		].join(" ");
	}
}

