document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('stopButton').addEventListener('click', () => illuminate('stopLight', 'red'));
  document.getElementById('slowButton').addEventListener('click', () => illuminate('slowLight', 'yellow'));
  document.getElementById('goButton').addEventListener('click', () => illuminate('goLight', 'green'));
  document.getElementById('clearBtn').addEventListener('click', clearLights);

  function illuminate(lightId, color) {
      clearLights();
      document.getElementById(lightId).style.backgroundColor = color;
  }

  function clearLights() {
      ['stopLight', 'slowLight', 'goLight'].forEach(lightId => {
          document.getElementById(lightId).style.backgroundColor = 'black';
      });
  }
});



