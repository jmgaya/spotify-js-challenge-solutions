/**
 * Disclaimer: This fragment of code forms part of a code challenge,
 * it contains INTENTIONALLY bugs/problems that you need to identify.
 *
 * @see https://github.com/spotify/spotify-js-challenge
 */
var Spotify = Spotify || {};

/**
 * @class Spotify.Math
 */
Spotify = (function(namespace) {

    namespace.Math = {

        /**
         * Counts the number of zeros in a number passed a parameter.
         *
         * @param {Number} number
         * @method countZeros
         * @return {Number}
         */
        countZeros: function(number) {
            return ((number + "").length - (number + "").replace(/0/g, "").length);
        }

    };

    return namespace;

})(Spotify);

// Tests
console.log(Spotify.Math.countZeros(1000) === 3); // => true
console.log(Spotify.Math.countZeros(1100) === 2); // => true
console.log(Spotify.Math.countZeros(9999) === 0); // => true
console.log(Spotify.Math.countZeros(1000000) === 6); // => true
console.log(Spotify.Math.countZeros(111111111111111111111) === 0); // => false, why ??

// Solution
console.log('Number.isSafeInteger() method determines whether the provided value is a number that is a safe integer.');
console.log('A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number,and');
console.log('whose IEEE-754 representation cannot be the result of rounding any other integer to fit the IEEE-754 representation.');

console.log(Number.isSafeInteger(1000)); // => true
console.log(Number.isSafeInteger(1100)); // => true
console.log(Number.isSafeInteger(9999)); // => true
console.log(Number.isSafeInteger(1000000)); // => true
console.log(Number.isSafeInteger(111111111111111111111)); // => false
