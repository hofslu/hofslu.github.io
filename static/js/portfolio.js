const day_counter_element = document.getElementById('day-counter');

function calculate_days_alife() {

    let birth_date = new Date("02/25/1997");
    let now = new Date();
    let time_differance = now.getTime() - birth_date.getTime();
    let days_alife = Math.ceil(time_differance / (1000 * 3600 * 24));
    return days_alife
}
day_counter_element.innerHTML = "days " + calculate_days_alife().toString();