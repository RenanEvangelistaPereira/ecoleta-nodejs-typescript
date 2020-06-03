import React, {useState} from 'react';

interface HeaderProps{
    title?: string;
    
}

const Header: React.FC<HeaderProps> = (props) => {

    const [counter, setCounter] = useState(0);

    function handleButtonClick() {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <header>
            <h1>E-Coleta - {props.title}</h1>
            <button type="button" onClick={handleButtonClick}>Aumentar</button>
            {counter}
        </header>
    );
}

export default Header;