import React, {useState} from 'react';
import getConvert from "../../requests/getConvert";
import "./style.scss"

interface IToolbarProps {
    setResult : React.Dispatch<number>,
    setTo: React.Dispatch<string>
    to : string
}

const Toolbar : React.FC<IToolbarProps> = ({setResult , setTo ,to}) => {

    const [from, setFrom] = useState<string>("AMD")

    const [amount, setAmount] = useState<number>(0)

    const handleChange = (event : React.ChangeEvent<HTMLInputElement | HTMLSelectElement> , setState : React.Dispatch<string | number | any>) : void=> {//????????????
        setState(event.target.value)
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        getConvert(from,to,amount,setResult)
    }



    return (
        <div className="toolbar">
            <form onSubmit={handleSubmit}>
                <section>
                    <div className="from-to-box">
                        <label htmlFor="from">From</label>
                        <select  name="from" onChange={(event) => handleChange(event , setFrom)}>
                            <option>AMD</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                    <div className="to-box">
                        <label htmlFor="to">To</label>
                        <select name="to" onChange={(event) => handleChange(event , setTo)}>
                            <option>USD</option>
                            <option>AMD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                </section>
                <section >
                    <div className="amount-box">
                        <label htmlFor="amount">Amount</label>
                        <input name="amount" onChange={(event) => handleChange(event , setAmount)}/>
                    </div>
                    <input type="submit" value="Convert"/>
                    <input type="reset" value="Reset"/>
                </section>
            </form>
        </div>
    );
};

export default Toolbar;