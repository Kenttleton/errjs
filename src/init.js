/**
 * @fileoverview Overrides the default {@link https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror On Error Event} and creates a more verbose logging solution by initializing the ErrJS module. ErrJS will output to the console for browser uses and either a file or the console when used with NodeJS.
 * @package
 */
window.onerror = new Err();
