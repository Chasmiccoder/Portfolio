function get_string() {

    var str = document.getElementById( "input_string_id" ).value;

    if ( str == "Never gonna give you up" ) {
        alert( "You can't Rick Roll me!" );
    }

    string_analyse( str );
    return false;
}

function string_analyse( str ) {
    
    var vowels = 0, consonants = 0, digits = 0, spaces = 0, special_characters = 0;

    for ( var i = 0; i < str.length; i++ ) {
        character = str[i];

        if ( character >= '0' && character <= '9' ) {
            digits += 1;
        }
       
        else if ( character == 'a' || character == 'A' || character == 'e' || character == 'E' || 
                  character == 'i' || character == 'I' || character == 'o' || character == 'O' ||
                  character == 'u' || character == 'U' ) {
            
            vowels += 1;
        }

        // We can do this since vowels get taken care of in the previous check
        else if ( ( character >= 'a' && character <= 'z') || ( character >= 'A' && character <= 'Z' ) ) {
            consonants += 1;
        } 

        else if ( character == ' ' ) {
            spaces += 1;
        }

        else {
            special_characters += 1;
        }

    }

    analytics = [ vowels, consonants, digits, spaces ];
    analytics.push( special_characters ); // Appending an element in an array

    display_analysis( analytics, str );
}

function display_analysis( analytics, str ) {

    // Display the input string
    document.getElementById( "text_output_title" ).innerHTML = "Given Input: " + str;

    // Set the relevant values
    document.getElementById( "vowels" ).innerHTML             = "Vowels: " + analytics[0].toString();
    document.getElementById( "consonants" ).innerHTML         = "Consonants: " + analytics[1].toString();
    document.getElementById( "digits" ).innerHTML             = "Digits: " + analytics[2].toString();
    document.getElementById( "spaces" ).innerHTML             = "Spaces: " + analytics[3].toString();
    document.getElementById( "special_characters" ).innerHTML = "Special Characters: " + analytics[4].toString();
    
    // Clearing the input field, once an input is given
    document.getElementById( "input_string_id" ).value = '';   
}