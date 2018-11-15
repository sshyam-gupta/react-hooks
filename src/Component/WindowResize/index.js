import React, { useEffect, useState } from 'react';

export function useHandleWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth());

    return () => window.removeEventListener('resize', handleWindowWidth)
  })

  return width;
}

function WindowResize() {
  const width = useHandleWindowWidth();
  const clickCount = useClickCount();
  useWindowTitle(`Clicked ${clickCount.title} times`);
  
  return (
    <div>
      <div>Current window width: {width}</div>
      <button
        className="frow-container mb-15 mt-15"
        onClick={clickCount.onClick}
      >Clicked {clickCount.title} times</button>
    </div>
  )
}

export default WindowResize;


function useWindowTitle (title) {
  useEffect(() => {
    document.title = title;
  }, [title])
}

function useClickCount() {
  const [count, setCount] = useState(0);
  return {
    title: count,
    onClick: () => setCount(count + 1),
  }
}
