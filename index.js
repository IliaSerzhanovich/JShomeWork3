/**
 * @param {string} str
 * @return {string}
 */
// function returns string without spaces from the beginning and from the end, and in upper letter register
const transformString = (str) => {
  // write your code herу
  return str.toUpperCase().trim() ;
};

/**
 * @param {number[]} array
 * @return {number}
 */
// function should return max number from array
const findMaxNumber = (array) => {
  return array .length === 0 ?  NaN : Math.max (...array);
};


/**
 * @param {string} str
 * @return {number[]}
 */
// function returns array of length of every word in string
const getStringWordsLength = (str) => {
  // write your code here
  const strSplit = str.split(', ');
  const strRes = strSplit.map(el => el.length);
  return str ===''? [] : strRes;
};

/**
 * @param {number[]} numArray
 * @param {number} degree
 * @return {number[]}
 */
// function returns array of numbers as result of initial number and degree
const getTransformedNumbers = (numArray, degree) => {
  // write you code here
  const res = numArray.map(el => Math.pow(el,degree));
  return numArray === 0 ? [] : res;
};

/**
 * @param {string} text
 * @return {string}
 */
// function returns text with all first letters at the beginning of sentence capitalized
const getTransformedText = (text) => {
  // write your code here
  return  text.split('. ')
.map(el => `${el[0].toUpperCase()}${el.slice(1)}`)
.join('. ')
};

/**
 * @param {any[]} array
 * @return {number[]}
 */
// function filters array and return only array of positive integers
const getPositiveIntegers = (array) => {
  // write your code here
  if (array === 0){
    return array;
} else {
  return array.filter(num => ( typeof num === 'number' &&  num < Infinity) && num > 0);
}
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {number}
 */
// functions return index of element in array
const getElementIndex = (array, value) => {
  // write your code here
  if(array.includes(value)){
    return array.indexOf(value);
  } else {
    return -1;
  }
};

/**
 * @param {any[]} array
 * @param {any} value
 * @return {any | null}
 */
// function returns item from array or undefined if item is not found
const getItem = (array, value) => {
  // write your code here
  if(array.includes(value)){
    return value;
  } else {
    return undefined;
  }
};

/**
 * @param {string[]} array
 * @param {string} word
 * @return {boolean}
 */
// function returns true if word is in every string in array and false if is not
const isWordInEveryArrayString = (array, word) => {
  // write your code here
  const newArr = array.map(el =>el.includes(word));
  const res = newArr.every(el => el===true);
  return newArr.length === 0 ? (false) : res;
};

/**
 * @param {number[]} array
 * @return {boolean}
 */
// function returns true if any number in array is negative
const isNegativeNumbersInArray = (array) => {
  // write your code here
  const res = array.find(el => el <0);
  if (res <0){
    return true;
  } else { 
    return false;
  }
};

/**
 * @param {number[]} array
 * @param {number} startPosition
 * @param {number} endPosition
 * @return {any[]}
 */
// function returns part of array from start to end (including end) positions
const returnArrayPart = (array, startPosition, endPosition) => {
  // write your code here
  const res =array.slice(startPosition,endPosition +1);
  return res;
};


module.exports = {
  transformString,
  findMaxNumber,
  getStringWordsLength,
  getTransformedNumbers,
  getTransformedText,
  getPositiveIntegers,
  getElementIndex,
  getItem,
  isWordInEveryArrayString,
  isNegativeNumbersInArray,
  returnArrayPart,
};
