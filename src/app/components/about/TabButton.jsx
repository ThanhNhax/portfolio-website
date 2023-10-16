import React from 'react';

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? 'text-white border-b-purple-500'
    : 'text-[#adb7be] border-b-0';
  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold hover:text-white border-b ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
