const allBtn = document.getElementsByClassName("seat-btn");
// console.log(allBtn);

let count = 0;
let seatLeft = 40;
for (let btn of allBtn) {
  // console.log(btn);
  btn.addEventListener("click", (e) => {
    count = count + 1;
    seatLeft = seatLeft - 1;
    document.getElementById('seat-count').innerText = count;
    document.getElementById('seat-left').innerText = seatLeft;
  });
}
