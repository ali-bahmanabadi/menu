import React, { useState } from 'react';

import { data } from './data';

import './sidebar.css';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from './assets/icon/HomeIcon';

const Sidebar = () => {
    const [active, setActive] = useState(Number);

    const { pathname } = useLocation();
    // console.log(pathname);

    const [heading, setHeading] = useState(Number);
    const [subHeading, setSubHeading] = useState(Number);

    const onClickHandler_1 = (item: any) => {
        item.id === heading ? setHeading(0) : setHeading(item.id);
        setSubHeading(0);
    };

    const onClickHandler_2 = (item: any) => {
        item.id === subHeading ? setSubHeading(0) : setSubHeading(item.id);
    };

    return (
        <div className="sidebar_wrapper">
            {data.map((item) => (
                <div key={item.id}>
                    <div
                        className="item"
                        onClick={() => onClickHandler_1(item)}
                    >
                        <HomeIcon />
                        {item.link ? (
                            <Link
                                to={item.link}
                                className={`${
                                    pathname === item.link ? 'active' : ''
                                }`}
                                // onClick={() => {
                                //     // setActive(item.id);
                                //     // console.log(item.id);
                                //     // console.log(active);
                                // }}
                            >
                                {item.title}
                            </Link>
                        ) : (
                            <span>{item.title}</span>
                        )}
                    </div>
                    <div
                        className={`${heading === item.id ? 'show' : 'hidden'}`}
                    >
                        {item.nodes &&
                            item.nodes.map((item) => (
                                <div key={item.id}>
                                    <div
                                        className="item"
                                        onClick={() => onClickHandler_2(item)}
                                    >
                                        --*--{item.title}
                                    </div>
                                    <div
                                        className={`${
                                            subHeading === item.id
                                                ? 'show'
                                                : 'hidden'
                                        }`}
                                    >
                                        {item.nodes &&
                                            item.nodes.map((item) => (
                                                <div key={item.id}>
                                                    ---*---*--
                                                    {item.title}
                                                </div>
                                            ))}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
