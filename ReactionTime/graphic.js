const ctx = document.getElementById('myChart').getContext('2d');
if (localStorage.getItem('MediaReaction') === null) {
  localStorage.setItem('MediaReaction', '[]');}
  if (localStorage.getItem('CountReaction', '') === null) {
    localStorage.setItem('CountReaction', '[]');}
var mediaClick = JSON.parse(localStorage.getItem('MediaReaction'));
var mediaCount = JSON.parse(localStorage.getItem('CountReaction'));
var mediaCountLength = JSON.parse(localStorage.getItem('CountReaction')).length;
function createMediaReaction(){
  mediaCountLength = JSON.parse(localStorage.getItem('CountReaction')).length;
  mediaCount.push(mediaCountLength);
}


const data = {
    labels: mediaCount,
    datasets: [{
        lineTension: 0.3,
      label: 'Average',
      data: mediaClick,
      backgroundColor: [
        'rgb(0, 255, 255)'
      ],
      borderColor: [
        'rgb(0, 255, 255)',
      ],
      borderWidth: 1
    }]
  };

  // config 
  const config = {
    type: 'line',
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  // render init block
  const myChart = new Chart(
      document.getElementById('myChart'),
      config
      );
  myChart.update();
