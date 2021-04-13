function get_string() {

    var str = document.getElementById( "input_string_id" ).value;

    if ( str == "Never gonna give you up" ) {
        alert( "You can't Rick Roll me!" );
    }

    string_analyse( str );
}

function string_analyse( str ) {
    
    var vowels = 0, consonants = 0, digits = 0, spaces = 0, special_characters = 0;

    for ( var i = 0; i < str.length; i++ ) {
        character = str[i];

        if ( character >= '0' && character <= '9' ) {
            digits += 1;
        }

        else if ( character in ['a','e','i','o','u'] || character in ['A','E','I','O','U'] ) {
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

    display_analysis( analytics );
}

function display_analysis( analytics ) {
    
}