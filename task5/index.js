
const createCalendar = () => {

    const month = document.getElementById("month");
    const year = document.getElementById("year");

    let mon = month.value - 1;
    let d = new Date(year.value, mon);

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    for (let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }

    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) {
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1);
    }

    if (getDay(d) != 0) {
      for (let i = getDay(d); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    const calendar = document.getElementById("calendar");
    calendar.innerHTML = table;
  }

  const getDay = (date) => {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }


  const button = document.getElementById("generate_button");
  button.addEventListener("click", createCalendar);