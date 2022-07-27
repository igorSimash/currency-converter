import React, {useEffect, useState} from 'react';
import ApiService from "../utils/ApiService";

const Header = () => {
    const [currencies, setCurrencies] = useState([])
    useEffect(() => {
        ApiService.getCurrency('usd','uah').then(res => setCurrencies(prev => [...prev, res.uah.toFixed(2)]))
        ApiService.getCurrency('eur','uah').then(res => setCurrencies(prev => [...prev, res.uah.toFixed(2)]))
    }, [])

    return (
        <div className={'w-full flex justify-around shadow-gray-200 shadow-lg text-cyan-800'}>
            <div className={'grid text-center my-2.5'}>
                <span className={'text-xl'}>
                    USD
                </span>
                <span className={''}>
                    {currencies[0]} UAH
                </span>
            </div>
            <div className={'grid text-center my-2.5'}>
                <span className={'text-xl'}>
                    EUR
                </span>
                <span className={''}>
                    {currencies[1]} UAH
                </span>
            </div>
        </div>
    );
};

export default Header;