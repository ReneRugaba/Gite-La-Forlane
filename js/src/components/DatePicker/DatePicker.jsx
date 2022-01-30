import { useEffect } from 'react';
import bulmaCalendar from 'bulma-calendar';

import '../../../../node_modules/bulma-calendar/dist/css/bulma-calendar.min.css'
import './DatePicker.css'

const DatePicker = (props) => {

    let actualDate = new Date();
    actualDate = actualDate.toLocaleDateString( navigator.language, {   
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    let defaultOptions = {
        color: 'primary',
        isRange: false,
        allowSameDayRange: true,
        lang: 'navigator.language',
        startDate: actualDate,
        endDate: undefined,
        minDate: actualDate,
        maxDate: null,
        disabledDates: [],
        disabledWeekDays: undefined,
        highlightedDates: [],
        weekStart: 0,
        dateFormat: 'MM/dd/yyyy',
        enableMonthSwitch: true,
        enableYearSwitch: true,
        displayYearsCount: 1
    };

    useEffect( () => {
        // Initialize all input of type date
        var calendars = bulmaCalendar.attach('[type="date"]', defaultOptions);


        // To access to bulmaCalendar instance of an element
        var element = document.querySelector('#date-picker');
        if (element) {
            // bulmaCalendar instance is available as element.bulmaCalendar
            element.bulmaCalendar.on('select', function(datepicker) {
                props.dateFunc(datepicker.data.value());    
            });
        }
    },[])

    return (
        <div className='calendar-container'>
            <input 
                id="date-picker"
                name="date-picker" 
                type="date" 
                data-display-mode="block" 
                data-is-range="true" 
                data-close-on-select="true"
            />
        </div>
    );
}

export default DatePicker;