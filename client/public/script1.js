document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const totalAmountInput = document.getElementById('total-amount');
    const totalAmountInputHidden = document.getElementById('total-amount-input');
  
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        let totalAmount = 0;
  
        checkboxes.forEach(function(checkbox) {
          if (checkbox.checked) {
            const price = parseFloat(checkbox.value);
            totalAmount += price;
          }
        });
  
        totalAmountInput.value = totalAmount.toFixed(2);
        totalAmountInputHidden.value = totalAmount.toFixed(2);
   
    });
  });
 
});