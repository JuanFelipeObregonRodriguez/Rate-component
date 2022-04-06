const numberButtons = document.querySelectorAll(".vote-btn");
const submitRatingBtn = document.getElementById("submitRatingBtn");
const bodyPrint = document.getElementById("body");
let selectedRating;

numberButtons.forEach((button)=>{
  button.addEventListener('click', ()=>{
    selectedRating = button.innerHTML;
  }
  )
});

const sumitted = ()=>{

  const htmlText =
   `
   <div class="containerID">
   <div id="feedbackCard" class="feedback">

  <img src="./src/assets/illustration-thank-you.svg" class="logoF"alt="">
  <div class="vote-bagde">
    <p>you selected ${selectedRating} out of 5</p>
  </div>
  <div class="textF">
    <h2> Thank you!</h2>
    <p> We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch! </p>
  </div>

</div>
</div>`

bodyPrint.innerHTML = htmlText;
};

submitRatingBtn.addEventListener('click', ()=>{
  if(selectedRating > 0){
    sumitted()
  }else{
    alert('please, choose something!');
    window.location.reload;
  }
})




