// All boxes with price and categories
//////////////////////////////////////



// Have to put all the words and prices in boxes now
///////////////////////////////////////////////////

// Was visually better to me to input divs individually html rather than forming with for loop
//////////////////////////////////////////////////////////

$(() => {
    const $question = $('.square').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
        
    
// creation of the modal for the questions when clicked
    const $modalBtn = $('#modal-btn');
    const $modal = $('.modal');
    const $closeBtn = $('.close-btn');
    const $submitBtn = $('#submit');
    const $inputText = $('#inputText');



    $modalBtn.on('click', () => {
        $modal.css('display', 'block');
    })


    $closeBtn.on('click', () => {
        $modal.css('display', 'none');
    })


    $submitBtn.on('click', () => {
        if ($inputText == true) {
            alert('Correct!');
        } else {
            alert('incorrect');
        }  
    })
    

    $(window).on('click', (e) => {
        if (e.target == $modal) {
            $modal.css('display', 'none');
        }
    })
})
   

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   





});
