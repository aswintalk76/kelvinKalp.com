// 4. Left Triangle Pattern in Javascript
/*
*
**
***
****
*****
*/

function checkLeftTrianglePattern(number) {
    for (let i = 1; i <= number; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            /*
            i=1,2,2,3,3,3,4,4,4,4,5,5,5,5,5
            j=1,1,2,1,2,3,1,2,3,4,1,2,3,4,5
            */
            stars += "*"
        }
        console.log(stars)
    }
}
checkLeftTrianglePattern(5)