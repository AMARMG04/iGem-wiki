import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendar() {
  const [popoverInfo, setPopoverInfo] = useState({
    visible: false,
    title: "",
    content: "",
    description: "",
    start: null,
    end: null,
    x: 0,
    y: 0,
  });

  const events = [
    {
      title: "Meeting with developers",
      start: "2024-09-12T10:30:00",
      end: "2024-09-12T12:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo odio pariatur? Magni mollitia autem sunt, ipsam at quia omnis nisi aliquid illum amet odit nihil natus possimus aspernatur impedit.",
    },
    {
        title: "Documentation",
        start: "2024-09-12T12:30:00",
        end: "2024-09-12T14:30:00",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo odio pariatur? Magni mollitia autem sunt, ipsam at quia omnis nisi aliquid illum amet odit nihil natus possimus aspernatur impedit.",
      },
    {
      title: "Project Review",
      start: "2024-09-13T13:00:00",
      end: "2024-09-13T14:30:00",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus nemo odio pariatur? Magni mollitia autem sunt, ipsam at quia omnis nisi aliquid illum amet odit nihil natus possimus aspernatur impedit.",
    },
  ];

  const handleEventClick = (info) => {
    setPopoverInfo({
      visible: true,
      title: info.event.title,
      start: info.event.start,
      end: info.event.end,
      description: info.event.extendedProps.description, // Access the description here
      content: info.event.extendedProps.content,
      x: info.jsEvent.clientX,
      y: info.jsEvent.clientY,
    });
  };

  const closePopover = () => {
    setPopoverInfo({ ...popoverInfo, visible: false });
  };

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={"90vh"}
        events={events}
        eventClick={handleEventClick}
      />

      {popoverInfo.visible && (
        <div
          className="absolute bg-white p-4 rounded-lg shadow-lg z-50"
          style={{ top: popoverInfo.y, left: popoverInfo.x }}
        >
          <div className="font-bold text-lg flex justify-start items-center">
            <i className="fc-daygrid-event-dot"></i> {popoverInfo.title}
          </div>
          <div className="text-gray-600">
            {popoverInfo.start.toLocaleString()} -{" "}
            {popoverInfo.end.toLocaleString()}
          </div>
          <div className="mt-2">
            <p>{popoverInfo.description}</p> {/* Display description here */}
          </div>
          <button
            onClick={closePopover}
            className="mt-4 text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}

export default Calendar;
