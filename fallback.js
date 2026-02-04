export async function askFallback(prompt) {
  return `Fallback AI:\n\n${prompt}\n\nNo external API was available.`;
}
