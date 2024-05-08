const time = prompt("How much hours do you want to convert to seconds?", "");
function convertHoursToSeconds(hours) {
  return hours * 60 * 60;
}

const hours = time;
const seconds = convertHoursToSeconds(hours);
console.log("Seconds:", seconds);
let result = alert(hours + " " + "hours is" + " " + seconds + " " + "seconds");
