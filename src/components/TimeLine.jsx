import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faIcons, faCopyright, faBullseye, faCompass, faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';

const timelineData = [
  { icon: faIcons, number: 1, title: "Icons", details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?" },
  { icon: faCopyright, number: 2, title: "CopyRight", details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?" },
  { icon: faBullseye, number: 3, title: "Target", details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?" },
  { icon: faCompass, number: 4, title: "Compass", details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?" },
  { icon: faFaceGrinBeamSweat, number: 5, title: "IDK", details: "Lorem ipsum dolor sit amet conse adipisicing elit. Dicta vitae voluptates id hic recusandae omnis cupiditate odit quis, assumenda optio?" },
];

const colors = ['#1d4ed8', '#f59e0b', '#10b981', '#6366f1', '#3b82f6'];

const Timeline = () => {
  return (
    <div className="flex gap-8 w-full h-auto justify-center items-center bg-gray-100 p-8">
      {timelineData.map((item, index) => (
        <div key={index} className="relative group w-36 h-36 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 transition-transform transform hover:scale-110">
          <FontAwesomeIcon icon={item.icon} size="3x" className="text-gray-800" />
          <div className={`absolute w-80 max-h-0 bg-white/30 backdrop-blur-md border border-${colors[index]} rounded-lg shadow-lg transition-all duration-500 top-[-150%] opacity-0 group-hover:max-h-60 group-hover:opacity-100`}>
            <div className="flex items-center justify-center text-2xl font-bold text-${colors[index]} opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {item.number}
            </div>
            <div className="p-4 bg-white/50 backdrop-blur-md border border-${colors[index]} rounded-lg shadow-md opacity-0 text-sm font-medium text-justify group-hover:opacity-100">
              <div className={`text-${colors[index]} pb-2 text-lg font-bold`}>{item.title}</div>
              {item.details}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
