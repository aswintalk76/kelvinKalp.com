// 3. Right Triangle Pattern in Javascript
/*
    *
   **
  ***
 ****
*****
*/
function checkRightTrianglePattern(number) {
    for (let i = 1; i <= number; i++) {
        let aswin = '';
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                aswin += ' ';
            } else {
                /*
                i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
                j=5,4,5,3,4,5,2,3,4,5,1,2,3,4,5
                */
                aswin += j;
            }
        }
        console.log(aswin);
    }
}
checkRightTrianglePattern(5);