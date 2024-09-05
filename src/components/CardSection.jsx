import React from 'react';
import { FaTree, FaTint } from 'react-icons/fa';
import { FaDroplet } from "react-icons/fa6";

const iconStyle = {
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const iconHoverStyle = {
  transform: 'scale(1.1)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const iconTextStyle = {
  transition: 'color 0.3s ease',
};

const CardSection = () => {
  return (
    <>
      <section className="text-center mb-12 text-8xl text-amber-700">
        <p className="text-xxl font-bold ">One Year of</p>
        <p className="text-xxl font-bold ">Receipts Takes</p>
      </section>

      <section className="flex flex-wrap justify-center gap-6 pb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative">
          <div
            className="w-20 h-20 flex items-center justify-center bg-gray-800 rounded-full mb-4"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.querySelector('.icon').style.color = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('.icon').style.color = 'white';
            }}
          >
            <FaDroplet className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            250
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Million
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center mt-4 text-gray-800">
            Gallons of oil
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative">
          <div
            className="w-20 h-20 flex items-center justify-center bg-green-700 rounded-full mb-4"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.querySelector('.icon').style.color = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('.icon').style.color = 'white';
            }}
          >
            <FaTree className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            10
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Million
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center mt-4 text-gray-800">
            Trees cut
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col items-center max-w-xs w-64 h-80 relative">
          <div
            className="w-20 h-20 flex items-center justify-center bg-blue-500 rounded-full mb-4"
            style={iconStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.querySelector('.icon').style.color = '#f9f9f9';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.querySelector('.icon').style.color = 'white';
            }}
          >
            <FaTint className="icon text-white text-4xl" style={iconTextStyle} />
          </div>
          <div className="text-4xl font-bold text-gray-800 mb-2">
            20
          </div>
          <div className="text-2xl font-bold text-gray-800 mb-2">
            Billion
          </div>
          <div className="border-t-2 border-gray-200 w-full mt-2"></div>
          <div className="flex items-center justify-center mt-4 text-gray-800">
            Liters of water
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSection;
