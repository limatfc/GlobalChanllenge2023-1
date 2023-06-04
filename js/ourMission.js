const africaData = document.getElementById("africa");
const latinAmericaData = document.getElementById("latin-america-and-caribe");
const asiaData = document.getElementById("asia");
const oceaniaData = document.getElementById("oceania");
const northAmericaData = document.getElementById("north-america-and-europe");
const globalAverageaData = document.getElementById("global-average");
const lastText = document.getElementById("last-text");

function displayAfricaData() {
  africaData.style.display = "flex";
  latinAmericaData.style.display = "none";
  asiaData.style.display = "none";
  oceaniaData.style.display = "none";
  northAmericaData.style.display = "none";
  globalAverageaData.style.display = "none";
  lastText.style.display = "block";
}

function displayLatinAmericaData() {
  africaData.style.display = "none";
  latinAmericaData.style.display = "flex";
  asiaData.style.display = "none";
  oceaniaData.style.display = "none";
  northAmericaData.style.display = "none";
  globalAverageaData.style.display = "none";
  lastText.style.display = "block";
}

function displayAsiaData() {
  africaData.style.display = "none";
  latinAmericaData.style.display = "none";
  asiaData.style.display = "flex";
  oceaniaData.style.display = "none";
  northAmericaData.style.display = "none";
  globalAverageaData.style.display = "none";
  lastText.style.display = "block";
}

function displayOceaniaData() {
  africaData.style.display = "none";
  latinAmericaData.style.display = "none";
  asiaData.style.display = "none";
  oceaniaData.style.display = "flex";
  northAmericaData.style.display = "none";
  globalAverageaData.style.display = "none";
  lastText.style.display = "block";
}

function displayNorthAmericaData() {
  africaData.style.display = "none";
  latinAmericaData.style.display = "none";
  asiaData.style.display = "none";
  oceaniaData.style.display = "none";
  northAmericaData.style.display = "flex";
  globalAverageaData.style.display = "none";
  lastText.style.display = "block";
}

function displayGlobalAverageData() {
  africaData.style.display = "none";
  latinAmericaData.style.display = "none";
  asiaData.style.display = "none";
  oceaniaData.style.display = "none";
  northAmericaData.style.display = "none";
  globalAverageaData.style.display = "flex";
  lastText.style.display = "block";
}
