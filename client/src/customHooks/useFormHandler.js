import React, { useState } from 'react';

export const useFormHandler = initialValue => {
    const [value, setValue ] = useState(initialValue);
    const handleChanges = updatedValue => {
        setValue(updatedValue);
    };
    return [ value, setValue, handleChanges ];
}