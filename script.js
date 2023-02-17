let serial=0;
function productPrice(price,quantity){
    const priceProduct=parseInt(price);
    const quantityProduct=parseInt(quantity)
    return priceProduct*quantityProduct;
}
function getElementInnerNumber(id){
   const element= document.getElementById(id);
   return parseInt(element.innerText)
}
function setElementInnerText(id,value){
    document.getElementById(id).innerText=value;
}
function removeItem(button){
    const row=button.parentNode.parentNode;
    const price=row.childNodes[9].innerText;
    row.parentNode.removeChild(row);
    serial--;
    setElementInnerText('total-product',serial)
    const previousPrice=getElementInnerNumber('total-amount')
    setElementInnerText('total-amount',previousPrice-price)
}
const buttons=document.querySelectorAll('.btn-shop');
buttons.forEach(button => {
    button.addEventListener('click',function(e){
        serial++
        const card=e.target.parentNode.parentNode.childNodes;
        const productName=card[1].innerText;
        const price=card[5].firstElementChild.innerText;
        const quantity=card[7].firstElementChild.innerText;
        const total=productPrice(price,quantity);
        const totalAmount=parseInt(total);
        const tableContainer=document.getElementById('table-container');
        const tr=document.createElement('tr')
        tr.innerHTML=`
        <tr>
        <td>${serial}</td>
        <td>${productName}</td>
        <td>${price}</td>
        <td>${quantity}</td>
        <td>${total}</td>
        <td><button class="btn btn-primary" onclick="removeItem(this)">Remove</button></td>
      </tr>
        `
        tableContainer.appendChild(tr);
        setElementInnerText('total-product',serial)
        const totalPriceAmount=getElementInnerNumber('total-amount')
        setElementInnerText('total-amount',totalAmount+totalPriceAmount)
    })
});
document.getElementById('btn-clear').addEventListener('click',function(){
    serial=0;
    setElementInnerText('total-amount',00);
    setElementInnerText('total-product',00);
    const tableContainer=document.getElementById('table-container');
    tableContainer.innerHTML='';
})