let votes = [0, 0, 0, 0, 0];
let chart;

function initializeChart() {
  const ctx = document.getElementById("votesChart").getContext("2d");
  chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ["Socialistas", "Liberales", "Animalistas", "Centristas", "Ecologistas"],
      datasets: [{
        data: votes,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#D1B2FF", "#4CAF50"]
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      }
    }
  });
}

function vote(index) {
  votes[index]++;
  chart.update();
}

function reset() {
  votes = [0, 0, 0, 0, 0];
  chart.data.datasets[0].data = votes;
  chart.update();
}

window.onload = initializeChart;
