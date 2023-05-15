import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Ali = () => {
    const location = useLocation();

    const his = useNavigate();

    console.log(his('/'));
    return <div>Ali absolute import</div>;
};

export default Ali;
