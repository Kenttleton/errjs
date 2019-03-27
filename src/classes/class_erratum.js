/**
 * Latin for Error, since the Error class already exists,
 *     Erratum is the error class that will be used throughout the module.
 */
class Erratum {
  /**
	 * @constructor
	 * @param {string} message An error message
	 * @param {string} fileName Filename where the error took place
	 * @param {number} lineNumber Line number the error took place
	 * @param {errorType} type See {@link errorType Error Type} for type definition
	 */
  constructor(
      message = null,
      fileName = null,
      lineNumber = null,
      type = errorType.GENERIC
  ) {
    /** @private */
    this.message = message;
    /** @private */
    this.fileName = fileName;
    /** @private */
    this.lineNumber = lineNumber;
    /** @private */
    this.type = type;
  }
  /**
	 * Getter for Message
	 * @return {string} Error Message to be displayed
	 */
  Message() {
    return this.message;
  }
  /**
	 * Getter for FileName
	 * @return {string} FileName where the error occurred
	 */
  FileName() {
    return this.fileName;
  }
  /**
	 * Getter for LineNumber
	 * @return {string} LineNumber where the error occurred
	 */
  LineNumber() {
    return this.lineNumber;
  }
  /**
	 * Getter for Type
	 * @return {string} Type of error thrown
	 */
  Type() {
    return this.type;
  }
}
goog.export(Erratum);
