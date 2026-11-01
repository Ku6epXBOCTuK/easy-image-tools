import { readFileSync, writeFileSync } from "node:fs";

const specifier = "github:Ku6epXBOCTuK/ui-kit#main";
const path = new URL("../package.json", import.meta.url);
const pkg = JSON.parse(readFileSync(path, "utf8"));

// NOTE: The kit is a sibling checkout locally (link:), so CI has to point the
// package elsewhere before install; the dependency may sit in either section.
for (const section of ["dependencies", "devDependencies"]) {
	const deps = pkg[section];
	if (deps?.["@ku6epxboctuk/ui-kit"] === undefined) continue;
	deps["@ku6epxboctuk/ui-kit"] = specifier;
}

writeFileSync(path, `${JSON.stringify(pkg, null, "\t")}\n`);
console.log(`@ku6epxboctuk/ui-kit -> ${specifier}`);
