// All boxes with price and categories
//////////////////////////////////////



// Have to put all the words and prices in boxes now
///////////////////////////////////////////////////

// Was visually better to me to input divs individually html rather than forming with for loop
//////////////////////////////////////////////////////////


$(() => {
    // where the questions come from...
    const arrQuestion = ['I am used to make Guacamole', 'monkeys peel me backwards', ]

    // what is being stored from the array
    // the id is the key
    // the question is the value

    const obj = {
        'ten1': arrQuestion[0],
        
    }
    
    
    
    
    const $question = $('.square').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through')
        $modal.css('display', 'block');
        
        // taking the blank text from the modal and replacing it with what you stored in obj...

        $('#modalText').text(obj[event.currentTarget.id])

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
   

   
   
   
   
   
   
   
   
   
