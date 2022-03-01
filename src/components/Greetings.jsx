import React from 'react';

export default function Greetings(props) {

    function language(lang) {
        switch (lang) {
            case 'de':
                return "Hallo "
            case "es":
                return "Hola ";
            case "en":
                return "Hello ";
            case "fr":
                return "Bonjour ";
            default: 
                return "Bon dia" 
        }
    }

    return (
        <div>
            {language(props.lang)} 
            {props.children}
        </div>
    )
}