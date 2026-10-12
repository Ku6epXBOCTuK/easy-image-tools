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
