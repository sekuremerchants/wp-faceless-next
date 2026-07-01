const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export async function rateLimitedFetch(url, delayMs = 1000) {
  await delay(delayMs);

  const response = await fetch(url);

  // CRITICAL: Catch non-200 responses before parsing JSON!
  if (!response.ok) {
    let errorText = '';
    try {
      errorText = await response.text(); // Read raw text (HTML or error string)
    } catch {
      errorText = 'Could not read response text';
    }
    
    console.error(`\n❌ API Server Error on URL: ${url}`);
    console.error(`Status Code: ${response.status} (${response.statusText})`);
    console.error(`First 150 chars of response: ${errorText.substring(0, 150)}\n`);
    
    // Throw a clear message instead of a cryptic SyntaxError
    throw new Error(`API returned status ${response.status} instead of JSON.`);
  }

  // Double check the headers to make sure it's actually JSON
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const rawText = await response.text();
    console.error(`\n❌ Expected JSON but received Content-Type: ${contentType} from URL: ${url}`);
    console.error(`Raw payload body snippet: ${rawText.substring(0, 150)}\n`);
    throw new Error(`API response was not JSON.`);
  }

  return response.json();
}