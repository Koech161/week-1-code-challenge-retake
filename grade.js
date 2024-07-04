function calculateGrade(){
    let marks = parseFloat(prompt('Input your marks (0-100):'));
    if(!isNaN(marks) && marks<0 &&marks>100 ){
         alert('invalid input, enter number(0-100)');
         return;
        }

let grade;
if(marks>79 && marks<=100){
    grade= 'A';
}else if(marks>=60 && marks<=79){
    grade='B';
}else if( marks>=50 && marks<=59){
    grade='C';
}else if(marks>=40 && marks<=49){
    grade='D';
}else if(marks<40){
    grade='E';
}    
    alert(`The students grade for marks ${marks} is: ${grade}`);
} calculateGrade();