function calcSleepTime() {
  const fallAsleepTime = new Date();
  fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);
  console.log(
    "You will fall sleep at",
    fallAsleepTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    })
  );
  
   const wakeupTimesDiv = document.getElementById("wakeup-hours-div");
    wakeupTimesDiv.innerHTML = "";
  const wakeUpTime = new Date(fallAsleepTime);
  //const wakeUpTimes = [];
  for (let i = 1; i <= 6; i++) {
    wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
    const wakeUpTimeString = wakeUpTime.toLocaleTimeString("en-US", {
      timeStyle: "short",
    });
    // <div id = "cycle-1" class="cycle">12:15 AM </div>
    //const sleepCycleDiv = document.getElementById(`cycle-${i}`);
    const sleepCycleDiv = document.createElement("div");
    sleepCycleDiv.setAttribute("id", `cycle-${i}`);
    sleepCycleDiv.classList.add(`cycle`);
    sleepCycleDiv.textContent = wakeUpTimeString;
    //wakeUpTimes.push(wakeUpTimeString);

    wakeupTimesDiv.appendChild(sleepCycleDiv);
  }
  
  //console.log("Wake-up times:", wakeUpTimes.join(", "));
  
}

const calcBtn = document.getElementById("calc-btn"); // this doesn't work but document is not in this environment, it is only in the browser
calcBtn.onclick = calcSleepTime;