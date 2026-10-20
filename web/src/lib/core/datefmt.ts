const PAD2 = (n: number) => String(n).padStart(2, "0");

// NOTE: Tokens YYYY MM DD hh mm ss are replaced with local time values,
// all other characters are kept as-is.
export function formatStamp(date: Date, pattern: string): string {
	return pattern.replace(/YYYY|MM|DD|hh|mm|ss/g, (token) => {
		switch (token) {
			case "YYYY":
				return String(date.getFullYear());
			case "MM":
				return PAD2(date.getMonth() + 1);
			case "DD":
				return PAD2(date.getDate());
			case "hh":
				return PAD2(date.getHours());
			case "mm":
				return PAD2(date.getMinutes());
			case "ss":
				return PAD2(date.getSeconds());
			default:
				return token;
		}
	});
}
