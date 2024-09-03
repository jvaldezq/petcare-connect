import type {HTMLAttributes} from "react";

export const WazeIcon = (props: HTMLAttributes<HTMLOrSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
             stroke="#09090b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path
                d="M6.66 17.52a7 7 0 0 1 -3.66 -4.52c2 0 3 -1 3 -2.51c0 -3.92 2.25 -7.49 7.38 -7.49c4.62 0 7.62 3.51 7.62 8a8.08 8.08 0 0 1 -3.39 6.62"/>
            <path d="M10 18.69a17.29 17.29 0 0 0 3.33 .3h.54"/>
            <path d="M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M8 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M16 9h.01"/>
            <path d="M11 9h.01"/>
        </svg>
    );
};
