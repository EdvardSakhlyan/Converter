import React from "react"
export type ConvertReqResult = {
    result: number ,
    to: string
}
type convertRequestType = (from: string, to: string, amount:number , setState : React.Dispatch<ConvertReqResult> ) => Promise<ConvertReqResult>

const getConvert : convertRequestType = async (from, to, amount, setState)  => {
    let headers = new Headers();
    headers.append("apikey", "9rr1r8Oi1XDKEfLkRtJbgfGEZqIRvZ6L");
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?from=${from}&to=${to}&amount=${amount}` , {
        method: "GET",
        redirect: "follow",
        headers
    })

    const data = await response.json()

    console.log(data)

    setState({result: data.result , to: data.query.to})

    return {result: data.result , to: data.query.to}

}

export default getConvert