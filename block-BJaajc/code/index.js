
function getFullName(firstName, lastName){
  let fullName = firstName + lastName;
  return fullName;
}

function ispalindrome(str) {
  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
  }

  return true;
}

function getCircumfrence(radius) {
  let c = 2 * Math.PI * radius;
  return c;
}

  function getArea(base, height){
    return (base * height) / 2;
  }
  getArea(4, 6);
module.exports = getFullName;
module.exports = ispalindrome;


