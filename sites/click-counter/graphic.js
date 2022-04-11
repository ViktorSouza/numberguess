const ctx = document.getElementById('myChart').getContext('2d');
if (localStorage.getItem('Media') === null) {
  localStorage.setItem('Media', '[]');}
  if (localStorage.getItem('Contagem', '') === null) {
    localStorage.setItem('Contagem', '[]');}
var mediaClick = JSON.parse(localStorage.getItem('Media'));
var mediaCount = JSON.parse(localStorage.getItem('Contagem'));
var mediaCountLength = JSON.parse(localStorage.getItem('Contagem')).length;
function createMedia(){
  mediaCountLength = JSON.parse(localStorage.getItem('Contagem')).length;
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