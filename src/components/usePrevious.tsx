import React from 'react';

const usePrevious = (value: any) => {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current = value; //assign the value of ref to the argument
    }, [value]); //this code will run when the value of 'value' changes
    return ref.current;
};

export default usePrevious;
