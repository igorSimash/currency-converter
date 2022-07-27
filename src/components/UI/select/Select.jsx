import React from 'react';

const Select = ({valueSelect, options, onSelectChange}) => {
    return (
        <select
            value={valueSelect}
            className={'border-b-2 text-lg outline-0 py-3 font-semibold w-4/5'}
            onChange={onSelectChange}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>
            )}
        </select>
    );
};

export default Select;