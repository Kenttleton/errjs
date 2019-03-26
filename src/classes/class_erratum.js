/**
 * @fileoverview Latin for Error, since the Error class already exists,
 * Erratum is the error class that will be used throughout the module.
 * @supported IE9+, Chrome, Firefox
 * @author (Kent Utterback)
 */
class Erratum {
  /**
	 * @constructor
	 * @param {string} message An error message
	 * @param {string} fileName An error message
	 * @param {number} lineNumber An error message
	 */
  constructor(message = '', fileName = '', lineNumber = null) {
    this.message = message;
    this.fileName = fileName;
    this.lineNumber = lineNumber;
  }
}
goog.export(Erratum);
