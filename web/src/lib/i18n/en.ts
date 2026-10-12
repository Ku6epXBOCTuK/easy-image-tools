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
