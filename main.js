function publishResult() {
    const kotlin = document.getElementById("kotlin").Value;
    const javascript = document.getElementById("javascript").Value;
    const python = document.getElementById("python").Value;
    const iot = document.getElementById("iot").Value;
    const dev = document.getElementById("dev").Value;
    const ui = document.getElementById("ui").Value;
    let total = parseFloat(kotlin) + parseFloat(javascript) + parseFloat(python) + parseFloat(iot) + parseFloat(dev) + parseFloat(ui);
    document.getElementById("sum").innerHTML = "The sum is :" + total;
    let percentage = (total * 100) / 600;
    document.getElementById("percentage").innerHTML = "The percentage is:" + percentage;
    if (percentage >= 90) {
        document.getElementById("grade").innerHTML = "You have passed in A+ Grade"
    } else if (percentage >= 80) {
        document.getElementById("grade").innerHTML = "You have passed in A Grade"

    } else if (percentage >= 70) {
        document.getElementById("grade").innerHTML = "You have passed in B+ Grade"
    } else if (percentage >= 60) {
        document.getElementById("grade").innerHTML = "You have passed in B Grade"
    } else if (percentage >= 50) {
        document.getElementById("grade").innerHTML = "You have passed in  C+ Grade"
    } else if (percentage >= 40) {
        document.getElementById("grade").innerHTML = "You have passed in C Grade"
    } else if (percentage >= 30) {
        document.getElementById("grade").innerHTML = "You have passed in D+ Grade"
    } else {
        document.getElementById("grade").innerHTML = "You have passed in D Grade"

    }
}