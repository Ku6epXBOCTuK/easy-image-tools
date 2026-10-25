// NOTE: Static server for e2e (Playwright webServer) and check:cwv. Serves
// web/build: /foo -> foo.html | foo/index.html, MIME by extension, gzip for
// text assets (prod parity for Lighthouse). Run: node scripts/serve-static.mjs
import { createServer } from "node:http";
import { readFileSync, statSync } from "node:fs";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const portIndex = process.argv.indexOf("--port");
const PORT =
	portIndex >= 0 ? Number(process.argv[portIndex + 1]) || 4173 : 4173;
const ROOT = fileURLToPath(new URL("../build", import.meta.url));

const MIME = {
	".html": "text/html; charset=utf-8",
	".js": "text/javascript",
	".mjs": "text/javascript",
	".css": "text/css",
	".json": "application/json",
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp",
	".svg": "image/svg+xml",
	".ico": "image/x-icon",
	".woff2": "font/woff2",
	".woff": "font/woff",
	".ttf": "font/ttf",
	".txt": "text/plain; charset=utf-8",
	".xml": "application/xml",
	".map": "application/json",
};

function candidates(pathname) {
	const rel = pathname.replace(/\\/g, "/").replace(/^\/+/, "");
	const base = rel ? join(ROOT, ...rel.split("/")) : ROOT;
	const out = [base];
	if (!extname(base)) {
		out.push(`${base}.html`);
		out.push(join(base, "index.html"));
	}
	return out;
}

const COMPRESSIBLE = new Set([
	".html",
	".js",
	".mjs",
	".css",
	".json",
	".svg",
	".txt",
	".xml",
	".map",
]);

function serve(req, res) {
	const url = new URL(req.url, `http://${req.headers.host}`);
	const path = decodeURIComponent(url.pathname);
	for (const file of candidates(path)) {
		try {
			if (!statSync(file).isFile()) continue;
			const type = MIME[extname(file)] ?? "application/octet-stream";
			const headers = { "Content-Type": type, "Cache-Control": "no-store" };
			let body = readFileSync(file);
			if (
				COMPRESSIBLE.has(extname(file)) &&
				String(req.headers["accept-encoding"] ?? "").includes("gzip")
			) {
				headers["Content-Encoding"] = "gzip";
				body = gzipSync(body);
			}
			res.writeHead(200, headers);
			res.end(body);
			return;
		} catch {
			// NOTE: Not found here: try the next candidate.
		}
	}
	res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
	res.end("Not found: " + path);
}

createServer(serve).listen(PORT, "127.0.0.1", () => {
	console.log(`[serve-static] serving ${ROOT} on http://127.0.0.1:${PORT}`);
});
