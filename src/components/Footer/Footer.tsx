import usePrevious from '../usePrevious';
import React, { useRef } from 'react';

const Footer = () => {
    const [fontSize, setFontSize] = React.useState('sm');

    const selectRef = useRef<any>();
    const prevSize = usePrevious(fontSize);

    // console.log('prev in out', prevSize);

    const onClick = async (size: any, previousSize: any) => {
        console.log('previousSize:', previousSize);
        console.log('current:', size);
        // console.log('ali');
        // console.log('ref: ', selectRef.current.value);

        previousSize && document.body.classList.remove(previousSize);
        document.body.classList.add(size);
        setFontSize(size);
    };

    return (
        <div>
            <select
                ref={selectRef}
                name=""
                id=""
                onChange={(e) => onClick(e.target.value, prevSize)}
            >
                <option value="sm">small</option>
                <option value="lg">large</option>
            </select>
        </div>
    );
};

export default Footer;
