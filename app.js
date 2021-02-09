// All boxes with price and categories
//////////////////////////////////////



// Have to put all the words and prices in boxes now
///////////////////////////////////////////////////

// Was visually better to me to input divs individually html rather than forming with for loop
//////////////////////////////////////////////////////////

$(() => {
    const $question = $('.square').on('click', (event) => {
        $(event.currentTarget).css('text-decoration', 'line-through');
        
    })

    const $modalBtn = $('#modal-btn');
    const $modal = $('.modal');
    const $closeBtn = $('.close-btn');

    $modalBtn.on('click', () => {
        $modal.css('display', 'block');
    })
    $closeBtn.on('click', () => {
        $modal.css('display', 'none');
    })
    window.on('click', (e) => {
        if (e.target == $modal) {
            $modal.css('display', 'none');
        }
    })
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   





});
