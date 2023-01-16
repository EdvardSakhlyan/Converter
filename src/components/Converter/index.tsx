import React, {useState} from 'react';
import Display from "../Display";
import Toolbar from "../Toolbar";
import "./style.scss"

const Converter : React.FC = () => {

    const [result, setResult] = useState<number>(0)

    const [to, setTo] = useState<string>("USD")

    return (
        <div className="converter">
            <Toolbar setResult={setResult} setTo={setTo} to={to}/>
            <Display result={result} to={to}/>
        </div>
    );
};

export default Converter;