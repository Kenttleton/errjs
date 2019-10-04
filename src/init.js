/**
    * @fileoverview Overrides the default {@link https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror On Error Event} and creates a more verbose logging solution by initializing the ErrJS module. ErrJS will output to the console for browser uses and either a file or the console when used with NodeJS.
    * @package
    * @param {string} message An error message
    * @param {string} source Filename where the error took place
    * @param {number} lineNumber Line number the error took place
    * @param {JSErrorObj} error Javascript error object
 */

window.onerror = function(message, source, lineNumber, columnNumber, error) {
    new Erratum(message, source, lineNumber, columnNumber, error);
    return true;
};
