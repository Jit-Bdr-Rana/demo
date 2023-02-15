import React, { Fragment, ReactNode, useEffect, useState } from 'react'

export interface TabOption {
    title: string;
    key: string | number;
    children: ReactNode;
}

interface TabProps {
    readonly options?: TabOption[];
    readonly containerClassName?: string;
    onTabChange?: (key: string | number) => void
}
const Tab = ({ containerClassName, onTabChange, options }: TabProps) => {
    const [option] = useState<TabOption[]>(options || [])
    const [activeTab, setActiveTab] = useState<TabOption>(option[0]);
    useEffect(() => {
        if (onTabChange) {
            onTabChange(activeTab.key)
        }
    }, [activeTab])
    return (
        <div className={`${containerClassName} mt-5`}>
            <div className=''>
                {
                    option.map((_, i) => {
                        return (
                            <button onClick={() => { setActiveTab(_) }} type='button' key={i} className={`${_.key == activeTab.key && 'border-t-4 border rounded-t-md border-t-orange-500 '} outline-none border-b  px-6 py-3`} title={_.key as string}>{_.title}</button>
                        )
                    })
                }
            </div>
            {
                option.map((_, i) => {
                    return (
                        <Fragment>
                            {
                                activeTab.key == _.key &&
                                <div key={i} className='px-2'>
                                    {_.children}
                                </div>
                            }
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
export default Tab