/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  const hourInString = time.split(":")
  const parseHours = parseInt(hourInString);
  // console.log(parseHours)

  if (parseHours < 12) {
    return displayMessage("Good Morning");
  } else if (parseHours >= 12 && parseHours <= 17) {
    return displayMessage("Good Afternoon");
  } else {
    return displayMessage("Good Evening");
  }
}


/* Write your implementation of displayMessage() */

function displayMessage(message) {
  const greeting = document.querySelector('#greeting')
  greeting.innerText = message;
  return message;
}