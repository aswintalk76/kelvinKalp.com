
//5. Downward Left Triangle Star Pattern
/*
    *
   **
  ***
 ****
*****
*/
function checkDownwardLeftTrianglePattern(number) {
    for (let i = 1; i <= number; i++) {
        let stars = "";
        for (let j = 1; j <= number; j++) {
            if (j <= number - i) {
                stars += ' ';
            } else {
                stars += '*';
            }
            /*
            i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
            j=5,4,5,3,4,5,2,3,4,5,1,2,3,4,5
            */
        }
        console.log(stars)
    }
}
checkDownwardLeftTrianglePattern(5)