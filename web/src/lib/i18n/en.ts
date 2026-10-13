import type { Dict } from "./dict";

export const en: Dict = {
	brand: "easy-image-tools",
	header: {
		workspace: "Workspace",
		catalog: "Catalog",
		sectionsAria: "Sections",
		home: "Home page",
		uiKit: "UI Kit",
		chains: "Pipelines",
		pipeline: "Pipeline",
		footerNote:
			"All operations run locally in your browser — your files are never uploaded anywhere.",
	},
	footer: {
		hubsHeading: "Tool categories",
		hubsAria: "Tool categories",
	},
	categories: {
		all: "All",
		convert: "Convert",
		alpha: "Transparency",
		color: "Color",
		geometry: "Geometry",
		filters: "Filters",
		text: "Text",
		analyze: "Analyze",
		generate: "Generate",
	},
	home: {
		defaultTitle: "easy-image-tools — PNG utilities right in your browser",
		heroTitle: "What do you want to do with the image?",
		heroLead: "Find a tool — everything runs locally in your browser.",
		restoreLast: "↩ Restore last: {title}",
		changeTool: "← Change tool",
	},
	catalog: {
		pageTitle: "All tools — easy-image-tools",
		metaDescription:
			"Full catalog of PNG utilities: convert, transparency, color, geometry, analysis and image generation.",
		heading: "Tool catalog",
		lead: "Focused utilities for working with PNG. Inspect, transform, and export — locally in your browser.",
		toolsAvailable: "Tools available",
		toolsCount: "Tools",
		favorites: "Favorites",
	},
	toolPage: {
		fallbackTitle: "Tool",
		legendSource: "Source",
		legendSummary: "Summary",
		legendResult: "Result",
		legendParams: "Parameters",
		stepHeading: "Step {n}",
		removeStepAria: "Remove step",
		stepError: "Step {n} ({title}): {msg}",
		howToHeading: "How to use it",
		faqHeading: "Questions",
		relatedHeading: "Related tools",
		breadcrumbAria: "Breadcrumb",
		breadcrumbCatalog: "All tools",
	},
	categoryHub: {
		heading: "{label} tools",
		toolsHeading: "Tools in this category",
		fallbackDescription:
			"{label} tools that run locally in your browser: no upload, no signup, no limits.",
	},
	chain: {
		addStep: "Add step",
		changeTool: "Change tool",
		collapseStep: "Collapse step",
		expandStep: "Expand step",
		stepResult: "Result {n}",
		alignToggle: "Align tools and preview",
		inputLegend: "Input",
		resultLegend: "Result",
		paramsLegend: "Parameters",
		busyTitle: "Processing…",
		busyHint: "Running chain step",
		removeStepAria: "Remove step",
		warnPartial: "Step {n}: {ok} of {total} files processed, the rest failed",
		warnFirstOnly:
			"Step {n}: analyze works on one image — showing the first of {total}",
		warnSourceSkip: "{skipped} of {total} files could not be read",
		warnSizeLimitMiss:
			"Could not fit into {limit} KB — downloaded file is {actual} KB",
		stepFailed: "Step {n} failed",
		warnPartialShort: "Some files failed",
		warnFirstOnlyShort: "First file only",
		warnSourceSkipShort: "Files skipped",
		warnSizeLimitMissShort: "Over size limit",
	},
	savedChains: {
		pageTitle: "Saved pipelines — easy-image-tools",
		metaDescription:
			"Your saved image pipelines: named tool chains stored locally in your browser.",
		heading: "Saved pipelines",
		empty:
			"No saved pipelines yet — add a step on any tool page and it will appear here.",
		autoName: "Pipeline {stamp}",
		saveAs: "Save as pipeline",
		newChain: "New pipeline",
		use: "Open",
		rename: "Rename",
		renameSave: "Save name",
		deleteAction: "Delete",
		confirmDelete: "Sure?",
		nameAria: "Pipeline name",
	},
	sourceCard: {
		source: "Source",
		replaceImage: "Replace image",
		replaceHint: "Click to upload an image",
		countFiles: "{count} files",
		chooseImage: "choose an image",
		noSource: "no source — configure the parameters",
		alt: "Source image",
	},
	resultCard: {
		emptyTitle: "The result will appear here",
		emptyHint: "First upload a source image on the left",
		processingTitle: "Processing…",
		processingHint: "The image is being processed, this will take a moment",
		recalc: "Recalculating…",
		nextTool: "⛓ Next tool",
		breakChain: "✂ Break the chain",
		noResult: "no result yet",
		result: "Result",
		maskToggle: "Mask",
		previewPanel: "Preview",
		parts: "parts",
		clamped: "clamped to image bounds",
		aspectAdjusted: "size adjusted to keep aspect",
		grown: "grew beyond requested size — image is larger",
		alt: "Result image",
	},
	paramsCard: {
		noParams: "This tool has no parameters — the result is ready as is.",
		noSchema: "This tool has no schema yet.",
	},
	textInput: {
		heading: "Text",
		placeholder: "Paste data here",
		aria: "Text data",
		decode: "Decode",
	},
	textResult: {
		outputAria: "Text result",
		copied: "Copied",
		copy: "Copy",
		downloadTxt: "Download .txt",
	},
	actions: {
		generate: "Generate",
		generating: "Generating…",
		openImage: "Open image",
		download: "Download",
		downloadFormat: "Download {format}",
		formatAria: "Choose download format",
		alphaLoss: "Result has transparency — {format} will flatten it",
		sizeLimitKb: "Max size, KB",
		sizeLimitBmp:
			"Size limit does not apply to BMP — it is always uncompressed",
		actionFailed: "Failed",
	},
	textSource: {
		placeholder: "Paste base64 / hex / bytes…",
		trySample: "Try sample",
		render: "Render text",
	},
	download: {
		busy: "Preparing file…",
		file: "Download .{ext}",
	},
	infoPanel: {
		dimensions: "Dimensions",
		alpha: "Alpha channel",
		alphaYes: "yes — there are semi-transparent pixels",
		alphaNo: "no",
		colorCount: "Unique colors (RGBA)",
	},
	dropZone: {
		pickDefault: "Drop an image here or click to choose a file",
		overlayDefault: "Release the file to replace the image",
		pickTitle: "Drop a PNG here",
		pickHint: "or click / paste (Ctrl+V) — processed locally",
	},
	search: {
		placeholder: "Find a tool…",
		aria: "Search tools",
		nothingFound: "Nothing found — try another word.",
	},
	ui: {
		detailsAria: "Show details",
		showMask: "Show mask",
		decrease: "Decrease",
		increase: "Increase",
		reset: "Reset",
		pipette: "Eyedropper",
		themeLight: "Light theme",
		themeDark: "Dark theme",
		overlayTitle: "Watermark",
		overlayDrop: "Drop a watermark PNG or click",
		overlayRemove: "Remove watermark",
		width: "Width",
		height: "Height",
		from: "From",
		to: "To",
		font: "Font",
		size: "Size",
		color: "Color",
		bold: "Bold",
		fontSans: "Sans",
		fontSerif: "Serif",
		fontMono: "Mono",
		opacity: "Opacity",
		angle: "Angle",
		backingPlate: "Backing plate",
		addColor: "+ Add color",
		removeColor: "Remove color",
		themeToggle: "Toggle theme",
		language: "Language",
		addFav: "Add to favorites",
		removeFav: "Remove from favorites",
		github: "GitHub",
		telegram: "Telegram",
		twitch: "Twitch",
	},
	errors: {
		noImageRun: "This tool does not process images",
		sourceRequired: "Upload an image first",
		textRequired: "Enter text first",
		workerFailed: "Worker execution failed",
		workerUnavailable: "Worker is unavailable",
		notFound: "Page not found",
		noWatermark: "Pick a watermark image first",
		badTransform: "Degenerate transformation matrix",
		skewAngle: "Skew angles cannot be 90° or -90°",
		badHex: 'Invalid HEX color: "{value}"',
		radiusInt: "Radius must be a non-negative integer",
		kernelSize: "Kernel does not match the image dimensions",
		sizeInt: "Width and height must be integers ≥ 1",
		cropBounds:
			"Crop area doesn't fit: offset plus size exceeds the image bounds",
		noCanvasCtx: "Canvas 2D context is unavailable in this environment",
		badBase64: "Expected a base64 string or a data-uri of an image",
		imageDecode:
			"Can't read the image — the file is corrupted or the format is unsupported",
		qualityRange: "quality must be within 0..1",
		svgSize: "Could not determine SVG dimensions",
		svgLoad: "Failed to load SVG — check the markup",
		encodeUnsupported: "The browser does not support encoding to {mime}",
		unsupportedFile:
			"Unsupported file format ({type}). Supported formats are PNG, JPEG, WebP, GIF and BMP.",
		widthInt: "Image width must be an integer ≥ 1",
		noHexPixels: "No hex pixel values found",
		badPixelToken:
			"Each pixel must be 8 hex characters RRGGBBAA, separated by spaces",
		pixelCountMismatch:
			"Pixel count ({count}) is not divisible by width {width} without a remainder",
		badJson: "The file is not valid JSON",
		badPipelineShape: "The file structure does not look like a chain of steps",
		pipelineVersion: "Unsupported chain version: {version}",
		noSteps: "The file has no list of steps",
		paramNumber: 'Parameter "{id}" must be a number',
		paramString: 'Parameter "{id}" must be a string',
		paramBool: 'Parameter "{id}" must be a checkbox value',
		resizeSize: "Width and/or height must be positive",
		cropSize: "Crop width and height must be at least 1 px",
		sizePositive: "Dimensions must be positive and finite",
		tooManyParts: "Too many parts ({count}). The limit is {max}.",
		pageUnknown: 'No page is registered under "{slug}".',
	},
	fields: {
		alphaThreshold: "Alpha threshold",
		amount: "Amount",
		amplitude: "Amplitude",
		anchor: "Anchor",
		angle: "Angle",
		axis: "Axis",
		background: "Background",
		backgroundColor: "Background color",
		baseColor: "Base color",
		blockSize: "Block size",
		borderColor: "Border color",
		brightness: "Brightness",
		canvasSize: "Canvas size",
		channel: "Channel",
		channelPair: "Channel pair",
		channelTolerance: "Channel tolerance",
		color: "Color",
		colorCount: "Color count",
		colorList: "Color list",
		colorPair: "Color pair",
		colorTolerance: "Color tolerance",
		cols: "Cols",
		columns: "Columns",
		splitMode: "Split by",
		tileSize: "Tile size",
		component: "Component",
		contrast: "Contrast",
		count: "Count",
		cropAreaSize: "Crop area size",
		dateFormat: "Date format",
		degrees: "Degrees",
		depth: "Darken depth",
		direction: "Direction",
		display: "Display",
		emoji: "Emoji",
		fillColor: "Fill color",
		fitMode: "Fit mode",
		gamma: "Gamma",
		gradient: "Gradient",
		hexList: "Hex list",
		highlightColor: "Highlight color",
		imageSize: "Image size",
		innerRadius: "Inner radius",
		keepAspect: "Keep aspect",
		keepSide: "Kept side",
		layout: "Layout",
		levels: "Levels",
		lightness: "Lightness",
		lineColor: "Line color",
		lineWidth: "Line width",
		lumaThreshold: "Luminance threshold",
		margin: "Margin",
		maxColors: "Max colors",
		mode: "Mode",
		offset: "Offset",
		offsetX: "Offset X",
		offsetY: "Offset Y",
		opacity: "Opacity",
		order: "Order",
		orientation: "Orientation",
		outerOnly: "Outer only",
		padding: "Padding",
		pattern: "Pattern",
		percent: "Percent",
		phase: "Phase",
		plate: "Plate",
		points: "Points",
		position: "Position",
		quality: "Quality",
		radius: "Radius",
		range: "Lightness range",
		rarity: "Rarity",
		ratio: "Aspect ratio",
		rotation: "Rotation",
		rows: "Rows",
		saturation: "Saturation",
		scalePct: "Zoom, %",
		seed: "Seed",
		shapeHeightPct: "Height, %",
		shapeSize: "Shape size",
		shapeWidthPct: "Width, %",
		showText: "Show text",
		skewX: "Skew X",
		skewY: "Skew Y",
		smooth: "Smooth",
		spread: "Spread",
		steps: "Steps",
		stepX: "Step X",
		stepY: "Step Y",
		strength: "Strength",
		strokeColor: "Stroke color",
		targetColor: "Target color",
		text: "Text",
		textColor: "Text color",
		textStyle: "Text style",
		thickness: "Thickness",
		threshold: "Threshold",
		waves: "Waves",
		width: "Width",
		x: "X",
		y: "Y",
	},
	groups: {
		adjust: "Adjust",
		anchor: "Anchor",
		background: "Background",
		baseColor: "Base color",
		blocks: "Blocks",
		canvas: "Canvas",
		colors: "Colors",
		cropArea: "Crop area",
		fill: "Fill",
		grid: "Grid",
		splitMode: "Split by",
		tileSize: "Tile size",
		noise: "Noise",
		offset: "Offset",
		options: "Options",
		output: "Output",
		padding: "Padding",
		placement: "Placement",
		plate: "Plate",
		position: "Position",
		random: "Random",
		scaling: "Scaling",
		seed: "Seed",
		shape: "Shape",
		spectrum: "Spectrum",
		text: "Text",
		tile: "Tile",
		watermark: "Watermark",
	},
	// Page titles/descriptions are not duplicated in the base locale: the EN
	// string from the page registry (`web/src/lib/registry/pages/`) is used.
	// The `seo` copy is the exception: it has no registry counterpart and
	// exists only in the dictionary.
	pages: {
		"crop-png": {
			title: "Crop PNG online",
			seo: {
				metaTitle: "Crop PNG Online - Free Image Cropper, No Upload",
				metaDescription:
					"Crop a PNG right in your browser: choose the area, set the size, download the result. Free, no upload, no signup. Works with PNG, JPG, WebP and BMP.",
				longDescription:
					"Crop PNG cuts a rectangular area out of an image and keeps only what you selected. Everything happens inside your browser tab: the file is decoded, cut and re-encoded on your device, so it is never uploaded, never stored on a server and never visible to anyone else. The upload accepts PNG, JPG, WebP and BMP, and the Download button writes the result back as PNG, JPG, WebP or BMP. Coordinates are pixels counted from the top-left corner, and the selected area is clipped to the image — a rectangle that hangs over the edge is cut down to the part that actually exists, and the result tile says so when that happens.",
				howTo: [
					"Drop an image into the source area, or pick a file from your device.",
					"Set X and Y to the top-left corner of the area you want to keep.",
					"Set Width and Height to the size of that area; both default to the full image.",
					"The preview redraws as you type, and values beyond the image edge are clipped for you.",
					"Pick the output format in the Download button and save the result.",
				],
				faq: [
					{
						q: "Does cropping a PNG reduce its quality?",
						a: "No. Cropping copies the pixels of the selected area exactly as they are — no resampling and no re-compression inside the tool. If you export to JPG or WebP, the encoder of that format applies its own compression, and the quality slider in the Download button controls how much.",
					},
					{
						q: "Are my images uploaded to a server?",
						a: "No. Decoding, cutting and encoding all run in the page you have open. The tool sends no request with your file, needs no account, has no daily limit, and is free for commercial use. It is open source, so the claim can be checked in the code.",
					},
					{
						q: "Can I crop a JPG or a WebP, not only a PNG?",
						a: "Yes — PNG, JPG, WebP and BMP are all accepted. The page address keeps the png name because that is the most searched spelling of this tool, but the tool itself does not care about formats.",
					},
					{
						q: "What happens if the crop area goes outside the image?",
						a: "The area is clipped to the intersection with the image, so the result is never bigger than the original. When the output ends up smaller than the requested rectangle, a note on the result tile tells you the area was clamped.",
					},
				],
			},
		},
		"resize-png": {
			title: "Resize PNG online",
			seo: {
				metaTitle: "Resize PNG Online - Free Image Resizer, No Upload",
				metaDescription:
					"Resize PNG images in your browser and keep the aspect ratio. Free, no upload, no limits, no signup. Works with PNG, JPG, WebP and BMP.",
				longDescription:
					"Resize PNG scales an image to new pixel dimensions with bilinear interpolation, which keeps edges smooth when the picture is enlarged or reduced. The scaling runs locally in your browser, so the original file is never uploaded and never leaves your device. The upload takes PNG, JPG, WebP and BMP, and you choose the output format in the Download button. With the aspect ratio kept, one side defines the scale and the other follows; if you set both sides, the image is fitted inside them, so it is scaled down until it fits rather than stretched.",
				howTo: [
					"Drop an image into the source area, or pick a file from your device.",
					"Enter the new width or height; with aspect kept the other side is recalculated for you.",
					"Set both sides only when you want the image to fit inside a fixed box.",
					"Check the preview: the dimensions under the tile show the real output size.",
					"Choose PNG, JPG, WebP or BMP in the Download button and save.",
				],
				faq: [
					{
						q: "Does resizing make the image blurry?",
						a: "Enlarging adds pixels that were not in the original, so fine detail softens — that is unavoidable at any tool. Bilinear interpolation keeps the transition smooth instead of blocky. For photos that must stay sharp when enlarged, generate or upscale at a higher source resolution instead.",
					},
					{
						q: "Will the aspect ratio change?",
						a: "Not while the aspect ratio is kept: set one side and the other follows the original ratio. Set both sides and the image is scaled until it fits inside them, which keeps the ratio but may leave the result smaller than the box.",
					},
					{
						q: "Are my images uploaded anywhere?",
						a: "No. Resizing runs in your browser with no server involved — no upload, no account, no daily limit, free for commercial use, and open source.",
					},
					{
						q: "Can I resize a JPG or WebP instead of a PNG?",
						a: "Yes. PNG, JPG, WebP and BMP are accepted on upload, and the output format is yours to choose in the Download button, including a quality slider for the lossy formats.",
					},
				],
			},
		},
		"remove-background-png": {
			title: "Remove background from PNG",
			seo: {
				metaTitle: "Remove PNG Background - Free, No Upload",
				metaDescription:
					"Remove a solid background from a PNG and get a transparent image in your browser. Pick a color, set the tolerance, smooth the edges. Free, no upload.",
				longDescription:
					"Remove background from a PNG makes every pixel of one chosen color transparent, so the subject is left standing on an empty canvas. Pick the background color, widen the tolerance until the whole backdrop disappears, and smooth the boundary if the cut edge looks hard. The result keeps the original resolution and the untouched color of the subject, and it is produced entirely in your browser: the file is decoded, processed and re-encoded on your own device, so nothing is uploaded and nothing is kept on a server. PNG, JPG, WebP and BMP are accepted on upload, and the transparent result can be saved as PNG, JPG, WebP or BMP from the Download button.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Background color to the color of the backdrop you want to get rid of.",
					"Raise Tolerance until the background disappears; lower it if the subject starts losing parts.",
					"Keep Outer regions on when the same color appears inside the subject - it protects the inside.",
					"Raise Smooth to soften the cut edge, then save the result from the Download button.",
				],
				faq: [
					{
						q: "Is this AI background removal?",
						a: "No. This is a color-based cut: it removes pixels close to the color you name, not a trained model guessing at objects. That is why it is instant and works offline, and also why it needs a background of roughly one solid color - for hair, fur or busy scenes use a dedicated AI matting tool.",
					},
					{
						q: "Why do parts of my subject stay in the background color?",
						a: "Tolerance compares each pixel with the color you picked by distance. Anti-aliased edges and shadows differ from the flat backdrop, so they fall outside a narrow tolerance. Raise it gradually, and switch Outer regions off if the same color appears inside the subject and you do want it removed.",
					},
					{
						q: "Does removing the background reduce image quality?",
						a: "No resampling and no re-compression of the subject happens: the pixels are either kept or set to fully transparent. Only the export format matters - a lossy format such as JPG will smooth the new transparent edge once it is composited onto a background.",
					},
					{
						q: "Does it work with JPG and WebP, not only PNG?",
						a: "Yes. PNG, JPG, WebP and BMP can all be loaded, and after the cut you can save the transparent result as PNG, JPG, WebP or BMP. Note that JPG cannot store transparency, so a transparent area exported to JPG is filled with the background color.",
					},
				],
			},
		},
		"convert-png-to-jpg": {
			title: "Convert PNG to JPG",
			seo: {
				metaTitle: "Convert PNG to JPG - Free Converter, No Upload",
				metaDescription:
					"Convert PNG to JPG right in your browser. Transparent areas are filled with the background color you pick, and you set the JPEG quality. Free, no upload.",
				longDescription:
					"Converting a PNG to JPG makes a smaller file that any device and program can open, at the cost of the two things JPG cannot do: transparency and lossless pixels. Everything is done locally in your browser, so your image is never uploaded and never stored anywhere. Pick the background color that transparent areas are filled with - white by default, which is what most white-backed documents expect - set the JPEG quality, and download. The result carries no watermark, no account requirement and no daily limit.",
				howTo: [
					"Drop the PNG into the source area, or pick a file from your device.",
					"Set Background to the color that transparent parts should be filled with.",
					"Raise or lower Quality: 90 keeps the picture clean, 70-80 makes a visibly smaller file.",
					"Check the preview - the dimensions under the tile show the output size.",
					"Download the .jpg file from the Download button.",
				],
				faq: [
					{
						q: "What happens to transparency when converting to JPG?",
						a: "JPG has no alpha channel, so transparent pixels cannot be stored. Each of them is composited onto the background color you chose - white unless you pick another one. Pick white for screenshots on white, or your brand color when the picture will sit on a colored page.",
					},
					{
						q: "Does converting to JPG make the image worse?",
						a: "JPG is lossy: it keeps the picture close to the original but throws away detail the eye rarely notices. At quality 90 the difference is hard to see and the file is several times smaller. If you need not to lose a single pixel, keep the PNG and compress it instead.",
					},
					{
						q: "Why is my JPG bigger than I expected?",
						a: "Quality and size pull against each other. Dropping from 90 to 75 usually halves the file with barely visible change; below 60 blocking and ringing around sharp edges become obvious. When the goal is a specific file size rather than the best picture, use the size limit in the Download button.",
					},
					{
						q: "Will the result have a watermark?",
						a: "No. There is no watermark, no signup and no upload - the file is encoded in your browser and saved straight to your device. The tool is free for commercial use and open source.",
					},
				],
			},
		},
		"pixelate-png": {
			title: "Pixelate PNG",
			seo: {
				metaTitle: "Pixelate PNG - Free Mosaic Filter, No Upload",
				metaDescription:
					"Pixelate a PNG in your browser: every block is averaged into a single color, the classic mosaic effect. Choose the block size from 2 to 64 px. Free, no upload.",
				longDescription:
					"Pixelating an image hides detail by replacing every square block with one averaged color, which produces the blocky mosaic that covers faces, hides screens or simply reads as a retro effect. The block size slider runs from 2 to 64 pixels: small blocks give a fine grain, large blocks give an unmistakable mosaic. The dimensions of the picture do not change, so a pixelated result can still be used wherever the original size is expected. Like every tool here, it runs inside your browser - the file is never uploaded, and PNG, JPG, WebP and BMP are all accepted.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Block size to a small value for a fine grain or a large one for a heavy mosaic.",
					"Watch the preview: each block becomes a single averaged color.",
					"Save the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What block size should I pick?",
						a: "For covering a face, a block of roughly 1/20 to 1/12 of the smaller side works well - about 16 to 32 px on a 400 px image. Small images need small blocks: at 2 px the effect is a soft texture rather than a mosaic.",
					},
					{
						q: "Is pixelating the same as blurring?",
						a: "No. Blur averages neighbouring pixels smoothly, while pixelating replaces each block with one flat color and keeps hard square edges. That is what makes the result read as mosaic rather than as an out-of-focus picture.",
					},
					{
						q: "Can I undo the effect?",
						a: "Yes - move the block size back to the minimum or reload the original file. Nothing is destructive: the source image stays in the browser and the effect is re-applied on every change of the slider.",
					},
					{
						q: "Does it work with JPG and WebP, not only PNG?",
						a: "Yes. PNG, JPG, WebP and BMP are accepted on upload, and the pixelated result can be saved in any of them. A transparent PNG keeps its transparency after the blocks are averaged.",
					},
				],
			},
		},
		"grayscale-png": {
			title: "Convert PNG to grayscale",
			seo: {
				metaTitle: "Grayscale PNG Converter - Free, No Upload",
				metaDescription:
					"Turn a PNG into shades of gray with the standard BT.601 luminance formula. Transparency is preserved. Free, no upload, no settings, runs in your browser.",
				longDescription:
					"Converting an image to grayscale replaces every color with a shade of gray, computed from the standard BT.601 luminance formula that matches human brightness perception, so a red pixel becomes the same gray a camera would render rather than a flat average of its channels. Transparency is left untouched, which means a logo keeps its clean edges instead of gaining a gray box around it. There are no settings to tune - upload, read the result, download - and the whole thing happens in your browser, with your file never leaving the device.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Read the preview: the colors are already replaced by shades of gray.",
					"Save the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between grayscale and black and white?",
						a: "Grayscale keeps a continuous range of grays, so the image still looks like the original - just without color. Black and white reduces everything to exactly two values with a sharp threshold, which flattens photos. If you need the two-value version, run the black-and-white tool afterwards.",
					},
					{
						q: "Does grayscale keep transparency?",
						a: "Yes. Only the color channels are converted; the alpha channel is copied as it is, so a transparent PNG stays transparent and the edges of a cut-out logo stay clean.",
					},
					{
						q: "Is the conversion lossless?",
						a: "Within the tool, yes: it is a per-pixel channel calculation, not a compression, so no detail is thrown away. The output format still matters - save as PNG or WebP to keep it lossless, and remember JPG has no transparency.",
					},
					{
						q: "Are my images uploaded to convert them?",
						a: "No. The conversion runs in your browser tab, with no upload, no account, no daily limit and no watermark. The tool is free for commercial use and open source.",
					},
				],
			},
		},
		"rotate-png": {
			title: "Rotate PNG",
			seo: {
				metaTitle: "Rotate PNG - Free Image Rotator, No Upload",
				metaDescription:
					"Rotate a PNG by 90, 180 or 270 degrees in your browser. Lossless, no quality loss, no upload of your file. Free, no signup, no limits.",
				longDescription:
					"Rotating a PNG turns the picture by a quarter turn or by half a turn. Because the angle is a multiple of 90 degrees, the pixels are only moved to new positions: nothing is resampled, nothing is interpolated and no quality is lost, which is not true of arbitrary-angle rotation. The canvas grows to the new orientation, so a portrait shot rotated becomes landscape and nothing gets cropped. It all happens in your browser - the file is never uploaded, so screenshots, scans and private photos can be turned without leaving your device.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the angle: 90 degrees clockwise turns it a quarter turn, 180 flips it upside down, 270 turns it the other way.",
					"Check the preview: the dimensions under the tile swap for portrait and landscape.",
					"Download the result from the Download button in any of the four formats.",
				],
				faq: [
					{
						q: "Can I rotate by an angle that is not 90, 180 or 270?",
						a: "Not here, on purpose. An arbitrary angle resamples every pixel, which softens edges and can cut the corners off. The three right-angle options move pixels only, so the result is bit-for-bit as sharp as the source.",
					},
					{
						q: "Does rotating lose quality or blur the image?",
						a: "No. The rotation is a pure remapping of pixel positions, exactly as rotating a physical photo on the scanner glass would. There is no interpolation step and no re-compression inside the tool.",
					},
					{
						q: "Will part of my image be cut off?",
						a: "No. The canvas is resized to the new orientation, so the full picture survives the turn. Width and height simply swap when you rotate by 90 or 270 degrees.",
					},
					{
						q: "How do I flip the image instead of rotating it?",
						a: "Use the flip tool on this site: it mirrors the picture horizontally or vertically, which is what you want for a mirrored selfie or a scanned page. Rotation turns the picture, flipping turns it inside out.",
					},
				],
			},
		},
		"create-empty-png": {
			title: "Create empty PNG",
			seo: {
				metaTitle: "Create Empty PNG - Blank Image Generator, No Upload",
				metaDescription:
					"Create a blank PNG of any size in your browser: fully transparent or filled with a solid color. No signup, no limits, generated and downloaded instantly.",
				longDescription:
					"Creating an empty PNG gives you a blank canvas of exactly the size you ask for, either fully transparent or filled with one solid color. Nothing is uploaded because there is nothing to upload: the canvas is generated on your device from the width, height, opacity and color you set, and the file is encoded and saved straight to your machine. Use it as a backdrop for a mockup, as a transparent layer in a design tool, as a spacer in a layout, or as a placeholder that has the exact dimensions your project expects. Sizes run from 1 to 20000 pixels on each side, with presets for the common formats.",
				howTo: [
					"Set Width and Height in pixels, or pick one of the presets such as a square or a screen size.",
					"Leave Opacity at 0 for a fully transparent canvas, or raise it to fill with the chosen color.",
					"Pick the fill color if you want a solid background instead of transparency.",
					"Download the generated PNG from the Download button.",
				],
				faq: [
					{
						q: "How do I make a transparent PNG?",
						a: "Set Opacity to 0. Every pixel is then written with a fully transparent alpha channel, which is exactly what a transparent PNG is. Raising the slider fills the canvas with the fill color instead; partial values give a semi-transparent sheet.",
					},
					{
						q: "What size can the canvas be?",
						a: "From 1 to 20000 pixels per side, with presets for the usual targets. Very large canvases take a moment to generate because every pixel is filled - a 20000 by 20000 canvas is 400 million pixels.",
					},
					{
						q: "Is the file really a valid PNG?",
						a: "Yes. The canvas is encoded as a real PNG by the browser, not a renamed blank file, so it opens in any image viewer and works as a source image for the other tools on this site.",
					},
					{
						q: "Do I have to sign up or upload anything?",
						a: "No account, no upload, no daily limit, no watermark. The canvas is created and encoded in your browser, and the tool is free for commercial use and open source.",
					},
				],
			},
		},
		"linear-gradient-png": {
			title: "Create gradient PNG",
			seo: {
				metaTitle: "Create Gradient PNG - Free Linear Gradient Generator",
				metaDescription:
					"Generate a linear gradient PNG in your browser: two colors, a direction and any canvas size. Free, no upload, no signup, downloads instantly.",
				longDescription:
					"A linear gradient is a smooth transition from one color to another along a straight line, and this page draws one as a PNG of any size. Choose the start and end colors, set the angle, and the canvas is filled with the blend in your browser - there is no upload, because there is no source file: the gradient is computed pixel by pixel and encoded into a PNG you can download. Gradients are the background of most landing pages, slide decks and app shells, and exporting one as an image gives you a background that does not depend on CSS support at all.",
				howTo: [
					"Set the canvas size in pixels, or pick a preset.",
					"Choose the color the gradient starts from and the color it ends at.",
					"Set the angle: 0 runs left to right, 90 runs bottom to top.",
					"Download the gradient as a PNG from the Download button.",
				],
				faq: [
					{
						q: "What does the angle mean?",
						a: "It is the direction of the gradient line in degrees. At 0 the first color is on the left and the last on the right; at 90 the first color is at the bottom; 180 is right to left and 270 top to bottom.",
					},
					{
						q: "Can I get a radial gradient instead?",
						a: "Not on this page - it draws linear gradients. For a radial fade, create a transparent canvas, run the remove-background tool against one edge, and raise the tolerance until the fade covers the image.",
					},
					{
						q: "Does the PNG get banded?",
						a: "The blend is computed per pixel in floating point and encoded with a high bit depth, so smooth transitions stay smooth. Very wide low-contrast gradients can still show faint steps after the PNG is quantized, which is a property of the format, not of the generator.",
					},
					{
						q: "Is this free to use in commercial work?",
						a: "Yes. There is no signup, no watermark and no daily limit, no file is uploaded, and the project is open source.",
					},
				],
			},
		},
		"change-png-opacity": {
			title: "Change PNG opacity",
			seo: {
				metaTitle: "Change PNG Opacity - Make Image Transparent, No Upload",
				metaDescription:
					"Reduce the opacity of a PNG in your browser: the alpha channel is multiplied by a percentage, so 0% is invisible and 100% is unchanged. Free, no upload.",
				longDescription:
					"Changing the opacity of a PNG scales its alpha channel, so a fully opaque image becomes semi-transparent and a 0 percent result is completely invisible. The color channels are left exactly as they were, which is what makes the difference between making an image translucent and making it faded: nothing is blended, every pixel keeps its own color. The result stays a PNG with a real alpha channel, so it still drops onto a page, a slide or another image without a white box around it. Everything runs in your browser, so the file is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the opacity percentage: 100 leaves it untouched, 50 makes it half transparent.",
					"Watch the preview against the checkerboard background.",
					"Download the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between changing opacity and adding a white background?",
						a: "Opacity touches only the alpha channel, so the picture itself stays pure and keeps its edges. A white background paints over the transparent parts and leaves the pixels underneath untouched - the picture can still look washed out when it sits on another background.",
					},
					{
						q: "Does making an image transparent reduce its quality?",
						a: "No. The alpha value is multiplied per pixel; the color data is copied without resampling. Only the export format matters: save as PNG or WebP to keep transparency, and remember JPG flattens it onto a color.",
					},
					{
						q: "Can I make only part of the image transparent?",
						a: "Not here - this page scales the whole alpha channel. To fade one region, remove that background color first and then apply the opacity to the result.",
					},
					{
						q: "Are my images uploaded?",
						a: "No. The alpha channel is multiplied in your browser, with no upload, no account and no watermark. It is free for commercial use and open source.",
					},
				],
			},
		},
		"set-alpha-channel-png": {
			title: "Set alpha channel of PNG",
			seo: {
				metaTitle: "Set PNG Alpha Channel - Uniform Opacity, No Upload",
				metaDescription:
					"Give every pixel of a PNG the same opacity, or restore full opacity to a faded image. One percentage, colors untouched. Free, runs in your browser.",
				longDescription:
					"Setting the alpha channel writes one and the same opacity into every pixel of the image, while the colors stay untouched. That is different from scaling the existing transparency: a logo that is already half transparent at the edges becomes uniformly 50 percent everywhere after this operation, and a picture someone flattened to a single low opacity can be brought back to solid. It is the fastest way to make a whole PNG translucent, or to repair an image whose alpha channel was flattened. The file is processed in your browser and never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the percentage: 100 makes every pixel fully opaque, 50 makes them all half transparent.",
					"Check the preview - the checkerboard shows how much transparency is left.",
					"Save the result as PNG or WebP from the Download button to keep the alpha channel.",
				],
				faq: [
					{
						q: "How is this different from changing image opacity?",
						a: "Changing opacity multiplies the existing alpha, so the differences between more and less transparent pixels are preserved. Setting the alpha channel overwrites it: every pixel ends up with exactly the same value. Use multiply when you want to keep the picture's own transparency, and overwrite when you need it uniform.",
					},
					{
						q: "Can this restore a faded PNG?",
						a: "Yes, if the image still has an alpha channel and only the values are low: set 100 percent and every pixel becomes fully opaque again. If transparency was already flattened into a solid background color, no alpha channel is left to restore - the pixels are just background-colored.",
					},
					{
						q: "Will the colors change?",
						a: "No. Only the alpha value is written; the red, green and blue channels are copied byte for byte.",
					},
					{
						q: "Does it work offline?",
						a: "Yes. Once the page is loaded the processing is entirely local, so the tool works without a connection and your file is never uploaded anywhere.",
					},
				],
			},
		},
		"round-corners-png": {
			title: "Round PNG corners",
			seo: {
				metaTitle: "Round Corners PNG - Free Rounded Corner Tool",
				metaDescription:
					"Round the corners of a PNG in your browser: the radius is a percentage of half the smaller side, so it scales with the image. Free, no upload, no signup.",
				longDescription:
					"Rounding the corners of a PNG clips the four corners of the picture and leaves the rest of the pixels untouched, producing the rounded rectangle used by avatars, app icons and cards. The radius is given as a percentage of half the smaller side, so a single value behaves the same on a thumbnail and on a poster - 50 percent is the full circle, and at that point the result becomes a round avatar. No pixel is resampled, and the clipped corner becomes fully transparent instead of being painted over, so the shape stays correct on any background.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Radius as a percentage of half the smaller side: 10 is a subtle rounding, 50 a circle.",
					"Watch the preview - the clipped corners become transparent.",
					"Download the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "How do I get a perfect circle?",
						a: "Set the radius to 50 percent. The clip is then a circle inscribed in the shorter side, and the rectangular parts outside it become transparent, leaving a round avatar.",
					},
					{
						q: "Why is the radius a percentage and not pixels?",
						a: "A percentage of half the smaller side keeps the proportion identical on any image size, so one value works for a whole set of icons and avatars. If you need an exact pixel radius, round an image whose size makes the percentage land where you want it, or clip it further afterwards.",
					},
					{
						q: "Does rounding blur the corner?",
						a: "No. Nothing is scaled or resampled - the pixels outside the clip are made transparent, and everything inside stays exactly as it was.",
					},
					{
						q: "Can I round only some of the corners?",
						a: "This page rounds all four at once. For a single corner, chain the circular or square mask tool after it, or crop the image so that only the corner you want is left.",
					},
				],
			},
		},
		"invert-colors-png": {
			title: "Invert PNG colors",
			seo: {
				metaTitle: "Invert PNG Colors - Free Negative Image Tool",
				metaDescription:
					"Invert the colors of a PNG in your browser: every channel becomes 255 minus its value, like photographic film negative. Alpha stays unchanged. Free, no upload.",
				longDescription:
					"Inverting an image replaces every color channel with its opposite, so white becomes black, a blue sky turns orange and the whole picture looks like a photographic negative. The operation is arithmetic - each channel is mapped to 255 minus its value - and the alpha channel is deliberately left alone, so transparent regions stay transparent instead of turning into an opaque block. It is instant and lossless: no resampling, no re-compression, just a per-pixel subtraction that happens in your browser with no upload of your file.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"The colors invert as soon as the image is loaded - there are no settings.",
					"Save the inverted result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why are my transparent areas not inverted?",
						a: "The alpha channel is not touched, only the colors. A fully transparent pixel keeps alpha 0 no matter what its color values are, so a transparent PNG stays transparent and does not turn into a solid inverted block.",
					},
					{
						q: "Does inverting reduce image quality?",
						a: "No. Inverting is a reversible per-channel operation, not a filter: the result inverted twice is identical to the original. Only the export format can introduce loss, so save as PNG or WebP for a byte-exact negative.",
					},
					{
						q: "What is this called in Photoshop?",
						a: "The same thing: Image > Adjustments > Invert, or a Negate adjustment layer in GIMP. Mathematically it is 255 minus each channel value.",
					},
					{
						q: "Does the tool upload my image?",
						a: "No. The conversion runs in your browser tab, with no server, no account and no watermark. It is free for commercial use and open source.",
					},
				],
			},
		},
		"flip-png": {
			title: "Flip PNG",
			seo: {
				metaTitle: "Flip PNG - Mirror Image Horizontally, No Upload",
				metaDescription:
					"Mirror a PNG in your browser: flip it horizontally or vertically with no quality loss and no cropping. Free, no upload, no signup, instant.",
				longDescription:
					"Flipping mirrors an image along one axis: horizontally turns left into right, vertically turns top into bottom. The pixels are only moved to mirrored positions - nothing is rotated, scaled or resampled, and the canvas keeps its size, so a flipped image is exactly as sharp as the original. It is the quick fix for a selfie taken with a mirrored preview, a scanned page that came out backwards, or a design mockup that needs the opposite direction.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the axis: Horizontal for left to right, Vertical for top to bottom.",
					"Switch between the two to compare - the preview updates instantly.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between flip and mirror?",
						a: "They are the same operation, named differently. Flipping horizontally mirrors the picture left to right, which is what corrects a photo taken with a mirrored camera preview.",
					},
					{
						q: "Does flipping lose quality?",
						a: "No. Each pixel keeps its exact value and only its position changes, so the result is as sharp as the source. This is unlike rotating by an arbitrary angle, which has to resample the whole image.",
					},
					{
						q: "Will text end up backwards?",
						a: "Only if the text was part of the picture - a horizontal flip mirrors letters as well. Turn the text layer off or apply the flip before drawing text onto the image.",
					},
					{
						q: "Can I flip both axes at once?",
						a: "Yes - run the tool twice. Flipping horizontally and then vertically is the same as a 180 degree rotation, and it costs nothing but a second click.",
					},
				],
			},
		},
		"convert-png-to-webp": {
			title: "Convert PNG to WebP",
			seo: {
				metaTitle: "Convert PNG to WebP - Free Converter, No Upload",
				metaDescription:
					"Convert PNG to WebP in your browser with a quality slider. Transparency is preserved and the file gets much smaller. Free, no upload, no signup.",
				longDescription:
					"WebP is the modern image format that usually beats PNG on size while still storing transparency. Converting a PNG to WebP here re-encodes the picture in your browser with a quality slider: at high quality the difference is hard to see and the file is noticeably smaller, and at lower quality the savings grow while detail starts to go. Because WebP supports an alpha channel, everything transparent stays transparent - unlike JPG. Nothing is uploaded, there is no watermark, no account and no daily limit.",
				howTo: [
					"Drop the PNG into the source area, or pick a file from your device.",
					"Raise or lower Quality: around 80-90 is the sweet spot between size and detail.",
					"Check the preview - transparency is kept, so the checkerboard still shows through.",
					"Download the .webp file from the Download button.",
				],
				faq: [
					{
						q: "Is WebP better than PNG?",
						a: "For photos and screenshots on the web, usually yes: WebP reaches a similar picture at a noticeably smaller file. PNG stays better for flat graphics with few colors, for files you have to edit again, and for tools that do not accept WebP yet.",
					},
					{
						q: "Does converting to WebP lose the transparency?",
						a: "No. WebP has an alpha channel, so transparent areas stay transparent. This is the main practical reason to pick WebP over JPG when a PNG has transparency.",
					},
					{
						q: "Which quality value should I choose?",
						a: "Between 80 and 90 for most images. Below about 60 the encoder starts smoothing fine detail and text edges; the difference in file size between 95 and 100 is usually not worth the re-encoding.",
					},
					{
						q: "Can I convert WebP back to PNG?",
						a: "Open any WebP in this site - the upload accepts WebP - and pick PNG in the Download button. No separate converter is needed for the direction you already have a file for.",
					},
				],
			},
		},
		"png-to-bmp": {
			title: "Convert PNG to BMP",
			seo: {
				metaTitle: "Convert PNG to BMP - Free Converter, No Upload",
				metaDescription:
					"Convert PNG to BMP in your browser. The result is a 24-bit bitmap for Windows and old software. Free, no upload, no signup, no watermark.",
				longDescription:
					"BMP is the uncompressed bitmap format that Windows, office software and a lot of older engineering and printing software still expect. Converting a PNG to BMP writes a plain 24-bit bitmap: every pixel is stored as is, with no compression and no quality loss from the encoding step itself. The catch is alpha - a 24-bit BMP has no transparency, so transparent parts of your PNG are flattened onto black when they are saved this way. The conversion runs in your browser, so the source file is never uploaded.",
				howTo: [
					"Drop the PNG into the source area, or pick a file from your device.",
					"Preview the result; transparent areas are flattened onto black.",
					"Download the .bmp file from the Download button.",
				],
				faq: [
					{
						q: "What happens to transparency when saving as BMP?",
						a: "The output is a 24-bit bitmap, which has no alpha channel, so transparent pixels are written as opaque black. If you need transparency to survive, export to PNG or WebP instead.",
					},
					{
						q: "Why is my BMP so much bigger than the PNG?",
						a: "BMP is uncompressed: every pixel is stored literally, so a 1000 by 1000 picture takes about 3 MB regardless of how simple it looks. PNG compresses the same image down to a fraction of that, which is why BMP survived only where compatibility matters more than size.",
					},
					{
						q: "Is the conversion lossless?",
						a: "The pixels are copied unchanged - BMP does not compress and does not subsample colors. What you lose compared to the source PNG is only the alpha channel and, if the source was scaled before, whatever resampling already did.",
					},
					{
						q: "Which programs open BMP?",
						a: "Essentially all of them: Windows itself, most image editors, office suites and printing software. That reliability is the only reason to choose BMP over PNG or WebP.",
					},
				],
			},
		},
		"svg-to-png": {
			title: "Convert SVG to PNG",
			seo: {
				metaTitle: "SVG to PNG - Free Converter, No Upload",
				metaDescription:
					"Rasterize an SVG into a PNG in your browser: paste the markup, set the size, download the bitmap. No upload of files, no account, no watermark.",
				longDescription:
					"SVG is vector markup: it stores shapes, paths and text, and the browser draws it at whatever size the layout asks for. Some programs do not draw SVG at all, so an icon or a chart sometimes has to be handed over as a bitmap. This page pastes the markup, rasterizes it into a PNG of the size you set, and lets you download it. The SVG is rendered by the browser engine on your machine - no file is uploaded, and no external asset referenced by the SVG is fetched from a server either.",
				howTo: [
					"Paste the SVG code into the text field on the left.",
					"Set the output size in pixels; the drawing is scaled to fit.",
					"Check the preview of the rasterized result.",
					"Download the PNG from the Download button.",
				],
				faq: [
					{
						q: "Will the PNG look the same as the SVG?",
						a: "Yes, because the same browser engine that renders SVG on a web page renders it here. Curves, strokes, gradients and fonts supported by the browser are reproduced; features that only exist in a desktop editor are not part of SVG in the first place.",
					},
					{
						q: "Which size should I export?",
						a: "Export at the size it will be displayed, or at 2x that for a high-density screen. SVG scales without limit, so a bigger export costs file size but stays sharp.",
					},
					{
						q: "What happens to fonts?",
						a: "Text is rendered with the fonts available to the browser. If the SVG does not embed its font and relies on a family you do not have, the preview shows a fallback - convert such text to outlines before rasterizing if the exact shapes matter.",
					},
					{
						q: "Is my SVG uploaded anywhere?",
						a: "No. The markup is rasterized in your browser tab, so the code never reaches a server. The same applies to any image the SVG references by URL: it is not fetched for you.",
					},
				],
			},
		},
		"png-to-base64": {
			title: "Convert PNG to Base64",
			seo: {
				metaTitle: "PNG to Base64 - Free Encoder, No Upload",
				metaDescription:
					"Encode a PNG as a Base64 string in your browser and copy it into CSS, HTML or JSON. No upload, no account, no limits, and the data never leaves the page.",
				longDescription:
					"Base64 is the text encoding that turns binary image data into a string safe to paste into source code: a CSS background, an HTML attribute, a JSON config or an email template. Encoding a PNG here produces that string in the result panel, with a button to copy it to the clipboard. The image is read in your browser and encoded there, so the picture and the resulting data never leave your device - which matters because a Base64 string is the image itself, and uploading it would be uploading your file. The result can be used as a data URI directly.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Wait for the string to appear in the result panel.",
					"Press the copy button to put the whole string on the clipboard.",
					"Use it in CSS as url(data:image/png;base64,...) or paste it where you need.",
				],
				faq: [
					{
						q: "Why is the string longer than the file?",
						a: "Base64 stores six bits per character, so it costs about 33 percent more characters than the raw bytes: a 300 KB PNG becomes roughly 400 KB of text. It is a transport format, not a compression one.",
					},
					{
						q: "Should I embed images as Base64?",
						a: "For small assets - icons, sprites, logos, a few kilobytes - yes, it removes a request and guarantees the image travels with the file. For photos and anything large it usually hurts: the text is bigger, it cannot be cached separately and it blocks parsing.",
					},
					{
						q: "Is the string the whole image?",
						a: "Yes, which is why this page never uploads anything. A Base64 string of your picture is as sensitive as the picture itself, so keep it on your machine.",
					},
					{
						q: "What is the difference between Base64 and a data URI?",
						a: "A data URI is the full string you put in an attribute: the prefix with the MIME type, then the Base64 payload. Copy the data URI variant when you need the ready-made value for src or background-image.",
					},
				],
			},
		},
		"change-aspect-ratio-png": {
			title: "Change PNG aspect ratio",
			seo: {
				metaTitle: "Change Image Aspect Ratio - Crop or Pad, No Upload",
				metaDescription:
					"Fit a PNG into another aspect ratio: crop the center to fill the frame, or pad it with transparency. 1:1, 4:3, 16:9 and more. Free, no upload.",
				longDescription:
					"Putting an image into a different aspect ratio means one of two things, and the difference matters: either you fill the new frame and lose the overflowing edges, or you keep the whole picture and fill the rest. This page offers both, for the usual ratios - 1:1 for avatars and covers, 4:3 and 3:2 for photos, 16:9 and 9:16 for video and stories. Crop to fill cuts the center, pad to fit adds a transparent border instead. Processing happens in your browser, so the file is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the target ratio: 1:1, 4:3, 3:4, 3:2, 2:3, 16:9 or 9:16.",
					"Choose Crop to fill to keep the frame edge to edge, or Pad to fit to keep every pixel.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Should I crop or pad?",
						a: "Crop when the new frame is the visible area and edges may go - covers, avatars, video thumbnails. Pad when nothing may be lost - product shots and logos, where a transparent border is safer than a cut-off edge.",
					},
					{
						q: "What does padding add, and what color?",
						a: "Transparent. The extra space is left with a zero alpha channel, so the picture stays clean on any background. If you need a solid color instead, run the canvas size or padding tool afterwards.",
					},
					{
						q: "Does cropping lose quality?",
						a: "No - crop to fill takes the center at full resolution and only discards the edges. The result is as sharp as the source, just smaller.",
					},
					{
						q: "Can I enter a custom ratio?",
						a: "The page offers the common ones. For an unusual frame, resize the image to the size you need first and then crop the excess with the crop tool.",
					},
				],
			},
		},
		"add-text-png": {
			title: "Add text to PNG",
			seo: {
				metaTitle: "Add Text to PNG - Free Image Text Tool, No Upload",
				metaDescription:
					"Draw a text label on a PNG in your browser: font, size, color, bold, a position on a 3x3 grid and an optional backing plate. Free, no upload.",
				longDescription:
					"Adding text to an image draws it straight onto the pixels, which is what you want for a label, a watermark, a caption on a mockup or a date on a photo. Pick the font family, size, weight and color, choose one of nine positions around the frame, set the margin from the edge, and switch on a semi-transparent backing plate when the picture behind the text is too busy. The text is rendered by the browser on your device, so the image never leaves it and the result can be saved as PNG, JPG, WebP or BMP.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Type the text, then set the font, size, bold and color.",
					"Choose a position on the 3x3 grid and set the margin from the edge.",
					"Turn on the plate and tune its color and opacity if the text needs contrast.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Is this a watermark tool?",
						a: "It draws a single label at a chosen position. For a repeated pattern across the whole picture, use the watermark tile tool on this site instead.",
					},
					{
						q: "Why is my text hard to read?",
						a: "Turn on the backing plate and lower its opacity until the text reads without looking like a sticker, or place the label over a quieter part of the picture by moving the margin.",
					},
					{
						q: "Which fonts are available?",
						a: "The browser fonts on your system - a sans-serif and a monospace family are offered. Because the rendering happens locally, the look depends on the fonts installed on the device, which is also why an uploaded PNG always looks the same everywhere.",
					},
					{
						q: "Does adding text reduce image quality?",
						a: "The picture is not resampled - the label is drawn on top of the original pixels, and saving as PNG or WebP keeps the rest of the image lossless.",
					},
				],
			},
		},
		"png-is-transparent": {
			title: "Check if a PNG is transparent",
			seo: {
				metaTitle: "Check If PNG Is Transparent - Free Local Checker",
				metaDescription:
					"Find out whether an image has transparent or semi-transparent pixels. Free, no upload, nothing is stored - the file is checked in your browser, not on a server.",
				longDescription:
					"A PNG can store transparency, but the file extension does not promise it: a PNG saved from a JPG has no alpha channel at all, and a PNG that does have one may still be fully opaque. This checker decodes the image and reports whether any pixel is fully or partly transparent. Everything runs in your browser on your device - the file is not uploaded, and no copy of it is kept anywhere. Upload accepts PNG, JPG, WebP and BMP, so you can check any of them, not only a PNG.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Wait for the verdict - the image is decoded locally, there is nothing to configure.",
					"Read the answer: yes means at least one pixel has an alpha value below full opacity.",
					"If the answer is no and you need transparency, take the picture through the remove background or remove color tools first.",
				],
				faq: [
					{
						q: "How does it decide that an image is transparent?",
						a: "It reads the alpha channel of every decoded pixel. A pixel counts as transparent when its alpha value is below full opacity, so a single see-through pixel in the corner is enough for a yes.",
					},
					{
						q: "Does a JPG ever count as transparent?",
						a: "No. JPEG has no alpha channel, so a JPG always comes back as not transparent. If you converted a transparent PNG to JPG and then want the transparency back, that information is already gone - go back to the original file.",
					},
					{
						q: "Is my image uploaded to check it?",
						a: "No. The image is decoded and inspected in your browser tab. The page sends no request with your file and keeps no copy.",
					},
					{
						q: "The answer is yes but I cannot see any transparency. Why?",
						a: "Semi-transparent pixels are easy to miss - a light 5% fade over a white background looks white. Use the show transparent areas tool on this site: it paints every pixel that is not fully opaque, so the transparent parts become obvious.",
					},
				],
			},
		},
		"png-is-grayscale": {
			title: "Check if a PNG is grayscale",
			seo: {
				metaTitle: "Check If PNG Is Grayscale - Free Local Test",
				metaDescription:
					"Test whether an image uses only shades of gray, or has any color in it. Free, no upload, no signup - the check runs in your browser and the file never leaves it.",
				longDescription:
					"A grayscale image is one where the red, green and blue values of every pixel are identical, which means it can be displayed as pure shades of gray. This test checks that condition on the decoded pixels and answers with a plain yes or no. It runs locally in your browser, so the file is decoded on your own device and is never uploaded. Upload accepts PNG, JPG, WebP and BMP, so the same check works for any of them - the page keeps the png name only because that is how people search for this test.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"The verdict appears immediately; there are no settings to change.",
					"A yes means every pixel has equal red, green and blue values.",
					"A no means at least one pixel carries color - use the show color pixels mask to see exactly where.",
				],
				faq: [
					{
						q: "What counts as a grayscale image?",
						a: "An image where the red, green and blue values of every pixel are the same number. Such a picture holds no hue information, so converting it to a gray mode cannot lose anything that is not already there.",
					},
					{
						q: "Can a color image still look black and white?",
						a: "Yes. A photo of a black and white subject stored in color will report no, because the channels are not exactly equal - compression and lighting leave small differences. Visually it is gray, technically it carries color.",
					},
					{
						q: "Does the file get uploaded?",
						a: "No. Decoding and the check both happen in your browser tab. Nothing is sent anywhere and nothing is stored.",
					},
					{
						q: "How do I find the colored pixels in a gray-looking image?",
						a: "Use the show color pixels tool from this site: it renders every pixel whose channels differ as a mask, so you can see where the leftover color sits before you convert the picture to grayscale.",
					},
				],
			},
		},
		"png-orientation": {
			title: "Check PNG orientation: portrait, landscape or square",
			seo: {
				metaTitle: "PNG Orientation Checker - Portrait, Landscape, Square",
				metaDescription:
					"Find out whether an image is portrait, landscape or square, and see its pixel dimensions. Free, no upload - the file is inspected in your browser, never sent to a server.",
				longDescription:
					"Orientation is decided by the width and height of the image: a shape wider than it is tall is landscape, taller than it is wide is portrait, and equal dimensions make it square. This tool reads those two numbers from the decoded image and reports which case yours is, together with the pixel size. It is useful before a layout decision, because a portrait screenshot and a landscape one need different containers. The check runs locally in your browser, so the file is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"The tool reports portrait, landscape or square and shows the pixel dimensions.",
					"Compare the reported size with the slot the image has to fit into.",
					"If the orientation is not what you expected, use the swap orientation or rotate tools.",
				],
				faq: [
					{
						q: "How is orientation decided?",
						a: "By comparing width and height of the decoded image. Wider than tall is landscape, taller than wide is portrait, and any case where the two numbers are equal is square.",
					},
					{
						q: "Is this the same as the EXIF orientation of a photo?",
						a: "No. This tool reads the pixel dimensions of the image itself and says nothing about a camera rotation flag. A photo can be stored with a rotation flag that makes viewers display it differently from how the pixels are stored.",
					},
					{
						q: "Does it support PNG only?",
						a: "No. PNG, JPG, WebP and BMP are all accepted, and the answer describes the picture rather than its format.",
					},
					{
						q: "Is my image uploaded?",
						a: "No. The image is decoded in your browser tab; no request carries your file and nothing is stored.",
					},
				],
			},
		},
		"png-file-size": {
			title: "PNG file size checker",
			seo: {
				metaTitle: "PNG File Size Checker - How Big Is My Image, Free",
				metaDescription:
					"See how large an image is when encoded as PNG, in kilobytes. Free and local - the picture is encoded in your browser and never uploaded to a server.",
				longDescription:
					"This tool encodes the image you load as a PNG and reports the size of the result in kilobytes. That number is the size of a fresh PNG encoding, not necessarily the size of the file already on your disk: re-encoding can produce a different file, sometimes smaller, sometimes larger, depending on the encoder settings and the content. For a rough idea of the weight of the original, look at the file properties in your file manager. Everything here happens in your browser, so the image never leaves your device.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"The tool encodes it as PNG and shows the resulting size in KB.",
					"Compare that with the size limit of the place you plan to upload it to.",
					"If the number is too high, resize the image, reduce its colors or convert it to JPG before exporting.",
				],
				faq: [
					{
						q: "Is this the size of my original file?",
						a: "Not always. It is the size of the file produced by re-encoding the image as PNG in your browser, which can differ from the original: a different encoder or settings may compress it differently.",
					},
					{
						q: "Why is my PNG bigger after editing?",
						a: "Editing and saving a PNG usually produces a larger file than the original, because the image is decoded to pixels and encoded again, and an encoder does not know which pixels you did not touch. Cropping first usually keeps the result small.",
					},
					{
						q: "How do I make the file smaller?",
						a: "Resize it down, reduce the number of colors with the quantize tool, or save as JPG or WebP, which are lossy formats designed for exactly this. Transparent areas also cost bytes in PNG - flattening them onto a solid background can shrink a file a lot.",
					},
					{
						q: "Is the image uploaded to measure it?",
						a: "No. The encoding happens in your browser tab, so your file never travels to a server and is not stored anywhere.",
					},
				],
			},
		},
		"verify-is-png": {
			title: "Check if an image really is a PNG",
			seo: {
				metaTitle: "Verify If Image Is a PNG - Signature Check, Free",
				metaDescription:
					"Check whether pasted Base64 or data-URI content is really a PNG by looking at its file signature. Free, no upload - the text is checked in your browser.",
				longDescription:
					"A file extension is not proof: a JPG renamed to .png still has JPG bytes inside, and some downloads arrive with a name that does not match the content. This checker takes Base64 or a data URI, decodes it in your browser and looks at the signature at the start of the data. PNG always begins with the same eight bytes; anything else reports as not a PNG. The text never leaves your browser tab, which matters here more than usual, because pasted Base64 is often a secret - an API key, a session cookie or a signed URL.",
				howTo: [
					"Copy the Base64 string or the full data URI that you want to check.",
					"Paste it into the text area - a data: prefix is stripped automatically.",
					"Run the check and read the verdict.",
					"A no means the content is a different format, or not an image at all.",
				],
				faq: [
					{
						q: "How does it decide that the content is a PNG?",
						a: "It decodes the Base64 in your browser and compares the first bytes against the PNG signature. A real PNG always starts with the same eight-byte marker; a renamed JPG does not.",
					},
					{
						q: "Can I paste a whole data URI?",
						a: "Yes. The data: prefix and the media type are stripped before decoding, so a complete src attribute value works as well as the Base64 part alone.",
					},
					{
						q: "Is my pasted string uploaded anywhere?",
						a: "No, and this is the important part: the decoding and the check happen entirely in your browser tab. Pasted Base64 is often a credential or a signed link, so it is never sent to a server.",
					},
					{
						q: "It says no, but the file really is a PNG. Why?",
						a: "Usually the content is not valid Base64, was copied with line breaks and stray characters, or is a URL rather than the image data. Check that the text contains only Base64 characters.",
					},
				],
			},
		},
		"show-transparent-png": {
			title: "Show transparent areas in an image",
			seo: {
				metaTitle: "Show Transparent Pixels - Visualize PNG Transparency",
				metaDescription:
					"Highlight every transparent and semi-transparent pixel in an image so hidden gaps become visible. Free, no upload - the mask is drawn in your browser.",
				longDescription:
					"A missing corner, a faded logo or a PNG that looks white on a white page can hide a lot of see-through pixels that the eye never notices. This tool paints every pixel that is not fully opaque, so the holes and the soft edges appear at a glance. Two views are available: a black and white mask that marks transparency in a single color, and a highlight that tints the original image so you keep the context. Both run locally in your browser and the picture is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Set the highlight color and its opacity so marked pixels read clearly.",
					"Download the mask, or use it to decide what has to be fixed first.",
				],
				faq: [
					{
						q: "What does the tool mark?",
						a: "Every pixel whose alpha value is below full opacity. That includes fully transparent pixels and partially transparent ones, so a soft fade or a semi-transparent shadow shows up as well as a hard hole.",
					},
					{
						q: "What is the difference between the mask and the highlight?",
						a: "The mask replaces the image with black and white: marked pixels in white, everything else black. The highlight keeps the picture and tints the marked pixels with the color you choose, which is easier to read when you need to see where the gap is.",
					},
					{
						q: "Does saving the mask keep the transparency?",
						a: "The mask is a new image: in the mask view it is black and white, and in the highlight view it is the tinted original. It is a diagnostic picture, not a transparent copy of your file.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. Decoding and rendering both happen in your browser tab, so the file is never sent anywhere and never stored.",
					},
				],
			},
		},
		"show-grayscale-pixels-png": {
			title: "Show grayscale pixels in an image",
			seo: {
				metaTitle: "Show Grayscale Pixels - Find The Gray Areas",
				metaDescription:
					"Mark every pixel of an image whose red, green and blue values match, so you can see which parts carry no color. Free, local, no upload.",
				longDescription:
					"This tool finds the pixels of an image where the red, green and blue values are the same - the pixels that carry no hue - and renders them as a mask. It is the fastest way to see why a picture that looks colored still has gray areas, or to check whether a logo is purely two-tone before you simplify it. A tolerance setting decides how close the three channels have to be to count as equal, which matters because compression often leaves small differences that the eye ignores. Everything runs in your browser, so the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Set the channel tolerance: zero requires exactly equal values, higher values catch near-gray pixels.",
					"Set the highlight color and opacity, then download the mask if you need it.",
				],
				faq: [
					{
						q: "What does the tolerance setting do?",
						a: "It is how far the red, green and blue values of a pixel may differ and still count as gray. At zero only exactly equal values match; a higher value also catches pixels that look gray but were compressed with slightly different channels.",
					},
					{
						q: "Will the result tell me the image is grayscale?",
						a: "No, the mask shows where the gray pixels are, including when they are only a part of the picture. For a plain yes or no answer use the grayscale check on this site.",
					},
					{
						q: "Why do I see almost nothing with a high tolerance?",
						a: "A high tolerance matches nearly every pixel, including the colored ones, so the whole picture lights up. Lower the tolerance to isolate the parts that are really gray.",
					},
					{
						q: "Is my image uploaded?",
						a: "No. The picture is decoded and the mask is rendered in your browser tab. No request carries your file and nothing is stored.",
					},
				],
			},
		},
		"show-color-pixels-png": {
			title: "Show color pixels in an image",
			seo: {
				metaTitle: "Show Color Pixels - Find Colored Areas In A PNG",
				metaDescription:
					"Mark every pixel that carries color, so you can see where the hue sits in an image. Free, runs in your browser, no upload and no signup.",
				longDescription:
					"This tool does the opposite of the gray pixel view: it marks every pixel whose red, green and blue values differ, which is exactly the set of pixels that carry color. Use it when an image looks black and white but is not, when you want to keep only the colored part of a logo, or when a scan has picked up a color cast you cannot see any more. A tolerance decides how large the difference between the channels has to be to count, so lightly tinted pixels can be included or left out. The mask is drawn in your browser and the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Set the channel tolerance to control how visible a color has to be to be marked.",
					"Set the highlight color and opacity, then download the mask.",
				],
				faq: [
					{
						q: "What exactly gets marked?",
						a: "Pixels where the red, green and blue values are not equal, which means they carry hue. Neutral grays stay unmarked, and so do pixels whose channels differ only within the tolerance you set.",
					},
					{
						q: "Why does a photo that looks gray light up completely?",
						a: "Photography almost never has exactly equal channels - noise, lighting and compression put small differences everywhere. Raise the tolerance to ignore the weak differences and keep only the clearly colored pixels.",
					},
					{
						q: "Can I use this to keep only the colored part of a logo?",
						a: "The mask is the picture of where the color is, but it is black and white or tinted. To cut the rest away, use the remove color tool with the background color of the logo.",
					},
					{
						q: "Is the image sent to a server?",
						a: "No. Decoding and rendering both run in your browser tab, so your file never leaves your device and nothing is stored.",
					},
				],
			},
		},
		"light-pixel-mask-png": {
			title: "Light pixel mask",
			seo: {
				metaTitle: "Light Pixel Mask - Mark Bright Areas Of An Image",
				metaDescription:
					"Select the pixels brighter than a luminance threshold and see them as a mask. Free and local: the image is analyzed in your browser, never uploaded.",
				longDescription:
					"Brightness of a pixel is measured here as luminance, the weighted mix of the red, green and blue values that matches how the eye perceives light. This tool marks every pixel above the threshold you set, so you can pull out highlights, check whether a photo is overexposed, or separate the light part of an image from the rest to work on it separately. The threshold is a percentage of full brightness, and the default is set high so only genuinely bright pixels appear. Everything runs in your browser, so the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Move the luminance threshold: higher values mark only the brightest pixels.",
					"Set the highlight color and opacity, then download the mask.",
				],
				faq: [
					{
						q: "How is brightness measured?",
						a: "By luminance, which combines the red, green and blue values with weights that match human perception: green contributes most, blue least. That is why a pure yellow pixel reads brighter than a pure blue one of the same channel values.",
					},
					{
						q: "What does the threshold mean?",
						a: "It is the brightness level a pixel has to reach, as a percentage, to be marked. A threshold of 100 marks only fully white pixels, a low value marks most of a bright image.",
					},
					{
						q: "What can I use the mask for?",
						a: "Finding blown-out highlights before you compress an image, isolating the bright part of a photo, or checking how much of a design sits above a brightness level - for example to test text contrast.",
					},
					{
						q: "Is my photo uploaded?",
						a: "No. The image is decoded and the mask is rendered in your browser tab; the file is never sent to a server and nothing is stored.",
					},
				],
			},
		},
		"dark-pixel-mask-png": {
			title: "Dark pixel mask",
			seo: {
				metaTitle: "Dark Pixel Mask - Mark Shadow Areas Of An Image",
				metaDescription:
					"Select the pixels darker than a luminance threshold and see them as a mask. Runs free in your browser - your image is never uploaded.",
				longDescription:
					"The dark counterpart of the light pixel mask: this tool marks every pixel below a brightness threshold, using the same luminance measure as the eye perceives light. It is the way to find the shadow side of a photo, to see how much of an image is almost black, or to pull out the dark areas for separate editing. Lowering the threshold makes the mask grow, so it also covers midtones and any color that is simply deep. The mask is rendered in your browser and the image itself is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Move the luminance threshold: lower values mark more pixels, including midtones.",
					"Set the highlight color and opacity, then download the mask.",
				],
				faq: [
					{
						q: "How is brightness measured here?",
						a: "By luminance, the same perceptual mix of red, green and blue that the light pixel mask uses, so the two tools split an image into bright and dark parts of the same scale.",
					},
					{
						q: "What does the threshold mean?",
						a: "The brightness level a pixel has to stay below to be marked, as a percentage. Zero marks only fully black pixels; raising it takes in shadows and then midtones.",
					},
					{
						q: "Does it mark dark colors that are not black?",
						a: "Yes. A deep blue is dark in luminance terms even though its blue channel is high, so it gets marked. The tool measures light, not hue.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. Decoding, the threshold check and the mask rendering all happen in your browser tab. Your file is not sent anywhere and nothing is stored.",
					},
				],
			},
		},
		"unique-color-mask-png": {
			title: "Unique color mask",
			seo: {
				metaTitle: "Unique Color Mask - Find Rare One-Off Pixels",
				metaDescription:
					"Mark the colors that appear only a few times in an image: compression noise, stray dots and one-off pixels. Free, local, no upload.",
				longDescription:
					"Most images are built from a small number of repeated colors, so the pixels that appear only once are the odd ones out - a compression artifact, a stray dot, a hot pixel, or a line that was left behind in a photo-editing tool. This tool counts how often each color occurs and marks the ones that do not repeat more than the number you set, as a mask. Raising the rarity limit marks more pixels, which is how you look for artifacts that repeat a few times rather than once. The counting happens in your browser, so the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the view: a black and white mask, or a highlight over the original picture.",
					"Set the rarity limit: 1 marks colors that occur once, higher values catch rare colors that repeat a few times.",
					"Set the highlight color and opacity, then download the mask.",
				],
				faq: [
					{
						q: "What counts as a unique color?",
						a: "A color that appears no more often than the rarity limit you set. With the limit at 1 the tool marks the colors that occur exactly once, which in a compressed image are usually artifacts.",
					},
					{
						q: "Why does a photo show a lot of marked pixels?",
						a: "Photographs contain thousands of slightly different shades, and in a large picture many of them occur only a few times. That is expected for photos, and the tool is most useful on flat graphics, logos and icons.",
					},
					{
						q: "What can I do with the mask?",
						a: "Use it to find the pixels that break an otherwise clean image, then remove them with the despeckle tool from this site, or repaint them with the color extract tool.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. The color count and the mask are computed in your browser tab, so the file stays on your device and nothing is stored.",
					},
				],
			},
		},
		"extract-color-from-png": {
			title: "Extract a color from an image",
			seo: {
				metaTitle: "Extract Color From PNG - Keep One Color, Drop The Rest",
				metaDescription:
					"Keep only the pixels close to a chosen color and make everything else transparent. Free, no upload - the image is processed in your browser.",
				longDescription:
					"Extract Color is the inverse of removing a color: instead of making one color transparent, it keeps that color and clears everything else, so the result is one flat shape on a transparent background. It is how you pull a single logo color or badge out of a picture and drop it on a page. A tolerance setting decides how far a pixel may sit from the chosen color and still count as it, so a slightly soft edge can be kept or trimmed away. Everything runs in your browser, so the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the color you want to keep; the eyedropper on the color field samples a pixel of the image.",
					"Set the tolerance: lower values keep only exact matches, higher values include shades nearby.",
					"Download the result as a transparent PNG, or pick another output format in the Download button.",
				],
				faq: [
					{
						q: "What does the result look like?",
						a: "The pixels close to the chosen color, unchanged, on a fully transparent background. Anything outside the tolerance is cleared, including its own alpha, so the shape has no leftover halo.",
					},
					{
						q: "How do I choose a tolerance?",
						a: "Start low and raise it while the result looks cut off at the edges. Gradients, shadows and anti-aliased edges all sit slightly off the pure color, so a little tolerance usually gives a cleaner shape than none.",
					},
					{
						q: "Is this the same as remove color?",
						a: "It is the opposite operation. Remove Color makes the chosen color transparent and keeps everything else; this tool keeps the chosen color and removes everything else.",
					},
					{
						q: "Is my image uploaded?",
						a: "No. The pixels are read and the mask is computed in your browser tab, so the file never travels to a server and is not stored.",
					},
				],
			},
		},
		"blur-png": {
			title: "Blur a PNG online",
			seo: {
				metaTitle: "Blur PNG Online - Free Image Blur, No Upload",
				metaDescription:
					"Blur an image in your browser with a Gaussian blur: smooth, fast at any radius, and transparent edges do not darken. Free, no upload, no signup.",
				longDescription:
					"Blur PNG softens an image by averaging each pixel with the ones around it. The blur is a true Gaussian approximation - three passes of a separable box blur - which is why it stays fast even at a large radius, where a naive blur would freeze the page. Transparency is handled properly: the blur works on the alpha channel as well, so a transparent area stays transparent instead of picking up dark fringes from the visible pixels next to it. Everything runs in your browser, so the image is decoded, blurred and encoded on your own device and is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the radius: small values soften, large values dissolve detail.",
					"Watch the preview - the blur applies on every change, without a separate apply step.",
					"Pick the output format in the Download button and save the result.",
				],
				faq: [
					{
						q: "What does the radius mean?",
						a: "How many pixels around each one take part in the average. Radius 2 is a slight softening for a small avatar, radius 20 removes detail altogether. It is not a percentage: the same radius has a much stronger effect on a small image than on a large one.",
					},
					{
						q: "Does blurring a transparent PNG create dark edges?",
						a: "Not here. The blur is computed with the alpha channel, so transparent pixels do not leak their color into the visible area. A blur that ignores alpha is what produces the black halo around transparent logos you often see elsewhere.",
					},
					{
						q: "Is a Gaussian blur the same as any other blur?",
						a: "It is built as three passes of a box blur, which is a common fast approximation of a Gaussian rather than a mathematically exact one. Visually the difference is small, and it holds up at radii where an exact Gaussian would be too slow to run on every keystroke.",
					},
					{
						q: "Is my image uploaded?",
						a: "No. The whole operation happens in your browser tab: no request carries your file, nothing is stored, and no account is needed.",
					},
				],
			},
		},
		"sharpen-png": {
			title: "Sharpen a PNG online",
			seo: {
				metaTitle: "Sharpen PNG Online - Free Image Sharpener, No Upload",
				metaDescription:
					"Sharpen an image in your browser by boosting local contrast around edges. Free, no upload, no limits. Works with PNG, JPG, WebP and BMP.",
				longDescription:
					"Sharpen PNG strengthens the contrast between each pixel and its neighbors, which makes edges look crisper. The strength setting blends the sharpened result with the original: at 0% the image comes back unchanged, and at 100% the sharpening kernel is applied at full strength. The tool is for images that are already correctly sized and slightly soft - it does not add detail that was never captured, so it cannot rescue a photo that was enlarged too far. Processing happens in your browser and the file is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the strength: start low, because too much creates bright halos around edges.",
					"Compare the preview against the original by toggling the before and after view.",
					"Download the result, choosing the format in the Download button.",
				],
				faq: [
					{
						q: "What does 0% strength mean?",
						a: "No change at all - the tool returns the original image. The effect grows from there, so it is safe to start at the default and lower it if the result looks harsh.",
					},
					{
						q: "Why did my sharpened image develop bright edges?",
						a: "That is the classic halo effect: the kernel pushes extreme values outward along every edge, which makes light outlines and dark outlines around shapes. Lower the strength, or apply it after a light blur, which is the usual way to tame it.",
					},
					{
						q: "Can sharpening add detail that was never there?",
						a: "No. Sharpening works with the pixels that already exist - it raises local contrast around them. If a photo was enlarged far beyond its original size, the missing detail cannot be recovered by sharpening.",
					},
					{
						q: "Is the file uploaded?",
						a: "No. Decoding, sharpening and encoding all run in your browser tab, so your image stays on your device.",
					},
				],
			},
		},
		"vignette-png": {
			title: "Add a vignette to an image",
			seo: {
				metaTitle: "Vignette PNG Online - Darken Edges, Free, No Upload",
				metaDescription:
					"Add a vignette to an image in your browser: the edges darken smoothly while the center stays untouched. Free, no upload, no signup.",
				longDescription:
					"A vignette darkens the outer part of an image and leaves the middle alone, the way a lens shades the corners of a photograph. The falloff is smooth rather than a hard frame, which is why it reads as a photographic effect instead of a border. It is a quick way to focus attention on the middle of a photo, to match a caption to an image, or to hide the edges of a composite. The effect is computed in your browser and the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the strength: zero leaves the image alone, higher values darken the edges more.",
					"Check the preview; the center should stay as bright as the source.",
					"Download the result in the format you need from the Download button.",
				],
				faq: [
					{
						q: "Does the vignette touch the center of the image?",
						a: "No. The darkening grows towards the edges and falls to nothing in the middle, so the subject stays as bright as it was in the original.",
					},
					{
						q: "What does the strength setting do?",
						a: "It sets how dark the corners become. At 0 the image is unchanged; as the value rises the edges deepen. Because the falloff is smooth, there is no edge where the darkening suddenly starts.",
					},
					{
						q: "Why does my picture look banded after a strong vignette?",
						a: "Very dark areas have fewer color steps available, so the smooth gradient can break into visible rings in an 8-bit image. A gentler strength, or saving the result as a high quality JPG or WebP, reduces it.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. The vignette is applied in your browser tab, so the file is never sent to a server and nothing is stored.",
					},
				],
			},
		},
		"silhouette-png": {
			title: "Make an image a silhouette",
			seo: {
				metaTitle: "Silhouette PNG - Turn Image Into A Solid Shape",
				metaDescription:
					"Turn any image into a flat silhouette in your browser: every visible pixel becomes one solid color while transparency is kept. Free, no upload.",
				longDescription:
					"Silhouette flattens an image into its outline. Every pixel that is visible becomes one solid color of your choice, while fully transparent areas stay transparent and partially transparent edges keep their own alpha, so a cut-out logo stays a cut-out logo instead of becoming a filled rectangle. A threshold decides how faint a pixel may be and still count as part of the shape - raising it eats away at soft, anti-aliased edges and can leave a ragged outline. This is a shape filter, not a background remover: it does not find the subject, it takes everything you already have visible. Everything runs locally in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the fill color for the shape.",
					"Set the threshold: pixels fainter than it are treated as empty.",
					"Download the result as a transparent PNG.",
				],
				faq: [
					{
						q: "What exactly happens to the colors?",
						a: "They are gone: every visible pixel is repainted in the fill color you picked. Only the alpha channel survives, so the result shows the outline of what was there.",
					},
					{
						q: "Does it keep my transparent background?",
						a: "Yes. Fully transparent pixels are skipped, and partially transparent ones keep their own alpha, so soft edges and shadows survive as a soft edge rather than a hard step.",
					},
					{
						q: "Why did the outline get holes in it?",
						a: "The threshold is too high. Pixels with low alpha were treated as empty and dropped, which happens first on anti-aliased and semi-transparent edges. Lower it until the shape is solid again.",
					},
					{
						q: "Is this a background removal tool?",
						a: "No. It does not look for a subject: whatever was already visible becomes the shape. To isolate one object first, cut it out with the remove background or extract color tools, then run the silhouette on the result.",
					},
				],
			},
		},
		"add-noise-png": {
			title: "Add noise (grain) to an image",
			seo: {
				metaTitle: "Add Noise to PNG - Film Grain In Your Browser",
				metaDescription:
					"Add monochrome or color noise to an image in your browser. The grain is deterministic by seed, so the same settings always give the same picture. Free, no upload.",
				longDescription:
					"Add Noise sprinkles grain over the picture, the way film stock adds texture and the way older digital cameras add luminance noise in low light. Monochrome grain changes the brightness of each pixel and leaves its hue alone, which is what film does and what keeps a color palette intact; color noise shifts all three channels, which looks more like a broken sensor. The result is deterministic: the same seed always produces exactly the same grain, so a look can be reproduced later instead of being a lucky roll of the dice. The effect is applied in your browser, and the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the noise type: monochrome keeps the color palette, color shifts hue as well.",
					"Set the amount: a light grain is a texture, a heavy one hides the picture.",
					"Note the seed if you like the result, so the same grain can be reproduced later.",
				],
				faq: [
					{
						q: "What is the difference between monochrome and color noise?",
						a: "Monochrome grain adds a random amount of brightness to each pixel and leaves red, green and blue in their original proportion, so the colors of the picture stay as they were. Color noise changes the channels independently, which adds a colored speckle and pulls the palette apart.",
					},
					{
						q: "Why does the same image look the same twice?",
						a: "Because the noise is generated from the seed, not at random. The same seed and the same amount always give the same grain, which is what makes a result repeatable.",
					},
					{
						q: "Can noise hide information in a photo?",
						a: "It can hide detail visually, but it does not remove it from the file: the pixels are still there underneath. Never treat noise as a way to anonymize a photo.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. The grain is generated and applied in your browser tab, so your file stays on your device and nothing is stored.",
					},
				],
			},
		},
		"randomize-pixels-png": {
			title: "Randomize pixels in an image",
			seo: {
				metaTitle: "Randomize PNG Pixels - Shuffle Blocks Locally",
				metaDescription:
					"Shuffle blocks of an image in your browser. The result is deterministic by seed, so the same settings always give the same scrambled picture. Free, no upload.",
				longDescription:
					"Randomize Pixels cuts the image into square blocks and moves them to each other's places, so the picture turns into an arrangement that is meaningless but built from its own content. It is a quick way to produce an abstract texture, to check that two images really differ, or to anonymize a screenshot so the layout is still visible but the content is not - the block size decides how readable it stays. Because the shuffling comes from a seed rather than from chance, the same settings always produce the same result, and the blocks keep their internal pixels, so a block is never torn apart. Everything runs in your browser and the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the block size: small blocks keep the texture, large ones destroy the picture.",
					"Keep the seed if you want to reproduce the same arrangement, or change it for a different one.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does it shuffle individual pixels or blocks?",
						a: "Blocks. The image is divided into squares of the size you set, and whole squares are exchanged while every pixel inside a square stays where it was. There is no setting that scrambles the picture pixel by pixel.",
					},
					{
						q: "Why is the result the same every time?",
						a: "Because the arrangement comes from the seed value, not from a random generator that changes on each run. Same image, same block size, same seed, same result - which is what lets you come back to an arrangement you liked.",
					},
					{
						q: "Can I use this to anonymize a screenshot?",
						a: "You can make the content unreadable while keeping the general layout, which is often enough for a shared mockup. It is not privacy protection in the strict sense: the original pixels are still there in the file, just in the wrong places, so treat the result as a mockup rather than a redacted document.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. The blocks are rearranged in your browser tab; the file is never sent to a server and nothing is stored.",
					},
				],
			},
		},
		"jpeg-artifacts-png": {
			title: "Simulate JPEG compression artifacts",
			seo: {
				metaTitle: "JPEG Artifacts PNG - See What JPG Compression Does",
				metaDescription:
					"See what a low-quality JPG does to an image before you export it: real JPEG compression, with blocking and smearing, applied in your browser. Free, no upload.",
				longDescription:
					"This tool answers a question you can only answer by trying: what will this picture look like after a JPEG save at a low quality? It does not draw fake blocks - it really encodes the image as JPEG at the quality you set and decodes it back, so the blocking, the ringing along edges and the smeared colors are the actual artifacts an encoder produces. Use it to pick a quality that keeps the picture acceptable, or to compare a lossy export against the lossless original. One honest limitation: JPEG has no alpha channel, so transparent areas are lost and come back black in the result. The processing happens in your browser and the image is never uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the quality: low values show heavy artifacts, high values stay close to the original.",
					"Compare the preview with the original to judge whether the quality is acceptable.",
					"Download the result, choosing PNG or JPG as the output format in the Download button.",
				],
				faq: [
					{
						q: "Is this a real JPEG conversion or a drawn effect?",
						a: "A real one. The image is encoded as JPEG at the quality you pick and decoded back, which is exactly the round trip your picture would take on a lossy export. That is also why it takes a moment and why transparency cannot survive it.",
					},
					{
						q: "What happened to the transparent areas?",
						a: "They turned black. JPEG has no alpha channel, so when the image is encoded the transparent pixels are composited onto black instead of staying see-through. Work on a flattened copy if the original transparency matters to you.",
					},
					{
						q: "Does the tool make my file smaller?",
						a: "It shows you the damage, not the file. To actually export a small JPG, use the convert PNG to JPG tool from this site, where the Download button holds the quality setting.",
					},
					{
						q: "Is the image uploaded?",
						a: "No. Encoding and decoding both happen in your browser tab, so the picture never leaves your device and nothing is stored.",
					},
				],
			},
		},
		"add-stroke-png": {
			title: "Add an outline to an image",
			seo: {
				metaTitle: "Outline PNG With a Colored Border - Free, No Upload",
				metaDescription:
					"Paint a colored ring right outside every visible pixel of a picture, 1 to 10 px thick, in the color you choose. Free, no upload, no size limit, runs locally.",
				longDescription:
					"Adding an outline means painting a ring of color immediately outside every pixel that is already visible in the picture. The tool takes everything that has any opacity, grows that shape outward by the chosen Thickness, and fills only the newly covered pixels with the Stroke color; the original pixels keep their own colors and their own transparency. The ring is drawn inside the canvas, so an outline that would leave the picture is clipped at the border. PNG, JPG, WebP and BMP are accepted, and every step happens in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Open the Stroke color swatch and pick the color of the ring; red is the starting value.",
					"Set Thickness from 1 to 10 px; 3 px is the default and reads well on a logo.",
					"Read the preview, then save the result from the Download button as PNG.",
				],
				faq: [
					{
						q: "Does the outline replace my picture?",
						a: "No. Only the pixels that the ring covers are painted; everything inside keeps its original color and its own opacity, including a soft anti-aliased edge.",
					},
					{
						q: "Why do I get no outline on a JPG?",
						a: "JPEG has no transparency, so every pixel counts as visible and there is no free space left to paint into. Convert the file to PNG first, or drop its background with the remove background tool, then run the outline again.",
					},
					{
						q: "Why is the outline flat against one edge?",
						a: "The canvas is never enlarged, so a ring that would leave the picture is cut at the border. Add padding or change the canvas size first if you need space around the subject.",
					},
					{
						q: "Will the ring close the gaps inside the subject?",
						a: "Yes. The ring follows every visible pixel, so the hole inside a letter or the gap between two strokes is filled too, not only the outer silhouette.",
					},
				],
			},
		},
		"circle-mask-png": {
			title: "Cut an image into a circle",
			seo: {
				metaTitle: "Cut a PNG Into a Circle - Free Mask, No Upload Needed",
				metaDescription:
					"Trim an image to a circle with a movable center: pick the diameter as a share of the shorter side. Free and unlimited, processed right in your browser.",
				longDescription:
					"A circle mask keeps the pixels inside a circle and makes everything outside it transparent. The Shape size slider sets the diameter as a share of the shorter side of the picture, so 100 on a 1200 by 800 image produces a circle 800 pixels wide, and Offset moves that circle into the free space around it. The picture is not resized and its colors are not touched; only the corners lose their opacity. The cut is a hard edge with no anti-aliasing. PNG, JPG, WebP and BMP go in, and the result is written in your browser without an upload.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Shape size from 20 to 100; the diameter is a share of the shorter side.",
					"Move the circle with Offset if it should not sit in the middle.",
					"Turn on Show mask to see the shape alone, then download the result.",
				],
				faq: [
					{
						q: "Does it crop the picture?",
						a: "No. The canvas keeps its size and everything outside the circle becomes transparent instead of being deleted. Use trim empty space afterwards if you want the frame tightened around the circle.",
					},
					{
						q: "Is the edge smooth?",
						a: "No, the mask is cut hard, so at full size the rim shows a one-pixel staircase. Run feather edges on the result if you want a soft rim.",
					},
					{
						q: "Why is my circle smaller than I expected on a wide photo?",
						a: "Shape size is measured against the shorter side, so on a landscape photo 100 means a circle as tall as the picture and centered, with empty margins at the sides.",
					},
					{
						q: "Can I keep the transparency when I save?",
						a: "Yes, as long as you pick PNG or WebP in the Download button. JPG and BMP have no alpha channel, so the corners come out as a flat background color there.",
					},
				],
			},
		},
		"clean-edges-png": {
			title: "Clean the color fringe on a cutout",
			seo: {
				metaTitle: "Remove the Halo From PNG Cutouts - Free, Runs in Browser",
				metaDescription:
					"Pull the leftover background color out of the semi-transparent pixels along a cutout edge, and the transparency stays as it was. Free, runs locally, no upload.",
				longDescription:
					"A color fringe is the halo a cutout picks up when the pixels along its edge still hold the background color even though they have become semi-transparent. Defringing replaces the color of every partly transparent pixel with the color of the nearest fully opaque pixel within the Radius you set, which pulls the background out of the edge and leaves the object's own color behind. Alpha is never touched, so the shape and its softness stay exactly as they were. The scan runs inside your browser, which accepts PNG, JPG, WebP and BMP and sends nothing to a server.",
				howTo: [
					"Drop the image with the halo into the source area, or pick a file from your device.",
					"Set Radius from 1 to 10 px; 3 px is enough for a typical one-pixel halo.",
					"Watch the edge in the preview - the fringe disappears, the transparency stays.",
					"Download the result as PNG to keep the alpha channel intact.",
				],
				faq: [
					{
						q: "What exactly gets recolored?",
						a: "Only pixels whose alpha is between zero and full opacity. Fully transparent and fully opaque pixels are skipped, so the body of the picture is left alone.",
					},
					{
						q: "How far does it look for a replacement color?",
						a: "Ring by ring, up to Radius pixels away, and it stops at the first fully opaque pixel it meets. A halo thicker than the Radius keeps part of its old color.",
					},
					{
						q: "My halo is still there. What now?",
						a: "Raise the Radius until the colored rim is gone. If the soft edge is very wide, feather edges first and then run this tool, which cleans the colors of the newly soft pixels as well.",
					},
					{
						q: "Does this soften or blur the edge?",
						a: "No. It copies a neighboring color onto the semi-transparent pixels and leaves alpha alone, so the edge stays exactly as sharp or as soft as it already was.",
					},
				],
			},
		},
		"close-holes-png": {
			title: "Fill holes inside a cutout",
			seo: {
				metaTitle: "Fill Small Holes in a Transparent PNG - Free, No Upload",
				metaDescription:
					"Seal pinholes and dropped pixels inside a transparent object with a radius of 1 to 3 px. Free, no signup, the cutout is processed in your browser.",
				longDescription:
					"Morphological closing fills the small transparent gaps inside an object: the shape is first grown by Radius pixels and then shrunk back by the same amount, which swallows holes narrower than about twice the radius. Only pixels that were fully transparent and became covered are added, and they are painted black; the tool never removes a visible pixel, so it cannot eat into the subject. The radius runs from 1 to 3 px, which is what a speck of dust or a dropped pixel needs, while bigger gaps are out of its reach. PNG, JPG, WebP and BMP are accepted and processed locally.",
				howTo: [
					"Drop the cutout with the pinholes into the source area, or pick a file from your device.",
					"Set Radius from 1 to 3 px; 1 is enough for a single missing pixel.",
					"Check the result: the dots inside the object are filled, the outside is untouched.",
					"Download the result, saving as PNG so the object keeps its transparency.",
				],
				faq: [
					{
						q: "Why is the filled area black?",
						a: "Newly filled pixels have no source color, so they are written as black. Run the silhouette tool afterwards if the object should end up one solid color.",
					},
					{
						q: "My hole sits against the edge of the picture and stays open.",
						a: "Closing can only fill what the shape can grow across, and it cannot grow past the canvas. A gap that touches the border counts as part of the outside.",
					},
					{
						q: "How big a hole can it close?",
						a: "Anything narrower than about twice the Radius, and the Radius slider stops at 3 px. Wider gaps are not speckles - crop them out with the crop tool or paint them in by hand.",
					},
					{
						q: "Does it also remove specks outside the object?",
						a: "No, closing only adds. To delete isolated transparent or semi-transparent dots outside the shape, use the despeckle tool, which is the same operation run the other way round.",
					},
				],
			},
		},
		"despeckle-alpha-png": {
			title: "Remove specks from a cutout",
			seo: {
				metaTitle: "Remove Speckles From a PNG Mask - Free, No Signup",
				metaDescription:
					"Delete isolated dots, dust and one-pixel hairs from a transparent cutout, without touching its colors. Free, no limits, and the cleanup runs in your browser.",
				longDescription:
					"Despeckling is the cleaning pass for a mask that came out of a noisy cut: the shape is first shrunk by Radius pixels and then grown back by the same amount, which removes anything too small to survive the shrink - isolated dots, dust, stray hairs - while restoring the rest of the outline. The colors of surviving pixels are left exactly as they were and keep their own opacity, while the ones that do not survive become fully transparent. The Radius runs from 1 to 3 px. It works in your browser, and PNG, JPG, WebP and BMP are accepted.",
				howTo: [
					"Drop the cutout into the source area, or pick a file from your device.",
					"Set Radius from 1 to 3 px; start at 1, the gentlest setting.",
					"Compare the result with the source tile - the isolated dots are gone.",
					"Download the result and save it as PNG to keep the transparency.",
				],
				faq: [
					{
						q: "What exactly counts as a speck?",
						a: "Any group of visible pixels thinner than the Radius. The opening shrinks the shape first, and whatever vanishes in that step stays gone, so specks, dust and one-pixel hairs all disappear at once.",
					},
					{
						q: "My thin lines and fine text disappeared.",
						a: "That is the honest cost of this operation: a stroke one pixel wide cannot survive the shrink. Keep the Radius at 1, and run the despeckle before adding fine detail rather than after.",
					},
					{
						q: "Does it change the colors of the object?",
						a: "No. Only alpha changes - surviving pixels keep their original color and their original transparency, and only the removed ones become fully transparent.",
					},
					{
						q: "What is the opposite of this tool?",
						a: "The close holes tool. Both use the same round brush and the same radius: one erases specks smaller than the radius, the other fills gaps smaller than it.",
					},
				],
			},
		},
		"extract-alpha-mask-png": {
			title: "Extract the alpha mask of an image",
			seo: {
				metaTitle: "Extract the Alpha Mask of an Image - Free, No Upload",
				metaDescription:
					"Turn the transparency of a picture into a black-and-white mask: white is opaque, black is see-through, gray is in between. Free and local: nothing is uploaded.",
				longDescription:
					"Extracting the alpha mask turns a picture into a black-and-white image of its own transparency: every pixel takes the opacity value of the original as its gray level, so full opacity becomes white, full transparency black, and everything between them a shade of gray. The result is completely opaque - no transparency of its own is left - and all color information is discarded, which makes it a working picture for filters and thresholds rather than something to show. PNG, JPG, WebP and BMP are all accepted, and the conversion happens in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Read the mask: white is opaque, black is transparent, gray is semi-transparent.",
					"Download the mask and feed it into a threshold or a blur step for a hard shape.",
				],
				faq: [
					{
						q: "Why is my mask gray instead of black and white?",
						a: "Because alpha is a continuous value. A pixel at 40 percent opacity becomes a mid gray, and that is exactly the information the mask is meant to keep. Use harden edges if you want every pixel fully on or fully off.",
					},
					{
						q: "What can I do with a mask?",
						a: "It is an ordinary black-and-white image, so the black and white threshold, blur, sharpen and posterize tools all work on it, and the result can be used as an alpha channel of its own.",
					},
					{
						q: "Does it keep my colors?",
						a: "No. Colors are replaced by the opacity value, so the mask shows shape and nothing else. Use the show transparent areas tool when you want to see the see-through pixels in the picture itself.",
					},
					{
						q: "Is this the same as making the background transparent?",
						a: "No, it is the opposite. The mask has no transparency at all: it describes where your object was instead of keeping it. For a usable cut-out, use remove background or remove color.",
					},
				],
			},
		},
		"feather-edges-png": {
			title: "Soften the edges of a cutout",
			seo: {
				metaTitle: "Feather PNG Edges - Free Soft Alpha in Your Browser",
				metaDescription:
					"Blur only the alpha channel so a hard cutout edge becomes a soft gradient, with the colors of the picture left untouched. Free, no upload, nothing is stored.",
				longDescription:
					"Feathering softens the boundary of a cutout by blurring only the alpha channel: the opacity of every pixel is mixed with its neighbors over the Radius you set, so a hard rim turns into a gradual ramp while the red, green and blue values are written through untouched. The radius runs from 1 to 20 px and starts at 3. Colors stay exactly as they were, which is what makes this the right tool for shadows, glows and cutouts that were scaled up. It runs in your browser, accepts PNG, JPG, WebP and BMP, and never uploads the file.",
				howTo: [
					"Drop the cutout into the source area, or pick a file from your device.",
					"Set Radius from 1 to 20 px; small values soften, large ones dissolve the outline.",
					"Look at the rim in the preview - colors stay sharp, only opacity spreads.",
					"Download the result as PNG so the new soft edge survives.",
				],
				faq: [
					{
						q: "Does it blur the picture as well?",
						a: "No. The blur is applied to a grayscale copy of the alpha channel only, and the original colors are written back unchanged, so text and sharp detail inside the object stay crisp.",
					},
					{
						q: "How far does the soft edge spread?",
						a: "Roughly the Radius in pixels on each side of the boundary. At 3 px you get a subtle fade, while at 10 px and above the shape starts to look out of focus.",
					},
					{
						q: "My edges are soft now but the halo color is still there.",
						a: "Feathering does not touch color, so the old background tint survives in the semi-transparent pixels. Follow it with the clean edges tool, which pulls the fringe out of exactly those pixels.",
					},
					{
						q: "Can I make the edges hard again?",
						a: "Yes, by thresholding the alpha with the harden edges tool, which turns every semi-transparent pixel either fully on or fully off. The result is crisp but not anti-aliased.",
					},
				],
			},
		},
		"find-contour-png": {
			title: "Trace the outline of an image",
			seo: {
				metaTitle: "Trace the Contour of a PNG Shape - Free, No Upload",
				metaDescription:
					"Reduce a cutout to a line drawing: keep only the boundary band, 1 to 5 px wide, painted in the color you pick. Free and unlimited, entirely inside your browser.",
				longDescription:
					"Finding the contour reduces a cutout to a line drawing: the shape is shrunk by the Thickness you set, and the pixels that vanish in that step - the band along the boundary - are kept and painted in the Stroke color. Everything else, including the whole interior of the object, becomes fully transparent, so what comes out is an outline rather than a picture with a border. The line is Thickness pixels wide, from 1 to 5 px, and it sits inside the silhouette. PNG, JPG, WebP and BMP are accepted, and the tracing happens in your browser.",
				howTo: [
					"Drop the cutout into the source area, or pick a file from your device.",
					"Set Thickness from 1 to 5 px; 1 px gives the finest line.",
					"Pick the Stroke color in the swatch; black is the starting value.",
					"Download the result - only the line survives, everything else is transparent.",
				],
				faq: [
					{
						q: "Where does the line sit, inside or outside the shape?",
						a: "Inside. The contour is the band the shape loses when it is shrunk by Thickness, so the outline eats into the object instead of being painted around it.",
					},
					{
						q: "Why did the picture content disappear?",
						a: "That is the point of the tool: only the boundary is kept. If you want the picture with a ring drawn around it, use the outline tool instead, which leaves the original pixels alone.",
					},
					{
						q: "What happens to a shape thinner than the line?",
						a: "It turns into a solid blob, because every one of its pixels belongs to the boundary band. Hairlines and thin letters need Thickness 1 to stay readable.",
					},
					{
						q: "Can I get the outline and the picture in one file?",
						a: "Not from this tool. Save the traced line, then compose the two images with the blend tool if you want them layered in a single picture.",
					},
				],
			},
		},
		"harden-alpha-png": {
			title: "Turn soft transparency into hard edges",
			seo: {
				metaTitle: "Crisp Hard Edges for PNG - Free, Runs Locally",
				metaDescription:
					"Snap every semi-transparent pixel to fully on or fully off with one threshold, from 0 to 100 percent, while colors stay untouched. Free, no signup, no upload.",
				longDescription:
					"Hardening an alpha channel makes transparency a decision instead of a gradient: each pixel's opacity is compared with the Alpha threshold, and everything at or above it becomes fully opaque while everything below becomes fully transparent. Semi-transparent pixels therefore snap to one side or the other, colors are left untouched, and the picture ends up with crisp, unfiltered edges - the same look a mask-based cutout has. The threshold runs from 0 to 100 percent and starts at 50. PNG, JPG, WebP and BMP are accepted, and the whole pass runs in your browser.",
				howTo: [
					"Drop the image with soft edges into the source area, or pick a file from your device.",
					"Set Alpha threshold; 50 splits the opacity range in half.",
					"Lower it to keep more of the soft rim, raise it to cut the rim away.",
					"Download the result as PNG - JPG has no alpha channel to store it.",
				],
				faq: [
					{
						q: "What happens to a pixel at exactly the threshold?",
						a: "It becomes fully opaque. The rule is that a value at or above the threshold goes on and anything below it goes off, so 50 leaves every pixel with 50 percent opacity or more visible.",
					},
					{
						q: "Will the edges look smooth afterwards?",
						a: "No, they look hard. The soft ramp collapses into a hard rim with a visible staircase along a diagonal, and feathering is the opposite of what this tool does.",
					},
					{
						q: "My soft shadow vanished.",
						a: "A shadow lives in the semi-transparent range, and hardening sends everything below the threshold to fully transparent. Lower the threshold to keep it, or keep the shadow by feathering instead.",
					},
					{
						q: "Does it change the colors of the picture?",
						a: "No. Red, green and blue are copied through untouched and only the fourth channel is rewritten. Use the show transparent areas tool first to see which pixels are about to flip.",
					},
				],
			},
		},
		"invert-alpha-png": {
			title: "Invert the alpha channel of an image",
			seo: {
				metaTitle: "Invert the PNG Alpha Channel - Free, No Upload Needed",
				metaDescription:
					"Swap see-through and solid pixels: the object becomes transparent and the background becomes opaque, colors untouched. Free, instant, nothing is uploaded.",
				longDescription:
					"Inverting the alpha channel swaps what is see-through and what is solid: a fully opaque pixel becomes fully transparent, a transparent one becomes opaque, and a half-transparent pixel becomes the other half. Colors are never changed, only the fourth channel. The catch is that transparent pixels keep whatever color the file happened to store for them, which in most images is black, so the result usually reads as a dark shape on a dark background. There are no settings to tune; PNG, JPG, WebP and BMP go in and the result is written in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"The result appears at once: the object turns see-through, the background turns solid.",
					"Download it, choosing PNG or WebP if you want the new alpha channel kept.",
				],
				faq: [
					{
						q: "Does it also invert the colors?",
						a: "No, only opacity is flipped. If you meant a photographic negative where red becomes cyan, use the invert colors tool on this site instead.",
					},
					{
						q: "Why is the background black?",
						a: "Because a transparent pixel still stores three color values, and in most files they are zero. Inverting makes those pixels visible, so the old background appears in its stored color, usually black.",
					},
					{
						q: "Is this a way to remove the background?",
						a: "No, it hides the object instead of the background. To delete a solid backdrop and keep the subject, use the remove background tool with the outer only option.",
					},
					{
						q: "Can I undo it?",
						a: "Yes, exactly. Running the tool again on its own result maps every alpha value back to the original one, pixel for pixel.",
					},
				],
			},
		},
		"make-thicker-png": {
			title: "Make a cutout thicker",
			seo: {
				metaTitle: "Thicken a PNG Cutout - Free, No Upload, No Limits",
				metaDescription:
					"Grow an opaque shape outward by 1 to 10 px with a round brush, filling in small gaps as it goes. Free and unlimited, the image is processed in your browser.",
				longDescription:
					"Making a cutout thicker grows the opaque area: every pixel with any opacity is treated as solid and the shape is expanded by Radius pixels in every direction with a round brush. Pixels inside the original shape keep their colors, and the ring that appears outside them becomes fully opaque with whatever color the file stored in those transparent spots, which is normally black. The radius runs from 1 to 10 px and the canvas never grows, so an object close to the frame is pressed flat against it. PNG, JPG, WebP and BMP are accepted and processed in your browser.",
				howTo: [
					"Drop the cutout into the source area, or pick a file from your device.",
					"Set Radius from 1 to 10 px; 2 is the default and adds a slim band.",
					"Watch the preview - the object fattens and its soft rim turns solid.",
					"Download the result and save it as PNG so the grown shape keeps its background.",
				],
				faq: [
					{
						q: "Why did my soft anti-aliased edge become hard?",
						a: "The tool works on a plain yes-or-no mask of visible pixels, so everything that had any opacity survives at full strength. Feather the result afterwards if you want the rim soft again.",
					},
					{
						q: "Why is the new band black?",
						a: "The band copies the color stored under those pixels, and a transparent area normally stores black, so a new ring usually comes out black. This tool has no color setting for the band itself.",
					},
					{
						q: "Does the canvas grow so the object can expand freely?",
						a: "No. Growth stops at the frame, so an object already touching an edge is pressed flat against it. Add padding or change the canvas size first to leave room around it.",
					},
					{
						q: "Is it the opposite of making a cutout thinner?",
						a: "Yes, the same round brush run in the other direction, and both tools share the Radius scale from 1 to 10 px.",
					},
				],
			},
		},
		"make-thinner-png": {
			title: "Make a cutout thinner",
			seo: {
				metaTitle: "Thin Out a PNG Cutout - Free, Runs in Your Browser",
				metaDescription:
					"Shrink an opaque shape inward by 1 to 10 px so strokes and letters get slimmer, without resizing the picture. Free, no upload, and the file is never stored.",
				longDescription:
					"Making a cutout thinner eats into the opaque area: the shape is shrunk by Radius pixels with a round brush, and any pixel not completely surrounded by visible pixels becomes fully transparent. The colors of surviving pixels are untouched, but the result holds only fully transparent and fully opaque pixels - the soft anti-aliased rim does not survive an erosion. The radius runs from 1 to 10 px, and pixels outside the canvas are not counted, so an object flush with the frame is not eaten away from that side. PNG, JPG, WebP and BMP are accepted, all inside your browser.",
				howTo: [
					"Drop the cutout into the source area, or pick a file from your device.",
					"Set Radius from 1 to 10 px; 1 is the gentlest setting.",
					"Check the preview - fine details shrink first, the flat sides move last.",
					"Download the result as PNG so the thinned shape keeps its transparency.",
				],
				faq: [
					{
						q: "My text and hairlines disappeared.",
						a: "Anything narrower than the Radius is removed entirely. Keep the Radius at 1 for line art, and extract the alpha mask first if you want to see the real shape before eroding it.",
					},
					{
						q: "Does it also eat the side that touches the frame?",
						a: "No. Pixels outside the canvas count as solid, so an object lying against the border keeps that edge and is only thinned on the sides where the picture continues.",
					},
					{
						q: "Why did my soft edge vanish?",
						a: "Erosion needs a solid neighborhood and a semi-transparent pixel counts as empty, so what is left is a hard rim with no fade. Feather it afterwards to bring the softness back.",
					},
					{
						q: "Can I make it thicker again?",
						a: "Yes, with the make thicker tool. Thinning and thickening use the same round brush and the same Radius scale, so a shape you trimmed can be grown back to roughly where it started.",
					},
				],
			},
		},
		"remove-alpha-channel-png": {
			title: "Flatten transparency onto white",
			seo: {
				metaTitle: "Remove the PNG Alpha Channel - Free, No Upload",
				metaDescription:
					"Blend a transparent image onto a white background and save it with no transparency left at all. Free and unlimited, done in your browser with no upload.",
				longDescription:
					"Removing the alpha channel flattens an image: every pixel is blended with a white background using its own opacity, and the alpha value of the result is set to full everywhere, so the saved file carries no transparency at all. The white is fixed - there is no color control on this page - and the canvas keeps its size, which means a transparent logo comes out as a white square. That is exactly what JPG and BMP expect, and it is the safe way to hand a cutout to an application that does not understand alpha. PNG, JPG, WebP and BMP are accepted and never leave your browser.",
				howTo: [
					"Drop the transparent image into the source area, or pick a file from your device.",
					"The result appears at once, opaque, with the transparent parts filled white.",
					"Download it as PNG or JPG; both store the flattened result correctly.",
				],
				faq: [
					{
						q: "Can I choose the background color?",
						a: "Not on this page, which always flattens onto white. To put the cutout on a color of your choice, use the fit onto background tool, which places the image on a canvas filled with the color you pick.",
					},
					{
						q: "Why does my transparent logo look like a white square?",
						a: "Because the transparent area is now filled, and the fill is white. A logo that looked right on a dark page will look wrong after this step, so keep the alpha when the file allows it.",
					},
					{
						q: "Do I even need this for a JPG?",
						a: "No, JPEG has no alpha channel, so saving as JPG flattens on its own. The step matters when the file has to stay a PNG but must not carry transparency, as in some print workflows.",
					},
					{
						q: "Can I get the transparency back afterwards?",
						a: "No. Once the alpha channel is gone that information is not in the file any more, so run the flattening again from the original transparent source rather than from the flattened copy.",
					},
				],
			},
		},
		"remove-color-from-png": {
			title: "Make a color transparent",
			seo: {
				metaTitle: "Make a Color Transparent in PNG - Free, No Upload",
				metaDescription:
					"Clear every pixel close to a chosen color and leave the rest of the picture alone, with a tolerance from 0 to 100 percent. Free, local, no account needed.",
				longDescription:
					"Removing a color makes every pixel close to a chosen one fully transparent, which is the quick way to drop a flat backdrop. Pick the Target color and the Color tolerance: the tool measures the distance between each pixel and that color in RGB space and clears everything inside the tolerance, expressed as a share of the largest distance a color can have. Nothing else is touched, so the remaining pixels keep their colors and their alpha, and the match is by value only - the same color inside your subject disappears too. It runs in your browser, and PNG, JPG, WebP and BMP are accepted.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the Target color in the swatch - set it to the exact backdrop color.",
					"Raise Color tolerance until the backdrop is gone; 0 matches one exact shade.",
					"Turn on Show mask to see what matched, then download the result as PNG.",
				],
				faq: [
					{
						q: "What does the tolerance percentage mean?",
						a: "It is the allowed distance from the target color as a share of the maximum possible one. Zero removes only near-exact matches, 10 already covers a visibly different shade, and 100 removes every pixel.",
					},
					{
						q: "It ate a part of my subject that had the same color.",
						a: "Expected: the match is by color value, not by position, so anything of that shade goes. Turn on the outer only option in the remove background tool instead and it will stop at the edge of the object.",
					},
					{
						q: "Is this AI background removal?",
						a: "No. There is no model and no subject detection here, just a color comparison. For a flat backdrop that is exact and instant, while a photo with a busy scene will not give a clean cutout this way.",
					},
					{
						q: "The edge of the result is hard. Can it be soft?",
						a: "Every pixel either matches or does not, so the tool produces no semi-transparent pixels at all. Run feather edges on the result to get a graded rim.",
					},
				],
			},
		},
		"square-mask-png": {
			title: "Cut an image into a rectangle",
			seo: {
				metaTitle: "Cut a PNG Into a Rectangle - Free Mask, No Upload",
				metaDescription:
					"Trim an image to a movable rectangle: set the width and height as shares of the shorter side. Free, no signup, and the picture is never sent anywhere.",
				longDescription:
					"A square mask keeps the pixels inside a rectangle and makes everything outside it transparent. Width and Height are both set as a share of the shorter side of the picture, so 100 on a 1200 by 800 image gives an 800 by 800 block in the middle with empty margins at the sides, and Offset slides that block into the free space around it. The canvas keeps its size and the colors are not touched; the cut is hard, with no anti-aliasing. PNG, JPG, WebP and BMP are accepted, and the whole thing is computed in your browser with no upload.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Width and Height from 10 to 100 percent of the shorter side.",
					"Use Offset if the block should not sit in the middle of the picture.",
					"Turn on Show mask to check the frame, then download the result as PNG.",
				],
				faq: [
					{
						q: "Why is 100 percent a square on a landscape photo?",
						a: "Both sides are measured against the shorter side of the image, so the largest rectangle is as tall as the picture and as wide as its height. For the full frame, skip this tool and use the crop tool.",
					},
					{
						q: "Does it resize the picture?",
						a: "No. The canvas stays the original size and the area outside the rectangle becomes transparent. Use trim empty space afterwards to cut the frame down to the rectangle.",
					},
					{
						q: "Is the edge of the rectangle anti-aliased?",
						a: "No, it is a hard cut. Feathering the result is the way to soften it when the edge is going to be seen against a colored background.",
					},
					{
						q: "Can I make a rounded rectangle instead?",
						a: "Not with this tool. Use the round corners tool after this one: the mask makes the rectangle and the radius rounds its four corners.",
					},
				],
			},
		},
		"star-mask-png": {
			title: "Cut an image into a star",
			seo: {
				metaTitle: "Cut a PNG Into a Star Shape - Free, No Upload",
				metaDescription:
					"Cut an image into a star with 3 to 12 points, adjustable inner radius, size and rotation. Free and unlimited, the mask is drawn in your browser.",
				longDescription:
					"A star mask cuts the image into a polygon star. Points sets the number of rays from 3 to 12, Inner radius is the depth of the valleys between them as a share of the outer radius, Shape size is the diameter of the outer circle as a share of the shorter side, and Rotation turns the whole shape in degrees so a star can point up, down or sideways. Offset moves it into the free space. Everything outside the star becomes transparent, the canvas keeps its size, and the edge is a hard cut without anti-aliasing. PNG, JPG, WebP and BMP are accepted, all inside your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Points from 3 to 12 and Inner radius from 10 to 90 percent.",
					"Set Shape size, then turn the star with Rotation from -180 to 180 degrees.",
					"Use Offset to place it, then download the result as PNG.",
				],
				faq: [
					{
						q: "Why does my star look like a thin asterisk?",
						a: "Inner radius controls how far the valleys cut in. Near 90 the star is almost a disc, while near 10 the points become narrow spikes, and with 12 points that reads as a sunburst.",
					},
					{
						q: "How is the size measured?",
						a: "Shape size is the diameter of the circle that reaches the tips of the star, given as a share of the shorter side. 100 fills the picture with the tips touching the edges.",
					},
					{
						q: "Can the star point downwards?",
						a: "Yes, the Rotation slider runs from -180 to 180 degrees, which is enough to turn the star to any angle, including upside down.",
					},
					{
						q: "Do I need this for a holiday badge?",
						a: "The star itself yes, the badge no. This tool has no text and no background color, so add the wording with the add text tool and the plate with the fit onto background tool.",
					},
				],
			},
		},
		"wavy-mask-png": {
			title: "Cut an image into a wavy circle",
			seo: {
				metaTitle: "Wavy Circle Mask for PNG - Free, Runs in Browser",
				metaDescription:
					"Trim an image to a circle whose radius follows a sine wave: set the amplitude, the number of waves and the phase. Free, no limits, all done in your browser.",
				longDescription:
					"A wavy mask cuts the image into a circle whose radius is modulated by a sine wave, which is what gives the badge or flower look. Shape size sets the base radius as a share of the shorter side, Amplitude says how far the edge swings in and out, Waves counts the bulges around the circle, and Phase rotates that wobble so the peaks can start anywhere. Offset moves the shape into the free space. Everything outside becomes transparent, the canvas keeps its size, and the edge is a hard cut with no anti-aliasing. PNG, JPG, WebP and BMP are accepted and nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Shape size and Amplitude to control how deep the waves bite.",
					"Set Waves from 3 to 24 and Phase from 0 to 360 to shape the pattern.",
					"Use Offset if you need it off center, then download the result as PNG.",
				],
				faq: [
					{
						q: "What do Waves and Amplitude do?",
						a: "Waves is the number of bulges the edge makes on its way around the circle, and Amplitude is how far each bulge reaches in or out, both as a share of the shorter side. More waves with a smaller amplitude reads as a soft ripple.",
					},
					{
						q: "What is Phase for?",
						a: "It rotates the whole wobble in degrees. Two stars that differ only in phase are the same shape turned around, so use it to line the peaks up with your design.",
					},
					{
						q: "Can this make a square or a rectangle?",
						a: "No. The radius only changes along a sine, so the outline is a circle with a rippled edge in every direction. Use the square mask tool for a rectangle.",
					},
					{
						q: "The outline looks jagged. Why?",
						a: "The mask is cut hard with no anti-aliasing, so a slanted edge shows a one-pixel staircase. Feather the result to soften the rim if it will be seen against a color.",
					},
				],
			},
		},
		"adjust-brightness-contrast-png": {
			title: "Brightness & contrast PNG",
			seo: {
				metaTitle: "Brightness and Contrast PNG - Free Local Adjustments",
				metaDescription:
					"Lift or darken a picture and push its contrast, with both sliders running from -100 to 100. Free, no upload - the pixels are adjusted right in your browser tab.",
				longDescription:
					"Brightness and contrast are the two adjustments an image most often needs, and they do different jobs. Brightness shifts every channel value by the same amount, lifting the shadows or dropping the highlights. Contrast stretches or compresses those values around mid-gray, pushing the lights further from the darks or pulling them back together. Both sliders run from -100 to 100 and sit at 0 by default, which means no change at all. Everything runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is left untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Brightness first - negative to pull the picture down, positive to lift it.",
					"Set Contrast after that; a flat picture usually wants a few points, a faded one a lot more.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does raising brightness lose detail in the highlights?",
						a: "Yes, if you go too far. Values are shifted and anything that reaches the top stays flat white. Watch the bright areas of the preview rather than the overall impression, and back off before they start to clip.",
					},
					{
						q: "Why do my colors look dull after a big contrast change?",
						a: "Contrast pushes channels away from mid-gray, and near the ends they run out of room, so strong settings squeeze the color into fewer values. Lowering contrast, or using the gamma tool to move the midtones instead, keeps more of the range.",
					},
					{
						q: "Can I make the picture automatic?",
						a: "The auto contrast page measures the darkest and brightest values in your image and stretches them across the full range, which is a good first pass on a washed-out scan.",
					},
					{
						q: "Does this change the size of the file?",
						a: "No, the dimensions stay the same, but re-encoding always re-compresses the pixels, so compare the reported file size in the Download button and keep PNG when you need the result to stay lossless.",
					},
				],
			},
		},
		"auto-contrast-png": {
			title: "Auto contrast PNG",
			seo: {
				metaTitle: "Auto Contrast PNG - Free Local Tool, No Upload Needed",
				metaDescription:
					"Stretch the real brightness range of a flat or washed-out picture across the full scale. Free and instant, nothing is uploaded - the adjustment happens inside your browser.",
				longDescription:
					"Auto contrast is a one-click fix for a picture whose brightness range is squeezed: a dark scan where the blacks are gray and the whites are off-white. The tool measures the darkest and the brightest value of each color channel separately, then stretches that range across the full 0 to 255 span, so the picture uses all the brightness it can. Everything runs in your browser on PNG, JPG, WebP and BMP files - nothing is uploaded and the alpha channel is left alone.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"There is nothing to configure - the tool finds the real black and white points itself and remaps them.",
					"Compare the result with the brightness and contrast page if you want to push it further by hand.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does auto contrast change the colors?",
						a: "It can. Each channel is stretched on its own, so a picture with a cast in it gets that cast amplified: if red in the source runs only from 20 to 200 while blue runs from 0 to 255, blue gets pushed further than red. The temperature tool is gentler for that, since it moves red and blue in opposite directions by the same amount.",
					},
					{
						q: "My picture is a flat gray block and nothing happens. Why?",
						a: "A channel whose darkest and brightest values are identical has no range to stretch, so that channel is passed through untouched. Run the grayscale tool first if the picture should be monochrome to begin with.",
					},
					{
						q: "Does it fix a dark picture?",
						a: "That is exactly what it is for. If the darkest pixel is not black, the tool pushes it to black and the brightest to white, which recovers a lot of a dim or underexposed photo without you having to guess a number.",
					},
					{
						q: "Does it work on transparent images?",
						a: "Yes. Only the red, green and blue values are remapped; every pixel keeps exactly the alpha value it came with, so cut-outs stay cut out.",
					},
				],
			},
		},
		"black-and-white-png": {
			title: "Black & white threshold PNG",
			seo: {
				metaTitle: "Black and White PNG - Free Threshold Tool, Runs Locally",
				metaDescription:
					"Turn any picture into pure black and white by cutting it at a luminance threshold you set. Free, no upload - the file is thresholded in your browser, not sent anywhere.",
				longDescription:
					"The black and white threshold tool turns a photo into pure black and pure white with no gray left in between. Every pixel's luminance is computed with the standard BT.601 weights, compared to the threshold you set, and replaced by white when it is at or above the threshold or black when it is below. The result holds exactly two colors, which is what scanners, e-mail signatures and photocopy workflows ask for. It runs in your browser, works on PNG, JPG, WebP and BMP, and leaves the alpha channel of the source untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the Threshold; 50 is the middle of the brightness range.",
					"Lower it to grow the black areas, raise it to keep more of the light areas.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why do my letters look ragged?",
						a: "The threshold is a hard cut with no smoothing: a pixel near the cut keeps or goes depending on a single value. Posterizing instead keeps whatever anti-aliasing the source already has, and a slightly blurred source gives the cleanest edge of all.",
					},
					{
						q: "Does it keep the transparency?",
						a: "Yes, the alpha channel is copied through untouched, so a PNG logo with a transparent background stays transparent after the cut.",
					},
					{
						q: "Is this the same as grayscale?",
						a: "No. The grayscale tool gives you a continuous ramp of grays using the same luma weights; this one collapses that ramp to exactly two values, which is why all the fine shading disappears.",
					},
					{
						q: "Where should I put the threshold for a faint scan?",
						a: "Raise it, since that pushes more of the paper into white. Lower it instead if thin strokes and small type start vanishing into the black.",
					},
				],
			},
		},
		"change-png-hue": {
			title: "Change hue PNG",
			seo: {
				metaTitle: "Change Hue PNG - Free Color Shift in Your Browser",
				metaDescription:
					"Rotate every color in a picture around the hue wheel while saturation and lightness stay put. Free, no upload, no signup - the shift runs entirely in your browser tab.",
				longDescription:
					"Changing hue rotates every color around the color wheel by the angle you give while leaving how saturated and how light each pixel is exactly as it was. A red shirt stays as bright and as vivid as it was, it just arrives at a different color: plus 120 degrees turns red into green, plus 180 gives the opposite color, minus 90 lands on blue. The work happens in your browser tab on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is passed through unchanged.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Degrees between -180 and 180; the slider starts at 0, which leaves the picture as it is.",
					"Watch the preview and adjust the angle until the color reads the way you want.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why does the slider stop at 180?",
						a: "Half a turn is the useful range, because 180 degrees already swaps a color for its opposite and anything past that is the same rotation coming back around. A smaller correction, say 20 degrees, comes from the same slider.",
					},
					{
						q: "Why did my gray areas stay gray?",
						a: "Gray pixels have no hue at all - red, green and blue are equal, so there is no angle to rotate. Use the tint tool if you want to push a whole picture, grays included, toward a color.",
					},
					{
						q: "Does the shift change how bright the picture is?",
						a: "No. Saturation and lightness are preserved through the rotation, so the picture keeps its contrast and its shading and only the color family moves.",
					},
					{
						q: "Can this recolor a picture by what is in it?",
						a: "No, and this is not an automatic recoloring tool: every pixel is shifted by the same fixed angle, whatever it depicts. To pull one color out of a photo and keep it, use the extract color from tool instead.",
					},
				],
			},
		},
		"custom-palette-png": {
			title: "Custom palette PNG",
			seo: {
				metaTitle: "Custom Palette PNG - Map Pixels to Your Hex Colors",
				metaDescription:
					"Snap every pixel to the nearest color from a list of hex codes you type in. Free and local - your palette and your picture are processed in the browser, never uploaded.",
				longDescription:
					"The custom palette tool snaps every pixel to the nearest color from a list you type in, which is how pixel art, brand palettes and duotone conversions get their exact colors. Paste the hex codes separated by commas, and each pixel is matched to whichever entry is closest in red, green and blue distance; the picture then contains no color that is not on your list. It runs entirely in your browser and accepts PNG, JPG, WebP and BMP, with nothing uploaded and the alpha channel left as it was.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Type the colors into the Hex list as full six-digit codes, for example #1b2838,#f4c430,#f7f7f7.",
					"Anything that is not a six-digit hex code is ignored, so check for typos if a color you typed is missing.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Which format do the colors have to be in?",
						a: "Full six-digit hex codes with a leading hash, like #1b2838, separated by commas, spaces or semicolons. Three-digit shorthand such as #fff is skipped, as is any code with a mistake in it, so a silently dropped entry shows up as a color the result never uses.",
					},
					{
						q: "Will the result contain exactly my colors?",
						a: "Yes, those and nothing else, but only for the opaque pixels. Fully transparent pixels keep their alpha and their original color values rather than being pulled to a palette entry.",
					},
					{
						q: "Is this pixel art?",
						a: "Not by itself - it maps what is already there, it does not redraw anything. If you are converting a photograph into a limited palette and want the banding broken up, take the result through the dithering tool afterwards.",
					},
					{
						q: "How do I come up with the colors?",
						a: "Pick one seed color and build from it - complementary, triadic, analogous and shade sets are all a single hue rotation away from each other. Whichever set you land on can be pasted straight into this Hex list field.",
					},
				],
			},
		},
		"decrease-color-count-png": {
			title: "Decrease Color Count PNG",
			seo: {
				metaTitle: "Decrease Color Count PNG - Free Local Color Reducer",
				metaDescription:
					"Drop a picture to a small palette using the preset levels 2 to 256. Free and no upload - the median-cut reduction runs in your browser and keeps transparency.",
				longDescription:
					"Decrease color count strips a picture down to a small palette using a median-cut algorithm: the pixels are repeatedly split into buckets along their widest channel until the requested number of buckets exists, each bucket collapses to its average color, and every pixel is then repainted with whichever of those colors sits closest to it. Everything runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and fully transparent pixels are passed through untouched instead of being counted as black.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Max colors from the preset list; 16 (extreme) is the starting point.",
					"Lower values give a stronger poster effect, higher ones keep more of the original shading.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "What do the extreme, strong, balanced and light presets mean?",
						a: "They are the classic loss levels - 16, 44, 96 and 192 colors - named for how far the reduction bites. They are labels on the same engine, not different algorithms.",
					},
					{
						q: "The list goes up to 256. Will it really give me 256 colors?",
						a: "The palette builder caps itself at 64 buckets, so 96, 128, 192 and 256 all produce exactly the same result as 64. For a smaller, fully reachable ceiling, use the quantize tool or name the colors yourself in the custom palette tool.",
					},
					{
						q: "Which is better, this or the dithering tool?",
						a: "This one gives clean flat patches, which suits icons and flat art. When the source is a photograph with smooth gradients, the dithering tool breaks the banding up by spreading the rounding error into neighbouring pixels.",
					},
					{
						q: "Does it resize the file?",
						a: "It does not touch the dimensions, but a picture with fewer distinct colors compresses far smaller as a PNG, so the Download button usually shows a much lighter file at the same size.",
					},
				],
			},
		},
		"dithering-png": {
			title: "Dithering PNG",
			seo: {
				metaTitle: "PNG Dithering Tool - Floyd-Steinberg and Bayer, Free",
				metaDescription:
					"Reduce a picture to 2 to 16 colors without the flat banding, using Floyd-Steinberg error diffusion or an ordered Bayer 4x4 pattern. Free, no upload, runs locally.",
				longDescription:
					"Dithering is how a picture is reduced to very few colors without the harsh flat patches that usually come with it. The tool builds a small palette from the image, then either diffuses the rounding error into neighbouring pixels with Floyd-Steinberg or adds an ordered Bayer 4x4 offset before choosing the nearest palette color. The result uses only a handful of colors yet keeps the gradients readable. It runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Color count between 2 and 16; 4 is a good starting point for a picture that should still read as a picture.",
					"Choose Pattern: Floyd-Steinberg for a photographic look, Bayer 4x4 for a regular visible grid.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Which pattern should I pick?",
						a: "Floyd-Steinberg scatters the error as fine random-looking speckle and suits photos and gradients. Bayer 4x4 adds the same offset per position in a repeating four by four tile, so the texture is an even ordered pattern that fits retro and pixel-art looks.",
					},
					{
						q: "Why does my image look noisy?",
						a: "That noise is the point: the error each pixel leaves behind is carried into its neighbours, which is how four colors can suggest a smooth sky. At 2 or 3 colors the speckle becomes obvious, so raise the Color count or switch to Bayer.",
					},
					{
						q: "Does dithering change the dimensions?",
						a: "No. The pixels are rewritten in place - the result is the same size as the source, with the same alpha channel, just painted with palette colors.",
					},
					{
						q: "Can I use my own colors?",
						a: "Not on this page - the palette is built from the image by the same median-cut engine the quantize tool uses. If you need specific colors, name them in the custom palette tool first.",
					},
				],
			},
		},
		"extract-channel-png": {
			title: "Extract channel PNG",
			seo: {
				metaTitle: "Extract Color Channel PNG - Red, Green, Blue, Free",
				metaDescription:
					"Pull the red, green or blue channel out of an image and see it as shades of gray. Free and instant, nothing is uploaded - the channel split happens in your browser.",
				longDescription:
					"Extracting a channel keeps one of the three color values of every pixel and writes it into all three output channels, so the picture comes back as a grayscale image in which bright means a lot of that color. It is a diagnostic view rather than a converter: on a photo the green channel usually reveals the most detail because human vision is most sensitive to it, while blue picks up shadows. Everything runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is preserved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose Channel: Red, Green or Blue.",
					"Switch between them to compare - the differences are the information the picture is hiding.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Can I pull out the transparency channel?",
						a: "No. Only red, green and blue are available; the alpha channel is carried through to the result rather than shown. To see transparency itself, use the show transparent areas tool.",
					},
					{
						q: "Why is the result black and white if I picked Red?",
						a: "The chosen value is written to all three output channels, so it shows as a shade of gray. A pixel with a full red value becomes white, a pixel with no red at all becomes black.",
					},
					{
						q: "Does the green channel really have the most detail?",
						a: "In most photographs, yes. The luma weights used across this site give green roughly twice the weight of red and five times that of blue, so the green channel is usually the smoothest and red the noisiest.",
					},
					{
						q: "What if I want a real grayscale picture instead?",
						a: "Use the grayscale tool, which mixes all three channels into one luminance value. It is the right choice when the output is meant to be monochrome rather than an inspection of one channel.",
					},
				],
			},
		},
		"gamma-png": {
			title: "Gamma correction PNG",
			seo: {
				metaTitle: "Gamma Correction PNG - Free Brightness Fix, No Upload",
				metaDescription:
					"Lift or drop the midtones without touching black or white. Free, no upload, no signup - gamma correction runs on your device, in your browser, instantly.",
				longDescription:
					"Gamma correction reshapes the midtones of a picture without moving the black and white end points. The value is used as a lookup on every channel: below 1 the curve pulls midtones down so the picture darkens, above 1 it lifts them so it brightens, and exactly 1 leaves the image alone. That is the tool for a washed-out scan, a photo that looks flat next to a screenshot, or an image saved with the wrong gamma assumption. It runs in your browser on PNG, JPG, WebP and BMP, uploads nothing, and keeps the alpha channel intact.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Gamma below 1 for darker midtones or above 1 for lighter ones; 1 is the untouched original.",
					"Work in small steps - the slider moves by 0.05, and past about 1.6 the shadows start to block up.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Is this the same as the brightness slider?",
						a: "They overlap but are not equal. Brightness shifts every value by the same amount and clips at the ends, while gamma bends the curve: the ends of the range stay put and only the middle moves, so gamma lifts the shadows without flattening the highlights.",
					},
					{
						q: "Where does the value 1 come from?",
						a: "It is the identity - the assumption that the stored values are already right. A value below 1 says the image was encoded too dark for the display and needs lifting; above 1 says it was encoded too light.",
					},
					{
						q: "Does it change resolution or alpha?",
						a: "Neither. The same pixels come out at the same size, the alpha channel is copied through unchanged, and only the red, green and blue lookup changes.",
					},
					{
						q: "My whole picture is too dark and gamma is not enough. What next?",
						a: "Try the auto contrast tool, which measures the actual darkest and brightest values in your image and stretches them to the full range instead of applying a fixed curve. If only the color cast is wrong, the temperature tool shifts red and blue.",
					},
				],
			},
		},
		"png-to-cmyk": {
			title: "Convert PNG to CMYK Colors",
			seo: {
				metaTitle: "Convert PNG to CMYK - Free Ink Decomposition, No Upload",
				metaDescription:
					"Split an image into the cyan, magenta, yellow and black inks a press would lay down. Free and local - the separation runs in your browser, nothing is uploaded.",
				longDescription:
					"CMYK is how a page describes color as ink: cyan, magenta, yellow and a black key. This tool takes an image apart into those four components, one after another, so you can look at what each ink would be laying down - K is how much black the darkest channel needs, and C, M and Y are the extra color required once black is removed. The math is the standard conversion from screen RGB. Everything runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and alpha is untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: C, M, Y or K to see one ink at a time in grayscale.",
					"Switch Display to Space as RGB to see cyan, magenta and yellow side by side.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Is this a CMYK file I can send to a printer?",
						a: "No. The download is a PNG of the component map, not a CMYK image - a press-ready file has to be produced by an editor that writes a real CMYK TIFF or JPEG with an embedded profile. This shows you the separation, it does not package it.",
					},
					{
						q: "Why is the black channel so much of the picture?",
						a: "K is one minus the brightest channel, so anything short of a fully lit primary picks up black. Screens were never built to show ink coverage, which is why a flat bright screen color often maps to a surprisingly heavy combination.",
					},
					{
						q: "What does Space as RGB actually show?",
						a: "The first three components go into the red, green and blue channels: cyan in red, magenta in green, yellow in blue. It looks like a false-color overlap, and the black key has nowhere to go and is left out.",
					},
					{
						q: "Which one should I look at first for a print job?",
						a: "K, since it carries most of the tonal detail, and then the three color inks on the areas where the color actually matters. To judge brightness on its own, the grayscale tool gives the same weights a press uses.",
					},
				],
			},
		},
		"png-to-hsi": {
			title: "Split PNG into HSI",
			seo: {
				metaTitle: "Split PNG into HSI - Hue, Saturation, Intensity Map",
				metaDescription:
					"Break an image into hue, saturation and intensity, where intensity is the plain average of the channels. Free, no upload - the split is drawn in your browser.",
				longDescription:
					"HSI separates a color into the hue it sits at on the wheel, how strongly it is colored, and how much light it has - intensity being the plain average of the three channel values. Unlike HSL or HSV, none of the three parts reaches its maximum on a primary color, so no component gets pinned at full scale, which is why HSI turns up in classical color processing and segmentation work. It runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is copied through untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: H for the hue map, S for saturation or I for intensity.",
					"Switch Display to Space as RGB to see hue, saturation and intensity as red, green and blue.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why does no pixel reach full intensity if it is a bright red?",
						a: "Because intensity is the average of red, green and blue, and a pure red has zero in the other two. Only a neutral white gets intensity 1. If you want brightness that does reach 1 on a saturated color, use the HSV page instead, where V is the brightest channel.",
					},
					{
						q: "How does the hue map differ from HSL and HSV?",
						a: "Not at all in the hue calculation - all three spaces derive hue the same way, and a blue pixel lands at the same angle in each. Only the second and third components differ.",
					},
					{
						q: "What is saturation really telling me?",
						a: "How far the pixel's three channels sit from each other. Zero means gray whatever its brightness; high means they are widely spread. A pale pink and a deep red can share a hue and still be very different in saturation.",
					},
					{
						q: "What does the result actually look like?",
						a: "Each component is a number from 0 to 1, drawn as a shade of gray from black to white, or dropped into a color channel when you pick Space as RGB. It is a map to read, not a picture to look at.",
					},
				],
			},
		},
		"png-to-hsl": {
			title: "Split PNG into HSL",
			seo: {
				metaTitle: "Split PNG into HSL - Hue, Saturation, Lightness Map",
				metaDescription:
					"Decompose an image into hue, saturation and lightness to see where the colors and the tones sit. Free and local, nothing is uploaded - it runs in your browser.",
				longDescription:
					"HSL breaks a color into the three parts a designer thinks in: hue is the angle on the color wheel, saturation is how vivid the color is, and lightness is how light it looks, taken as the midpoint between the brightest and the darkest channel. A fully saturated red therefore has lightness 0.5 rather than 1, because the formula measures the middle of the range instead of the top. It runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and alpha is left exactly as it was.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: H for hue, S for saturation or L for lightness.",
					"Switch Display to Space as RGB to see the three parts as red, green and blue at once.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Where does the hue scale start?",
						a: "Hue 0 is pure red and it runs through yellow at 60, green at 120, cyan at 180, blue at 240 and magenta at 300, back to red at 360. Every gray pixel reads 0, which is just the default - there is no hue to report.",
					},
					{
						q: "Why is a vivid red not at lightness 100?",
						a: "Lightness is the average of the brightest and the darkest channel. For a pure red that is 255 and 0, so L lands in the middle of the scale. A color that is dark by lightness rather than by hue, navy blue for instance, scores low on L even though its hue is perfectly clear.",
					},
					{
						q: "Should I use HSL or HSV instead?",
						a: "HSL is the model behind CSS colors, so it matches web work. HSV matches how people pick colors on screen with a value slider, so it fits design tools. If you want the average brightness of the pixels rather than either of those, the HSI page gives you that.",
					},
					{
						q: "Can I get these numbers as text?",
						a: "No. The page shows them as pictures, one component or all three, so you can see the shape of each map across the image - the hue map in particular shows where the color families are.",
					},
				],
			},
		},
		"png-to-hsv": {
			title: "Split PNG into HSV",
			seo: {
				metaTitle: "Split PNG into HSV - Hue, Saturation, Value Map, Free",
				metaDescription:
					"See an image as hue, saturation and value, the three parts behind every color picker. Free, no upload, no signup - the decomposition runs in your browser tab.",
				longDescription:
					"HSV is the color model behind most pickers on screen: a hue angle around the wheel, a saturation that says how far the color sits from gray, and a value that is simply the brightest of the three channels. Because value takes the maximum rather than an average, a fully lit primary does reach the top of the scale - pure red shows value 1. That makes it convenient for picking and for masks that should follow brightness. It runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and preserves alpha.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: H for the hue map, S for saturation or V for brightness.",
					"Switch Display to Space as RGB to see hue, saturation and value as red, green and blue.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "How is value different from intensity in the HSI page?",
						a: "Value is the largest of the three channel values, so a strong yellow is as bright as a strong blue. HSI intensity averages them instead, which darkens any color missing a full channel. For a shadow mask, value is the better signal; for overall lightness, intensity is.",
					},
					{
						q: "Why do the shadows of a face look speckled in the hue map?",
						a: "Hue is computed from the relative order of the channels, not their magnitude. In a dark area the values sit close together and the differences become noise, so the angle flips around and the map looks broken exactly where the picture has detail.",
					},
					{
						q: "Is a low value the same as low saturation?",
						a: "No, and mixing them up is the usual reason a recolor looks wrong. Saturation near zero means the pixel is gray whatever its brightness; value near zero means it is black however colorful it would otherwise have been.",
					},
					{
						q: "What do the two Display options do?",
						a: "Grayscale paints only the component you selected, black at zero and white at the top. Space as RGB drops all three into the red, green and blue channels at once for a false-color look at the whole decomposition - and then the Component selector has no effect.",
					},
				],
			},
		},
		"png-to-lab": {
			title: "Convert PNG to LAB Colors",
			seo: {
				metaTitle: "Convert PNG to LAB - Perceptual Lightness and Color Map",
				metaDescription:
					"Decompose an image into perceptual lightness plus the green-magenta and blue-yellow axes. Free and local, nothing is uploaded - the conversion runs in your browser.",
				longDescription:
					"LAB is the space built so that equal numeric steps look like equal perceptual steps. L is lightness on the familiar 0 to 100 scale, while a and b are two opponent axes - a runs from green to magenta and b from blue to yellow - each centered on zero, which is neutral gray. The values here are normalized into 0 to 1 with the axes centered at mid gray, because a PNG can only store three bytes per pixel. It runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and keeps alpha intact.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: L for lightness, A for the green-magenta axis or B for the blue-yellow axis.",
					"Switch Display to Space as RGB to see all three as red, green and blue.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why are a and b shown as brightness instead of signed numbers?",
						a: "A PNG channel cannot be negative. The green-magenta and blue-yellow axes are therefore centered at mid gray: 0.5 is neutral, darker means green or blue, lighter means magenta or yellow. That is a display choice, not a different measurement.",
					},
					{
						q: "How is LAB different from the HSL split?",
						a: "HSL numbers were built for convenience; LAB was built so that a difference in the numbers matches a difference you can see. Two colors at the same L in LAB really do look equally bright, where HSL lightness does not promise that.",
					},
					{
						q: "Do I need this for printing?",
						a: "No. LAB is the working space for color management, not an output format. For ink coverage use the CMYK page, and for a print-ready file convert in an editor that can embed an output profile.",
					},
					{
						q: "What happens to very dark pixels?",
						a: "The conversion follows the standard sRGB curve first, so shadows lift much more than a plain average would. That is deliberate - it matches how the eye reads brightness - but it means the L map of a dark photo carries more detail than the raw channels.",
					},
				],
			},
		},
		"png-to-ycbcr": {
			title: "Convert PNG to YCbCr Colors",
			seo: {
				metaTitle: "Convert PNG to YCbCr - Luma and Chroma Channel Map",
				metaDescription:
					"Split an image into luma and the two blue- and red-difference chroma channels used by video and JPEG. Free, no upload - the split runs in your browser tab.",
				longDescription:
					"YCbCr is the color arrangement almost every video codec and JPEG uses: one brightness channel called luma, and two color-difference channels called Cb and Cr. A gray pixel is one where the color channels sit exactly at the middle value, so Cb and Cr double as a map of how much color a pixel carries rather than what color it is. This tool splits your image into those three parts with the full-range weights. It runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and leaves alpha alone.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick Component: Y for luma, CB for the blue-difference channel or CR for the red-difference channel.",
					"Switch Display to Space as RGB to see the three parts together as red, green and blue.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why do the Cb and Cr pictures look pale?",
						a: "Both channels sit near the middle of the range for a neutral color and drift away from it with saturation, so only the colorful parts of the image stand out from a gray background. They are differences, not colors, and half the scale is zero difference by design.",
					},
					{
						q: "Is Y the same as the grayscale tool?",
						a: "Yes, the weights are the same BT.601 set, so both give an identical gray picture. The difference is what comes with it: YCbCr splits the color out into two extra channels, while grayscale throws that information away.",
					},
					{
						q: "Can I use this to convert an image to video color?",
						a: "Not as a file. What comes out is a PNG of the channel maps, which is useful for checking a conversion by eye; to get an actual YCbCr file for a video workflow, encode it in a video or image editor.",
					},
					{
						q: "What do the numbers mean here?",
						a: "Each component is normalized to 0 to 1, so a neutral color reads about 0.5 in Cb and Cr. Picking one channel and viewing it in grayscale shows where that value sits relative to its extremes, bright being higher.",
					},
				],
			},
		},
		"posterize-png": {
			title: "Posterize PNG",
			seo: {
				metaTitle: "Posterize PNG - Reduce Color Levels, Free and Local",
				metaDescription:
					"Cut an image down to a few tone levels per channel for a flat printed-poster look. Free, no upload - the posterization runs in your browser, instantly.",
				longDescription:
					"Posterizing cuts the number of tone levels each color channel is allowed to have, so a photograph collapses into flat bands of color the way a screen-printed poster does. Each channel value is rounded to the nearest step of a fixed ladder running from black to white - two levels gives pure black and white, four gives the chunky look of cheap printing, sixteen is already close to the original. The steps are applied to red, green and blue independently, which is why the result can shift hue slightly. It runs in your browser on PNG, JPG, WebP and BMP, uploads nothing, and keeps alpha.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Levels between 2 and 16; the default of 4 is a strong poster effect.",
					"Raise the count to bring more of the original gradient back.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does this just make the image black and white?",
						a: "Only at 2 levels, where every channel can be nothing but black or white. The black and white threshold tool does that job directly with a brightness threshold you can aim; posterize stays in color from 3 levels upward.",
					},
					{
						q: "Why did the colors drift?",
						a: "Each of red, green and blue is snapped to its own ladder, and the three can land on different steps for the same pixel. That moves the hue a little, which is normal for posterization and is why a strong setting on a skin tone can turn it orange.",
					},
					{
						q: "Can I get flat patches in more than two colors?",
						a: "Yes, and posterize and dithering are the pair for it. Posterize keeps the bands clean; the dithering tool breaks them into a speckled texture when you need a photograph to survive a very low count.",
					},
					{
						q: "Does it change size or alpha?",
						a: "Neither. Same dimensions and same alpha values; only the tone levels of the three color channels change.",
					},
				],
			},
		},
		"quantize-png": {
			title: "Quantize PNG",
			seo: {
				metaTitle: "Quantize PNG - Reduce to a Fixed Color Count, Free",
				metaDescription:
					"Reduce any picture to a chosen number of colors, 2 to 64, with median-cut. Free, no upload - quantizing runs in your browser and keeps transparency intact.",
				longDescription:
					"Quantizing reduces an image to a chosen number of colors. The tool samples the pixels, groups them into buckets by repeatedly splitting the bucket with the widest spread down its longest channel, takes each bucket's average as one palette entry, and then repaints every pixel with the nearest of those entries. Fully transparent pixels are skipped rather than treated as black, so cut-out graphics survive the reduction. Everything happens in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is preserved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Color count between 2 and 64; 16 is the starting point.",
					"Go lower for a strong graphic look, higher to keep more of the original detail.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "How is this different from the decrease color count page?",
						a: "That page is the same algorithm behind fixed presets named after the usual compression levels, which is convenient when you just want a known loss level. This one is the free-form version: any number from 2 to 64.",
					},
					{
						q: "What happens to the colors that get dropped?",
						a: "They are replaced by whichever surviving color is nearest, measured as distance in red, green and blue. Close pairs merge and end up slightly wrong; colors far apart stay recognizable.",
					},
					{
						q: "Why does it look patchy?",
						a: "That is the usual result of reducing a smooth gradient: broad flat areas appear where the original had a gentle change. The dithering tool trades the patches for a speckled texture that reads as continuous tone.",
					},
					{
						q: "Can I choose the palette myself?",
						a: "Not on this page - the palette is derived from the image. To decide the exact colors, list them as hex codes in the custom palette tool, and to keep the banding out of a photograph add the dithering tool after.",
					},
				],
			},
		},
		"sepia-png": {
			title: "Sepia effect",
			seo: {
				metaTitle: "Sepia Effect PNG - Free One-Click Vintage Tone",
				metaDescription:
					"Give a picture the warm brown tone of an old photograph in one click. Free, no upload, nothing to configure - the classic sepia tone is applied in your browser.",
				longDescription:
					"The sepia effect gives a picture the warm brown tone of an old photograph by pushing a fixed combination of the three channels into red, green and blue - red gets the largest share of the original brightness, green slightly less, blue the least, and that imbalance is what produces the brown cast. It takes no settings and no strength slider: the tone is the classic one, applied in full. Everything runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is left untouched.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"There is nothing to configure - the classic sepia tone is applied at once.",
					"If it comes out too strong, the tint tool with a low strength is the gentler route.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Can I dial the sepia effect down?",
						a: "Not with this page, which always applies the full tone. For a lighter touch use the tint tool: pick a brown, set the strength low, and the picture shifts toward it without losing as much of its original color.",
					},
					{
						q: "Does it work on a color picture?",
						a: "Yes, and the color is what disappears. Each channel gets its own fixed mix of the original, so hue differences compress toward brown - which is exactly why sepia works, and why a very colorful original ends up flatter than a neutral one.",
					},
					{
						q: "Is it the same as converting to grayscale and adding a tint?",
						a: "Close but not identical. Sepia applies one matrix to the original color, so some channel differences survive inside the brown; grayscale first throws them away, which gives a smoother and more uniform result.",
					},
					{
						q: "Does it keep transparency?",
						a: "Yes. Only the color channels are rewritten, and the alpha value of every pixel is copied through unchanged.",
					},
				],
			},
		},
		"swap-channels-png": {
			title: "Swap channels PNG",
			seo: {
				metaTitle: "Swap Color Channels PNG - Red Green Blue, Free",
				metaDescription:
					"Exchange two color channels of an image for a striking recolor that loses no data at all. Free, no upload - the swap runs in your browser and stays lossless.",
				longDescription:
					"Swapping channels exchanges two of the three color values of every pixel and leaves the third where it is. It is a lossless operation - nothing is calculated and no value is discarded - but it changes what the picture looks like, often dramatically: turning red into green and green into red turns a green landscape red, and swapping red with blue gives the strange cyan and orange look of a color negative. It runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and does not touch the alpha channel.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose Channel pair: Red and Green, Red and Blue, or Green and Blue.",
					"Compare the three options; each one moves the color in a different direction.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does swapping lose any information?",
						a: "No. It is a rearrangement - applying the same swap a second time gives back exactly the original picture, and every number in the file is still there. Compare that with the grayscale tool, which mixes three values into one and does lose them.",
					},
					{
						q: "Which swap gives the weird negative look?",
						a: "Red and Blue. Green is left in place while the warm channel becomes the cold one, which is why the result resembles a color negative with the midtones roughly preserved.",
					},
					{
						q: "Is this a recoloring tool?",
						a: "No - it is one fixed rearrangement applied to the whole picture, not a way to pick out an object and repaint it. To isolate a single color, use the extract color from tool; to shift the whole picture toward a color, use the tint tool.",
					},
					{
						q: "How is this different from the invert colors page?",
						a: "Inverting replaces every value with 255 minus itself, which flips the whole picture and its lightness structure. Swapping only rearranges the three channels, so the relationships between them survive.",
					},
				],
			},
		},
		"temperature-png": {
			title: "Temperature PNG",
			seo: {
				metaTitle: "Temperature PNG - Warm or Cool Color Shift, Free",
				metaDescription:
					"Make a picture warmer or cooler by pushing red and blue in opposite directions. Free, no upload - the color temperature shift runs locally in your browser.",
				longDescription:
					"The temperature slider makes a picture warmer or cooler by pushing the red channel up and the blue channel down, or the other way round, in one step. Positive values add orange, as if the photo were shot under tungsten light, while negative values add blue for a cold overcast look. Green is not touched at all, which keeps skin tones from going fluorescent but also means the effect is a simple cast rather than a full white-balance correction. It runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and preserves alpha.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Percent positive for a warmer, more orange picture, negative for a cooler, bluer one; 0 changes nothing.",
					"Compare the two ends of the slider before settling on a value.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Why is green left alone?",
						a: "Green is the channel the eye weights most heavily, and pushing it along with the others turns skin tones gray-green or waxy. Holding it steady keeps the effect to a cast, which is what most pictures need.",
					},
					{
						q: "Is this the same as the tint tool?",
						a: "Similar job, different mechanism. Temperature only ever moves red and blue in opposite directions, so the image stays neutral on the green axis. Tint takes any color you name and scales all three channels toward it, so a green tint pulls green up and the other two down.",
					},
					{
						q: "Can this fix a badly white-balanced photo?",
						a: "It moves you closer. A picture shot in shade looks blue and one shot under tungsten looks orange, and the slider corrects that cast directly. It will not fix the brightness problems, which is what the auto contrast tool is for.",
					},
					{
						q: "How strong is the effect at the ends of the slider?",
						a: "At 100 the red channel is multiplied by 1.25 and blue by 0.75; at -100 it is the other way round. Highlights clip before that, so a picture with a lot of bright area goes flat at the extremes.",
					},
				],
			},
		},
		"tint-png": {
			title: "Tint PNG",
			seo: {
				metaTitle: "Tint PNG - Push a Whole Image Toward One Color, Free",
				metaDescription:
					"Scale every color channel of an image toward one color you choose, with a strength from 0 to 100. Free, no upload - the tint is applied in your browser.",
				longDescription:
					"Tinting scales the three color channels of every pixel toward one color you choose, with a strength that decides how far it goes. At 0 strength the picture is untouched; as the strength rises, the red, green and blue values are multiplied by the matching parts of the tint, so an orange tint pulls the red channel up and the blue channel down. It is a global cast rather than a recoloring: every pixel moves the same distance in the same direction, whatever it shows. Everything runs in your browser on PNG, JPG, WebP and BMP files, uploads nothing, and keeps alpha.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Pick the tint in the Color swatch; the default is a warm amber.",
					"Set Strength from 0 to 100, check what full strength looks like, then ease it back.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Can tint change one object in the picture?",
						a: "No. Tint applies to every pixel equally, so the red car and the blue sky are both pulled toward the tint color. If you want one subject changed, mask it out first with the extract color from tool or the remove background tool.",
					},
					{
						q: "What happens at 0 and at 100?",
						a: "At 0 nothing changes at all - it is a safe no-op for checking a setting. At 100 the channels are multiplied by the tint itself, which can clip bright areas to solid white.",
					},
					{
						q: "How is this different from the sepia page?",
						a: "Sepia is one fixed matrix with no settings, tuned for that particular brown. Tint takes any color and any strength, so it covers the whole range from a barely visible cast to a heavy wash.",
					},
					{
						q: "Why do bright areas look unchanged?",
						a: "Channel values are multiplied, and a pixel already near 255 has no headroom left to go up. The tint shows most in the midtones and shadows - use the brightness and contrast page first if the picture is too dark.",
					},
				],
			},
		},
		"two-colors-png": {
			title: "Two colors PNG",
			seo: {
				metaTitle: "Two Colors PNG - Free Two-Tone Reduction, No Upload",
				metaDescription:
					"Reduce an image to exactly two colors you pick, split at a luminance threshold. Free and instant, no upload - the two-tone result is built in your browser.",
				longDescription:
					"The two colors tool reduces a picture to exactly two shades you pick. Every pixel's brightness is measured with the standard BT.601 luminance weights and compared against the threshold: brighter pixels take the From color, darker ones take the To color. The cut is hard, with no blending along the edge, which is what gives it the crisp look of a poster, a logo silhouette or a duotone. It runs in your browser on PNG, JPG, WebP and BMP files, nothing is uploaded, and the alpha channel is preserved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the Color pair: From is the color for the bright areas, To the color for the dark ones.",
					"Move the Threshold to decide how much of the picture counts as bright; 50 splits it in the middle.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Which of my two colors goes where?",
						a: "From is the light color and To the dark one - that is the order the tool reads them in. With the defaults it simply reproduces black and white; swap the two and the picture turns into a photographic negative.",
					},
					{
						q: "Will the edges be smooth?",
						a: "No, and that is the character of the tool. A pixel is either one color or the other with nothing in between, so diagonal edges come out as stair steps. Posterizing instead keeps whatever anti-aliasing was already in the source.",
					},
					{
						q: "Does it keep transparency?",
						a: "The alpha channel is copied through unchanged, so a transparent background stays transparent even though the color values behind it are recolored.",
					},
					{
						q: "Can I get more than two colors?",
						a: "Not from this page. For a longer ramp, build one in the tint tool and posterize afterwards, or use the custom palette tool to map the picture onto a list of exact colors instead.",
					},
				],
			},
		},
		"base64-to-png": {
			title: "Decode a Base64 string into an image",
			seo: {
				metaTitle: "Base64 to PNG - Free Browser Decoder, Nothing Is Uploaded",
				metaDescription:
					"Paste a Base64 string or a data URI and get the picture back, ready to download. Free, no upload, no account - the decoding happens right in your browser.",
				longDescription:
					"Decoding a Base64 string turns text back into the image bytes it was made from. This page runs the PNG to Base64 encoder backwards: you paste the string, the bytes are decoded in your browser and the picture appears beside the text field. Whitespace and line breaks are ignored, and a complete data: URI works as well as the bare payload because the prefix is stripped first. What comes back is the picture, not the original file: the bytes are decoded to pixels and encoded again, so every pixel is identical while the file bytes are not guaranteed to match. Nothing is uploaded - pasted Base64 is often a credential rather than a photo.",
				howTo: [
					"Copy the Base64 string and paste it into the text field on the left; a full data: URI works too.",
					"The decoded picture appears in the result tile on the right.",
					"Save it from the Download button, as PNG or in another format.",
				],
				faq: [
					{
						q: "Do I need the MIME type or the file name?",
						a: "Neither. Paste the payload alone and it is decoded as it is; paste the whole data:image/png;base64,... value and the prefix is removed first. The PNG signature check on this site reads the first bytes if you want a yes or no before decoding.",
					},
					{
						q: "Why is the downloaded file not identical to my original?",
						a: "The string holds compressed bytes while the picture you see is decoded pixels, and saving encodes those pixels again. The pixels match; the bytes are not promised to.",
					},
					{
						q: "Will it decode a Base64 string of a JPG or a WebP?",
						a: "Yes. The decoder reads whatever format the bytes describe, so a JPG payload gives back the JPG picture. You can still save it as PNG.",
					},
					{
						q: "Is my pasted string sent to a server?",
						a: "No. It is decoded and discarded in your browser tab, and the page makes no request with it - which matters when the string is a secret rather than a picture.",
					},
				],
			},
		},
		"bytes-to-png": {
			title: "Build an image from RGBA byte values",
			seo: {
				metaTitle: "RGBA Bytes to PNG - Free Image Builder, Nothing Uploaded",
				metaDescription:
					"Turn decimal RGBA byte values back into a picture: paste the numbers, set the width, the height is worked out for you. Free, private, runs in your browser.",
				longDescription:
					"Turning RGBA byte values back into an image is what a canvas script does when it fills a pixel buffer by hand: every pixel is four numbers - red, green, blue, alpha - and this page assembles them into the picture they describe. Paste them into the text field, set the Width so the rows can be counted, and the height follows from how many pixels you pasted. The parser is forgiving about separators, because only the digits are read, so a list copied out of a JavaScript array works untouched; it is not forgiving about values. Each must be a whole number from 0 to 255, the count must be a multiple of four, and the pixel count must divide evenly by the width.",
				howTo: [
					"Paste the RGBA numbers into the text field; any separators between them are ignored.",
					"Set Width to the number of pixels in one image row - the height is computed from the rest.",
					"Download the assembled PNG from the Download button.",
				],
				faq: [
					{
						q: "Why do I have to enter the width?",
						a: "A flat list of RGBA values has no row structure, so its pixels would run into one long line. Width turns the list into a grid.",
					},
					{
						q: "Which separators are accepted?",
						a: "None in particular. Spaces, commas, semicolons, parentheses and line breaks are all ignored, because the parser only reads the digits. The hex to PNG page on this site is the stricter sibling: it wants exactly eight hex characters per pixel.",
					},
					{
						q: "Can the values be fractions or percentages?",
						a: "No. A channel is a byte, so every value must be a whole number from 0 to 255 and 12.5 is rejected. Multiply a CSS alpha by 255 first.",
					},
					{
						q: "What happens when the pixel count does not fit the width?",
						a: "The page refuses to guess. If the division leaves a remainder, nothing is assembled and the error names both numbers.",
					},
				],
			},
		},
		"data-uri-to-png": {
			title: "Decode a data URI into an image",
			seo: {
				metaTitle: "Data URI to PNG - Free Browser Decoder, Nothing Uploaded",
				metaDescription:
					"Turn a data:image/...;base64,... value from a stylesheet or a template back into a downloadable picture. Paste the whole string - free, private, no signup.",
				longDescription:
					"Decoding a data URI means taking the whole value out of an attribute - the data:image/png;base64,... string that sits inside src, href or background-image - and turning it back into a picture. Paste that value as it appears in your code and the prefix is removed, the payload decoded and the image shown, ready to save as a real file. That is what makes this useful when a stylesheet contains a giant inline image and you need to see what is inside it, or when a template holds an embedded icon that has to land on disk. The decoding runs in your browser, so the string is never sent anywhere, and what comes back is decoded pixels re-encoded: the picture is faithful, the file bytes may differ.",
				howTo: [
					"Copy the complete data: URI, media type and base64 payload, comma included.",
					"Paste it into the text field on the left - the prefix is stripped automatically.",
					"The picture appears in the result tile; download it from the Download button.",
				],
				faq: [
					{
						q: "What exactly is a data URI?",
						a: "It is the entire string used inside an attribute: the data: prefix, the media type, the base64 marker, a comma and the payload. The PNG to data URI tool on this site builds one from a file when you need a value to paste into CSS.",
					},
					{
						q: "Do I have to include the prefix?",
						a: "No. It is stripped whenever it is there, so a complete src attribute value works and so does the bare payload if you copied only that part.",
					},
					{
						q: "Is a data URI private?",
						a: "Treat it as the image itself, because it is - a copy of every pixel sits in that text. This page decodes it in your browser tab without sending a request.",
					},
					{
						q: "Does the decoded picture keep its transparency?",
						a: "Yes, when the payload is a PNG, because the alpha channel is part of those pixels. A data URI built from a JPG cannot hold transparency at all.",
					},
				],
			},
		},
		"hex-to-png": {
			title: "Build an image from hex pixel values",
			seo: {
				metaTitle: "HEX Pixels to PNG - Free Image Builder, Nothing Uploaded",
				metaDescription:
					"Assemble an image from rrggbbaa hex values: paste the tokens, set the width, the height is calculated automatically. Free, private, nothing is uploaded.",
				longDescription:
					"Building an image from hex pixel values is the reverse of dumping one: every pixel is written as eight hexadecimal characters - rrggbbaa, two each for red, green, blue and alpha - and this page assembles those values back into the picture they came from. Paste them into the text field, set Width to the number of pixels in a row, and the height is worked out from the total, so a 64 by 64 sprite is 4096 tokens at a width of 64. The format is strict on purpose: each token must be exactly eight hex characters and whitespace is the only separator, which keeps the list readable as a grid. It is also the form a canvas script or a shader snippet already uses, where a color constant is written as 0xrrggbbaa.",
				howTo: [
					"Paste the rrggbbaa tokens into the text field; spaces and line breaks between them are fine.",
					"Set Width to the pixel count of one row - the height follows from the token count.",
					"Check the preview: a wrong width shifts every row and the picture shears, which is the fastest way to spot a bad width.",
					"Download the assembled PNG from the Download button.",
				],
				faq: [
					{
						q: "Why does every token need eight characters?",
						a: "The alpha byte is part of the value, so six digits are not enough. Shorthand such as #fff or #ff000080 is rejected; expand it to eight.",
					},
					{
						q: "Does the height have to be typed too?",
						a: "No, only the width. The height is the token count divided by it, and a remainder stops the page with an error instead of dropping pixels.",
					},
					{
						q: "What about uppercase values or a leading hash?",
						a: "Case does not matter - uppercase and lowercase both parse. A hash character does not: it is not a separator here, so remove it.",
					},
					{
						q: "Can I get this format out of an image?",
						a: "Yes. The PNG to HEX pixels tool lists every pixel as rrggbbaa in exactly this layout, one image row per line, an exact round trip for sprites.",
					},
				],
			},
		},
		"png-to-bytes": {
			title: "List image pixels as RGBA byte values",
			seo: {
				metaTitle: "PNG to RGBA Bytes - Free Pixel Dump, Nothing Is Uploaded",
				metaDescription:
					"Dump every pixel of an image as four decimal bytes, one image row per line, ready for a canvas script or a shader. Free and private: nothing is uploaded.",
				longDescription:
					"Listing the pixels of an image as RGBA byte values means writing out, for every pixel, four decimal numbers between 0 and 255: red, green, blue, alpha. That is the raw form a canvas script works with - the array handed to a typed array, the buffer written into a shader, the sample a colleague wants as numbers rather than as a picture. This page decodes the file and prints the list in the result panel, one image row per line, so the shape of the image stays readable in the text. PNG, JPG, WebP and BMP are accepted on upload, and what you get is always the decoded pixels, so a JPG simply contributes fully opaque alpha values. There is no quality setting involved: the numbers are the picture.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Read the R G B A groups in the result panel - one line per image row.",
					"Press the copy button to put the whole list on the clipboard.",
					"Feed the numbers to a typed array, or switch to the hex listing if the target language prefers that form.",
				],
				faq: [
					{
						q: "How many numbers should I see?",
						a: "Four for every pixel, so a 100 by 100 image prints 40000 numbers. One image row is one line, which is how you count the width.",
					},
					{
						q: "Are the values the same for every kind of image?",
						a: "They describe the decoded picture, so a screenshot, a photo and a flat icon all print four numbers per pixel.",
					},
					{
						q: "Can I paste these numbers back?",
						a: "Yes. The bytes to PNG tool rebuilds the image from exactly this layout once you give it the width of a row. The pixel values survive unchanged; the re-encoded file is not guaranteed to match byte for byte.",
					},
					{
						q: "Why do transparent pixels show 0 in the last column?",
						a: "Zero alpha is fully transparent, and it is a real value rather than a missing one. A JPG or BMP has no alpha channel, so it reports 255.",
					},
				],
			},
		},
		"png-to-data-uri": {
			title: "Build a data URI from an image",
			seo: {
				metaTitle: "PNG to Data URI - Free Embed String, No Upload, No Limits",
				metaDescription:
					"Turn an image into a complete data:image/png;base64,... value for CSS, HTML or JSON and copy it in one click. Free, no upload, no limits, encoded locally.",
				longDescription:
					"A data URI is the complete string that lets an image live inside a text file: the data: prefix, the media type, the base64 marker, a comma and then the encoded picture. This page takes an image and builds exactly that string, ready to paste into a background-image declaration, an HTML src attribute, a JSON config or an email template, with a button that copies the whole value. The encoding always produces a PNG, whatever you loaded, because the pixels are re-encoded through a canvas as a PNG - so a JPG or WebP comes back as PNG bytes inside the data URI. That is the honest catch: you get a data URI for a PNG, not for the WebP you started with. Everything runs in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Wait for the full data:image/png;base64,... string to appear in the result panel.",
					"Press the copy button to take the whole value, prefix included.",
					"Paste it into a background-image declaration, a src attribute or a JSON config.",
				],
				faq: [
					{
						q: "How is this different from the Base64 string?",
						a: "The Base64 output is only the payload. The data URI adds the data: prefix, the image/png media type and the comma, which an attribute expects as a whole. The data URI to PNG page here does the reverse.",
					},
					{
						q: "Does it stay a PNG if I upload a JPG?",
						a: "Yes, and that is worth knowing: the pixels are encoded again as a PNG, so the data URI always says image/png and carries PNG data.",
					},
					{
						q: "Why is the string so much longer than the file?",
						a: "Base64 stores six bits per character, so it costs about a third more characters than the raw bytes. It is a transport format, not a compression one.",
					},
					{
						q: "Is the string uploaded anywhere?",
						a: "No. The image is read, encoded and displayed in your browser tab, and no copy is stored - which matters because a data URI contains the whole picture.",
					},
				],
			},
		},
		"png-to-hex": {
			title: "List image pixels as hex values",
			seo: {
				metaTitle: "PNG to HEX Pixels - Free Color List, Runs in Your Browser",
				metaDescription:
					"Print every pixel as an rrggbbaa hex value, one image row per line, for palettes, sprite tables and canvas scripts. Free, private, decoded in your browser.",
				longDescription:
					"Reading the pixels of an image as hex values means printing every pixel as eight hexadecimal characters - rrggbbaa - with two digits each for red, green, blue and alpha, one image row per line. That is the notation you meet wherever a color is written as a constant: a palette in a design tool, a sprite definition in an engine, a fill value in a canvas script or a snippet in a shader, where a color usually appears as 0xrrggbbaa. Because the alpha byte is included, a transparent corner shows up as 00 in the last two characters instead of disappearing, which makes the listing a complete description of the picture. PNG, JPG, WebP and BMP are accepted, and what you read is the decoded picture - there is no quality setting and nothing to choose.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Read the rrggbbaa values in the result panel, one image row per line.",
					"Press the copy button to put the whole list on the clipboard.",
					"Paste it into a canvas script or a sprite table.",
				],
				faq: [
					{
						q: "What does each group of two characters mean?",
						a: "Red, green, blue, then alpha. ff in the last position is fully opaque, 00 fully transparent: ff0000ff is visible red, ff000000 is not.",
					},
					{
						q: "How do I read one specific pixel?",
						a: "Count along a line: each token is one pixel and each line is one row. The first token of the first line is the top-left pixel.",
					},
					{
						q: "Will a large image fit in the result panel?",
						a: "A 64 by 64 sprite is 4096 tokens and a 256 by 256 photo is 65536, so this is meant for small graphics. Resize first if it is large.",
					},
					{
						q: "Is the round trip lossless?",
						a: "In pixel values, yes: feeding the list back into the hex to PNG tool reproduces every pixel exactly. The re-encoded file bytes are not promised to match.",
					},
				],
			},
		},
		"png-to-rgb-values": {
			title: "List image pixels as rgba values",
			seo: {
				metaTitle: "PNG to RGB Values - Free rgba() List, Decoded Locally Only",
				metaDescription:
					"Print every pixel as rgba(r, g, b, a), one image row per line, for CSS, canvas scripts and tokens. Free, no signup, decoded locally - nothing is uploaded.",
				longDescription:
					"Writing the pixels of an image as rgba values means printing every pixel as rgba(r, g, b, a), with whole numbers from 0 to 255 and an alpha running through the same range. That is the CSS spelling of a color, and the same form turns up in canvas scripts, design tokens and documentation, so it is the convenient one to read when a number has to be understandable rather than compact. This page decodes the image and lists the pixels in the result panel, one image row per line, so you can still count the width by counting the values on a line. PNG, JPG, WebP and BMP are all accepted, and what you get is always the decoded pixels: a JPG has no alpha channel, so its fourth value is 255 on every line.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Read the rgba(r, g, b, a) groups in the result panel, one image row per line.",
					"Press the copy button to put the whole list on the clipboard.",
					"Paste it into a stylesheet, a canvas script or a token file.",
				],
				faq: [
					{
						q: "Why is the alpha written as 255 and not as a fraction?",
						a: "A channel is a byte, so it runs from 0 to 255. CSS opacity uses 0 to 1, so a value from a stylesheet must be multiplied by 255.",
					},
					{
						q: "Which of the three pixel formats should I pick?",
						a: "Use the rgba list when a person has to read the numbers, hex when you want half as many characters, and plain bytes for a typed array.",
					},
					{
						q: "Can I turn the list back into an image?",
						a: "Yes. The RGB values to PNG tool rebuilds the picture from exactly this form as soon as you give it the width of a row.",
					},
					{
						q: "Does the listing show the transparent parts?",
						a: "Yes, as rgba(..., 0). If every alpha reads 255, the source had no transparency to begin with - a JPG cannot hold any.",
					},
				],
			},
		},
		"rgb-values-to-png": {
			title: "Build an image from rgba values",
			seo: {
				metaTitle: "RGB Values to PNG - Free Image Builder, Nothing Uploaded",
				metaDescription:
					"Assemble an image from rgba(r, g, b, a) numbers: paste the list, set the width, the height is computed automatically. Free, private, runs in your browser.",
				longDescription:
					"Building an image from rgba values is the reverse of listing one: you have a run of numbers in the CSS spelling of a color - rgba(255, 0, 0, 255) and its neighbours - and want them back as a picture. Paste the values into the text field, set Width to the number of pixels in one row, and the height follows from the total, so a 32 by 32 icon is 256 rgba groups at a width of 32. Commas, parentheses and line breaks are ignored, which means a list copied out of a stylesheet works as it is, but the values are not negotiable: each must be a whole number from 0 to 255, four per pixel, and the pixel count must divide evenly by the width. A wrong width is the one mistake the page cannot detect - it assembles a sheared picture without complaining.",
				howTo: [
					"Paste the rgba(255, 0, 0, 255) style values into the text field; the punctuation is ignored.",
					"Set Width to the pixel count of a single row - divide the value count by four to get the pixel count, then check that it divides evenly.",
					"Compare the preview with the shape you expect and change the width if rows are offset.",
					"Download the assembled PNG from the Download button.",
				],
				faq: [
					{
						q: "Do the parentheses and commas have to be exact?",
						a: "No, only the numbers are read. Spacing, commas, parentheses and line breaks are ignored, so a stylesheet rule pastes fine.",
					},
					{
						q: "Why does an error appear when the numbers do not fit?",
						a: "A partial row has no sensible answer, so a remainder is reported with both numbers rather than padded away.",
					},
					{
						q: "Can alpha be a fraction?",
						a: "No. Every channel is a byte between 0 and 255, and fractions are rejected. Multiply a CSS alpha such as 0.5 by 255 before pasting.",
					},
					{
						q: "Where do I get this format?",
						a: "From an image: the PNG to RGB values tool prints every pixel in this exact notation, one image row per line, an exact round trip in pixel values.",
					},
				],
			},
		},
		"analogous-png": {
			title: "Analogous Color Palette",
			seo: {
				metaTitle: "Analogous Color Palette PNG - Free Color Harmony Tool",
				metaDescription:
					"Build an analogous palette from one base color: 3 to 9 neighbouring hues with adjustable spread. Free, runs in your browser, no upload, no signup.",
				longDescription:
					"Analogous colors are hues that sit next to each other on the color wheel, and this page turns one base color into a ready-made set of three to nine of them. The base color sits in the middle and the neighbours are rotated away from it by the Spread you choose, so a spread of 30 with five colors gives you minus 60, minus 30, the base itself, plus 30 and plus 60 degrees of hue. Because every member comes from one hue family, the result reads as calm and related rather than loud, which is why analogous palettes turn up in page backgrounds, dashboards, onboarding flows and nature photography. Nothing is uploaded, because there is no file to upload: the palette is computed on your device and drawn as flat swatches you can save as PNG, JPG, WebP or BMP. One honest caveat: the rotation happens in HSL, so saturation and lightness are copied across unchanged and two colors only 30 degrees apart can still differ a lot in apparent brightness.",
				howTo: [
					"No upload is needed - the palette is drawn from the Base color you pick, straight in the browser.",
					"Set the Base color; every other swatch is a hue rotation away from it.",
					"Choose the Spread, from 10 to 90 degrees, to set how far the neighbours sit from the base.",
					"Set the Count between 3 and 9, then pick a Grid or Strip layout and set the Width.",
					"Download the palette as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What exactly is an analogous palette?",
						a: "A set of neighboring hues taken from one region of the wheel, usually within about 90 degrees of the base. They share a hue family and blend into each other without clashing, which is what makes them safe for large surfaces and backgrounds.",
					},
					{
						q: "Why does an even Count look off-centre?",
						a: "With an odd Count the base color lands exactly in the middle of the set. With an even Count, such as 4, the steps run from minus twice the spread to plus once, so the base ends up next to the end of the run instead of in the middle. Pick an odd count when the base has to be centered.",
					},
					{
						q: "Can I get a smooth fade between these colors?",
						a: "Not on this page - it draws flat swatches. For a continuous fade between two colors use the blend two colors tool, and for evenly spaced intermediate colors use the color steps tool.",
					},
					{
						q: "Is this free, and does anything get uploaded?",
						a: "No account, no upload, no watermark and no daily limit. The palette is generated and encoded in your browser, and the project is open source.",
					},
				],
			},
		},
		"blend-two-png": {
			title: "Blend two colors into a gradient",
			seo: {
				metaTitle: "Blend Two Colors PNG - Free Gradient Maker, No Upload",
				metaDescription:
					"Blend two colors into one continuous horizontal gradient PNG. Set the pair and the width, then download as PNG, JPG, WebP or BMP. Free, nothing is uploaded.",
				longDescription:
					"Blending two colors means showing every step of the path between them, and this page draws that path as a single continuous horizontal strip: the first color at the left edge, the second at the right edge, and every pixel in between carrying its own mix of the two. It needs no upload and no settings beyond the colors themselves, because there is no source file - the blend is computed per pixel on your device and encoded into a file you can save as PNG, JPG, WebP or BMP. Use it to see how a background fade will really look before writing the CSS, to preview a hover transition between a button color and its pressed state, or to sample the middle tone of a two-color scheme. The honest limits are narrow ones: the strip is always horizontal, its height is fixed at a quarter of its width, and there is no angle control - for a diagonal or any exact size, use the linear gradient tool.",
				howTo: [
					"No upload needed - this tool draws the strip from the two colors you pick.",
					"Set the Color pair: the first color lands on the left edge, the second on the right.",
					"Set the Width between 128 and 1024 pixels; the height follows at a quarter of it.",
					"Download the blend as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between this and the linear gradient tool?",
						a: "This one is deliberately minimal: two colors, a width, always horizontal. The linear gradient tool adds an angle and lets you set any canvas size, which is what you want for a diagonal fade or an exact hero section size.",
					},
					{
						q: "Can I get the intermediate colors as separate swatches?",
						a: "Not here, because the blend is continuous. Use the color steps tool to get a discrete, evenly spaced set of the same two colors, or the monochromatic tool to build a tone ramp from a single base.",
					},
					{
						q: "Why does the strip look like it has visible bands?",
						a: "The blend is computed in floating point and rounded to whole bytes, so a very wide, very low contrast pair can still show faint steps once it is quantized. Raise the contrast between the two colors and the banding disappears.",
					},
					{
						q: "Do I need an account or to upload anything?",
						a: "No. There is no signup, no watermark and no daily limit, and no file is ever sent anywhere - the strip is built in your browser and the tool is open source.",
					},
				],
			},
		},
		"color-spectrum-png": {
			title: "Color spectrum",
			seo: {
				metaTitle: "Color Spectrum PNG - Free Hue Rainbow Generator",
				metaDescription:
					"Generate a full hue spectrum PNG from red around the wheel and back, horizontal or vertical. Free, no upload, no signup - drawn and saved in your browser.",
				longDescription:
					"A color spectrum is a strip that walks the entire hue circle, from 0 to 360 degrees, so it shows every pure hue at once and finishes where it started. This page draws that strip in the direction you pick and lets you hold the saturation and lightness still while the hue moves, which turns the rainbow into a muted pastel band or a set of deep tones with two slider moves. It needs no upload and no source image: the spectrum is computed pixel by pixel in your browser and can be saved as PNG, JPG, WebP or BMP. Use it as a lookup strip when you want to pick a color by eye, as the background of a spectrum chart, or as the swatch strip on a design system page. The honest details are simple and worth knowing: both ends of the strip are the same red, because hue wraps around at 360, and at zero saturation the whole thing is a single shade of gray.",
				howTo: [
					"No upload needed - the spectrum is generated from the Direction, Saturation and Lightness values.",
					"Set the Canvas size in pixels, or pick one of the presets.",
					"Choose the Direction: Horizontal runs left to right, Vertical runs top to bottom.",
					"Raise Saturation for pure hues, lower Lightness for deeper tones or push it to the ends for flat black and white.",
					"Download the spectrum as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why does the strip start and end on the same red?",
						a: "Hue is a circle. The tool walks from 0 to 360 degrees, and 360 degrees is the same color as 0, so both ends meet at red. That is correct, not a rendering bug.",
					},
					{
						q: "What happens at the slider extremes?",
						a: "At Saturation 0 there is no hue left, so the strip is one flat gray. At Lightness 0 it is all black and at Lightness 100 it is all white. The hue information only exists between those points.",
					},
					{
						q: "How is this different from the color wheel?",
						a: "The wheel puts hue around a circle and saturation from the center to the rim, which is how you read a hue against its saturation. The spectrum lays hue out in a straight line with saturation and lightness fixed, which is better for scanning or for a chart.",
					},
					{
						q: "Is it free to download and use commercially?",
						a: "Yes. No signup, no watermark, no daily limit and no upload, and the project is open source.",
					},
				],
			},
		},
		"color-wheel-png": {
			title: "Color wheel",
			seo: {
				metaTitle: "Color Wheel PNG - Free HSL Wheel Generator, No Upload",
				metaDescription:
					"Draw an HSL color wheel PNG: hue around the circle, saturation from the center to the rim. Free, no upload, no signup, downloads straight from your browser.",
				longDescription:
					"A color wheel is a circle that encodes two of the three HSL channels at once: the angle around the circle is the hue, and the distance from the center is the saturation, so the middle is a neutral gray that blooms into full color as you move outward. The lightness is held at the one value you choose, which keeps the whole disk readable, and everything outside the circle is left transparent so the wheel drops onto any background. This page needs no upload and no source file - the wheel is drawn pixel by pixel in your browser and saved as PNG, JPG, WebP or BMP. Use it as a picking surface, as the illustration on a color theory page, or as the starting point for a harmony: read a hue off the rim, then feed that color into the complementary, triadic or analogous palette tools. The one real limitation is the lightness slider: pushed to either end the disk becomes flat black or flat white and the hue information is gone.",
				howTo: [
					"No upload needed - the wheel is generated from the Image size and Lightness values.",
					"Set the Image size between 128 and 1024 pixels; the wheel is always a square.",
					"Choose the Lightness: near 50 keeps every hue visible, the extremes flatten the disk.",
					"Hover the preview to read a hue off the rim, then copy that color into a harmony tool.",
					"Download the wheel as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What do the axes of the wheel mean?",
						a: "The angle gives the hue, starting at red on the right and running clockwise through yellow, green, cyan, blue and magenta. The radius gives the saturation, from zero at the center to full at the rim. Lightness is the same for the whole disk.",
					},
					{
						q: "Why is the area outside the circle blank?",
						a: "Those pixels are never drawn, so they stay fully transparent. That is useful: the wheel can be placed on any background without a white square around it, and saving it as JPG flattens those corners to the background color instead.",
					},
					{
						q: "How do I turn a hue I like into a palette?",
						a: "Pick the color, then run it through the complementary tool for two opposite hues, the triadic tool for three, or the analogous tool for a calm set of neighbours. The wheel itself is for choosing, not for building ramps.",
					},
					{
						q: "Does anything get uploaded?",
						a: "No. The wheel is drawn and encoded locally in your browser, with no signup, no watermark and no daily limit.",
					},
				],
			},
		},
		"complementary-png": {
			title: "Complementary color palette",
			seo: {
				metaTitle: "Complementary Palette PNG - Free Two Color Harmony",
				metaDescription:
					"Get the complement of any base color as a two swatch PNG: the base and its opposite on the color wheel. Free, no upload, no signup, runs in your browser.",
				longDescription:
					"Complementary colors sit directly opposite each other on the color wheel, exactly 180 degrees of hue apart, and this page shows you that pair: your base color and its opposite, drawn as two swatches. It is the simplest color harmony there is and the most useful one, because a single opposite hue gives you a natural accent for a brand color - blue with orange, red with green, yellow with violet. Nothing is uploaded, since there is no file involved: the second color is derived from the base by rotating the hue and the pair is drawn in your browser, ready to save as PNG, JPG, WebP or BMP. The honest limitation matters more here than anywhere else in the harmony family: only the hue is rotated, so saturation and lightness are carried across unchanged, and a pale base produces a pale complement while a dark base produces a dark one.",
				howTo: [
					"No upload needed - the complement is derived from the Base color you pick.",
					"Set the Base color; the tool rotates its hue by 180 degrees to make the second swatch.",
					"Choose a Grid or Strip layout and set the Width of the result.",
					"Download the pair as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What makes two colors complementary?",
						a: "They sit 180 degrees apart on the wheel, directly across from each other. That maximum hue distance is what makes them feel like opposites and why the pair reads as high contrast without needing a second brightness to carry it.",
					},
					{
						q: "Why does my complement look darker or lighter than I expected?",
						a: "Only the hue is rotated. A yellow and its blue complement share the same HSL lightness value but do not share the same perceived brightness, so the blue will read as heavier. This is a property of hue rotation in HSL, not a bug.",
					},
					{
						q: "Two swatches are not enough for a whole interface - what next?",
						a: "Keep the base as your primary, use the complement only for accents such as links or a call to action, and build a neutral ramp around the base with the monochromatic tool. For three or four related colors use the triadic or tetradic palette tools.",
					},
					{
						q: "Is it really free with no upload?",
						a: "Yes - no account, no upload, no watermark, no daily limit, and the code is open source.",
					},
				],
			},
		},
		"draw-grid-png": {
			title: "Draw a grid",
			seo: {
				metaTitle: "Draw Grid PNG - Free Grid Line Image Generator",
				metaDescription:
					"Draw a grid PNG in your browser: choose columns, rows, line width and color over a transparent or white background. Free, no upload, no signup.",
				longDescription:
					"A grid image is a set of evenly spaced horizontal and vertical lines drawn on a canvas, and this page draws one from four numbers: how many columns, how many rows, how thick the lines are and what color they are. The background is yours to choose - leave Opacity at zero and the result is a transparent PNG with nothing but the lines, which is what you want to overlay on a mockup, a screenshot or a photo; raise it and the background is painted white at that opacity instead. No upload is involved and no source file exists: the grid is rendered in your browser and can be saved as PNG, JPG, WebP or BMP. Use it to check a layout, to draw a table skeleton, or to produce a calibration target. The honest detail is that the column and row counts are the number of spaces between lines, so a count of 8 draws nine lines with one flush against each edge, and the cells are only square when the canvas is.",
				howTo: [
					"No upload needed - the grid is drawn from the Cols, Rows, Line width and Line color values.",
					"Set the Canvas size in pixels, or pick a preset.",
					"Set Cols and Rows, each from 1 to 64; the count is the spaces between lines, so 8 gives 9 lines.",
					"Set the Line width from 1 to 40 pixels and choose the Line color.",
					"Leave Opacity at 0 for a transparent background, or raise it to paint the background white at that opacity.",
					"Download the grid as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why do I get one more line than the number I typed?",
						a: "The Cols and Rows sliders count the spaces between lines, and a line is drawn on both sides of every space. A value of 8 therefore draws 9 vertical lines and 9 horizontal ones, with the outer pair sitting flush against the canvas edges.",
					},
					{
						q: "How do I get square cells?",
						a: "Cells are the canvas width divided by Cols and the height divided by Rows. On a square canvas equal counts give square cells; on a wide canvas you need a proportionally smaller row count, or a wider canvas for the same row count.",
					},
					{
						q: "Can I get a transparent grid with no white box?",
						a: "Keep Opacity at 0. Every pixel outside the lines is then fully transparent, and saving as PNG or WebP keeps it that way. Saving as JPG has no alpha channel and will flatten the background to white.",
					},
					{
						q: "Do I have to upload or sign up?",
						a: "No. The grid is generated entirely in your browser, with no account, no watermark and no daily limit.",
					},
				],
			},
		},
		"emoji-to-png": {
			title: "Emoji to PNG",
			seo: {
				metaTitle: "Emoji to PNG - Free Transparent Emoji Image Maker",
				metaDescription:
					"Turn any emoji or Unicode symbol into a transparent PNG of the size you choose. Free, no upload, no signup, rendered and saved in your browser.",
				longDescription:
					"An emoji PNG is a single character drawn onto a transparent square at the size you ask for, which is what you need when a symbol has to be an image rather than text - a favicon, an avatar, an app icon, a bullet in a document that will not keep its own fonts. Type any emoji or Unicode symbol into the field and pick the Image size; the character is drawn by the platform emoji font at roughly 72 percent of the canvas, centred, on a fully transparent background, and the result is encoded as a PNG in your browser. No upload is needed and no file ever leaves the device, and you can also save it as JPG, WebP or BMP if you need one of those. The honest limitation is that the picture comes from the font on your operating system, not from this tool: the same character looks different on Windows, macOS, Android and Linux, so export it on the machine that matters and check the result on the other platforms.",
				howTo: [
					"No upload needed - the image is drawn from the character you type.",
					"Type or paste an emoji, or any Unicode symbol, into the Emoji field.",
					"Set the Image size from 32 to 1024 pixels; the canvas is always a square.",
					"Download the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why does my emoji look different from someone else's?",
						a: "Each operating system ships its own emoji font - Segoe UI Emoji on Windows, Apple Color Emoji on macOS, Noto Color Emoji on Linux - and each draws the same character with its own shapes and colors. The PNG is a snapshot of your system's font, so re-exporting on another machine can give a different picture.",
					},
					{
						q: "What happens if I enter a plain letter or a symbol?",
						a: "Anything the font can draw will be drawn. Plain letters and many symbols come out in a single text color rather than in color, and a character no installed font has comes out as an empty box or a replacement mark.",
					},
					{
						q: "Can I make the background transparent?",
						a: "It already is - every pixel outside the glyph is fully transparent, so the image drops onto any background without a box around it. Keep the PNG or WebP format; JPG flattens the transparency.",
					},
					{
						q: "Is there a size limit or an upload step?",
						a: "No upload, no signup and no watermark. The image size goes from 32 to 1024 pixels and the file is drawn and encoded entirely in your browser.",
					},
				],
			},
		},
		"mix-colors-png": {
			title: "Mix colors",
			seo: {
				metaTitle: "Mix Colors PNG - Free Average Color Mixer Tool",
				metaDescription:
					"Average two or more colors into one flat swatch PNG. Free, no upload, no signup - the mix is computed and drawn in your browser instantly.",
				longDescription:
					"Mixing colors here means taking the plain arithmetic mean of the red, green and blue channels of every color you list and filling a rectangle with the result. That is exactly what happens, and being precise about it matters: this is channel arithmetic, not paint, so mixing blue and yellow does not give green - it gives the gray you get from averaging their numbers, and yellow with purple lands on a dull olive. It is the right tool for a quick sanity check on a palette, for producing one representative tone from several similar swatches, or for seeing the flat average of a set of photo colors. No upload is involved and there is no source file: the average is computed and the swatch drawn on your device, then encoded as PNG, JPG, WebP or BMP. Two honest limits follow from the definition - every color counts the same no matter how much area it covers, and the page prints the mix as a flat rectangle rather than a hex code.",
				howTo: [
					"No upload needed - the mix is computed from the hex values you type.",
					"Enter the colors to average in the Color list, as hex values separated by commas or spaces.",
					"Set the Width between 128 and 1024 pixels; the swatch height follows the width.",
					"Download the mix as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why do two vivid colors mix into something dull?",
						a: "Because each channel is averaged on its own. Two saturated colors of opposite hue have little in common channel by channel, so the mean lands on a low-saturation neutral. This is arithmetic, not the way pigments behave on a palette.",
					},
					{
						q: "Do the colors get weighted by how much they cover?",
						a: "No. Every color in the list counts exactly once, no matter how similar they are or how large an area each occupies. To average the colors actually present in a picture, run that picture through the extract color tool first.",
					},
					{
						q: "Where is the resulting hex code?",
						a: "The page fills a solid rectangle with the mixed color and does not print its hex value. Load that swatch into the extract color tool if you need the code itself, or set the same average up by hand in a color tool of your choice.",
					},
					{
						q: "Is it free and does anything get uploaded?",
						a: "No account, no upload, no watermark and no daily limit - the average and the swatch are produced in your browser, and the project is open source.",
					},
				],
			},
		},
		"monochromatic-png": {
			title: "Monochromatic color palette",
			seo: {
				metaTitle: "Monochromatic Palette PNG - Free Tone Ramp Generator",
				metaDescription:
					"Build a monochromatic palette from one base color: lightness walks a range while hue and saturation stay fixed. Free, no upload, runs in your browser.",
				longDescription:
					"A monochromatic palette is a set of tones built from a single hue, where the hue and the saturation never change and only the lightness moves, which is what gives you a scale that stays recognizably the same color from the palest tint to the deepest shade. This page freezes the hue and saturation of your base color and walks its lightness across a range you set, centered on the base lightness itself - a Range of 40 spreads the swatches 20 lightness points either side of where the base sits. It needs no upload and no source file: the tones are computed on your device and drawn as flat swatches you can save as PNG, JPG, WebP or BMP. Use it for a single-brand interface, a sequential data ramp where one color has to carry the whole scale, or a dark mode built from one hue. The honest edge case is clamping: a very dark base with a wide range pushes the light end past zero and several swatches collapse into the same near-black.",
				howTo: [
					"No upload needed - the tones are derived from the Base color you pick.",
					"Set the Base color; its hue and saturation are locked and copied into every swatch.",
					"Set the Count between 2 and 9 tones.",
					"Set the Lightness range from 10 to 90; the tones spread that far either side of the base.",
					"Choose a Grid or Strip layout, set the Width, then download as PNG, JPG, WebP or BMP.",
				],
				faq: [
					{
						q: "How is this different from the shade ramp tool?",
						a: "This one walks both ways from the base, giving you lighter and darker tones within a lightness range you choose. The shade ramp only goes darker, and its first swatch is the base color itself. Use monochromatic for a full tone scale and shades for a one-directional fade.",
					},
					{
						q: "Why do two of my swatches come out identical?",
						a: "Lightness cannot go below zero or above one. With a very dark base and a wide range the light end is pushed past zero and clamped, so several steps end up on the same near-black value. Narrow the Lightness range or lighten the base color.",
					},
					{
						q: "Is the hue of every tone really identical?",
						a: "Yes. Each tone is the base color with its lightness replaced, so hue and saturation are untouched. Note that tones of one hue do not carry the same perceived weight - a light yellow and a light blue at the same lightness number still look very different in brightness.",
					},
					{
						q: "Do I have to upload a logo or pick from a list?",
						a: "No. There is no upload and no library - you type one hex color and the scale is built from it, for free, with no signup and no watermark.",
					},
				],
			},
		},
		"placeholder-png": {
			title: "Create a placeholder image",
			seo: {
				metaTitle: "Create Placeholder PNG - Free Size Label Image Maker",
				metaDescription:
					"Make a placeholder PNG with its dimensions printed in the center. Free, no upload, no signup - built in your browser as PNG, JPG, WebP or BMP.",
				longDescription:
					"A placeholder image is a stand-in rectangle that shows its own size, so a layout has something real to hold before the artwork exists and every image slot looks the right shape. This page fills a canvas of the size you choose with a background color and prints the width and height in the middle, for example 800 x 400, in a bold sans face scaled to about 14 percent of the shorter side. Nothing is uploaded because there is nothing to upload: the rectangle is drawn on your device and saved as PNG, JPG, WebP or BMP. Turn off Show text and you get a plain flat rectangle of the same size, which is handy when you only need the dimensions to exist. The one honest limitation is extreme proportions: the label has a minimum readable size, so on a very lopsided canvas such as 40 pixels wide by 500 tall the text can be wider than the canvas and gets clipped at the edges.",
				howTo: [
					"No upload needed - the rectangle is drawn from the size and color values you set.",
					"Set the Canvas size in pixels, or pick one of the presets.",
					"Choose the Background color and the Text color.",
					"Leave Show text on for the dimensions in the middle, or turn it off for a flat rectangle.",
					"Download the placeholder as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Is this the same as creating an empty PNG?",
						a: "Not quite. Create empty PNG gives you a transparent or solid canvas with no lettering at all, which is what a layout or a compositor needs. This page adds the printed dimensions, so a human looking at the file can see what size it is supposed to be.",
					},
					{
						q: "Why is the label cut off on my image?",
						a: "The text scales with the shorter side of the canvas but never goes below a readable minimum, so on a very narrow or very short canvas the label ends up wider than the frame and is cropped. Make the canvas less extreme or turn Show text off.",
					},
					{
						q: "Can the background be transparent?",
						a: "Not directly - this tool fills the whole canvas with the background color you choose. For a transparent canvas with nothing in it, use the create empty PNG tool and set Opacity to 0.",
					},
					{
						q: "Is it free to use in a project?",
						a: "Yes. No signup, no upload, no watermark and no daily limit, the image is built in your browser, and the project is open source.",
					},
				],
			},
		},
		"random-colors-png": {
			title: "Random color blocks",
			seo: {
				metaTitle: "Random Color Blocks PNG - Free Seeded Color Mosaic",
				metaDescription:
					"Fill a canvas with random vivid color blocks of the size you choose, fixed by seed. Free, no upload, no signup, generated in your browser.",
				longDescription:
					"Random color blocks are a mosaic where every square of a fixed size is filled with one bright random color, and this page generates exactly that: the canvas is walked in blocks from the top left, each block getting its own hue, and the colors are deliberately vivid, sitting between 65 and 100 percent saturation and between 45 and 70 percent lightness so nothing comes out near-black or washed out. No upload is involved and there is no source file - the mosaic is built in your browser and saved as PNG, JPG, WebP or BMP. Use it as texture behind a title card, as a test pattern, or as a deterministic set of random colors you can reuse: the Seed field decides the whole picture, so the same seed with the same canvas size and block size always rebuilds the identical image. The honest caveat is that the hues are picked independently, so neighbouring blocks can land on colors that clash badly - it is a random mosaic, not a palette.",
				howTo: [
					"No upload needed - the blocks are generated from the Canvas size, Block size and Seed values.",
					"Set the Canvas size in pixels, or pick a preset.",
					"Set the Block size from 4 to 256 pixels; larger blocks mean fewer, bigger squares.",
					"Set the Seed from 0 to 999999999 to choose which mosaic you get.",
					"Download the mosaic as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What does the Seed actually do?",
						a: "It is the starting number of the small random generator that picks the hues. The same seed with the same canvas size and block size always produces exactly the same mosaic, which is how you keep a texture consistent across a set of pages. It is not a password and protects nothing.",
					},
					{
						q: "Why do the blocks look dull or too dark?",
						a: "They should not - the generator keeps saturation between 65 and 100 percent and lightness between 45 and 70 percent, so every block is a vivid mid-tone. If a block looks flat next to its neighbours it is simply a random pairing; adjacent hues can be very far apart on the wheel.",
					},
					{
						q: "How is this different from the random noise tool?",
						a: "Random noise assigns a separate random color to every single pixel, which reads as television static. This tool assigns one color per block, which reads as a mosaic. Both are fixed by seed in the same way.",
					},
					{
						q: "Do the blocks fit evenly at the edges?",
						a: "Blocks are laid out in steps of the block size from the top left, so the right and bottom edges get a smaller clipped block when the canvas size is not a multiple of it. Pick a size that divides evenly if you need a perfect tile.",
					},
				],
			},
		},
		"random-noise-png": {
			title: "Create random noise PNG",
			seo: {
				metaTitle: "Create Random Noise PNG - Free Seeded Noise Generator",
				metaDescription:
					"Generate a random noise PNG where every pixel gets its own color, fixed by seed. Free, no upload, no signup, made and saved in your browser.",
				longDescription:
					"Random noise is an image in which every single pixel is given its own independent red, green and blue value, which is what produces television static, film grain and a flat test pattern. This page writes exactly that, over an opaque canvas with no transparency anywhere, and it needs no upload and no source file: the pixels are generated on your device and the result saved as PNG, JPG, WebP or BMP. Use it as a transparency test pattern, as a base texture to blend something over, or as an unpredictable-looking background. The Seed field is the part worth understanding - it is the starting number of the small random generator, so the same seed with the same canvas size always rebuilds the identical picture, which is how you get a repeatable noise texture rather than a new one on every visit. It is a reproducibility control, not a security feature.",
				howTo: [
					"No upload needed - the pixels are generated from the Canvas size and the Seed.",
					"Set the Canvas size in pixels, or pick a preset; the noise fills every pixel.",
					"Set the Seed from 0 to 999999999 to choose which noise field you get.",
					"Change the seed again to jump to a completely different noise field.",
					"Download the result as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What exactly does the seed do?",
						a: "It seeds the pseudo-random generator that picks the color of each pixel. The same seed with the same canvas size gives byte-for-byte the same image every time; a different seed gives a completely unrelated field. It is not encryption and it is not a password.",
					},
					{
						q: "Is the noise transparent anywhere?",
						a: "No. Every pixel is written fully opaque, so the result has no alpha channel at all even though it is saved as a PNG. If you want grain added to an existing picture instead, use the add noise tool on this site.",
					},
					{
						q: "How is this different from random color blocks?",
						a: "Here every pixel is independent, which reads as static or grain. Random color blocks gives each square of a chosen size a single flat color, which reads as a mosaic. Pick noise for fine grain and blocks for a chunky pattern.",
					},
					{
						q: "Is there any limit on size or any upload?",
						a: "No upload and no account. The canvas runs from 1 to 5000 pixels per side, and very large canvases take a moment because every pixel is written - a 5000 by 5000 canvas is 25 million pixels.",
					},
				],
			},
		},
		"shades-png": {
			title: "Color shades ramp",
			seo: {
				metaTitle: "Color Shades Ramp PNG - Free Darker Tone Generator",
				metaDescription:
					"Make a shade ramp from a base color: the same hue getting darker step by step to a depth you set. Free, no upload, no signup, drawn in your browser.",
				longDescription:
					"A shade ramp is a one-directional scale that starts at your color and walks only downward into darker versions of it, keeping the hue and saturation fixed the whole way, which is what you need for shadows, hover states, tinted backgrounds and any scale that has to read as the same color getting deeper. This page builds it from a base color, a number of steps and a darken depth, and the first swatch is always the base color exactly as typed. No upload is required and there is no source file: the tones are computed in your browser and drawn as swatches you can save as PNG, JPG, WebP or BMP. The honest edge case is the floor - the darkest tone stops at the base color's own lightness minus a small margin rather than at black, so a dark base with a large depth gives you a short ramp with barely visible steps.",
				howTo: [
					"No upload needed - the ramp is derived from the Base color you pick.",
					"Set the Base color; it becomes the first and lightest swatch of the ramp.",
					"Set the Count between 2 and 9 tones.",
					"Set the Darken depth from 10 to 90 percent to control how far the last tone goes.",
					"Choose a Grid or Strip layout, set the Width, then download as PNG, JPG, WebP or BMP.",
				],
				faq: [
					{
						q: "What is the difference between this and the monochromatic tool?",
						a: "Direction. The shade ramp only goes darker and its first swatch is your base color, so it ends at a floor set by the base lightness. The monochromatic tool walks both ways around the base lightness, so it gives you light tints as well as deep tones.",
					},
					{
						q: "Why does my ramp stop short of black?",
						a: "The darkest tone is the base lightness minus the depth you set, with a small margin kept above zero. If the base is already dark there is not much room left, so a depth of 90 on a near-black color produces only a few distinguishable steps.",
					},
					{
						q: "Do the shades keep the hue of my base color?",
						a: "Yes. Only the lightness is replaced, so hue and saturation are copied into every step and the ramp stays recognizably one color as it deepens.",
					},
					{
						q: "Is anything uploaded or paid for?",
						a: "No. The ramp is computed and drawn in your browser, with no signup, no watermark, no daily limit and an open source project.",
					},
				],
			},
		},
		"single-color-png": {
			title: "Create solid color PNG",
			seo: {
				metaTitle: "Create Solid Color PNG - Free Flat Color Rectangle",
				metaDescription:
					"Generate a solid color PNG of any size in your browser: pick a color, set width and height, download. Free, no upload, no signup, no limits.",
				longDescription:
					"A solid color PNG is a rectangle in which every pixel carries the same red, green and blue value, and this page makes one at any size you like. You set the width, the height and the color, and every pixel is filled with it, fully opaque - there is no transparency in the result, because the alpha channel is set to fully opaque for all of them. Nothing is uploaded, since there is no source file involved: the rectangle is generated on your device and encoded into a file you can save as PNG, JPG, WebP or BMP. Use it for a background plate under a layout, a mask shape, a color sample in a spec, or a canvas that other tools on this site can then work on. One honest note: the canvas runs from 1 to 20000 pixels on each side, and a canvas at the top of that range is 400 million pixels, so generation takes a moment. For a rectangle you can also make see-through, use the create empty PNG tool instead.",
				howTo: [
					"No upload needed - the rectangle is generated from the size and color you set.",
					"Set Width and Height in pixels, or pick one of the presets such as a square or a screen size.",
					"Choose the Color to fill the rectangle with.",
					"Download the solid image as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Can I make a solid color image with transparency?",
						a: "Not on this page - every pixel is written fully opaque. If you need a semi-transparent sheet of one color, use the create empty PNG tool and set Opacity to anything below 100.",
					},
					{
						q: "How large can the canvas be?",
						a: "From 1 to 20000 pixels per side, with presets for the usual targets. The top end is genuinely heavy - 20000 by 20000 is 400 million pixels - so allow a moment and expect your browser to use a lot of memory.",
					},
					{
						q: "Does the file come out as a real PNG?",
						a: "Yes. It is encoded by the browser as a genuine PNG, not a renamed blank file, so it opens in any viewer and works as the source image for the editing tools on this site.",
					},
					{
						q: "Is it free to use commercially?",
						a: "Yes - no account, no upload, no watermark and no daily limit, and the project is open source.",
					},
				],
			},
		},
		"sort-colors-png": {
			title: "Sort colors into swatches",
			seo: {
				metaTitle: "Sort Colors PNG - Free Hue, Brightness, Saturation Order",
				metaDescription:
					"Render your hex colors as swatches sorted by hue, brightness or saturation. Free, no upload, no signup - drawn and exported in your browser.",
				longDescription:
					"Sorting colors is what turns a list you pasted from anywhere into a set you can actually look at, and this page draws your hex values as swatches in a chosen order: by hue for a rainbow sequence, by brightness for a dark to light scale, or by saturation for a dull to vivid scale. The brightness order uses the standard perceptual weighting, where green counts for most and blue for least, so it matches how bright a color actually looks rather than the average of its three channels. No upload is required and there is no source file: the list is sorted in your browser and drawn as swatches you can save as PNG, JPG, WebP or BMP. The honest edge case is the hue order, which sorts on hue angle alone - grays have no meaningful hue, so every gray in your list piles up at one end regardless of how light it is.",
				howTo: [
					"No upload needed - the swatches are drawn from the hex values you type.",
					"Enter the colors to sort in the Color list, as hex values separated by commas or spaces.",
					"Set the Order to Hue, Brightness or Saturation.",
					"Choose a Grid or Strip layout and set the Width of the result.",
					"Download the sorted swatches as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between Hue and Brightness order?",
						a: "Hue order follows the angle of the color around the wheel, which gives you a rainbow. Brightness order follows perceived luminance, where green counts the most and blue the least, which gives you a light-to-dark scale. Saturation order puts the vivid colors together and the muted ones together.",
					},
					{
						q: "Why do all my grays end up in the same place?",
						a: "Hue order sorts on hue angle, and a gray has no hue at all, so every gray in the list reports the same angle and clusters together no matter how light or dark it is. Switch the Order to Brightness to lay grays out properly.",
					},
					{
						q: "Does the tool change my colors?",
						a: "No. It reorders the list you entered and draws each value as it is. Every swatch is the exact hex you typed, with no adjustment of brightness, saturation or anything else.",
					},
					{
						q: "Is it free and does anything get uploaded?",
						a: "Yes to both - no signup, no upload, no watermark and no daily limit. The swatches are generated in your browser and the project is open source.",
					},
				],
			},
		},
		"step-colors-png": {
			title: "Color steps between two colors",
			seo: {
				metaTitle: "Color Steps PNG - Free Even Color Ramp Generator",
				metaDescription:
					"Generate evenly spaced color steps between two colors as swatches or a strip. Free, no upload, no signup, built in your browser as PNG or JPG.",
				longDescription:
					"Color steps are the discrete colors you get when you cut the path between two colors into equal intervals, and this page generates that set from a start color and an end color. Pick a pair, choose how many steps you want, and you get evenly spaced colors running from the first to the last, drawn either as a grid of square swatches or as one horizontal strip. No upload is involved and there is no source file: the steps are interpolated and drawn on your device, ready to save as PNG, JPG, WebP or BMP. Use it to define a ramp between a background and an accent, to build a scale for a chart, or to see how many colors a design system needs. Two honest details: the count includes both endpoints, so six steps means five intervals between seven endpoint colors, and the interpolation is a straight line through the raw RGB numbers, which is why blending a color with its complement passes through gray.",
				howTo: [
					"No upload needed - the steps are computed from the Color pair you set.",
					"Set the Color pair; the first color is the first step and the second is the last.",
					"Set the Steps from 2 to 12; the count includes both endpoint colors.",
					"Choose a Grid of square swatches or a Strip, and set the Width.",
					"Download the steps as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Why does the middle of the ramp go gray when I use opposite colors?",
						a: "Because the interpolation is a straight line through the red, green and blue numbers, not a perceptual blend. Two colors that are complements have nothing in common channel by channel, so the midpoint is the average of both - a neutral gray. It is correct arithmetic, just not what a painter would do.",
					},
					{
						q: "Does the step count include the two colors I typed?",
						a: "Yes. The steps are spread evenly from the first color to the last and both ends are included, so Steps set to 2 gives you just the two colors with nothing in between and Steps set to 6 gives six colors across five intervals.",
					},
					{
						q: "What is the difference between Grid and Strip?",
						a: "Grid lays the swatches out as near-square cells in as square a block as the count allows, which is easiest to read. Strip puts them side by side as equal columns in one row, which is the format you want when the palette will become a gradient or a legend.",
					},
					{
						q: "Do I need to upload a brand guide or a list?",
						a: "No. There is no upload and no library here - you type two hex values and the ramp is built for free in your browser, with no signup and no watermark.",
					},
				],
			},
		},
		"tetradic-png": {
			title: "Tetradic color palette",
			seo: {
				metaTitle: "Tetradic Palette PNG - Free Four Color Harmony Tool",
				metaDescription:
					"Build a tetradic palette from one base color: four hues in two complementary pairs, 90 degrees apart. Free, no upload, no signup, in your browser.",
				longDescription:
					"A tetradic palette is four colors built from one base by stepping around the wheel in quarters - 0, 90, 180 and 270 degrees - which is exactly two complementary pairs sitting side by side. Pair one is your base and its opposite; pair two is the same rule applied a quarter turn away, so you get the two-color scheme and a second scheme to match it with. Nothing is uploaded because there is no file involved: the four colors are derived from your base and drawn in your browser, ready to save as PNG, JPG, WebP or BMP. Use it for a two-theme product, a chart with four series, or a split-complementary layout where you want more freedom than a straight pair gives you. The honest framing is that this is not a different rule from the complementary one - it is the same 180 degree opposition applied twice - and four saturated colors at equal lightness will fight each other unless two of them stay in the background.",
				howTo: [
					"No upload needed - the four colors are derived from the Base color you pick.",
					"Set the Base color; the tool adds hues 90, 180 and 270 degrees away from it.",
					"Choose a Grid or Strip layout and set the Width of the result.",
					"Download the palette as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What is the actual rule behind a tetradic palette?",
						a: "Step around the color wheel in four equal jumps of 90 degrees. That gives you your base color, its direct complement, and the same pair rotated a quarter turn - so a tetradic set is literally two complementary pairs, not four unrelated colors.",
					},
					{
						q: "Should I use all four colors in one interface?",
						a: "Rarely. Four saturated hues at the same lightness compete equally and the result looks unsettled. The usual pattern is to let the base and one partner carry the design and use the other two for accents, charts or states.",
					},
					{
						q: "How does this compare with the triadic palette?",
						a: "Triadic uses three colors in jumps of 120 degrees, so every pair in the set is the same distance apart and none of them are opposites. Tetradic uses four in jumps of 90 degrees, which guarantees two exact opposites - use tetradic when you want contrast, triadic when you want balance.",
					},
					{
						q: "Is it free and is anything uploaded?",
						a: "No account, no upload, no watermark and no daily limit. The palette is generated in your browser and the project is open source.",
					},
				],
			},
		},
		"text-to-png": {
			title: "Text to PNG",
			seo: {
				metaTitle: "Text to PNG - Free Image From Text Generator, No Upload",
				metaDescription:
					"Turn text into a PNG sized to fit the label plus padding: font, size, bold, color, background. Free, no upload, no signup, made in your browser.",
				longDescription:
					"A text image is a picture of a label rather than text on a web page, which you need when the words have to survive being copied into a slide, a design tool or an email where the font you chose is not installed. This page measures your string with the browser's own text engine, then sizes the canvas to fit the text plus the padding you set, so the result is cropped tight to the label rather than being a fixed frame with empty space around it. Choose a font, a size from 8 to 300 pixels, bold or regular and a text color, add a background with its own opacity, and it is drawn on your device - no upload, no source file, and the image saves as PNG, JPG, WebP or BMP. The honest limitation is that the text is a single line: there is no wrapping here, so a long sentence produces a very wide and very short image. The other honest fact is that the glyphs come from the fonts installed on your machine, so the export looks like your system, not like everyone else's.",
				howTo: [
					"No upload needed - the image is drawn from the text you type.",
					"Type your label into the Text field.",
					"Set the Text style: font family, size from 8 to 300 pixels, bold and color.",
					"Set the background Opacity and Background color; opacity 0 leaves the image transparent.",
					"Set the Padding from 0 to 200 pixels to add space around the label.",
					"Download the image as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "Does my text wrap onto several lines?",
						a: "No. The canvas is sized to fit one line of text plus the padding, so a long sentence gives you a very wide, short image. If you need text laid over a picture and wrapped, use the add text tool on this site instead.",
					},
					{
						q: "Why does the result look different on another computer?",
						a: "Because it is rendered with the fonts installed on this device. A machine without the font you chose substitutes its own, and the measured width changes with it. Export at the size and style you actually need and check the result where it will be used.",
					},
					{
						q: "Can I get a transparent background?",
						a: "Set Opacity to 0 and leave the background color alone. The padding area then stays fully transparent, which keeps the PNG and WebP formats clean; saving as JPG flattens those areas to the background color instead.",
					},
					{
						q: "How is the image size decided?",
						a: "The width is the measured text width plus twice the padding, and the height is the font size times a fixed line height plus twice the padding. There is no separate width control - it follows the text.",
					},
				],
			},
		},
		"triadic-png": {
			title: "Triadic color palette",
			seo: {
				metaTitle: "Triadic Palette PNG - Free Three Color Harmony Tool",
				metaDescription:
					"Build a triadic palette from one base color: three hues evenly spaced 120 degrees apart. Free, no upload, no signup, drawn in your browser.",
				longDescription:
					"Triadic colors are three hues spaced evenly around the color wheel, each one 120 degrees from the others, so every pair in the set is exactly as far apart as every other pair - there is no dominant relationship inside a triadic palette, which is what makes it feel balanced rather than dramatic. This page takes your base color and rotates its hue by 120 and 240 degrees to get the other two, then draws all three as swatches. Nothing is uploaded, since no file is involved: the three colors are derived on your device and saved as PNG, JPG, WebP or BMP. Reach for it when you genuinely have three equal things - a chart with three series, three onboarding steps, a tricolour mark - or when you want a palette that will not privilege one color. The honest warning is that three saturated colors at equal lightness compete for attention, and that hue rotation in HSL does not balance apparent brightness, so a yellow, a cyan and a red will never weigh the same on screen.",
				howTo: [
					"No upload needed - the three colors are derived from the Base color you pick.",
					"Set the Base color; the tool adds hues 120 and 240 degrees away from it.",
					"Choose a Grid or Strip layout and set the Width of the result.",
					"Download the palette as PNG, JPG, WebP or BMP from the Download button.",
				],
				faq: [
					{
						q: "What makes a palette triadic?",
						a: "The three hues are spaced 120 degrees apart around the wheel. Because the spacing is even, no single color sits opposite another - unlike a complementary pair, where two of the three would clash directly.",
					},
					{
						q: "Why do the three colors look so different in weight?",
						a: "They all carry the same HSL lightness value, but perceived brightness depends heavily on hue - a yellow at the same lightness as a blue still looks far lighter. That is a property of hue rotation, not a flaw in the palette rule.",
					},
					{
						q: "When should I not use three colors?",
						a: "When you need one clear focal point. With three saturated colors at equal strength nothing leads the eye, so pick one as the dominant and use the other two for accents, or build the depth you need with the monochromatic tool.",
					},
					{
						q: "Is it free with no upload at all?",
						a: "Yes. No account, no upload, no watermark and no daily limit; the palette is generated in your browser and the project is open source.",
					},
				],
			},
		},
		"add-border-png": {
			title: "Add border to PNG",
			seo: {
				metaTitle: "Add Border to PNG - Free Online Image Border, No Upload",
				metaDescription:
					"Draw a colored frame around an image right in your browser: set the thickness and the color, then download the bordered picture. Free, no upload, no signup.",
				longDescription:
					"Adding a border to a PNG means growing the canvas by a chosen number of pixels on every side and filling that frame with one solid color. The picture itself is never touched: no pixel is resampled, rescaled or recompressed, so the result is exactly as sharp as the source and only larger, by twice the thickness in each direction. Thickness runs from 1 to 500 pixels, and the frame is drawn fully opaque, which is what a border usually has to be. Use it for a print mat, a framed screenshot, a mockup plate or a certificate edge. Everything is processed locally in your browser, so the file is never uploaded, and PNG, JPG, WebP and BMP can all be loaded and saved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Thickness in pixels, from 1 to 500; the default is 5.",
					"Pick Border color with the color picker or type a hex value.",
					"Download the bordered image from the Download button as PNG, JPG, WebP or BMP.",
				],
				faq: [
					{
						q: "Does adding a border shrink or stretch the image?",
						a: "No. The picture keeps its exact pixel dimensions and is placed in the middle of a larger canvas, so nothing is resampled and no quality is lost. Only the canvas grows, by twice the thickness in width and in height.",
					},
					{
						q: "Can the border be transparent?",
						a: "Not on this page: the frame is drawn fully opaque, which is what makes it read as a border. For a soft margin that keeps the alpha channel, use the add padding tool, where an Opacity slider decides between a transparent and a colored fill.",
					},
					{
						q: "Are my images uploaded to a server?",
						a: "No. Decoding, border drawing and encoding all run in the page you have open, so the file stays on your device. No account, no signup, no daily limit, free for commercial use, and the source is open.",
					},
					{
						q: "Can I use a different width on each side?",
						a: "Not here, the frame is the same thickness on all four sides. For asymmetric spacing, use the shift tool to move the picture inside the canvas, or the change canvas size tool, where the Anchor picks which part stays.",
					},
				],
			},
		},
		"center-by-alpha-png": {
			title: "Center PNG by content",
			seo: {
				metaTitle: "Center PNG Content - Fix Off-Center Images, No Upload",
				metaDescription:
					"Move the visible part of a PNG to the middle of its canvas in one click, in your browser. Nothing to configure, free, no upload, no signup, instant.",
				longDescription:
					"Centering a PNG by content finds the rectangle that actually holds visible pixels, ignores the empty margins around it, and moves that content to the middle of the unchanged canvas. It is the one-click fix for a picture that came out shifted into a corner, for a logo sitting off-center inside a transparent square, and for a sprite exported with padding it never needed. The canvas keeps its original width and height and no pixel is resampled, so the result is exactly as sharp as the source: the empty margins simply move to the edges. There are no settings at all, and the content area is shown as a mask in the preview so you can see what the tool treats as visible. Processing runs in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the PNG into the source area, or pick a file from your device.",
					"Look at the preview: the mask marks the visible content that will be centered.",
					"There is nothing to set; the content moves to the middle as soon as it loads.",
					"Download the centered image from the Download button.",
				],
				faq: [
					{
						q: "How is this different from trimming the empty space?",
						a: "Trimming removes the margins for good, so the canvas gets smaller. Centering keeps the original canvas and only redistributes the empty space, which is what you want when the file must stay at a fixed size.",
					},
					{
						q: "Will it work on a JPG without transparency?",
						a: "Not to any effect. The tool reads the alpha channel, and a JPG has none: every pixel counts as content, so the image comes back unchanged. Transparent and partly transparent PNG and WebP are what it is meant for.",
					},
					{
						q: "Does it lose the soft edges of a cutout?",
						a: "No. Nothing is resampled or recompressed, the pixels are only copied to new positions, so antialiased edges and faint shadows survive the move exactly as they were.",
					},
					{
						q: "What if the image is fully transparent?",
						a: "There is no content to find, so the tool leaves the picture alone and returns the same empty canvas rather than an error. Put something in the image first, then center it.",
					},
				],
			},
		},
		"change-canvas-size-png": {
			title: "Change canvas size",
			seo: {
				metaTitle: "Change PNG Canvas Size - Crop or Pad, No Upload",
				metaDescription:
					"Set an image to an exact canvas size: the overflow is cropped and the missing space is filled with transparency. Nine anchors, free, no upload, no signup.",
				longDescription:
					"Changing the canvas size sets an image to exact pixel dimensions, whatever its original size was. If the new canvas is smaller than the picture, the excess is cropped; if it is larger, the missing space is filled with transparency. The Anchor control decides which part of the image survives and where it sits on the new canvas, with nine positions from top left to bottom right and center as the default. Nothing is scaled, so the remaining picture keeps its full resolution and no interpolation happens anywhere. This is the tool for making a file match a fixed frame that a layout, a game engine or a print template insists on. Everything runs in your browser, and PNG, JPG, WebP and BMP can all be loaded and saved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Canvas size to the exact width and height you need, or pick a preset.",
					"Choose Anchor: it decides which edge stays when the canvas is smaller.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "Does it crop or does it stretch?",
						a: "It crops, and it never stretches. Anything outside the new canvas is cut away at full resolution, so no part of the image is squashed or blurred. To scale the picture instead, use the resize tool.",
					},
					{
						q: "What color fills the new space?",
						a: "Always transparent: the added area has a zero alpha channel, so the picture stays clean over any background. If you want a solid color there, run the add padding tool afterwards, where an Opacity slider and a fill color are available.",
					},
					{
						q: "Which anchor should I pick?",
						a: "Center by default, which is right for centering a logo in a frame. Pick top left or top center when the top of the image matters, such as a screenshot or a scanned page, and a bottom anchor when the lower part carries the content.",
					},
					{
						q: "Can it enlarge my image?",
						a: "It enlarges the canvas, not the picture: the new area stays empty and transparent and the image keeps its original size inside it. For a genuinely bigger picture use the resize tool, or the change aspect ratio page to fit a target ratio.",
					},
				],
			},
		},
		"add-padding-png": {
			title: "Add padding to PNG",
			seo: {
				metaTitle: "Add Padding to PNG - Transparent Margin Maker, Free",
				metaDescription:
					"Add an even margin around an image in your browser: transparent by default, or filled with any solid color you pick. Free, no upload, no signup, instant.",
				longDescription:
					"Adding padding expands an image by the same number of pixels on all four sides, which gives it room to breathe or makes the file the size a layout expects. The padding can stay fully transparent, so the image gains an invisible margin over any background, or it can be filled with any solid color through the Opacity and Fill color controls. The picture itself is untouched, so nothing is resampled and the result is exactly as sharp as the source, only larger by twice the padding in each direction. Padding from 1 to 2000 pixels per side is available, and the common uses are social posts that need a uniform frame, product photos that need white space, and icons that must not sit flush against a border. All of it runs locally in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Padding in pixels, from 1 to 2000; the default is 10 on every side.",
					"Leave Opacity at 0 for a transparent margin, or raise it and pick a Fill color.",
					"Download the padded image from the Download button.",
				],
				faq: [
					{
						q: "Is the padding transparent by default?",
						a: "Yes. Opacity starts at 0, which writes the added area with a fully transparent alpha channel, so the image gets an invisible margin that works on any background. Raise Opacity and the same margin is filled with the Fill color instead.",
					},
					{
						q: "Can I pad only one side?",
						a: "Not on this page, the same number of pixels is added to all four sides. To move the picture inside the canvas, use the shift tool with a fill color, or set an exact canvas and pick the anchor in the change canvas size tool.",
					},
					{
						q: "Does padding affect image quality?",
						a: "No resampling and no recompression happen: the original pixels are copied into a larger canvas as they are. Only the export format matters, and a lossy format such as JPG will smooth the edges of the picture once saved.",
					},
					{
						q: "What is the difference between padding and a border?",
						a: "Both grow the canvas, but padding defaults to transparent and takes an opacity, while a border is always drawn in one solid color and takes a thickness in pixels. Padding is for breathing room, a border is for a frame.",
					},
				],
			},
		},
		"fit-on-background-png": {
			title: "Fit PNG onto background",
			seo: {
				metaTitle: "Fit Image on Background - Center a PNG in Browser, Free",
				metaDescription:
					"Center an image on a canvas of any size, over a transparent or solid background, right in your browser. Free, no upload, no signup, instant download.",
				longDescription:
					"Fitting an image onto a background places it in the middle of a new canvas of the size you choose. Use it to give a product shot a consistent square backdrop, to give a logo room around it, or to drop a picture into the exact frame size a template expects. The image keeps its own resolution and is never scaled down to fit, so a small picture stays small and centered rather than being blown up to the edges. Set the canvas size in pixels, then decide what fills the space around it: Opacity at 0 leaves the margin fully transparent, and raising it fills the margin with the Background color you pick. Processing happens in your browser, so PNG, JPG, WebP and BMP are loaded and saved without ever leaving your device.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Canvas size in width and height, or choose one of the presets.",
					"Leave Opacity at 0 for a transparent margin, or raise it and pick Background.",
					"Download the result from the Download button as PNG, JPG, WebP or BMP.",
				],
				faq: [
					{
						q: "What if my image is bigger than the canvas size?",
						a: "The canvas grows to fit the picture instead of the picture being cropped or scaled down. Nothing is lost, but the output is then larger than the size you typed, and the result tile tells you it grew. Resize the image first if it must fit exactly.",
					},
					{
						q: "Is the margin transparent or white?",
						a: "Whichever you set. Opacity 0 leaves the added margin fully transparent, which is the useful setting for logos and cutouts; Opacity 100 fills it with the Background color, white by default.",
					},
					{
						q: "Does fitting change the image quality?",
						a: "No. The pixels are copied into the middle of the new canvas untouched, so the picture is as sharp as the source. Only the export format matters, and a lossy format applies its own compression when you save.",
					},
					{
						q: "How is this different from adding padding?",
						a: "Padding adds the same number of pixels on all four sides, while this tool takes an exact target canvas and centers the image inside it. For a plain transparent margin use add padding; for a fixed frame size such as 1080 by 1080, use this one.",
					},
				],
			},
		},
		"rotate-free-png": {
			title: "Rotate PNG by any angle",
			seo: {
				metaTitle: "Rotate PNG by Any Angle - Free Online, No Upload",
				metaDescription:
					"Turn a PNG to any angle from -180 to 180 degrees in your browser, with a canvas that grows to fit. Free, no upload, no signup, instant download.",
				longDescription:
					"Rotating a PNG by a free angle turns the picture to any value you like, from minus 180 to 180 degrees in one-degree steps. The canvas grows to the bounding box the rotated picture needs, so the whole image survives the turn and the empty corners stay transparent instead of being cut away. Unlike the right-angle rotate tool, which only moves whole pixels and therefore cannot lose quality, an arbitrary angle has to sample every output pixel from between the source pixels, so edges soften a little. That trade-off is the price of the freedom to pick any angle: use the right-angle tool when 90, 180 or 270 will do and you want a strictly lossless result, and use this one for everything else, such as straightening a photo shot at a slant. Everything runs in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Angle from -180 to 180 degrees; negative values turn the other way.",
					"Check the preview: the canvas grows to the new bounds and the corners stay transparent.",
					"Download the rotated image from the Download button.",
				],
				faq: [
					{
						q: "What is the difference from the rotate tool?",
						a: "The rotate tool does 90, 180 and 270 degrees by moving whole pixels, so it is strictly lossless. This tool takes any angle and has to resample, which softens edges slightly. Right angles need no resampling, so use rotate for those and this one for everything else.",
					},
					{
						q: "Will the corners be cut off?",
						a: "No. The canvas grows to fit the rotated picture, so the whole image is kept and the four corners of the new canvas stay transparent. Nothing is cropped.",
					},
					{
						q: "Does rotating by an angle damage quality?",
						a: "There is a small loss, and it is unavoidable: pixels that land between two source pixels must be interpolated. Fine text and hard diagonal edges are where you notice it first. A multiple of 90 degrees does not have this problem and is exact.",
					},
					{
						q: "Can I use this to straighten a photo?",
						a: "Yes, that is exactly what this page is for. Load the shot, set the angle that makes the horizon level, and download; the canvas grows so every edge of the picture is kept.",
					},
				],
			},
		},
		"shift-png": {
			title: "Shift PNG",
			seo: {
				metaTitle: "Shift PNG - Move Image Content, No Upload",
				metaDescription:
					"Move the content of an image by any X and Y offset in pixels, filling the space it leaves behind. Free, no upload, no signup, runs in your browser.",
				longDescription:
					"Shifting moves the whole content of an image by a given number of pixels horizontally and vertically, which is how you nudge a picture inside its frame without changing the file size. The canvas keeps its original dimensions and the area the content vacates is filled with the Fill color, so the result stays exactly the same size as the source. Offsets run from minus 5000 to 5000 pixels per axis, and negative values push the content the other way. Use it to align a subject inside a fixed frame, to add breathing room on one side only, or to build a layered offset for a shadow or glitch effect. Note that the vacated area is filled with a solid color here, not left transparent: if you want a transparent margin, use the add padding tool, which has an opacity control. Everything runs in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Offset X to move the content left or right, from -5000 to 5000 pixels.",
					"Set Offset Y to move it up or down, and pick the Fill color for the vacated area.",
					"Download the shifted image from the Download button.",
				],
				faq: [
					{
						q: "What fills the space the content leaves behind?",
						a: "A solid Fill color, and it is opaque. There is no opacity control on this page, so export to PNG if the image has to stay clean over other artwork; for a transparent margin use the add padding tool, whose Opacity slider starts at 0.",
					},
					{
						q: "Does the file size change?",
						a: "No. The canvas keeps the original width and height, so a shifted file is the same size as the source; content pushed past the edge is cropped by the canvas rather than wrapped around.",
					},
					{
						q: "How is this different from cropping?",
						a: "Cropping chooses a piece of the picture and throws the rest away, so the result is smaller. Shifting keeps the canvas and moves the content inside it, so nothing is lost, but the empty part is filled with the chosen color.",
					},
					{
						q: "Can I shift on only one axis?",
						a: "Yes, leave the other offset at 0. That moves the content purely sideways or purely up and down, which is the usual case when you are aligning it inside a frame.",
					},
				],
			},
		},
		"skew-png": {
			title: "Skew PNG",
			seo: {
				metaTitle: "Skew PNG - Shear Image Online, Free, No Upload",
				metaDescription:
					"Shear an image horizontally or vertically for a slanted, perspective-like look, right in your browser. Free, no upload, no signup, instant download.",
				longDescription:
					"Skewing shears an image: each row is pushed sideways by an amount that grows with its distance from the center, which is the flat 2D building block behind a perspective look. Set Skew X and Skew Y separately, from minus 80 to 80 degrees each, and the picture leans left, right, up or down, or both at once when the two are combined. The canvas grows to whatever the sheared shape needs, so no corner is chopped off, and the area outside the original rectangle shows through as transparency. The honest limitation is that this is a shear, not a true perspective projection: the effect flattens out with distance rather than converging the way a camera would. Because the pixels have to be resampled, edges soften very slightly. Everything runs in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Skew X to lean the image sideways, from -80 to 80 degrees.",
					"Set Skew Y to lean it up or down, and combine both for a diagonal effect.",
					"Download the result from the Download button; the canvas has grown to fit.",
				],
				faq: [
					{
						q: "Is skew the same as a perspective transform?",
						a: "No. Skew is a 2D shear: the same amount of offset is added for every row on one side. A real perspective transform would converge the lines toward a vanishing point. Use skew for the flat slanted look and a 3D editor for true perspective.",
					},
					{
						q: "Why is the image slightly softer?",
						a: "Because a shear cannot move whole pixels: every output pixel has to be sampled from between the source pixels, and bilinear interpolation fills the gaps. The right-angle rotate tool has no such step and is bit-for-bit lossless.",
					},
					{
						q: "What happens to the corners of the canvas?",
						a: "The canvas grows to the bounding box of the sheared image, so no part of the picture is cut off. The area outside the original rectangle stays transparent rather than being filled with a color.",
					},
					{
						q: "How do I rotate and skew in one go?",
						a: "Skew first, download the result, then open that file in the rotate free tool to add the angle. Doing it the other way round would rotate the empty space with the picture and waste canvas.",
					},
				],
			},
		},
		"split-into-parts-png": {
			title: "Split PNG into parts",
			seo: {
				metaTitle: "Split PNG into Equal Parts - Download a ZIP, No Upload",
				metaDescription:
					"Cut a PNG into a grid of equal pieces or into fixed size tiles and get them all in one zip archive. Free, runs in your browser, no upload, no signup.",
				longDescription:
					"Splitting an image into parts cuts it into separate files instead of producing one picture. Choose a grid and say how many columns and rows you need, or switch to Tile size and name the exact piece dimensions you want; the canvas is padded with transparency so that every part comes out the same size and no content is lost. This is the tool for taking a sprite sheet apart, for cutting a long screenshot into phone-sized frames, for a texture atlas ready to import, or for feeding a contact sheet into a text-recognition step. Unlike the other tools here, the result is not a single image: the parts come back as separate PNG files named part-01-01, part-01-02 and so on in reading order, delivered as a single zip archive. Everything is done in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose Split by: Grid for a count of columns and rows, or Tile size for fixed parts.",
					"Set Columns and Rows, or the Tile size width and height; all parts match.",
					"Download all parts as one zip archive from the Download button.",
				],
				faq: [
					{
						q: "What do I get as output?",
						a: "Many files, not one image: each part is a separate PNG, named part-01-01, part-01-02, part-02-01 and so on in reading order, and the Download button saves them all together as a single zip archive.",
					},
					{
						q: "Why are my parts not exactly the image size divided by the grid?",
						a: "The part size is rounded up so that it divides evenly, and the canvas is padded with transparency on the right and bottom to match. That way every part has identical dimensions and nothing is cut off, at the cost of empty pixels in the last row and column.",
					},
					{
						q: "What is the difference between Grid and Tile size?",
						a: "Grid asks for a count and decides the part dimensions for you. Tile size asks for the piece you want, such as 32 by 32 or 512 by 512, and the tool works out how many columns and rows that needs.",
					},
					{
						q: "How many parts can I get?",
						a: "Up to 1024 files per run; the tool refuses a larger grid instead of freezing the tab. Columns and Rows in Grid mode go from 1 to 32 each, which is 1024 at the maximum.",
					},
				],
			},
		},
		"swap-orientation-png": {
			title: "Swap image orientation",
			seo: {
				metaTitle: "Swap PNG Orientation - Force Portrait or Landscape",
				metaDescription:
					"Make an image portrait or landscape the way you ask: it turns by 90 degrees only when the orientation does not match. Free, no upload, no signup, lossless.",
				longDescription:
					"Swapping the orientation sets an image to the orientation you want by turning it a quarter turn when it does not already match. Pick Portrait and a landscape picture is rotated by 90 degrees clockwise into portrait; pick Landscape and a portrait one is turned the other way. If the image already has the orientation you asked for, it is returned untouched, and the same goes for a square image, which has no orientation to swap and comes back pixel-identical. Because the turn is a right angle, the pixels are only moved to new positions: no resampling, no interpolation and no quality loss at all. Use it when a batch of photos has to match one orientation for a gallery, a print sheet or a device screen. Everything runs in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose Orientation: Portrait or Landscape.",
					"Check the preview: it turns only if the current orientation differs from your choice.",
					"Download the result from the Download button.",
				],
				faq: [
					{
						q: "What happens to a square image?",
						a: "Nothing: a square is neither portrait nor landscape, so there is no orientation to swap and the tool returns it unchanged. Set a target size in the change canvas size tool if you need it inside a square frame.",
					},
					{
						q: "Is it the same as rotating by 90 degrees?",
						a: "Almost. Rotating by 90 always turns the image, while swapping only turns it when the result differs from the orientation you chose, so an already-correct file passes through untouched.",
					},
					{
						q: "Does it lose quality?",
						a: "No. The turn is by 90 degrees, so whole pixels are relocated to new positions with no interpolation and no re-compression inside the tool. For any other angle use the rotate free tool, which resamples and softens edges slightly.",
					},
					{
						q: "Which way does it turn?",
						a: "It turns 90 degrees clockwise when the orientation has to change, the same direction as the 90 degree option in the rotate tool. For a counter-clockwise quarter turn, run the rotate tool and pick 270 degrees.",
					},
				],
			},
		},
		"symmetric-copy-png": {
			title: "Make a symmetric copy",
			seo: {
				metaTitle: "Symmetric Copy PNG - Mirror Pattern in One Click",
				metaDescription:
					"Mirror one half of an image onto the other for an instant symmetric pattern, in your browser. Pixel-exact, free, no upload, no signup, instant download.",
				longDescription:
					"Making a symmetric copy doubles the canvas and mirrors the half you keep into the empty half, producing a reflection that lines up down the middle. Pick Vertical to mirror across a vertical line, which doubles the width, or Horizontal to mirror across a horizontal one, which doubles the height, then choose which side is kept: left, right, top or bottom. The kept side lands in the first half of the result and its reflection in the second, so the two halves meet at a seamless seam. Pixels are only copied, never resampled or blended, so the pattern is exactly as sharp as the source and the mirror is a true reflection rather than a fade. Use it for symmetrical layouts, a two-panel banner, a mirrored logo mark, or a texture that has to repeat symmetrically. Everything runs in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Choose the axis: Vertical doubles the width, Horizontal doubles the height.",
					"Pick the Kept side: left or right for a vertical mirror, top or bottom for a horizontal one.",
					"Download the symmetric result from the Download button.",
				],
				faq: [
					{
						q: "What is the difference between the axis options?",
						a: "Vertical mirrors across a vertical line, so the left and right halves meet and the width doubles. Horizontal mirrors across a horizontal line, so the top and bottom halves meet and the height doubles.",
					},
					{
						q: "What does the kept side do?",
						a: "It decides which half of the original is kept and reflected. The kept side is written into the first half of the output and its mirror into the second, so the seam falls exactly down the middle whichever side you choose.",
					},
					{
						q: "Does it blur the mirrored half?",
						a: "No. A true mirror is a copy of the source pixels to reversed positions, with no interpolation and no opacity fade, so both halves are equally sharp and identical apart from the flip.",
					},
					{
						q: "Can I get a four-way symmetric pattern?",
						a: "Run the tool twice. Mirror once to double the width, then take that result and mirror it again to double the height, which gives the four-fold pattern in two passes.",
					},
				],
			},
		},
		"tile-png": {
			title: "Tile PNG",
			seo: {
				metaTitle: "Tile PNG in a Grid - Repeat Image Pattern, No Upload",
				metaDescription:
					"Repeat an image in a grid of the columns and rows you set and download one big PNG. Runs in your browser, free, no upload, no signup, instant.",
				longDescription:
					"Tiling repeats an image in a grid, producing one single output file that is the columns times wider and the rows times taller than the source. It is the quick way to build a pattern for a wallpaper, a contact sheet of thumbnails, a print of repeated icons, or a background when the source tile has matching edges. Each copy is a pixel-for-pixel duplicate: nothing is resampled, blended or overlapped, so the result is exactly as sharp as the input and simply larger. Both counts run from 1 to 50, and a one by one setting returns the image unchanged. Everything is computed inside your browser tab, so the file is never uploaded, and PNG, JPG, WebP and BMP can be loaded and saved.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set Columns and Rows, from 1 to 50 each; 2 by 2 is a good starting point.",
					"Check the size under the preview: it is the original multiplied by both counts.",
					"Download the tiled picture from the Download button as one image.",
				],
				faq: [
					{
						q: "Can I control the gap between tiles?",
						a: "Not on this page: the copies sit edge to edge with no spacing and no offset, and the first tile is not shifted so its edges would match the last one. For spacing, tile the image and then add padding to it.",
					},
					{
						q: "Does tiling reduce quality?",
						a: "No. Every tile is a direct copy of the source pixels, with no interpolation, blending or compression step inside the tool. Any loss can only come from the format you export to, not from the tiling.",
					},
					{
						q: "How do I cut the tiled image back into single images?",
						a: "Run the result through the split into parts tool and set Split by to Grid with the same columns and rows. You get each tile back as its own file inside one zip archive.",
					},
					{
						q: "What is the largest grid I can make?",
						a: "Up to 50 columns by 50 rows, which is 2500 copies. The output grows with both numbers, so tile a modest source for large grids, or the result can exceed what a browser canvas can hold.",
					},
				],
			},
		},
		"trim-empty-space-png": {
			title: "Trim empty space from PNG",
			seo: {
				metaTitle: "Trim PNG Empty Space - Remove Transparent Border, Free",
				metaDescription:
					"Cut the transparent margins off a PNG and keep only the content, with an alpha threshold for faint halos. Free, no upload, no signup, runs in your browser.",
				longDescription:
					"Trimming empty space cuts away the transparent or nearly transparent margins around the content of a PNG, so the file ends up with no wasted border. Every pixel whose alpha channel is above the Alpha threshold counts as content, the bounding box of those pixels becomes the new image, and nothing else is touched: no resampling, no smoothing of the cut edge, no change to the colors of the content itself. The threshold matters for cutouts, where a faint halo of near-transparent pixels survives a hard edge; raising it drops that halo at the cost of shaving the outline. This is the cleanup step before exporting a logo, a sticker or an icon, and it also shrinks a screenshot that was padded for sharing. Everything runs in your browser, so nothing is uploaded.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Leave Alpha threshold at 0 to keep every pixel that is not fully transparent.",
					"Raise Alpha threshold when a faint halo should count as empty space.",
					"Download the trimmed image from the Download button as PNG, JPG, WebP or BMP.",
				],
				faq: [
					{
						q: "What does the alpha threshold do?",
						a: "It decides how visible a pixel has to be to count as content. At 0 anything not fully transparent is kept; raising it drops nearly invisible pixels too, which is how you remove the pale halo a rough cutout leaves behind.",
					},
					{
						q: "Does trimming blur or resample the image?",
						a: "No. The content is taken at full resolution with a straight cut at the bounding box, so the edges are exactly as they were. No interpolation happens anywhere in the process.",
					},
					{
						q: "Will it work on a JPG?",
						a: "No, there is nothing to trim. A JPG has no alpha channel, so every pixel counts as content and the file comes back the same size. Trimming works on PNG and on WebP, which both support transparency.",
					},
					{
						q: "I want to keep the canvas and center the content instead",
						a: "Use the center by content tool. It keeps the original canvas size and only redistributes the empty space, whereas trimming removes the margins and makes the file smaller.",
					},
				],
			},
		},
		"zoom-png": {
			title: "Zoom PNG",
			seo: {
				metaTitle: "Zoom PNG - Magnify Toward the Center, No Upload",
				metaDescription:
					"Magnify an image toward its center without changing the canvas size, in your browser. Zoom from 100 to 500 percent, free, no upload, no signup, instant.",
				longDescription:
					"Zooming magnifies an image toward its center while deliberately keeping the canvas the same size, so the edges are pushed out of view and cropped away. That makes it the right tool for inspecting the middle of a picture, for looking closely before you commit to a real crop, and for pulling detail out of a large image into a smaller frame. The zoom runs from 100 to 500 percent in steps of 10, and 200 percent is the default. The magnification is done by sampling, so at high percentages you are looking at fewer source pixels spread over the same canvas and detail softens as you go up. If you want a bigger file rather than a closer look, use the resize tool: zoom keeps the canvas, resize changes it. All of this happens in your browser.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Set the Zoom percentage from 100 to 500; the default is 200.",
					"Watch the center as you move the slider, then settle on a percentage.",
					"Download the zoomed image from the Download button.",
				],
				faq: [
					{
						q: "Why did my image not get bigger?",
						a: "Because zoom keeps the canvas exactly as it was and only magnifies the content toward the middle, so the edges slide out of view. That is the design. To get a larger file, use the resize tool, which changes the canvas size.",
					},
					{
						q: "Does zooming lose detail?",
						a: "At anything above 100 percent yes, and unavoidably: a magnified image is built from fewer source pixels spread over the same area, and interpolation softens them. Zooming is for looking closer, not for adding resolution.",
					},
					{
						q: "What happens to the edges?",
						a: "They are cropped. Zooming to 200 percent keeps only the central quarter of the picture in the same canvas, and the rest is discarded rather than squeezed in.",
					},
					{
						q: "Can I zoom in on a corner instead of the center?",
						a: "No, the magnification is always toward the middle. To work on a corner, cut it out first with the crop tool and then zoom the result.",
					},
				],
			},
		},
		"date-stamp-png": {
			title: "Date stamp a PNG",
			seo: {
				metaTitle: "Date Stamp PNG - Free Browser Tool With a Format String",
				metaDescription:
					"Write the current date and time onto a picture with a YYYY-MM-DD format string, then style it like any caption. Free, it runs in your browser and nothing is uploaded.",
				longDescription:
					"A date stamp writes the current date and time onto an image, so a photo, a screenshot or a scan carries visible proof of when it was made. Instead of typing a caption by hand you type a short format string and the tokens are substituted: YYYY for the year, MM and DD for the month and day, and hh, mm and ss for hours, minutes and seconds, read from the clock of your device in local time. Everything else you type is kept as it is, so the separators are yours to choose - dashes, slashes, dots or spaces. The stamp is then styled like any other caption: font family, size, weight and color, one of nine positions on a 3x3 grid, a margin from the edge and an optional backing plate for contrast. The lettering is drawn by the browser on your device, so the picture is never uploaded, and the result saves as PNG, JPG, WebP or BMP.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Edit the Date format field - YYYY-MM-DD hh:mm:ss fills year, month, day, hours, minutes and seconds.",
					"Set the text style, then choose one of nine positions and adjust the margin from the edge.",
					"Turn the plate on or off for contrast, then download the stamped image.",
				],
				faq: [
					{
						q: "Which tokens can I use?",
						a: "YYYY, MM, DD, hh, mm and ss, written in exactly that case. Every other character is left alone, so the default YYYY-MM-DD works and DD.MM.YYYY or YYYY/MM/DD hh:mm are just as easy to type.",
					},
					{
						q: "Is the date read from the file?",
						a: "No. It reads the clock of the device at the moment the stamp is drawn, in local time. This is a visible label on the pixels, not metadata written inside the file.",
					},
					{
						q: "Which fonts can I pick?",
						a: "A sans-serif, a serif and a monospace family, all rendered by the browser from the fonts installed on your device. That is also why a stamp can look slightly different on another machine, while the picture itself looks identical everywhere.",
					},
					{
						q: "Date or arbitrary words?",
						a: "This tool writes the current date and time from the format string. To write any text you type yourself - a name, a caption, a label - use the add text tool on this site instead.",
					},
				],
			},
		},
		"watermark-tile-png": {
			title: "Tile a watermark across a PNG",
			seo: {
				metaTitle: "Watermark Tile PNG - Free Browser Tool, No Upload Needed",
				metaDescription:
					"Cover a picture with a repeating diagonal text watermark: set the wording, angle, spacing and opacity. Runs locally, free, nothing leaves the device.",
				longDescription:
					"A tile watermark covers a whole picture with the same short text repeated in a diagonal grid, which is the usual way to mark a draft, a proof or a preview so it is not mistaken for a finished file. Type the text - DRAFT, SAMPLE, a site name - and then shape the pattern around it: Angle tilts it from -90 to 90 degrees, Step X and Step Y set how far apart repeats sit horizontally and vertically, and Opacity decides how firmly the lettering shows through. The defaults give a diagonal grid at thirty percent; a small picture wants larger steps, a full-size one can carry tighter ones. There is no position grid and no backing plate here, because a repeated tile has no single anchor - this is the counterpart to the add text tool, which draws one label in one corner. The lettering is rendered by the browser using the fonts installed on your device, so the picture is never uploaded, and the result saves as PNG, JPG, WebP or BMP.",
				howTo: [
					"Drop the image into the source area, or pick a file from your device.",
					"Type the watermark text - a single word such as DRAFT is usually enough.",
					"Tilt the grid with Angle, then set Step X and Step Y to space out the repeats.",
					"Lower Opacity until the text stays readable without fighting the picture, then download.",
				],
				faq: [
					{
						q: "Should I use this or the add text tool?",
						a: "Add text draws a single label in one of nine positions, which suits a caption or a signature. This one repeats across the whole frame, which suits protection - there is no corner to crop away.",
					},
					{
						q: "Why does the watermark look denser in some places?",
						a: "That is the geometry of the grid. Step X and Step Y define one repeat per cell, and at the default spacing the word is wider than its cell, so neighbouring rows touch. Raise the steps until clear gaps open up.",
					},
					{
						q: "Can it run horizontally instead?",
						a: "Yes. Angle 0 draws the repeats upright along the axes, while 30 to 45 degrees gives the slanted look usually used for a watermark.",
					},
					{
						q: "Is the watermark burned into the file?",
						a: "Yes - the repeats are drawn into the pixels, so a downloaded file looks the same everywhere. The font itself comes from this device, which is why an identical setting can render a little differently on another machine.",
					},
				],
			},
		},
	},
	// Hub copy for `/categories/<id>`. Written per category from the real tools
	// of the group, not by template: a hub is the topical entry point the
	// tool pages link up to (docs/plan-seo.md S3c).
	categoryHubs: {
		convert: {
			heading: "Image converters",
			metaTitle: "Image Converters Online - PNG, JPG, WebP, SVG",
			metaDescription:
				"Convert between PNG, JPG, WebP and BMP, rasterize SVG, and turn images into Base64, data URIs, hex pixels or raw bytes. Free, no upload, runs in your browser.",
			paragraphs: [
				"Conversion tools change the format of an image, not its content. A lossless format such as PNG or WebP keeps every pixel exactly as it was; a lossy format such as JPG discards detail to reach a smaller file, and the Download button lets you pick the quality that decides how much. Converting to JPG flattens transparency onto a background color, because JPG has no alpha channel - pick a white, black or custom background instead of losing the transparent areas to black.",
				"Text-based conversions go the other way: Base64, data URIs, hex pixel values and byte arrays are the encodings developers use to embed an image in HTML, CSS, JSON or a source file. The reverse tools rebuild an image from any of those encodings, so a round trip through Base64 gives back the same picture you started with.",
				"SVG to PNG is the one conversion that changes resolution: a vector source has no fixed pixel size, so the width and height you set decide how sharp the raster output is. Pick a size at least as large as the largest place the image will be shown - SVG stays sharp at any size, a rasterized PNG does not.",
			],
		},
		alpha: {
			heading: "Transparent PNG tools",
			metaTitle: "Transparent PNG Tools - Cut Out, Masks, Alpha Channel",
			metaDescription:
				"Make a PNG transparent, remove its background or one color, round the corners, apply circle, square or star masks, and edit the alpha channel. Free, no upload, in your browser.",
			paragraphs: [
				"Transparency in a PNG is stored in the alpha channel: a fourth value per pixel that says how opaque it is, from fully invisible to fully solid. The tools here work with that channel directly. Removing one color or the background makes matching pixels transparent, setting or removing the alpha channel switches transparency on or off as a whole, and inverting it swaps what is visible with what is hidden.",
				"Cutting out a subject is the most common task here. The background removal tool picks the corner pixels as the background color and erases everything close to it - it is a color-key algorithm, not an AI model, so it works on logos, icons, product shots and screenshots with a flat background, and struggles with hair, fur or busy scenes. When a hard cut leaves a fringe of the old background, the defringing tool pulls that halo back toward the edge color, and the edge cleaning tools remove stray specks and small holes.",
				"Masks are the geometric way to get the same result: a circle, square, star or wavy mask keeps the pixels inside the shape and makes everything else transparent, which is how avatars and app icons are made. Round corners does the same with a radius, and the thicker, thinner, feathered and hardened tools adjust the edge of a selection that already exists - useful when a cutout needs to be a little softer or a little tighter.",
			],
		},
		color: {
			heading: "Image color tools",
			metaTitle: "Color Tools Online - Grayscale, Sepia, Hue, Palettes",
			metaDescription:
				"Change image colors in your browser: grayscale, sepia, invert, hue, temperature, brightness, gamma, posterize, dithering, palettes and HSL, CMYK, Lab conversions.",
			paragraphs: [
				"Color tools adjust the channels inside each pixel. Grayscale and the black-and-white threshold reduce an image to shades of gray or to pure black and white, sepia and tint shift the whole image toward one color, invert flips every channel, and hue rotation moves colors around the wheel while keeping their brightness and saturation. Gamma correction and brightness-contrast work differently: gamma changes the midtones, brightness adds or subtracts across the whole range.",
				"Color models matter when an image has to match something else. The conversion tools show the same pixels expressed as HSL, HSV, HSI, CMYK, YCbCr or Lab values, which is how you read what a color is in the system a printer, a designer or a developer will ask about. Extract Channel pulls one channel out on its own, and swap channels exchanges two - useful when a file's channels are in an unexpected order.",
				"Reducing the number of colors is a separate job from changing them. Quantize maps the image onto a limited palette, dithering adds noise to fake intermediate shades with fewer colors, and a custom palette lets you choose exactly which colors survive. Fewer colors means a smaller file in an indexed PNG, and it is also how you make an image look deliberately retro.",
			],
		},
		geometry: {
			heading: "Crop, resize and rotate tools",
			metaTitle: "Image Geometry Tools - Crop, Resize, Rotate, Flip",
			metaDescription:
				"Crop, resize, rotate, flip, pad and reshape images in your browser. Free, no upload, no signup. Works with PNG, JPG, WebP and BMP.",
			paragraphs: [
				"Geometry tools change the shape and the size of an image, never its colors. Crop cuts a rectangle out of it, resize scales the whole picture to new pixel dimensions, and change canvas size moves the picture inside a larger or smaller frame without scaling it - that is the difference between resizing the artwork and adding space around it. Change aspect ratio forces new proportions, and trim empty space removes the transparent or uniform border a screenshot came with.",
				"Rotation comes in two forms. The 90, 180 and 270 degree turn moves every pixel exactly, so nothing is resampled and nothing gets blurry - that is the one to use for photos. A free rotation takes any angle, and any angle other than a right one has to interpolate the pixels it lands between, which softens the edges slightly. Flipping mirrors the image horizontally or vertically instead.",
				"The remaining tools place and repeat. Padding and a border add space and a frame, zooming scales up around the center, shifting moves the picture inside its canvas, tiling repeats the image as a pattern, and splitting cuts it into parts - rows, columns, or a grid - which is the way to export a long screenshot or a contact sheet as separate files.",
			],
		},
		filters: {
			heading: "Image filters",
			metaTitle: "Image Filters Online - Blur, Sharpen, Pixelate, Noise",
			metaDescription:
				"Apply filters to images in your browser: blur, sharpen, pixelate, add noise, vignette, silhouette and JPEG artifacts. Free, no upload, no signup.",
			paragraphs: [
				"Filters process every pixel of an image and produce another image. Blur averages each pixel with its neighbors, sharpen does the opposite and boosts local contrast, and both take a radius: small values are subtle, large ones are heavy. Pixelate does the averaging in blocks instead, which collapses detail into visible squares - the classic way to hide a face or shrink a picture's detail without resizing it.",
				"Noise tools add grain rather than remove it. Adding noise sprays random values over the image, randomizing pixels shuffles them, and JPEG artifacts simulate what happens when an image is saved in a lossy format, so you can see the blocking and smearing before you actually export a JPG. A vignette darkens the edges to pull attention to the center, and silhouette turns the image into a solid shape on a transparent background.",
				"All of these run on your device, which matters for a second reason: the result is a new image you download, not an edit to the file on your disk. Save the original again whenever you want to compare the before and after - every filter here is non-destructive in that sense.",
			],
		},
		text: {
			heading: "Text and watermark tools",
			metaTitle: "Add Text to Image Online - Watermark, Date Stamp",
			metaDescription:
				"Add text, a date stamp or a tiled watermark to an image in your browser. Free, no upload, no signup, works with PNG, JPG, WebP and BMP.",
			paragraphs: [
				"Text tools draw on top of an image without touching the pixels underneath. Add Text places a line of text at a chosen position, with the font, size, color and alignment you pick, and the result keeps the rest of the image exactly as it was - saving it as PNG or WebP stays lossless, only JPG and low-quality WebP will re-compress it. A date stamp does the same thing with today's date in the format you choose.",
				"A watermark protects an image you share but still want to look finished. The tiled watermark repeats the text or the logo across the whole picture, which is the usual way to mark a preview, and setting its opacity is what keeps it readable as a watermark instead of covering the picture. For a single mark in one corner, Add Text with a low opacity does the same job more quietly.",
				"Everything is rendered in your browser on a canvas, so the file never leaves your device and no account is needed. Because the text is rasterized at export time, it appears exactly as sharp as the output size you choose - scaling a small image up later will blur the letters along with the picture.",
			],
		},
		analyze: {
			heading: "Image analysis tools",
			metaTitle: "Image Analysis Tools - Check PNG, Size, Transparency",
			metaDescription:
				"Check an image in your browser: verify it is a PNG, read the file size, check transparency, orientation, grayscale and color count. Nothing is uploaded.",
			paragraphs: [
				"Analysis tools read an image and answer a question about it instead of changing it. The format check tells you whether a file really is a PNG or something renamed with a .png extension, the file size tool reports how heavy the file is in kilobytes, and the orientation tool reads the size and the shape of the picture. These are quick facts, useful before you decide whether to resize, recompress or re-save anything.",
				"Color analysis goes deeper. The transparency check reports whether the image has an alpha channel and whether any pixel is actually see-through, the grayscale check reports whether all pixels share the same value in the three color channels, and the two-color check reports whether the image uses exactly two distinct colors - the signature of a simple logo or icon. Extract color reads the dominant color out of the picture.",
				"The pixel viewers are the visual counterpart: they highlight the pixels that match a condition, so you can see where the transparency is, where the grays are, where the light and dark areas are, and where the unique colors hide. Use them when an image looks wrong and you need to know which pixels are responsible before you touch anything.",
			],
		},
		generate: {
			heading: "Image generators",
			metaTitle: "Generate Images Online - Solid, Gradient, Noise, Color Wheel",
			metaDescription:
				"Generate images from scratch in your browser: empty canvas, solid color, linear gradient, noise, grid, placeholder, color wheel, emoji and text to PNG.",
			paragraphs: [
				"Generation tools create an image from numbers instead of editing an existing one, which makes them the fastest way to get an exact canvas: a transparent empty image of a given size, a solid color fill, a linear gradient between two or more colors, a color spectrum, or a grid of lines. A placeholder image is a quick way to get a labeled rectangle of the right size for a layout that is still in progress.",
				"The color tools here are design aids rather than converters. A color wheel shows the hue circle, and the harmony schemes - complementary, triadic, tetradic, analogous and monochromatic - lay out the colors that go with a chosen one. Shades of a color, mixed colors and a sorted palette are the practical version of the same idea: pick colors, see how they relate, export them as an image or as a list.",
				"Text to image is the last group here. Emoji to PNG and text to PNG render a character or a line of text onto a canvas with a transparent background, which is what you need when a glyph has to become a file - an icon, a sticker, a label. Two images can also be blended pixel by pixel, which is a quick way to compare or combine two versions of the same picture.",
			],
		},
	},
	tools: {
		"file-size": {
			results: {
				line: "PNG size: {kb} KB",
			},
		},
		"verify-png": {
			results: {
				verifyYes: "Yes — this is a valid PNG signature.",
				verifyNo: "No — the signature does not match a PNG file.",
			},
		},
		"is-grayscale": {
			results: {
				grayscaleYes: "Yes — all pixels are shades of gray.",
				grayscaleNo: "No — colored pixels were found.",
			},
		},
		"is-transparent": {
			results: {
				transparentYes:
					"Yes — there are transparent or semi-transparent pixels.",
				transparentNo: "No — all pixels are fully opaque.",
			},
		},
		orientation: {
			results: {
				orientationPortrait: "Portrait — height is greater than width.",
				orientationLandscape: "Landscape — width is greater than height.",
				orientationSquare: "Square — the sides are equal.",
			},
		},
		"split-into-parts": {
			options: {
				mode: { grid: "Grid", tile: "Tile size" },
			},
		},
		"show-transparent": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"show-grayscale-pixels": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"show-color-pixels": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"light-pixel-mask": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"dark-pixel-mask": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"unique-color-mask": {
			options: {
				mode: { binary: "Black & white mask", highlight: "Color highlight" },
			},
		},
		"add-noise": {
			options: {
				mode: { mono: "Monochrome grain", color: "Color noise" },
			},
		},
		dithering: {
			options: {
				pattern: { "floyd-steinberg": "Floyd–Steinberg", bayer: "Bayer 4x4" },
			},
		},
		"extract-channel": {
			options: {
				channel: { red: "Red", green: "Green", blue: "Blue" },
			},
		},
		"swap-channels": {
			options: {
				pair: {
					"r-g": "Red ↔ Green",
					"r-b": "Red ↔ Blue",
					"g-b": "Green ↔ Blue",
				},
			},
		},
		"decrease-color-count": {
			options: {
				maxColors: {
					"2": "2",
					"4": "4",
					"8": "8",
					"16": "16 (extreme)",
					"32": "32",
					"44": "44 (strong)",
					"64": "64",
					"96": "96 (balanced)",
					"128": "128",
					"192": "192 (light)",
					"256": "256",
				},
			},
		},
		"to-hsl": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		"to-hsv": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		"to-hsi": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		"to-cmyk": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		"to-ycbcr": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		"to-lab": {
			options: {
				display: { gray: "Grayscale", color: "Space as RGB" },
			},
		},
		rotate: {
			options: {
				angle: {
					"90": "90° clockwise",
					"180": "180°",
					"270": "270° clockwise",
				},
			},
		},
		flip: {
			options: {
				axis: {
					horizontal: "Horizontal (left to right)",
					vertical: "Vertical (top to bottom)",
				},
			},
		},
		"change-canvas-size": {
			options: {
				anchor: {
					"top-left": "Top left",
					"top-center": "Top center",
					"top-right": "Top right",
					"middle-left": "Middle left",
					center: "Center",
					"middle-right": "Middle right",
					"bottom-left": "Bottom left",
					"bottom-center": "Bottom center",
					"bottom-right": "Bottom right",
				},
			},
		},
		"change-aspect-ratio": {
			options: {
				ratio: {
					"1:1": "1:1",
					"4:3": "4:3",
					"3:4": "3:4",
					"3:2": "3:2",
					"2:3": "2:3",
					"16:9": "16:9",
					"9:16": "9:16",
				},
				mode: { crop: "Crop to fill", pad: "Pad to fit" },
			},
		},
		"swap-orientation": {
			options: {
				target: { portrait: "Portrait", landscape: "Landscape" },
			},
		},
		"symmetric-copy": {
			options: {
				axis: {
					vertical: "Vertical (double width)",
					horizontal: "Horizontal (double height)",
				},
				keepSide: {
					left: "Left",
					right: "Right",
					top: "Top",
					bottom: "Bottom",
				},
			},
		},
		"color-spectrum": {
			options: {
				direction: { horizontal: "Horizontal", vertical: "Vertical" },
			},
		},
		"step-colors": {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		complementary: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		triadic: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		tetradic: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		analogous: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		monochromatic: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		shades: {
			options: {
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
		"sort-colors": {
			options: {
				order: { hue: "Hue", luma: "Brightness", sat: "Saturation" },
				layout: { grid: "Grid", strip: "Strip" },
			},
		},
	},
};
