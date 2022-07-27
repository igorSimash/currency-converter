import React from 'react';
import {FaExchangeAlt} from 'react-icons/fa'

const RoundButton = ({onBtnClick}) => {
    return (
        <div className={'flex justify-center'}>
            <button className={`w-14 h-14 my-auto shadow-rounded 2xl:w-16 2xl:h-16 mx-10 text-center rounded-full p-3.5 bg-cyan-500
                hover:bg-cyan-400 transition-all`}
            onClick={onBtnClick}>
                <FaExchangeAlt className={'w-full h-full '}/>
            </button>
        </div>
    );
};

export default RoundButton;