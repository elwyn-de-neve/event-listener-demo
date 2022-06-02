const input = document.getElementById( "input-field" );
const output = document.getElementById( "output-field" );
const submit = document.getElementById( "submit-btn" );

const handleSubmit = () => {

    console.log( 'handle submit');
    output.innerText = input.value;
    input.value = "";

};

submit.addEventListener( "click", handleSubmit );

input.addEventListener( "keyup", ( e ) => {
    // console.log(e); // Check wat je aan events beschikbaar hebt!
    if ( e.key === "Enter" ) {
        handleSubmit();
    }
} );