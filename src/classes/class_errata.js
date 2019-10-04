/**
 * Plural for erratum, Latin for Error, is an
 *      iteratable collection of erratum.
 */
class Errata {
  /**
   * @constructor
   * @param {!Array<Erratum>} errata An array of Erratum
   */
  constructor(errata) {
    if (!Array.isArray(errata) && typeof errata !== 'undefined') {
      const error = new Erratum(
          'Input not an array i.e. Errata(Array<Erratum>)',
          'class_errata.js',
          13
      );
      Terminal.error(error.message, error);
      return;
    }
    if (Array.isArray(errata)) {
      for (let i = 0; i < errata.length; i++) {
        this.errata[i] = errata;
      }
    } else {
      this.errata = [];
    }
  }
  /**
   * Add an erratum to the collection
   * @param {Erratum} erratum See {@link Erratum} for type definition
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
   * @param {Erratum} erratum See {@link Erratum} for type definition
   */
  Remove(erratum) {
    if (!erratum instanceof Erratum) {
      const error = new Erratum(
          'Input not an array i.e. input = new Erratum();',
          'class_errata.js',
          31,
          ''
      );
      Terminal.error(error.message, error);
      return;
    }
    // remove logic here
  }
  /**
   * Iterate over the collection and perform the function logic.
   * @param {function} method The method can support an input or not
   * @return {Errata} Output {@link Erratum} object based on the input method
   * criteria
   */
  ForEach(method) {
    if (typeof method === 'function') {
      const output = new Errata();
      for (let i = 0; i < this.errata.length; i++) {
        if (method(this.errata[i]) instanceof Erratum) {
          output.push(method(this.errata[i]));
        } else {
          const error = new Erratum(
              'Input method does not output an Erratum Object',
              'class_errata.js',
              72
          );
          Terminal.error(Object.prototype.toString(error));
        }
      }
      return output;
    }
  }
  /**
   * Iterate over the collection and return if Erratum exists else return false.
   * @param {Erratum} erratum See {@link Erratum} for type definition
   * @return {boolean} True if the input exists or False if it does not
   */
  Contains(erratum) {
    return false;
  }
}
goog.export(Errata);
