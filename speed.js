function speedCheck(speed){
    const speedLimit= 70;
    const kmPerDemerit=5;
    const maxDemeritPoint=12;
    if(speed<speedLimit){
        return 'Ok';
    }else{
        const excessSpeed=(speed - speedLimit);
        const demeritPoints=Math.floor(excessSpeed / kmPerDemerit);
        if(demeritPoints>maxDemeritPoint){
           return 'License suspendes.';
        }else{
            return `demeritpoint:${demeritPoints}`
         }
    }
}
function main(){
    let speed=parseFloat(prompt('enter speed in(km/hr):'));
    if(!isNaN(speed)){
        let result =speedCheck(speed)
        alert(result)
    }else{
        alert('Invalid, input car speed');
    }
}main();