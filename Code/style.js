
 let sosButton = document.querySelector("#sos");
 let close = document.querySelector("#close");
 let sosConfirmation = document.querySelector(".sosConfirmation");

 sosButton.addEventListener("click", ()=> {
   sosConfirmation.style.display = "flex";
});

close.addEventListener("click", ()=> {
    sosConfirmation.style.display = "none";
});