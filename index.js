// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sort by Length</h1>`;

/**
 * Given an array of strings, sort them in the order of increasing lengths.  If two strings have the same length, their relative order must be the same as in the initial array.
 *
 * Example: For inputArray = ["abc", "", "aaa", "a", "zz"]
 * the outputs should be:
 * sortByLength(inputArray) = ["", "a", "zz", "abc", "aaa"]
 */

function sortByLength(strs) {
  return strs.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['abc', '', 'aaa', 'a', 'zz']));
console.log(sortByLength(['way', 'card', 'burnt', 'cars', 'paw']));
