function revertcol() {
  document.getElementById("bookmark_icon").style.background =
    "hsl(180, 4%, 32%)";
    document.getElementById("bookmarkCont").style.width = "150px";
  document.getElementById("bookmarkCont").style.background = "grey";
}
//-------------------------------event listener-----------

document.getElementById("cont1").addEventListener("click", openup);

function myFunction() {
  document.getElementById("popup2").style.display = "none";
  document.getElementById("popup1").style.display = "flex";
}

function openup() {
  var currentVal = document.getElementById("amount1").value;
  var defaultVal = document.getElementById("amount1").defaultValue;

  if (currentVal == defaultVal) {
    alert("You have not entered donation amount.");
  } else if (currentVal > 74) {
    alert("You have execeded donation amount.");
  } else {
    myFunction();
  }
}
function openup1() {
  var currentVals = document.getElementById("amount2").value;
  var defaultVals = document.getElementById("amount2").defaultValue;

  if (currentVals == defaultVals) {
    alert("You have not entered donation amount.");
  } else if (currentVals > 199) {
    alert("You have execeded exited donation amount.");
  } else {
    myFunction();
  }
}

//-------------------------------event listener-----------

function closeup() {
  document.getElementById("popupScreen").style.display = "none";
}
function openup2() {
  document.getElementById("popupScreen").style.display = "flex";
  document.getElementById("popup2").style.display = "flex";
  document.getElementById("popup1").style.display = "none";
}
// code for popup2

const radioButtons = document.querySelectorAll('input[name="radio"]');
for (const radioButton of radioButtons) {
  if (radioButton.checked) {
    selectedSize = radioButton.value;
    break;
  }
}

function reveal1() {
  document.getElementById("pledge_fill1").style.display = "flex";
  document.getElementById("btp_div1").style.borderColor = "hsl(176, 50%, 47%)";
  document.getElementById("btp_div2").style.borderColor = "rgb(194, 194, 194)";
  document.getElementById("btp_div3").style.borderColor = "";
  document.getElementById("pledge_fill2").style.display = "none";
}
function reveal2() {
  document.getElementById("btp_div2").style.borderColor = "hsl(176, 50%, 47%)";
  document.getElementById("btp_div1").style.borderColor = "rgb(194, 194, 194)";
  document.getElementById("btp_div3").style.borderColor = "";
  document.getElementById("pledge_fill1").style.display = "none";
  document.getElementById("pledge_fill2").style.display = "flex";
}
function reveal3() {
  document.getElementById("pledge_fill1").style.display = "none";
  document.getElementById("pledge_fill2").style.display = "none";
  document.getElementById("btp_div2").style.borderColor = "";
  document.getElementById("btp_div1").style.borderColor = "";
  document.getElementById("btp_div3").style.borderColor =
    "rgba(4, 153, 153, 0.628)";
  myFunction();
}

function change(){
  document
    .getElementById("bookmark_icon")
    .addEventListener("click", changecol());

  function changecol() {
    document.getElementById("bookmark_icon").style.background =
      "hsl(176, 72%, 28%)";
    document.getElementById("bookmarkCont").style.background =
      "rgba(4, 153, 153, 0.628)";
      document.getElementById("bookmarkCont").style.width =
        "200px";
  }

}



