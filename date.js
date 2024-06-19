function displayDate() {
  const dateElement = document.getElementById("date");
  const currentDate = new Date();

  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  dateElement.textContent = formattedDate;
}
