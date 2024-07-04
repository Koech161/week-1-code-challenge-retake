function calculateGrossSalary(basicSalary, benefits){
    const grossSalary= basicSalary + benefits
    return grossSalary;
}
function calculatePayeeTax(grossSalary){
    const payeeTaxRate=0.1
    const payeeTax= grossSalary*payeeTaxRate
    return payeeTax;
}
function calculateNHIFDeduction(grossSalary){
    const NHIFRate=0.0275
    const NHIFDeduction=grossSalary*NHIFRate
    return NHIFDeduction;
}
function calculateNSSFDeduction(grossSalary){
    const NSSFRate=0.06
    const NSSFDeduction=grossSalary*NSSFRate
    return NSSFDeduction;
}
function calculateNetSalary(basicSalary, benefits){
    const grossSalary=calculateGrossSalary(basicSalary, benefits)
    const payeeTax=calculatePayeeTax(grossSalary)
    const NHIFDeduction=calculateNHIFDeduction(grossSalary)
    const NSSFDeduction=calculateNSSFDeduction(grossSalary)
    const netSalary=grossSalary-payeeTax-NHIFDeduction-NSSFDeduction 
    return netSalary;
}
//prompt
const basicSalary=parseFloat(prompt('enter your basic salary:'))
const benefits=parseFloat(prompt('enter your benefits:'))
//net salary calculation
const netSalary=calculateNetSalary(basicSalary, benefits)
alert(`netSalary:${netSalary}`)