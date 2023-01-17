import React, {useState} from 'react';
import Display from "../Display";
import Toolbar from "../Toolbar";
import "./style.scss"
import {ConvertReqResult} from "../../requests/getConvert";

const Converter : React.FC = () => {

    const [result, setResult] = useState<ConvertReqResult>({
        result: 0,
        to: ""
    })

    const [to, setTo] = useState<string>("USD")

    return (
        <div className="converter">
            <Toolbar setResult={setResult} setTo={setTo} to={to}/>
            <Display result={result.result} to={result.to}/>
        </div>
    );
};

export default Converter;