let celcius = document.getElementById('celcius')
let farenheight = document.getElementById('farenheight')

celcius.oninput = () => {
  let output = (parseFloat(celcius.value) * 9) / 5 + 32
  farenheight.value = parseFloat(output.toFixed(2))

  document.querySelector('.results').innerHTML = `Resulsts: ${farenheight.value} degrees farenheights`
}
farenheight.oninput = () => {
  let output = (parseFloat(farenheight.value) / 9) * 5 - 32
  celcius.value = parseFloat(output.toFixed(2))

  if (output >= 18) {
    document.querySelector('.results').innerHTML = `Resulsts: ${celcius.value} degrees celcius`
  }

}

var res = document.querySelector('.results')
console.log(res)