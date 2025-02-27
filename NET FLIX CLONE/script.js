 
 
 

var coll = document.getElementsByClassName("collapsible");
    var content;

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            // Close all open collapsibles
            for (var j = 0; j < coll.length; j++) {
                if (coll[j] !== this) {
                    coll[j].classList.remove("active");
                    coll[j].nextElementSibling.style.display = "none";
                    coll[j].querySelector(".icon").textContent = "+";
                }
            }
            
            // Toggle the clicked collapsible
            this.classList.toggle("active");
            content = this.nextElementSibling;
            var icon = this.querySelector(".icon");
            
            if (content.style.display === "block") {
                content.style.display = "none";
                icon.textContent = "+"; // Reset icon to "+"
            } else {
                content.style.display = "block";
                icon.textContent = "+"; // Change icon to "+"
            }
        });
    }