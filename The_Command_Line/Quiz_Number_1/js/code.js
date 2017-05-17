// Count the number of given answers
var correct_answers = 0;
var incorrect_answers = 0;

// When "start-quiz" button is clicked display question number 1
$("button.start-quiz").on("click", function(){
  // 1) Stop displaying itself,  
  $(this).fadeOut();
  // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
  $(".submit-answer").hide();
  $(".answer-paragraph").hide();
  $(".next-question").hide();
  // 3)Displays the first question
  $(".question-number-1").fadeIn();
  $(".question-number-1").removeClass("hidden");
});

$('.answers li').css('cursor', 'pointer');

$(".question-number-1" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-1" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-1" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-1" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-1" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-1" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-1" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-1" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-1" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-1" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-1" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-1" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-1" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-1").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-2").fadeIn();
    $(".question-number-2").removeClass("hidden");
  });

// ------------ QUESTION NUMBER 2 -------------


$(".question-number-2" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-2" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-2" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-2" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-2" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-2" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-2" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-2" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-2" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-2" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-2" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-2" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-2" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-2").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-3").fadeIn();
    $(".question-number-3").removeClass("hidden");
  });

// -------- QUESTION NUMBER 3 --------

$(".question-number-3" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-3" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-3" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-3" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-3" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-3" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-3" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-3" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-3" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-3" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-3" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-3" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-3" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-3").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-4").fadeIn();
    $(".question-number-4").removeClass("hidden");
  });

// QUESTION NUMBER 4

$(".question-number-4" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-4" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-4" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-4" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-4" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-4" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-4" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-4" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-4" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-4" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-4" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-4" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-4" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-4").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-5").fadeIn();
    $(".question-number-5").removeClass("hidden");
  });

  // ----------- QUESTION NUMBER 5 --------------

$(".question-number-5" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-5" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-5" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-5" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-5" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-5" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-5" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-5" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-5" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-5" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-5" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-5" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-5" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-5").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-6").fadeIn();
    $(".question-number-6").removeClass("hidden");
  });

// ------------ QUESTION NUMBER 6 ------------------

$(".question-number-6" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-6" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-6" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-6" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-6" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-6" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-6" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-6" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-6" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-6" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-6" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-6" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-6" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-6").slideUp();

    // 2) Hide the submit answer button, all of the answer paragraphs and the next question buttons
    $(".submit-answer").hide();
    $(".answer-paragraph").hide();
    $(".next-question").hide();
    // 3)Displays the first question
    $(".question-number-7").fadeIn();
    $(".question-number-7").removeClass("hidden");
  });

// QUESTION NUMBER 7

$(".question-number-7" + ' li').on("click", function(e){
    e.preventDefault();

    // 1) Displays the "submit answer" button and hides it if no answer is selected
    $(".question-number-7" + ' .submit-answer').show();
  
    // 2) Removes the 'clicked-answer' class and hides the hand poiting to the right
    $(".question-number-7" + ' .answers li').not(this).removeClass('clicked-answer');
    $(".question-number-7" + ' .answers li').not(this).find("span.hand-icon").hide();

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

});

//When the "submit-answer" button is clicked
  $(".question-number-7" + ' .submit-answer').on("click", function(){
    // Disable the button after being clicked
    $(this).prop('disabled', true);
    $(this).hide();

    // Disable the clicking of the current answers
    $(".question-number-7" + ' .answers li').off();

    // The "answer-paragraph" is displayed
    $(".question-number-7" + ' .answer-paragraph').fadeIn();

    // Add class to modify border colors of answers
    $(".question-number-7" + " li.wrong-answer").each(function(){
      $(this).addClass('css-wrong-answer')
    });

    $(".question-number-7" + " li.correct-answer").each(function(){
      $(this).addClass('css-correct-answer')
    });

    // If the answer is correct, add 1 to the correct_answers variable and update the correct/wrong-answers spans
    if($(".question-number-7" + ' .answers').find(".clicked-answer").hasClass("correct-answer")){
      $(".question-number-7" + " span.correct-span").removeClass("hidden");
      correct_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    } else {
      $(".question-number-7" + " span.wrong-span").removeClass("hidden");
      incorrect_answers++;
      $(".correct-answers-num").text(correct_answers);
      $(".wrong-answers-num").text(incorrect_answers);
    }

    // Show the "result-box" div after being clicked
    $(".results-box").fadeIn();
    $(".next-question").fadeIn();
  });

  // When the "next-question" button is clicked
  $(".question-number-7" + " .next-question").click(function(){
    // stop displaying this button
    $(this).fadeOut();

    $(".question-number-7").slideUp();


    alert("correct answers: " + correct_answers);
    alert("incorrect answers: " + incorrect_answers);
  });

