document.addEventListener("DOMContentLoaded", (event) => {
  function fetchData() {
    fetch("/api/sensor-data")
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("temperature").innerText = data.temperature;
        document.getElementById("humidity").innerText = data.humidity;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  // Fetch data when the page loads
  fetchData();

  // Fetch data every minute
  setInterval(fetchData, 60000);
});
