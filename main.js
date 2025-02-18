document.addEventListener("DOMContentLoaded", function() {
    const btns = document.querySelectorAll(".btn-primary");
    
    btns.forEach(btn => {
        btn.addEventListener("click", function() {
            alert("Você clicou no projeto!");
        });
    });
});
