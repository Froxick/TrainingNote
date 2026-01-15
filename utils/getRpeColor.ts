export const getRpeColor = (rpe: number) => {
   if(rpe <= 10 && rpe > 8) {
    return '#d41a1a'
   } if(rpe <= 8 && rpe > 7) {
    return '#c66728'
   } if(rpe <= 7 && rpe > 5) {
    return '#c8b721'
   } if(rpe <=5 ) {
    return '#21ca43'
   }
}