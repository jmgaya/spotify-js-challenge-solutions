/**
 * Constructor for the SpotifyDOM object.
 *
 * @param selector {String}, it can follow the following formats:
 *  - class e.g. '.element'
 *  - identifier e.g. '#element'
 *  - tag name e.g. 'li'
 * @return {SpotifyDOM}
 */
var SpotifyDOM = function(selector) {
  this.elements = document.querySelectorAll(selector);
  this.selector = selector;
  return this;
};

/**
 * Changes the SpotifyDOM selector
 *
 * @param selector {String}, it can follow the following formats:
 *  - class e.g. '.element'
 *  - identifier e.g. '#element'
 *  - tag name e.g. 'li'
 * @return {SpotifyDOM}
 */
SpotifyDOM.prototype.get = function(selector) {
  this.elements = document.querySelectorAll(selector);
  this.selector = selector;
  return this;
};

/**
 * Changes or returns the content of the element.
 *
 * @param content {String}
 * @return {SpotifyDOM}
 * @method html
 * @return {String} The content of the element
 * @throws {SpotifyDOMInvalidElement} When the current content of the wrapper
 * is a collection,
 *  e.g. SpotifyDOM(‘li’).html(‘test’)
 */
SpotifyDOM.prototype.html = function(content) {
  var replacedContent = document.createElement('div');
  replacedContent.innerHTML = content;
  this.elements[this.currentElement].parentNode.replaceChild(
    replacedContent,
    this.elements[this.currentElement]
  );
};

/**
 * Applies the callback to every element of the collection, the callback will
 * receive the current SpotifyDOM object of the iteration.
 *
 *  e.g. SpotifyDOM(‘li’).each(function(element) { element.html(‘test’); });
 *
 * @method each
 * @param {Function} callback
 * @return {SpotifyDOM}
 */
SpotifyDOM.prototype.each = function(callback) {
  for (var i=0; i < this.elements.length; i++) {
    this.currentElement = i;
    callback(this);
  }
};

/**
 * @method isCollection
 * @return {Boolean} true if the currently selected element is a collection(e.g. ‘li’).
 */
SpotifyDOM.prototype.isCollection = function() {
  return this.selector[0] !== '.' && this.selector[0] !== '#';
};

// Change the content of all the elements that are div's
var dom = new SpotifyDOM('div');
dom.each(function(content) { content.html('test'); });
