// 2. Hollow Square Pattern
/*
*****
*   *
*   *
*   *
*****

solution ::
*/

function checkHollowSquarePattern(number) {
    for (i = 1; i <= number; i++) {
        let aswin = '';
        for (j = 1; j <= number; j++) {
            if (j === 1 || i === 1 || i === number || j === number) {
                /*
                i=1,1,1,1,1,2,2,3,3,4,4,5,5,5,5,5
                j=1,2,3,4,5,1,5,1,5,1,5,1,2,3,4,5
                */
                aswin += '*'
            }
            else {
                aswin += ' '
            }
        }
        console.log(aswin)
    }
}
checkHollowSquarePattern(5)