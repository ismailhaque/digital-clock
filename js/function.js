function fday(i) {
     if ( i == `0`) {
         return`SUNDAY`
     }else if ( i == `1` ) {
         return `MONDAY`
     }else if ( i == `2`) {
         return`TUESDAY`
     }else if ( i == `3` ) {
         return `WEDNESDAY`
     }else if ( i == `4`) {
         return`TUESDAY`
     }else if ( i == `5` ) {
         return `FRIDAY`
     }else if ( i == `6`) {
        return `SATURDAY`
    }
 }

function zerotime(time) {
     return time < 10 ? '0'+ time : time;
 }

