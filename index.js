// NO.1



function writeCards ( arr, occasion ){
    let messageArr = [];
    let message;
    for ( let i = 0; i < arr.length; i++ ){
        message = `Thank you, ${ arr[i] }, for the wonderful ${ occasion } gift!`;
        messageArr.push( message );
        //console.log ( message );
        
    }
    return messageArr;
}

let thankYouMessages = writeCards ( ["Guadalupe", "Ollie", "Aki"], "surprise"  );
console.log ( thankYouMessages );

//NO. 2

function countDown ( num1 ){
    while ( num1 >= 0 ){
        console.log ( num1-- );
    }
}

countDown ( 12 );