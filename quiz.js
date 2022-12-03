let myQuestions = [
    {
      question: "which is the middle name of John?",
      answers: {
        a: 'Jax',
        b: 'Clayton',
        c: 'Quinn'
      },
      correctAnswer: 'b'
    },
    {
      question: "Which is the song name playing in the hoem page background?",
      answers: {
        a: 'Waiting on the world to change',
        b: 'Gravity',
        c: 'Slow dancing in the burning room'
      },
      correctAnswer: 'c'
    },
    {
      question: "Which is the name of the music school that John graduated from?",
      answers: {
        a: 'Los Angeles Music Academy College of Music',
        b: 'Berklee College of Music',
        c: 'None of above'
      },
      correctAnswer: 'c'
    },
    {
      question: "who is the main influence inspired John to play guitar?",
      answers: {
        a: 'Stevie Ray Vaughan',
        b: 'B.B King',
        c: 'Jimi Hendrix'
      },
      correctAnswer: 'a'
    },
    {
      question: "Which is the must-have guitar pedal that John included everytime?",
      answers: {
        a: 'Ibanez TS10 Tube Screamer',
        b: 'Klon Centaur overdrive',
        c: 'Electro Harmonix Q-TRON Plus'
      },
      correctAnswer: 'a'
    }
  ];

  var quizContainer = document.getElementById('quiz');
  let count = document.querySelectorAll(".accordion-body");
  var resultsContainer = document.getElementById('results');
  var submitButton = document.getElementById('submit');

  generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

  function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
      // we'll need a place to store the output and the answer choices
      var output = [];
      var answers;

      // for each question...
      for(let i=0; i<questions.length; i++){

        // first reset the list of answers
        answers = [];

        // for each available answer...
        for(letter in questions[i].answers){
          for (let j in count){
            if (j == i){
              answers.push(
            '<label>'
            // ...add an html radio button
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + letter + ': '
              + questions[i].answers[letter]
            + '</label>'
          );
          // add this question and its answers to the output
            output.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
          );

            }
          }
          // finally combine our output list into one string of html and put it on the page
          count[i].innerHTML = output.join('');
          // reset output for each question from i loop
          output=[]
        }
      }
    }


    function showResults(questions, quizContainer, resultsContainer){

      // gather answer containers from our quiz
      var answerContainers = document.querySelectorAll('.answers');
      //console.log(answerContainers)
      // keep track of user's answers
      var userAnswer = '';
      var numCorrect = 0;

      // for each question...
      for(var i=0; i<questions.length; i++){

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        //console.log(userAnswer)


        // if answer is correct
        if(userAnswer===questions[i].correctAnswer){
          // add to the number of correct answers
          numCorrect++;

          // color the answers green
          answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[i].style.color = 'red';
        }
      }

      // show number of correct answers out of total
      resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // show questions right away
    showQuestions(questions, quizContainer);

    // on submit, show results
    submitButton.onclick = function(){
      showResults(questions, quizContainer, resultsContainer);
    }

  }