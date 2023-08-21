let totalCost = 0;
function getInput(target) {

   const selectedItem = document.getElementById('selected-items');
   const count = selectedItem.childElementCount
   const itemName = target.parentNode.querySelector('.card-title').innerText;

   const p = document.createElement('p');
   p.innerHTML =`${count+1}. ${itemName}` ;
   selectedItem.appendChild(p);

   const itemPrice = target.parentNode.querySelector('.card-description').innerText.split(' ')[0];
   totalCost = parseFloat(totalCost) + parseFloat(itemPrice)

   document.getElementById('total-price').innerText = totalCost.toFixed(2) + " Tk";
   disableButton();
   discountButton()

}

function disableButton() {
   const btnDIS = document.getElementById('make-purpose')
   if (totalCost > 0) {
      btnDIS.removeAttribute('disabled')
   }
   else {
      btnDIS.setAttribute('disabled', 'true')
   }

}

function discountButton() {
   const applyCode = document.getElementById('sell-btn')
   if (totalCost > 200) {
      applyCode.removeAttribute('disabled')
   }
   else {
      applyCode.setAttribute('disabled', 'true')
   }
} 

let discountValue = 0; 
document.getElementById('sell-btn').addEventListener('click', function() {
   const couponInput = document.getElementById('use-coupan');
   const discountItem = couponInput.value;
   

   if (discountItem === 'SELL200') { 
       discountValue = totalCost * 0.20; 
       document.getElementById('discounted-value').innerText = discountValue.toFixed(2) + " Tk";

       totalAll = totalCost - discountValue;
       document.getElementById('total-all').innerText = totalAll.toFixed(2) + " Tk"
   } else {
       alert('Please provide a valid coupon code');
   }
});

document.getElementById('gohome-btn').addEventListener('click', function(){
   window.location.href = 'index.html'
})