document.addEventListener("DOMContentLoaded", function() {
    // Fetch data from the server
    fetchData();

    // Initialize charts
    const pieChart = new Chart(document.getElementById("pie-chart"), {
        type: "pie",
        data: {
            labels: ["Product A", "Product B", "Product C"],
            datasets: [{
                data: [30, 50, 20],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }]
        }
    });

    const barChart = new Chart(document.getElementById("bar-chart"), {
        type: "bar",
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [{
                label: "Sales",
                data: [100, 200, 150, 300, 250, 400],
                backgroundColor: "#36A2EB"
            }]
        }
    });

    // Handle modal interactions
    const modal = document.getElementById("withdraw-modal");
    const withdrawButton = document.getElementById("withdraw-button");
    const closeButton = document.querySelector(".close-button");

    withdrawButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Handle form submission
    const withdrawForm = document.getElementById("withdraw-form");
    withdrawForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const amount = document.getElementById("amount").value;
        alert(`Withdraw request submitted for $${amount}`);
        modal.style.display = "none";
    });
});

function fetchData() {
    // Simulate fetching data from the server
    document.getElementById("daily-profit").textContent = "$500.00";
    document.getElementById("monthly-profit").textContent = "$15,000.00";
    document.getElementById("sales-changes").textContent = "5%";
    document.getElementById("discount-losses").textContent = "$200.00";

    const topProductsList = document.getElementById("top-products-list");
    const topProducts = ["Product A", "Product B", "Product C"];
    topProducts.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = product;
        topProductsList.appendChild(listItem);
    });
}
