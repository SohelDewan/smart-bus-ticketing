const allBtn = document.getElementsByClassName("seat-btn");
let count = 0;
let seatLeft = 40;

for (let btn of allBtn) {
    btn.addEventListener("click", (e) => {
        if (count < 4) {
            count++;
            seatLeft--;
            setInnerText("seat-count", count);
            setInnerText("seat-left", seatLeft);

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
            const convertedPrice = parseInt(totalPrice);
            let sum = convertedPrice + parseInt(price);
            setInnerText("total-cost", sum);

            const grandTotalCost = document.getElementById('grand-total').innerText;
            const convertedGrandTotalCost = parseInt(grandTotalCost);
            let sum2 = convertedGrandTotalCost + price;
            setInnerText("grand-total", sum2);
        } else {
            // Disable further clicks after reaching the limit
            e.target.removeEventListener('click', handleButtonClick);
        }

        updateTotalCost(price);
        updateGrandTotal();
    
    });
}

function updateGrandTotal(status){
    const totalCost = updateValue('total-cost');
    if(status == undefined){
        // console.log("okay");
        document.getElementById('grand-total').innerText = totalCost;
    }else{
        // console.log("nokay");
        const couponCode = document.getElementById('coupon-code').value;
        if (couponCode == "NEW15") {
            // const discounted = totalCost * 0.2;
            // console.log(discounted);
            document.getElementById('grand-total').innerText = totalCost * 0.85;
        }else if (couponCode == "Couple 20") {
            // const discounted = totalCost * 0.2;
            // console.log(discounted);
            document.getElementById('grand-total').innerText = totalCost * 0.80;
        }
        else{
            alert("Please enter coupon code that is valid");
        }
    }
}

function updateTotalCost(value){
    // console.log(value);
    const totalCost = updateValue('total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById("total-cost").innerText = sum;
}

function updateValue(id){
    const price = document.getElementById(id).innerText;
    const convertedPrice = parseInt(price);
    return convertedPrice;
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
function addElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("hidden");
}