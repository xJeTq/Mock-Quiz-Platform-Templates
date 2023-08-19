document.getElementById("next-btn").addEventListener("click", function () {

    var input1 = document.getElementById("ans1");
    var input2 = document.getElementById("ans2");
    var input3 = document.getElementById("ans3");

    console.log("Response #1: ", input1);
    console.log("Response #2: ", input2);
    console.log("Response #3: ", input3);

    window.location = "response-recorded.html";

});