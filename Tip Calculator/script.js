// range slider input 
const sliders = document.querySelectorAll("input[type='range']");
sliders.forEach(function(slider){
    slider.addEventListener("input",Tipcalculate);
});
// total bill counter
const billInput = document.getElementById("bill");
billInput.addEventListener("change",Tipcalculate);

function Tipcalculate(){ 
    // Enter bill Amount var
    let bill = parseFloat(billInput.value);
    // tip value 
    let tP = document.getElementById("tip").value;
    // no of people count
    let no = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);

    let tT = parseFloat((bill * (tP/100)).toFixed(2));
    let total = parseFloat((bill + tT).toFixed(2));

    let tipPerPerson = (tT / no).toFixed(2);
    let totalPerPerson = (total / no).toFixed(2);

    // print user input 
    document.getElementById("tip-amount").textContent = `\₹ ${tT}`;
    document.getElementById("total-amount").textContent = `\₹ ${total}`;
    
    document.getElementById("tip-percent").textContent = `${tP}%`;
    document.getElementById("num").textContent = no;

    document.getElementById("tip-per-person").textContent = `\₹ ${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `\₹ ${totalPerPerson}`;
}
Tipcalculate();