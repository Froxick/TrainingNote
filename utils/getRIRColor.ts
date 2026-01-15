export const getRIRColor = (rir: number) => {
   if(rir >= 5) {
    return '#21ca43'
   } if(rir < 5 && rir > 3) {
    return '#bec628'
   } if(rir <=3 && rir > 1) {
    return '#c88221'
   } if(rir <=1 ) {
    return '#ca2f21'
   }
}