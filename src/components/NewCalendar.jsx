import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function NewCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2023, 11, 17)); // December 17, 2023
  const [events] = useState([
    { id: 1, title: 'Booking taxi app', start: '06:00', end: '07:30', color: 'bg-blue-200', date: new Date(2023, 11, 18) },
    { id: 2, title: 'Design onboarding', start: '06:00', end: '07:10', color: 'bg-green-200', date: new Date(2023, 11, 19) },
    { id: 3, title: 'Development meet', start: '06:00', end: '08:00', color: 'bg-purple-200', date: new Date(2023, 11, 20) },
    { id: 4, title: 'Book offsite', start: '07:30', end: '10:00', color: 'bg-blue-200', date: new Date(2023, 11, 21) },
    { id: 5, title: 'Design session', start: '07:50', end: '09:30', color: 'bg-yellow-200', date: new Date(2023, 11, 22) },
    { id: 6, title: 'Design Review', start: '09:40', end: '10:30', color: 'bg-blue-200', date: new Date(2023, 11, 23) },
    { id: 7, title: 'New project', start: '10:45', end: '12:30', color: 'bg-blue-200', date: new Date(2023, 11, 24) },
    { id: 8, title: 'Unboarding meet', start: '10:50', end: '12:00', color: 'bg-pink-200', date: new Date(2023, 11, 25) },
  ]);
  const [view, setView] = useState('month');
  const [selectedDate, setSelectedDate] = useState(null);

  const handlePrevPeriod = () => {
    // setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - (view === 'week' ? 1 : 1), currentDate.getDate()));
    if (view === 'week') {
        // Go back 7 days for the week view
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7));
      } else {
        // Go back 1 month for the month view
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate()));
      }
  };

  const handleNextPeriod = () => {
    // setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + (view === 'week' ? 1 : 1), currentDate.getDate()));
    if (view === 'week') {
    // Go forward 7 days for the week view
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 7));
  } else {
    // Go forward 1 month for the month view
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate()));
  }
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getWeekDates = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() - currentDate.getDay() + i);
      dates.push(date);
    }
    return dates;
  };

  const START_HOUR = 6; // 6:00 AM
const TOTAL_HOURS = 18; // From 6:00 AM to 12:00 AM

// Helper function to calculate percentage of the top position
const calculateTopPercentage = (start) => {
  const [hours, minutes] = start.split(':').map(Number);
  const timeInMinutes = (hours * 60) + minutes;
  const startOfDayInMinutes = START_HOUR * 60; // 6:00 AM in minutes
  const totalMinutesInDay = TOTAL_HOURS * 60; // Total visible minutes (6 AM to 12 AM)

  const minutesSinceStart = timeInMinutes - startOfDayInMinutes;
  const topPercentage = (minutesSinceStart / totalMinutesInDay) * 100;

  return `${topPercentage}%`;
};

