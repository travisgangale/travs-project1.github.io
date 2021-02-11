// All boxes with price and categories
//////////////////////////////////////



// Have to put all the words and prices in boxes now
///////////////////////////////////////////////////

// Was visually better to me to input divs individually html rather than forming with for loop
//////////////////////////////////////////////////////////


$(() => {
    // where the questions come from...
    const arrQuestion = ['I am used to make Guacamole', 'monkeys peel me backwards', 'I have cheese an im a triangle', 'I am usually falling from a tree and im round', 'I am usually made from cows']
// ANSWERS: What is an avocato?, What is a banana?, What is pizza?, What is a coconut?, What is steak?...
    const arrQuestion2 = ['Steps used to complete a task', 'The  act of going through an array over and over', 'programs need this when parameters are met', 'containers for storing values', 'A list of values or strings']
// ANSWERS: What is an algorithm?, What is looping?, What are conditionals?, What are variables?, What is an array?...
    const arrQuestion3 = ['6 x 7', '2 x 5 - 3', 'parenthesis, exponents, multiplication, division, addition, subtraction', '2 lines that run the same way but never touch', 'An angle more than 90 degrees but less than 180 degrees']
// ANSWERS: What is 42?, What is 7?, What is PEMDAS?, What are parallel lines?, What is an obtuse angle?...
    const arrQuestion4 = ['sailed the ocean blue in 1492', 'Freed the slaves in 1863', 'First president of the United States', 'Gave the U.S. the Statue of Liberty', 'Signed in 1776']
// ANSWERS: Who is Christopher Columbus?, Who is Abraham Lincoln?, Who is George Washington?, Who is France?, What is the Declaration of Independence?...
    const arrQuestion5 = ['_ is located in Washington, DC', '_ is located in New York City', 'This is The Sunshine State', 'This is The Empire State', 'Has the more tigers in captivity than all of the wild of the world']
// ANSWERS: Where is the pentagon?, Where is the Empire State Building?, What is Florida?, What is New York?, What is Texas?...


// what is being stored from the array
    // the id is the key
    // the question is the value

    const objFood = {
        'ten1': arrQuestion[0],
        'twenty1': arrQuestion[1],
        'thirty1': arrQuestion[2],
        'fourty1': arrQuestion[3],
        'fifty1': arrQuestion[4]
    }
    const objProgramming = {
        'ten2': arrQuestion2[0],
        'twenty2': arrQuestion2[1],
        'thirty2': arrQuestion2[2],
        'fourty2': arrQuestion2[3],
        'fifty2': arrQuestion2[4]
    }
    const objMath = {
        'ten3': arrQuestion3[0],
        'twenty3': arrQuestion3[1],
        'thirty3': arrQuestion3[2],
        'fourty3': arrQuestion3[3],
        'fifty3': arrQuestion3[4]
    }
    const objHistory = {
        'ten4': arrQuestion4[0],
        'twenty4': arrQuestion4[1],
        'thirty4': arrQuestion4[2],
        'fourty4': arrQuestion4[3],
        'fifty4': arrQuestion4[4]
    }
    const objStates = {
        'ten5': arrQuestion5[0],
        'twenty5': arrQuestion5[1],
        'thirty5': arrQuestion5[2],
        'fourty5': arrQuestion5[3],
        'fifty5': arrQuestion5[4]
    }

///////// The Answers being pulled into the obj from the array /////////

// ANSWERS: What is an avocato?, What is a banana?, What is pizza?, What is a coconut?, What is steak?...
    const answerFood1 = ['What is an avocato?', 'What is a potato?', 
    'What is a banana?', 'What is an Orange?',
    'What is pizza?', 'What is sausage?',
    'What is a coconut?', 'What is a bird?',
    'What is steak?', 'What is grass?']
    const objAnswerFood = {
        'ten1': answerFood1[0],
        'twenty1': answerFood1[2],
        'thirty1': answerFood1[4],
        'fourty1': answerFood1[6],
        'fifty1': answerFood1[8],
    }
    const objAnswerFood1 = {
        'ten1': answerFood1[1],
        'twenty1': answerFood1[3],
        'thirty1': answerFood1[5],
        'fourty1': answerFood1[7],
        'fifty1': answerFood1[9],
    }
    
    
    // ANSWERS: What is an algorithm?, What is looping?, What are conditionals?, What are variables?, What is an array?
    const answerProgramming = ['What is an Algorithm?', 'What is a Boolean?',
    'What is looping?', 'What is forming?',
    'What are conditionals?', 'What are mocks?',
    'What are variables?', 'What are spots?',
    'What is an array?', 'What is a pie?']
    const objAnswerProgramming = {
        'ten2': answerProgramming[0],
        'twenty2': answerProgramming[2],
        'thirty2': answerProgramming[4],
        'fourty2': answerProgramming[6],
        'fifty2': answerProgramming[8],
    }
    const objAnswerProgramming1 = {
        'ten2': answerProgramming[1],
        'twenty2': answerProgramming[3],
        'thirty2': answerProgramming[5],
        'fourty2': answerProgramming[7],
        'fifty2': answerProgramming[9],
    }


// ANSWERS: What is 42?, What is 7?, What is PEMDAS?, What are parallel lines?, What is an obtuse angle?
    const answerMath = ['What is 42?', 'What is 52?',
    'What is 7?', 'What is 13?',
    'What is PEMDAS?', 'What is MMATMILP?',
    'What are parallel lines?', 'What are perpendicular lines?',
    'What is an obtuse angle?', 'What is an acute angle?']
    const objAnswerMath = {
        'ten3': answerMath[0],
        'twenty3': answerMath[2],
        'thirty3': answerMath[4],
        'fourty3': answerMath[6],
        'fifty3': answerMath[8],
    }
    const objAnswerMath1 = {
        'ten3': answerMath[1],
        'twenty3': answerMath[3],
        'thirty3': answerMath[5],
        'fourty3': answerMath[7],
        'fifty3': answerMath[9],
    }


// ANSWERS: Who is Christopher Columbus?, Who is Abraham Lincoln?, Who is George Washington?, Who is France?, What is the Declaration of Independence?...
    const answerHistory = ['Who is Christopher Columbus?', 'Who is Freddy Mercury?',
    'Who is Abraham Lincoln?', 'Who is George Washington?',
    'Who is George Washington?', 'Who is Christopher Columbus?',
    'Who is France?', 'Who is Italy?',
    'What is the Declaration of Independence?', 'What is the National Anthem?']
    const objAnswerHistory = {
        'ten4': answerHistory[0],
        'twenty4': answerHistory[2],
        'thirty4': answerHistory[4],
        'fourty4': answerHistory[6],
        'fifty4': answerHistory[8],
    }
    const objAnswerHistory1 = {
        'ten4': answerHistory[1],
        'twenty4': answerHistory[3],
        'thirty4': answerHistory[5],
        'fourty4': answerHistory[7],
        'fifty4': answerHistory[9],
    }


// ANSWERS: Where is the pentagon?, Where is the Empire State Building?, What is Florida?, What is New York?, What is Texas?...
    const answerStates = ['Where is the pentagon?', 'Where is the Miracle Building of Arts?',
    'Where is the Empire State Building?', 'Where is the White House?',
    'What is Florida?', 'What is California?',
    'What is New York?', 'What is Washington, D.C.?',
    'What is Texas?', 'What is Missouri?']
    const objAnswerStates = {
        'ten5': answerStates[0],
        'twenty5': answerStates[2],
        'thirty5': answerStates[4],
        'fourty5': answerStates[6],
        'fifty5': answerStates[8],
    }
    const objAnswerStates1 = {
        'ten5': answerStates[1],
        'twenty5': answerStates[3],
        'thirty5': answerStates[5],
        'fourty5': answerStates[7],
        'fifty5': answerStates[9],
    }


////////////////////////////////////////////////////////////
//////// What is going to make everything work ////////
///////////////////////////////////////////////////////////
    const $question = $('.square').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through')
        $modal.css('display', 'block');
        
        // taking the blank text from the modal and replacing it with what you stored in obj...
        // The questions //
        $('#modalText').text(objFood[event.currentTarget.id])
        $('#modalText').text(objProgramming[event.currentTarget.id])
        $('#modalText').text(objMath[event.currentTarget.id])
        $('#modalText').text(objHistory[event.currentTarget.id])
        $('#modalText').text(objStates[event.currentTarget.id])





        //inputing text into the buttons
//Food Answer Buttons
        $('#submit').text(objAnswerFood[event.currentTarget.id])
        $('#submit1').text(objAnswerFood1[event.currentTarget.id])
//Programming Answer Buttons
        $('#submit').text(objAnswerProgramming[event.currentTarget.id])
        $('#submit1').text(objAnswerProgramming1[event.currentTarget.id])
//Math Answer Buttons
        $('#submit').text(objAnswerMath[event.currentTarget.id])
        $('#submit1').text(objAnswerMath1[event.currentTarget.id])
//History Answer Buttons
        $('#submit').text(objAnswerHistory[event.currentTarget.id])
        $('#submit1').text(objAnswerHistory1[event.currentTarget.id])
//States Answer Buttons
        $('#submit').text(objAnswerStates[event.currentTarget.id])
        $('#submit1').text(objAnswerStates1[event.currentTarget.id])
        }) 
        
        





// creation of the modal for the questions when clicked

    const $modal = $('.modal');
    const $closeBtn = $('.close-btn');
    const $submitBtn = $('#submit');
    const $submitBtn1 = $('#submit1');
    const $inputText = $('#inputText');

    $closeBtn.on('click', () => {
        $modal.css('display', 'none');
        $('#modalText').empty()
    })

    $submitBtn.on('click', () => {
        if ($inputText == true) {
            alert('Correct!');
        } else {
            alert('incorrect');
        }  
    })
    $submitBtn1.on('click', () => {
        if ($inputText == true) {
            alert('Correct!');
        } else {
            alert('incorrect');
        }  
    })
});
   

   
   
   
   
   
   
   
   
   
