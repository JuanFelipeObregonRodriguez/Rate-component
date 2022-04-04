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
   `<div id="feedbackCard" id="feedback">

  <img src="./src/assets/illustration-thank-you.svg" alt="">
  <div class="vote-bage">
    you selected ${selectedRating} out of 5
  </div>
  <div class="text">
    <h2> Thank you!</h2>
    <p> We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch! </p>
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




