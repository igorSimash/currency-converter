import React, {useState} from 'react';
import ConverterForm from "./UI/ConverterForm";
import RoundButton from "./UI/button/RoundButton";
import ApiService from "../utils/ApiService";

const ConverterBody = () => {
    const date = new Date()
    const today = `${date.getDate()}.${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}.${date.getFullYear()}`

    const [firstCurrency, setFirstCurrency] = useState('eur')
    const [secondCurrency, setSecondCurrency] = useState('eur')
    const [firstValue, setFirstValue] = useState('')
    const [secondValue, setSecondValue] = useState('')

    const onFirstInputChange = (e) => {
        setFirstValue(e.target.value)
        ApiService.getCurrency(firstCurrency, secondCurrency)
            .then(res => {
                e.target.value !== ''
                    ?
                    firstCurrency !== secondCurrency
                        ?
                        setSecondValue('' + (res[secondCurrency] * parseFloat(e.target.value)).toFixed(8).replace(/0*$/,""))
                        :
                        setSecondValue('' + (res[secondCurrency] * parseFloat(e.target.value)))
                    :
                setSecondValue('')
            })
    }

    const onSecondInputChange = (e) => {
        setSecondValue(e.target.value)
        ApiService.getCurrency(secondCurrency, firstCurrency)
            .then(res => {
                e.target.value !== ''
                    ?
                    setFirstValue('' + (res[firstCurrency] * parseFloat(e.target.value)).toFixed(10).replace(/0*$/,""))
                    :
                    setFirstValue('')
            })
    }

    const onBtnClick = () => {
        setFirstCurrency(secondCurrency)
        setSecondCurrency(firstCurrency)
        setFirstValue(secondValue)
        setSecondValue(firstValue)

    }

    return (
        <div className={'w-full mt-12'}>
            <div className={'grid mx-12 mt-20 mb-14'}>
                <span className={'text-3xl text-slate-800'}>
                    Currency converter
                </span>
                <span className={'text-lg text-gray-700'}>
                    Today: {today}
                </span>
            </div>
            <div className={'flex mx-12 justify-between'}>
                <ConverterForm onInputChange={onFirstInputChange} valueInput={firstValue} valueSelect={firstCurrency}
                               onSelectChange={e => setFirstCurrency(e.target.value)} header={'From'}/>
                <RoundButton onBtnClick={onBtnClick}/>
                <ConverterForm onInputChange={onSecondInputChange} valueInput={secondValue} valueSelect={secondCurrency}
                               onSelectChange={e => setSecondCurrency(e.target.value)} header={'To'}/>
            </div>

        </div>
    );
};

export default ConverterBody;