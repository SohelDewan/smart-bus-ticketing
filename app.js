const allBtn = document.getElementsByClassName("seat-btn");
// console.log(allBtn);

let count = 0;
let seatLeft = 40;
for (let btn of allBtn) {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    count = count + 1;
    seatLeft = seatLeft - 1;
    // document.getElementById('seat-count').innerText = count;
    setInnerText("seat-count", count);
    // document.getElementById('seat-left').innerText = seatLeft;
    setInnerText("seat-left", seatLeft);
    console.log(e.target.parentNode.childNodes[3].innerText);
    const btnName = e.target.parentNode.childNodes[3].innerText;
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
