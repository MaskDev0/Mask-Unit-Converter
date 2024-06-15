const inputEl = document.getElementById("input-el")
const convertBtn = document.getElementById("convert-btn");
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")
const err = document.getElementById("error")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function metreFeet() {
  let metricNo = Number(inputEl.value)
  let rareGex = /^[A-Za-z]+$/;
  let feetCalc = (metricNo * 3.281).toFixed(3)
  let metreCalc = (metricNo / 3.281).toFixed(3)
  if (inputEl.value.match(rareGex) || metricNo === null || metricNo === 0) {
    error.textContent = "Put a significant Value Please"
  } else {
    lengthEl.textContent = `${inputEl.value} metres = ${feetCalc} feet | ${inputEl.value} feet = 
  ${metreCalc} metres`
  }

}
function litreGallon() {
  let metricNo = Number(inputEl.value)
  let rareGex = /^[A-Za-z]+$/;
  let litreCalc = (metricNo * 0.264).toFixed(3)
  let gallonCalc = (metricNo / 0.264).toFixed(3)
  if (inputEl.value.match(rareGex) || metricNo === null || metricNo === 0) {
    error.textContent = "Put a significant Value Please"
  } else {
    volumeEl.textContent = `${inputEl.value} litres = ${litreCalc} gallons | ${inputEl.value} gallon = 
  ${gallonCalc} litres`
  }
}
function kiloPounds() {
  let metricNo = Number(inputEl.value)
  let rareGex = /^[A-Za-z]+$/;
  let massCalc = (metricNo * 2.204).toFixed(3)
  let poundCalc = (metricNo / 2.204).toFixed(3)
  if (inputEl.value.match(rareGex) || metricNo === null || metricNo === 0) {
    error.textContent = "Put the correct value Please"
  } else {
    massEl.textContent = `${inputEl.value} kilos = ${massCalc} pounds | ${inputEl.value} pounds = 
  ${poundCalc} kilos`
  }
}
convertBtn.addEventListener("click", function () {
  metreFeet()
  litreGallon()
  kiloPounds()
})
