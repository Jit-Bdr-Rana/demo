import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

interface Options {
    key: string;
    value: string;
}
interface props {
    placeholder: string;
    options: Options[];
    wrapperClassName: string;
    onSelect?: (activeOption: Options) => void
}

const Dropdown = ({ placeholder, options, wrapperClassName, onSelect }: props) => {
    const [activeOpt, setActiveOpt] = useState<Options>();
    const [show, setShow] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e?.target as Node)) {
            setShow(false);
        }
    };
    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [ref]);
    return (
        <div ref={ref} className={`relative py-1.5 border ${wrapperClassName}`} >
            <div
                className="flex px-2 justify-between   items-center gap-5"
                onClick={() => setShow(!show)}
            >
                <button className=" overflow-hidden  outline-none inline-block">
                    {activeOpt?.key || placeholder}
                </button>
                <span>{show ? <MdArrowDropUp /> : <MdArrowDropDown />}</span>
            </div>
            {show ? (
                <div className=" absolute inset-0 top-10 z-50 ">
                    <div className="bg-white rounded-sm shadow-lg">
                        {options.map((_, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() => {
                                        setActiveOpt(_);
                                        setShow(false);
                                        onSelect && onSelect(_);
                                    }}
                                    className=" p-2 pl-2 border-b-[#333333] hover:bg-slate-200 border-b"
                                >
                                    {_.key}
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default Dropdown;
