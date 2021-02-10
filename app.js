// All boxes with price and categories
//////////////////////////////////////



// Have to put all the words and prices in boxes now
///////////////////////////////////////////////////

// Was visually better to me to input divs individually html rather than forming with for loop
//////////////////////////////////////////////////////////


$(() => {
    // where the questions come from...
    const arrQuestion = ['I am used to make Guacamole', 'monkeys peel me backwards', 'I have cheese an im a triangle', 'I am usually falling from a tree and im round', 'I am usually made from cows']
// ANSWERS: What is a avocato?, What is a banana?, What is pizza?, What is a coconut?, What is steak?...
    const arrQuestion2 = ['Steps used to complete a task', 'The  act of going through an array over and over', 'programs need this when parameters are met', 'containers for storing values', 'A list of values or strings']
// ANSWERS: What is an algorithm?, What is looping?, What are conditionals?, What are variables?, What is an array?...
    const arrQuestion3 = ['6 x 7', '2 x 5 - 3', 'parenthesis, exponents, multiplication, division, addition, subtraction', '2 lines that run the same way but never touch', 'An angle more than 90 degrees but less than 180 degrees']
// ANSWERS: What is 42?, What is 7?, What is PEMDAS?, What are parallel lines?, What is an obtuse angle?...



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

    }
    
    
    
    
    const $question = $('.square').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through')
        $modal.css('display', 'block');
        
        // taking the blank text from the modal and replacing it with what you stored in obj...

        $('#modalText').text(objFood[event.currentTarget.id])
        $('#modalText').text(objProgramming[event.currentTarget.id])
        $('#modalText').text(objMath[event.currentTarget.id])
        $('#modalText').text(objHistory[event.currentTarget.id])
        }) 
        
      
        
    
// creation of the modal for the questions when clicked

    const $modal = $('.modal');
    const $closeBtn = $('.close-btn');
    const $submitBtn = $('#submit');
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









    // $(window).on('click', (e) => {
    //     if (e.target == $modal) {
    //         $modal.css('display', 'none');
    //     }
    // })
});
   

   
   
   
   
   
   
   
   
   
