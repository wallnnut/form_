type Mods = Record<string, string | boolean>;

export function classNames(cls: string, additionalClasses: string[] | []) {
	return [cls, ...additionalClasses.filter(Boolean)].join(" ");
}
