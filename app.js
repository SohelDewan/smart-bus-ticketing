const allBtn = document.getElementsByClassName("seat-btn");
// console.log(allBtn);

let count = 0;
let seatLeft = 40;
for (let btn of allBtn) {
//   console.log(btn);
  btn.addEventListener("click", (e) => {
    const btnLength = e.target.parentNode.childNodes.length;
    if(btnLength > 4) {    
        e.target.setAttribute('disabled', true);
    }
    count = count + 1;
    seatLeft = seatLeft - 1;
    // document.getElementById('seat-count').innerText = count;
    setInnerText("seat-count", count);
    // document.getElementById('seat-left').innerText = seatLeft;
    setInnerText("seat-left", seatLeft);
    console.log(e.target.innerText);
    const btnName = e.target.innerText;
    const price = 550;
    const ticketClass = 'Economy';
    const selectedContainer = document.getElementById('selected-place-container');
    const li = document.createElement('li');
    const p = document.createElement('li');
    p.innerText = btnName;
    const p2 = document.createElement('li');
    p2.innerText = ticketClass;
    const p3 = document.createElement('li');
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);
    selectedContainer.append(li);
    e.target.style.backgroundColor = "#1DD100";
    e.target.style.color = "#fff";
    const totalPrice = document.getElementById('total-cost').innerText;
    // document.getElementById('total-cost').innerHTML = convertedPrice + parseInt(price);
    const convertedPrice = parseInt(totalPrice);
    const sum = convertedPrice + parseInt(price);
    setInnerText("total-cost", sum);
     const grandTotalCost = document.getElementById('grand-total').innerText;
     const convertedGrandTotalCost = parseInt(grandTotalCost);
     const sum2 = convertedGrandTotalCost + price;
     setInnerText("grand-total", sum2);
  });
}

function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}

function setBackgroundColor(e) {
    const element = document.getElementById(e);
    element.classList.toggle("bg-green-400");
}

document.getElementById("next-btn").addEventListener('click', (e) => {
    removeElement('modal');
})
function removeElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}