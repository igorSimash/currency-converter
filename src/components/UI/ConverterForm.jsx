import React from 'react';
import Select from "./select/Select";
import Input from "./input/Input";

const ConverterForm = ({header, onInputChange, valueInput, onSelectChange, valueSelect}) => {
    return (
        <div className={`flex w-max-fit flex-col ${header === 'To' && 'items-end'}`}>
            <span className={'text-sm text-gray-600 font-semibold w-4/5'}>{header}</span>
            <Select valueSelect={valueSelect} onSelectChange={onSelectChange}
                    options={[
                        {value: 'eur', name: 'EUR · Euro'},
                        {value: 'usd', name: 'USD · Dollar'},
                        {value: 'uah', name: 'UAH · Hryvnia'}
                    ]}/>
            <Input onInputChange={onInputChange} valueInput={valueInput} valueSelect={valueSelect}/>
        </div>
    );
};

export default ConverterForm;