import React, {useState} from 'react';
import getConvert, {ConvertReqResult} from "../../requests/getConvert";
import "./style.scss"

interface IToolbarProps {
    setResult : React.Dispatch<ConvertReqResult>,
    setTo: React.Dispatch<string>
    to : string
}

type MyChangeElements = HTMLInputElement | HTMLSelectElement

const Toolbar : React.FC<IToolbarProps> = ({setResult , setTo ,to}) => {

    const [from, setFrom] = useState<string>("AMD")

    const [amount, setAmount] = useState<number>(0)

    const handleChange = (event : React.ChangeEvent<MyChangeElements> , setState : React.Dispatch<string | number | any >) : void => {//????????????
        console.log(typeof event.target.value)
        setState(event.target.value)
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        getConvert(from,to,amount,setResult).catch(err => console.error(err))
    }

    return (
        <div className="toolbar">
            <form onSubmit={handleSubmit}>
                <section>
                    <div className="from-to-box">
                        <label htmlFor="from">From</label>
                        <select name="from" defaultValue={from} onChange={(event) => handleChange(event, setFrom)}>
                            <option>AMD</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                    <div className="from-to-box">
                        <label htmlFor="to">To</label>
                        <select name="to" defaultValue={to} onChange={(event) => handleChange(event, setTo)}>
                            <option>USD</option>
                            <option>AMD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </section>
                <section>
                    <div className="amount-box">
                        <label htmlFor="amount">Amount</label>
                        <input type="number" name="amount" onChange={(event) => handleChange(event, setAmount)}
                               placeholder="Enter amount"/>
                    </div>
                    <div className="buttons-box">
                        <input type="submit" value="Convert"/>
                        <input type="reset" value="Reset"/>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default Toolbar;