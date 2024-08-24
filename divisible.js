function is_divisible(divisor, dividend) {
  if(divisor % dividend === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(is_divisible(45, 5)); //true
console.log(is_divisible(13, 5)); //false