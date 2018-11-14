import React, { useEffect, useState } from 'react';

function WindowResize() {
  const width = useHandleWindowWidth();
  const clickCount = useClickCount();
  useWindowTitle(`Clicked ${clickCount.title} times`);
  
  return (
    <div>
      <div>{width}</div>
      <button onClick={clickCount.onClick}>{clickCount.title}</button>
    </div>
  )
}

export default WindowResize;

function useHandleWindowWidth () {
  const [width, setWidth] = useState(window.innerWidth);
  
  const handleWindowWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowWidth());

    return () => window.removeEventListener('resize', handleWindowWidth)
  }, [width])

  return width;
}

function useWindowTitle (width) {
  useEffect(() => {
    document.title = width;
  }, [width])
}

function useClickCount() {
  const [count, setCount] = useState(0);
  return {
    title: count,
    onClick: () => setCount(count + 1),
  }
}
