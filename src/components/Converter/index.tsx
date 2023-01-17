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

    return (
        <div className="converter">
            <Toolbar setResult={setResult}/>
            <Display result={result.result} to={result.to}/>
        </div>
    );
};

export default Converter;