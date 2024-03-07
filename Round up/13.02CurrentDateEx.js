function displayCurrentDateAndTime() {
    var currentDate = new Date();
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    var day = daysOfWeek[currentDate.getDay()];
    var date = currentDate.getDate() + "." + (currentDate.getMonth() + 1) + "." + currentDate.getFullYear();
    var time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    
    var output =  `${day}<br> ${date} <br>${time}`;
    document.getElementById("answer").innerHTML = output;
}

displayCurrentDateAndTime();// todo