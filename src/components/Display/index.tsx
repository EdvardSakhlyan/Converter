import React from 'react';
import "./style.scss"

interface IDisplayProps {
    result: number,
    to: string
}

const Display : React.FC<IDisplayProps> = ({result, to}) => {

    return (
        <div className="display">
            <h1>{result}</h1>
            <h2>{to}</h2>
        </div>
    );
};

export default Display;