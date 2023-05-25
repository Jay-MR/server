$(document).ready(function() {
    // Function to update the displayed values
    function updateValues(data) {
      $('#voltage1Value').text(data.voltage1);
      $('#voltage2Value').text(data.voltage2);
      $('#current1Value').text(data.current1);
      $('#current2Value').text(data.current2);
    }
  
    // Make a POST request to the server to get the initial values
    $.post('https://car-counter.onrender.com/api', function(data) {
      // Assuming the server responds with the initial values in JSON format
      updateValues(data);
    });
  
    // Continuously update the displayed values every few seconds
    setInterval(function() {
      $.post('https://car-counter.onrender.com/api', function(data) {
        updateValues(data);
      });
    }, 5000); // Change the interval (in milliseconds) according to your requirements
  });
  