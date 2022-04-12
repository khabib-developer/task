
import { useState } from 'react';

import Calendar from 'react-calendar';

import './index.css'

interface ICalendar {
    show: boolean,
    setShow: (show: boolean) => void
}

export const CalendarCom: React.FC<ICalendar> = ({show, setShow}) => {
    const [value, setValue] = useState<Date | null>(new Date());

    const handleClick = (event: React.MouseEvent | any): void => {
        const target = event.target 
        if(show && target.classList.contains('calendar__wrapper')) {
            setShow(false)
        }

    }

    return (
        <div className={`calendar__wrapper ${show?"show":""} `} onClick={handleClick} >
            <div className={`calendar ${show?'active':""}`}>

                <div className='calendar__title d-flex justify-content-between'>
                    <span>Delivery time</span>
                    <span className='calendar__exit' onClick={() => setShow(false)}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.99999 5.58599L11.95 0.635986L13.364 2.04999L8.41399 6.99999L13.364 11.95L11.95 13.364L6.99999 8.41399L2.04999 13.364L0.635986 11.95L5.58599 6.99999L0.635986 2.04999L2.04999 0.635986L6.99999 5.58599Z" fill="black"/>
                        </svg>
                    </span>
                </div>

                <div className={`calendar__date`}>
                    <Calendar onChange={setValue} locale="en" value={value} />
                </div>

                <div className='date__list'>
                    <div className='date__list__item'>
                        <div className='date__month d-flex align-items-center'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#45A524"/>
                            </svg>
                            <span>
                                10 October
                            </span>
                        </div>
                        <div className='date__time'>
                            8:00 AM — 9:00 AM
                        </div>
                    </div>

                    <div className='date__list__item'>
                        <div className='date__month d-flex align-items-center'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#45A524"/>
                            </svg>
                            <span>
                                10 October
                            </span>
                        </div>
                        <div className='date__time'>
                            8:00 AM — 9:00 AM
                        </div>
                    </div>

                    <div className='date__list__item'>
                        <div className='date__month d-flex align-items-center'>
                            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="4" cy="4" r="4" fill="#45A524"/>
                            </svg>
                            <span>
                                10 October
                            </span>
                        </div>
                        <div className='date__time'>
                            8:00 AM — 9:00 AM
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    )
}