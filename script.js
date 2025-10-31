const districtData = {
  khordha: { workers: 12430, expenditure: "₹4.8 Cr", works: 230, month: "September 2025" },
  cuttack: { workers: 15420, expenditure: "₹5.6 Cr", works: 310, month: "September 2025" },
  puri: { workers: 10210, expenditure: "₹3.9 Cr", works: 190, month: "September 2025" }
};

document.getElementById("viewData").addEventListener("click", () => {
  const district = document.getElementById("district").value;
  const dataSection = document.getElementById("dataSection");

  if (!district) {
    alert("Please select a district.");
    return;
  }

  const data = districtData[district];
  document.getElementById("workers").textContent = data.workers;
  document.getElementById("expenditure").textContent = data.expenditure;
  document.getElementById("works").textContent = data.works;
  document.getElementById("month").textContent = data.month;

  dataSection.classList.remove("hidden");
  showChart(district);
});

function showChart(district) {
  const ctx = document.getElementById("chart").getContext("2d");

  const sampleData = {
    khordha: [4.2, 4.4, 4.5, 4.6, 4.8],
    cuttack: [5.0, 5.2, 5.3, 5.5, 5.6],
    puri: [3.2, 3.5, 3.6, 3.8, 3.9]
  };

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["May", "June", "July", "August", "September"],
      datasets: [{
        label: "Monthly Expenditure (in Cr)",
        data: sampleData[district],
        backgroundColor: "#f77f00"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        title: {
          display: true,
          text: "Expenditure Trend (Last 5 Months)"
        }
      }
    }
  });
}
