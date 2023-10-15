//5. Downward Triangle Star Pattern
/*
*****
****
***
**
*
*/
function checkDownwardRightTrianglePattern(number) {
    for (let i = number; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            /*
            i=5,5,5,5,5,4,4,4,4,3,3,3,2,2,1
            j=1,2,3,4,5,1,2,3,4,1,2,3,1,2,1
            */
            stars += "*"
        }
        console.log(stars)
    }
}
checkDownwardTrianglePattern(5)