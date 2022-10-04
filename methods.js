const numbers = [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20];

// for (let i = numbers.length -1; i > 0; i--) {
//     if (numbers !== numbers){
//         console.log(numbers)
//     }
// }
function myArray(arr) {
    let even = ""
    let odd = ""
    while (even == true) {
      if (arr[even] %2) {
        odd = arr[even];
      }
      if(arr[numbers] != -2){
        even = arr[numbers];
            
      }
    }
    return odd;
    
  }
console.log(numbers)
console.log(myArray(numbers))