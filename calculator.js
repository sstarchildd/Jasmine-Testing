window.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("calc-form");
    if (form) {
      setupIntialValues();
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        update();
      });
    }
  });
  
  function getCurrentUIValues() {
    return {
      loan: +(document.getElementById("loanAmount").value),
      term: +(document.getElementById("loanYears").value),
      rate: +(document.getElementById("loanRate").value),
    }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
    const values = { loan: 30000, term: 15, interest: 3.25 };
    const startAmount = document.getElementById("loanAmount");
    startAmount.value = values.loan;
    const startYears = document.getElementById("loanYears");
    startYears.value = values.term;
    const rates = document.getElementById("loanRate");
    rates.value = values.rate;
    update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
    const recentValues = getCurrentUIValues();
    updateMonthly(monthlyPayment(recentValues));
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment.  The output should be a string
  // that always has 2 decimal places.
  function monthlyPayment(values) {
    const monthlyCost = (values.rate / 100) / 12;
    const i = Math.floor(values.term * 12);
    return (
      (monthlyCost * values.loan) /
      (1 - Math.pow((1 + monthlyCost), -i))
    ).toFixed(2);
  }
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
    function updateMonthly(monthly) {
        const monthlyUI = document.getElementById("loanPayment");
        monthlyUI.innerText = "$" + monthly;
      }
    }