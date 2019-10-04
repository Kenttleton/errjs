/** @enum {string} Types of errors */
const errorType = {
  /** Used for generic errors and default error type */
  GENERIC: 'generic',
  /**
   * {@link dataType Data Type} related errors
   * @enum {dataType}
   */
  DATATYPE: dataType,
  /**
   * {@link http HTTP and AJAX} related errors
   * @enum {http}
   */
  HTTP: httpStatus,
};
/** @enum {string} Data Type related errors */
const dataType = {
  /** Used for invalid datatypes */
  MISSMATCH: 'missmatch',
  /** Used for iteratables of the wrong size */
  OUTOFBOUNDS: 'outofbounds',
};
/** @enum {string} HTTP and AJAX network errors */
const httpStatus = {
  /** 301 Redirect - Moved Permanently */
  '301': 'Redirect - Moved Permanently',
  /** 302 Redirect - Moved Temporarily */
  '302': 'Redirect - Moved Temporarily',
  /** 400 Bad Request */
  '400': 'Bad Request',
  /** 401 Unknown Identity - Unauthorized */
  '401': 'Unauthorized',
  /** 403 Known Identity - Forbidden */
  '403': 'Known Identity - Forbidden',
  /** 404 Page Not Found */
  '404': 'Not Found',
  /** 408 Request Timeout */
  '408': 'Request Timeout',
  /** 429 Too Many Requests */
  '429': 'Too Many Requests',
  /** 451 Unavailable For Legal Reasons */
  '451': 'Unavailable For Legal Reasons',
  /** 500 Internal Server Error */
  '500': 'Internal Server Error',
  /** 502 Bad Gateway */
  '502': 'Bad Gateway',
  /** 511 Network Authentication Required */
  '511': 'Network Authentication Required',
};
goog.export(errorType);