// Helper function to calculate percentage height of the event
const calculateHeightPercentage = (start, end) => {
    const [startHours, startMinutes] = start.split(':').map(Number);
    const [endHours, endMinutes] = end.split(':').map(Number);
  
    const startInMinutes = (startHours * 60) + startMinutes;
    const endInMinutes = (endHours * 60) + endMinutes;
    const eventDurationInMinutes = endInMinutes - startInMinutes;
    const totalMinutesInDay = TOTAL_HOURS * 60;
  
    // Calculate the base height percentage
    const heightPercentage = (eventDurationInMinutes / totalMinutesInDay) * 100;
  
    // Add a buffer, say 2% to make events slightly taller
    const extraHeight = 3; // Adjust this value as per your preference
  
    return `${heightPercentage + extraHeight}%`;
  };

  const getMonthDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const dates = [];
    for (let i = 0; i < startingDay; i++) {
      dates.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      dates.push(new Date(year, month, i));
    }
    return dates;
  };

  const renderWeekView = () => (
    <div className="grid grid-cols-8 gap-4 mt-4 px-4">
      <div className="col-span-1"></div>
      {getWeekDates().map((date, index) => (
        <div key={index} className="text-center font-nohemi_sb">
          {days[date.getDay()]}
          <div
            className={`mt-1 inline-block rounded-full w-8 h-8 leading-8 ${
              date.toDateString() === new Date().toDateString() ? 'bg-gray-900 text-white' : 'bg-gray-100'
            }`}
          >
            {date.getDate()}
          </div>
        </div>
      ))}
      {/* <div className="col-span-1 font-nohemi_m">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="h-20 text-right pr-2 text-sm text-gray-500">
            {i === 0 ? '12 am' : i < 12 ? `${i} am` : i === 12 ? '12 pm' : `${i - 12} pm`}
          </div>
        ))}
      </div> */}
      <div className="col-span-1 font-nohemi_m">
  {Array.from({ length: 18 }).map((_, i) => {
    const hour = i + 6; // Start from 6 AM
    return (
      <div key={i} className="h-20 text-right pr-2 text-sm text-gray-500">
        {hour === 12 ? '12 pm' : hour < 12 ? `${hour} am` : `${hour - 12} pm`}
      </div>
    );
  })}
</div>
      {getWeekDates().map((date, dayIndex) => (
        <div key={dayIndex} className="col-span-1 border-l border-gray-200">
          <div className="relative h-[1200px]">
            {events
              .filter((event) => event.date.toDateString() === date.toDateString())
              .map((event) => (
                <div
                  key={event.id}
                  className={`absolute ml-1 p-2 rounded-md ${event.color} cursor-pointer`}
                  style={{
                    top: calculateTopPercentage(event.start),
                    height: calculateHeightPercentage(event.start, event.end),
                    width: 'calc(100% - 8px)',
                    left: '4px',
                  }}
                // style={{
                //     top: `${((parseInt(event.start.split(':')[0]) + 4) * 50) + (parseInt(event.start.split(':')[1]) * (50 / 60))}px`,
                //     height: `${(parseInt(event.end.split(':')[0]) - parseInt(event.start.split(':')[0])) * 80 + (parseInt(event.end.split(':')[1]) - parseInt(event.start.split(':')[1])) * 1.33}px`,
                //     width: 'calc(100%)',
                //     left: '4px',
                //   }}
                  onClick={() => setSelectedDate(date)}
                >
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <p className="text-xs">
                    {event.start} - {event.end}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderMonthView = () => (
    <div className="grid grid-cols-7 gap-2 mt-6 px-8">
      {days.map((day) => (
        <div key={day} className="text-center font-nohemi_sb uppercase text-gray-500">
          {day.slice(0, 3)}
        </div>
      ))}
      {getMonthDates().map((date, index) => (
        <div
          key={index}
          className={`h-28 border border-black rounded-xl p-2 ${date && date.toDateString() === new Date().toDateString() ? 'bg-blue-50' : ''} ${
            date ? 'cursor-pointer' : ''
          }`}
          onClick={() => date && setSelectedDate(date)}
        >
          {date && (
            <>
              <div
                className={`text-right font-nohemi_m text-xl ${
                  date.toDateString() === new Date().toDateString() ? 'bg-blue-500 text-white' : ''
                } rounded-full w-6 h-6 flex items-center justify-center ml-auto`}
              >
                {date.getDate()}
              </div>
              <div className="mt-2">
                {events
                  .filter((event) => event.date.toDateString() === date.toDateString())
                  .slice(0, 3)
                  .map((event) => (
                    <div key={event.id} className={`${event.color} rounded-md p-1 mb-1 text-xs truncate`}>
                      {event.title}
                    </div>
                  ))}
                {events.filter((event) => event.date.toDateString() === date.toDateString()).length > 3 && (
                  <div className="text-xs text-gray-500">
                    {events.filter((event) => event.date.toDateString() === date.toDateString()).length - 3} more...
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="h-screen bg-white p-8 flex ">
      <div className="bg-white rounded-lg p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-nohemi_sb">
            {months[currentDate.getMonth()]}, {currentDate.getFullYear()}
          </h1>
          <div className="bg-[#F5F6F7] rounded-2xl p-4 flex items-center space-x-4">
            <button
              className={`px-4 py-2 font-nohemi_r rounded-md ${view === 'month' ? 'bg-white text-black' : ''}`}
              onClick={() => setView('month')}
            >
              Month
            </button>
            <button
              className={`px-4 py-2 rounded-md font-nohemi_r ${view === 'week' ? 'bg-white text-black' : ''}`}
              onClick={() => setView('week')}
            >
              Week
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <button onClick={handlePrevPeriod} className='bg-[#F5F6F7] p-2 rounded-xl'>
              <ChevronLeft />
            </button>
            <button className="px-6 py-3 bg-teal-800 text-white font-nohemi_r rounded-md" onClick={handleToday}>
              Today
            </button>
            <button onClick={handleNextPeriod} className='bg-[#F5F6F7] p-2 rounded-xl'>
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="flex-grow overflow-auto">{view === 'week' ? renderWeekView() : renderMonthView()}</div>
      </div>
      {selectedDate && (
        <div className="bg-white rounded-lg shadow-lg p-6 w-80 ml-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              {days[selectedDate.getDay()]}, {months[selectedDate.getMonth()]} {selectedDate.getDate()}
            </h2>
            <button onClick={() => setSelectedDate(null)}>
              <X />
            </button>
          </div>
          <div className="space-y-4">
            {events
              .filter((event) => event.date.toDateString() === selectedDate.toDateString())
              .map((event) => (
                <div key={event.id} className={`p-4 rounded-md ${event.color}`}>
                  <h4 className="font-semibold text-sm">{event.title}</h4>
                  <p className="text-xs">
                    {event.start} - {event.end}
                  </p>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}