import cardfunctions from './workWithCards.js'

let counter = 3;

document.body.addEventListener("click", e => {
        // console.log('you clicked');
        // console.log(e.target.textContent);
        console.log(e.target.nodeName);
        // console.log(e.target);

        if (e.target.nodeName === 'BUTTON') {
                                
                if (e.target.textContent === "Add Before"){
                cardfunctions.addBefore(e.target.parentElement, "this has been added Card " + counter++);
        }
                else if (e.target.textContent === "Add After"){
                cardfunctions.addAfter(e.target.parentElement, "this has been added Card  " + counter++);
        }
                else if (e.target.textContent === "Delete"){
                cardfunctions.deleteCrd(e.target.parentElement);
              
        }       else if (e.target.textContent === "New Card"){
                let newCard = cardfunctions.crtNewCrd("New Card");
                crtNewCard.appendChild(newCard);

        }


   }


})



    






