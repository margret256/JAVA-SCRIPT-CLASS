const data = [
  { name: "Alice", age: 25, city: "Kampala" },
  { name: "Bob", age: 30, city: "Entebbe" },
  { name: "Carol", age: 22, city: "Jinja" },
  { name: "David", age: 28, city: "Mbarara" },
  { name: "Eve", age: 35, city: "Gulu" },
  { name: "Frank", age: 29, city: "Mbale" },
  { name: "Grace", age: 24, city: "Fort Portal" },
  { name: "Henry", age: 40, city: "Soroti" },
];

let currentPage = 1;
const rowsPerPage = 3;

function renderTable(page, filteredData = data) {
  const tbody = document.querySelector("#myTable tbody");
  tbody.innerHTML = "";

  let start = (page - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  let paginatedData = filteredData.slice(start, end);

  paginatedData.forEach((row) => {
    let tr = `<tr>
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.city}</td>
    </tr>`;
    tbody.innerHTML += tr;
  });

  renderPagination(filteredData);
}

function renderPagination(filteredData) {
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";

  let pageCount = Math.ceil(filteredData.length / rowsPerPage);
  for (let i = 1; i <= pageCount; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.onclick = function () {
      currentPage = i;
      renderTable(currentPage, filteredData);
    };
    pagination.appendChild(btn);
  }
}

// Search feature
document.getElementById("searchInput").addEventListener("input", function () {
  let searchTerm = this.value.toLowerCase();
  let filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm) ||
      item.city.toLowerCase().includes(searchTerm) ||
      item.age.toString().includes(searchTerm)
  );
  currentPage = 1;
  renderTable(currentPage, filteredData);
});

renderTable(currentPage);

// Pagination controls
const orderform = document.getElementById("orderform");
orderform.style.backgroundColor ="pink";


const furniture = document.getElementById("furniture");
const customer = document.getElementById("customer");
const total =document.getElementById("total");
const calcBtn =document.getElementById("orderBtn");

// function updateTotal(){
//    const price = Number(document.getElementById("price").value);
//    const quantity = Number(document.getElementById("quantity").value);

//    const cost = price * quantity;
   
//    total.textContent =Total: UGX ${cost.toLocaleString()};
// }

function finishOrder(){
    window.alert("You have passed over me!");
}

quantity.addEventListener("input", updateTotal);
price.addEventListener("input",updateTotal);
placeOrder.addEventListener("mouseover",finishOrder);