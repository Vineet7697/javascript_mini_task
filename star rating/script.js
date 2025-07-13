    
    
    function rateStar(num) {
      let stars = document.querySelectorAll(".star");
      for (let i = 0; i < stars.length; i++) {
        if (i < num) {
          stars[i].classList.add("active");
        } else {
          stars[i].classList.remove("active");
        }
      }
         document.querySelector("#count").innerText = `You rated: ${num} star `;
    }



