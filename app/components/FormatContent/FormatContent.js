//export const FormatContent = (inputString) => {
export function FormatContent(inputString) {
	const spanBlocks = [];

	// 1. Temporarily extract all <span>...</span> blocks
	const tokenizedString = inputString.replace(/<span\b[\s\S]*?<\/span>/gi, (match) => {
		spanBlocks.push(match);
		return `__SPAN_PLACEHOLDER_${spanBlocks.length - 1}__`;
	});

	// 2. Split by \r\n and wrap non-HTML blocks in <p> tags
	const processedLines = tokenizedString.split(/\r\n/).map(line => {
		const trimmed = line.trim();
		
		if (trimmed == '') return

		if (!trimmed) return

		const hasHtmlStart = /^<(?!a\b|span\b|strong\b|b\b)[a-zA-Z0-9]+(?:\s[^>]*)?>/.test(trimmed);
		const hasHtmlEnd = /<\/(?!a\b|span\b|strong\b|b\b)[a-zA-Z0-9]+>$/.test(trimmed);

		if ((trimmed.includes('__SPAN_PLACEHOLDER_')) && (!hasHtmlStart || !hasHtmlEnd)) {
			return `<p>${trimmed}</p>`; 
		}

		if (!hasHtmlStart || !hasHtmlEnd) {
			const indent = line.match(/^\s*/);
			return `${indent}<p>${trimmed}</p>`;
		}

		return line;
	});

	let finalResult = processedLines.join('\r\n');

	// 3. Logic Check: Replace [phone] inside span blocks, convert \r\n to <br>, and restore
	spanBlocks.forEach((originalSpan, index) => {
		let modifiedSpan = originalSpan;

		// Check if the span contains the [phone] shortcode and replace it globally
		if (modifiedSpan.includes('[phone]')) {
			modifiedSpan = modifiedSpan.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>');
		}

		const spanWithBrTags = modifiedSpan.replace(/\r\n/g, '<br>');
		finalResult = finalResult.replace(`__SPAN_PLACEHOLDER_${index}__`, spanWithBrTags);
	});

	// 4. Global Fallback: Replace [phone] if it exists outside of <span> tags
	if (finalResult.includes('[phone]')) {
		finalResult = finalResult.replace(/\[phone\]/g, '<a href="tel:8667107382">(866) 710-7382</a>');
	}

	if (finalResult.includes('[img id="39329"')) {
		finalResult = finalResult.replace('[img id="39329" width="527"]', '<div class="mb-3"><img class="b-lazy img-srtcode b-loaded" alt="BBB 4.25 Google 4.25 Facebook 4.75 Trustpilot 4.25" src="https://wordpress-dev-appsvc.azurewebsites.net/wp-content/uploads/2025/08/our-reviews-1.svg"></div>');
	}

	if(finalResult.includes('[newsletter-form id="0ccbe880-b086-43f1-8c61-cc0db7225181"]')) {
		finalResult = finalResult.replace('[newsletter-form id="0ccbe880-b086-43f1-8c61-cc0db7225181"]', '')
		newsletterForm = true
		newsletterFormID = "0ccbe880-b086-43f1-8c61-cc0db7225181"
	}

	if(finalResult.includes('[newsletter-form]')) {
		finalResult = finalResult.replace('[newsletter-form]', '')
		newsletterForm = true
	}

	return finalResult;
}