/** @enum {string} Types of errors */
const errorType = {
  /** Used for generic errors and default error type */
  GENERIC: 'generic',
  /**
	 * {@link datatype Data Type} related errors
	 * @enum {datatype}
	 */
  DATATYPE: datatype,
};
/** @enum {string} Data Type related errors */
const datatype = {
  /** Used for invalid datatypes */
  MISSMATCH: 'missmatch',
  /** Used for iteratables of the wrong size */
  OUTOFBOUNDS: 'outofbounds',
};
goog.export(errorType);
