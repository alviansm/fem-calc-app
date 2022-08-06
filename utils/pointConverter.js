// pointConverter(1000) return 1,000

function pointConverter(value) {
  // Function to add point every 3 digit
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

export default pointConverter;
