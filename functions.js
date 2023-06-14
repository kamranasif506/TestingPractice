function stringLength(str) {
     if (str.length < 1) {
        throw new Error('String must not be empty');
      }
      if (str.length > 10) {
        throw new Error('String must not exceed 10 characters');
      }
      return str.length;
   
}
function reverseString(string) {
    return string.split('').reverse().join('');
  }
function capitalizeString(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = {
    stringLength,
    reverseString,
    capitalizeString
  };;