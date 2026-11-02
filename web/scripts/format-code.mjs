import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const BIN = fileURLToPath(
	new URL("../node_modules/@biomejs/biome/bin/biome", import.meta.url),
);

export function formatCode(text, filePath) {
	return execFileSync(
		process.execPath,
		[BIN, "format", `--stdin-file-path=${filePath}`],
		{ input: text, encoding: "utf8", maxBuffer: 16 * 1024 * 1024 },
	);
}
