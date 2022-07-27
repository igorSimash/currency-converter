import React from 'react';
import {FaHryvnia, FaDollarSign, FaEuroSign} from 'react-icons/fa'
const Input = ({valueSelect, onInputChange, valueInput}) => {
    return (
        <div className={'flex border-b-2 w-4/5'}>
            <span className={'text-6xl mt-auto mb-4'}>
                {valueSelect === 'usd'
                    ?
                    <FaDollarSign/>
                    :
                    valueSelect === 'eur'
                    ?
                        <FaEuroSign/>
                        :
                        <FaHryvnia className={'text-6xl'}/>

                }
            </span>
            <input onChange={onInputChange}
                   className={'text-6xl outline-0 mt-6 py-3 w-full'}
                   type="number"
                   value={valueInput}
            />
        </div>

    );
};

export default Input;