// Count the number of given answers
var correct_answers = 0;
var incorrect_answers = 0;

// stores the name of class of the question
var question_class_name = get_question_class_name();
var last_question_class_name = question_class_name;

// When "start-quiz" button is clicked:
$("button.start-quiz").on("click", function(){
  // 1) Stop displaying itself,  
  $(this).fadeOut();
  // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
  $(".submit-answer").hide();
  $(".answer-paragraph").hide();
  $(".next-question").hide();
  // 3)Displays the first question
  $(question_class_name).fadeIn();
  $(question_class_name).removeClass("hidden");

  clickAnswer();
});

// Add a pointer cursor when the user hover over an answer
$('.answers li').css('cursor', 'pointer');

// Creates the question class name
function get_question_class_name() {
  var number = correct_answers + incorrect_answers + 1;
  return ('.question-number-' + number.toString());
}


function clickAnswer() {
  $(question_class_name + ' li').on("click", function(e){

    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(question_class_name + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(question_class_name + ' .answers li').not(this).removeClass('clicked-answer');
    $(question_class_name + ' .answers li').not(this).find("span.hand-icon").hide();

    // 3) If the clicked li doesn't have the 'clicked-answer' class:
    if (!($(this).hasClass('clicked-answer'))) {
      // 3.1) The 'clicked-answer' is added and the hand pointing to the right is showed
      $(this).addClass('clicked-answer');
      $(this).find("span.hand-icon").show();
    } else {
      // 3.2) If already has the 'clicked-answer' class we remove that class, 
      // hide the icon and hide the submit-answer button
      $(this).removeClass('clicked-answer');
      $(this).find("span.hand-icon").hide(); 
      $('.submit-answer').hide();
    }

    submitAnswer();
  });
}

function submitAnswer() {
  //When the "submit-answer" button is clicked
  $(question_class_name + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(question_class_name + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(question_class_name + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(question_class_name + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(question_class_name + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(question_class_name + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(question_class_name + " span.correct-span").removeClass("hidden");
      correct_answers++;
      question_class_name = get_question_class_name();
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(question_class_name + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      question_class_name = get_question_class_name();
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();

    nextQuestion();
  });
}

function nextQuestion() {
  // When the "next-question" button is clicked
  $(".next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(last_question_class_name).slideUp();

    question_class_name = get_question_class_name();  

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(question_class_name).fadeIn();
    $(question_class_name).removeClass("hidden");

    clickAnswer();
  });
}

