import React from 'react';
import "./style.scss"

interface IDisplayProps {
    result: number,
    to: string
}

const Display : React.FC<IDisplayProps> = ({result, to}) => {

    return (
        <div className="display">
            <h1>Result</h1>
            <div className="view">
                <h2>{result}</h2>
                <h3>{to}</h3>
            </div>
        </div>
    );
};

export default Display;