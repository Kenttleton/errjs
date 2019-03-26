/**
 * @fileoverview Plural for erratum, Latin for Error, is an
 *  iteratable collection of erratum.
 * @supported IE9+, Chrome, Firefox
 * @author (Kent Utterback)
 */
class Errata {
  /**
	 * @constructor
	 * @param {!Array<Erratum>} errata An array of Erratum
	 */
  constructor(errata) {
    if (!Array.isArray(errata)) {
      const error = new Erratum(
          'Input not an array i.e. Errata(Array<Erratum>)',
          'class_errata.js',
          13
      );
      Terminal.error(error.message, error);
      return;
    }
    for (let i = 0; i < errata.length; i++) {
      this.errata[i] = errata;
    }
  }
  /**
	 * Add an erratum to the collection
	 * @param {Erratum} erratum @see Erratum
	 */
  Add(erratum) {
    if (!erratum instanceof Erratum) {
      const error = new Erratum(
          'Input not an array i.e. input = new Erratum();',
          'class_errata.js',
          31
      );
      Terminal.error(error.message, error);
      return;
    }
    this.errata.push(erratum);
  }
  /**
	 * Remove an erratum from the collection
	 * @param {Erratum} erratum @see Erratum
	 */
  Remove(erratum) {
    if (!erratum instanceof Erratum) {
      const error = new Erratum(
          'Input not an array i.e. input = new Erratum();',
          'class_errata.js',
          31
      );
      Terminal.error(error.message, error);
      return;
    }
    // remove logic here
  }
  /**
	 * Iterate over the collection and perform the function logic.
	 * @param {function} method The method can support an input or not
	 * @return {Errata} Output Errata object based on the input method
	 * criteria
	 */
  ForEach(method) {
    return method(Erratum);
  }
  /**
	 * Iterate over the collection and return if Erratum exists else return false.
	 * @param {Erratum} erratum @see Erratum
	 * @return {boolean} True if the input exists or False if it does not
	 */
  Contains(erratum) {
    return false;
  }
}
goog.export(Errata);
