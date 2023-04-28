const panels = document.querySelectorAll(".panel");  /*bring all panels to panels*/ 

panels.forEach( panel =>{
    panel.addEventListener("click", () => {  /*adding evet with click*/

        removeActive();
        panel.classList.add("active");
    })
})

function removeActive(){
    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}