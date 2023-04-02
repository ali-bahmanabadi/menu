import * as React from 'react';

import cx from 'classnames';

import './style.css';
import style from './header.module.scss';

import { motion } from 'framer-motion';
import usePrevious from '../usePrevious';

const Header = () => {
    const [show, setShow] = React.useState(false);
    const [colorVariable, setColorVariable] = React.useState<any>('purple');

    const prevCount = usePrevious(colorVariable);

    React.useEffect(() => {
        document.body.classList.add('purple');
    }, []);

    const onClick = (color: string) => {
        prevCount && document.body.classList.remove(prevCount);
        document.body.classList.add(color);
        setColorVariable(color);
        setShow(false);
    };

    return (
        <>
            <header className={cx(style.header, colorVariable)}>
                <div className={style.menu_wrapper}>
                    <button
                        onClick={() => setShow(!show)}
                        onBlur={() => setShow(false)}
                    >
                        button
                    </button>
                    {show && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={style.menu}
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            menu
                            <div>
                                <div onMouseDown={() => onClick('purple')}>
                                    purple
                                </div>
                                <div onClick={() => onClick('blue')}>blue</div>
                                <div onClick={() => onClick('green')}>
                                    green
                                </div>
                                <div onClick={() => onClick('yellow')}>
                                    yellow
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </header>
        </>
    );
};

export default Header;
