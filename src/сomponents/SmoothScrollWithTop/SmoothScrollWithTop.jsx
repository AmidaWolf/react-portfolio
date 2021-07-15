import React, {useEffect, useRef} from 'react';
import {useLocation} from 'react-router-dom';
import Scrollbar from "react-smooth-scrollbar";

export const SmoothScrollWithTop = ({children}) => {
    const { pathname } = useLocation();
    const ref = useRef(null);
    useEffect(() => {
        const { scrollbar } = ref.current;
        scrollbar.setPosition(0, 0);
    }, [pathname]);
    return (
        <Scrollbar ref={ref} demping={'0.09'}>
            {children}
        </Scrollbar>
    );
}
