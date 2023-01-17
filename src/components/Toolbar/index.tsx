import React, {useState} from 'react';
import getConvert, {ConvertReqResult} from "../../requests/getConvert";
import "./style.scss"

interface IToolbarProps {
    setResult : React.Dispatch<ConvertReqResult>,
}

type ChangeElements = HTMLInputElement | HTMLSelectElement

interface CurrencyState {
    from: string;
    to: string;
    amount: number;
}

const Toolbar : React.FC<IToolbarProps> = ({setResult}) => {
    const [state, setState] = useState<CurrencyState>({
        from: "AMD",
        to: "USD",
        amount: 0
    })

    const handleChange = (event : React.ChangeEvent<ChangeElements>) : void => {//????????????
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event : React.FormEvent<HTMLFormElement>) : void => {
        event.preventDefault()
        getConvert(state.from,state.to,state.amount,setResult).catch(err => console.error(err))
    }

    return (
        <div className="toolbar">
            <form onSubmit={handleSubmit}>
                <section>
                    <div className="from-to-box">
                        <label htmlFor="from">From</label>
                        <select name="from" defaultValue={state.from} onChange={handleChange}>
                            <option>AMD</option>
                            <option>USD</option>
                            <option>EUR</option>
                            <option>RUB</option>
                        </select>
                    </div>
                    <div className="from-to-box">
                        <label htmlFor="to">To</label>
                        <select name="to" defaultValue={state.to} onChange={handleChange}>
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
                        <input type="number" name="amount" onChange={handleChange}
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