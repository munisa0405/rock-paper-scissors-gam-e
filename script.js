// Get to DOM elements
const gameContainer = document.querySelector(".container"),
usmonResult = document.querySelector(".usmon_result img"),
solihaResult = document.querySelector(".soliha_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

// Loop through each option image element
optionImages.forEach((Image, index) => {
    Image.addEventListener("click", (e) => {
    Image.classList.add("active");

    usmonResult.src = solihaResult.src = "images/rock.png"
    result.textContent = "Wait..."

    // Loop through each option image again
    optionImages.forEach((image2,index2) => {
        // If the current index doesn't match the clicked index
        // Remove the "active" class from the other option images
        index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        let time = setTimeout(() => {
         gameContainer.classList.remove("start");    

     // Get the source of the clicked option image
        let imageSrc = e.target.querySelector("img").src;
    // Set the usmon image to the clicked option image
        usmonResult.src = imageSrc;

        // Generate a random number between 0 and 2
        let randomNumber = Math.floor(Math.random() * 3);
       // Create an array of SOLIHA image options
       let solihaImages = ["images/rock.png", "images/paper.png", "images/scissors.png"];
       // Set the SOLIHA image to a random option from the array
       solihaResult.src = solihaImages[randomNumber];

      // Assign a letter value to the SOLIHA option (R for rock, P for paper, S for scissors)
      let solihaValue = ["R","P","S"][randomNumber]
      //Assign a letter value to the clicked option (based on index)
      let usmonValue = ["R","P","S"][index];
    
      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Draw",
        RP: "Soliha",
        RS: "Usmon",
        PP: "Draw",
        PR: "Usmon",
        PS: "Soliha",
        SS: "Draw",
        SR: "Soliha",
        SP: "Usmon",
      };

      // Look up the outcome value based on usmon and soliha options
      let outComeValue = outcomes[usmonValue + solihaValue];

      // Display the result
      result.textContent = outComeValue === "Draw" ? "Match Draw" : `${outComeValue} Won!!`;
      console.log(outComeValue);
      
        },2500)
    });
    });
