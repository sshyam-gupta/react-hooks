import React, { useEffect, useState } from 'react';

function WindowResize() {
  const width = useHandleWindowWidth();
  const clickCount = useClickCount();
  useWindowTitle(`Clicked ${clickCount.title} times`);
  
  return (
    <div>
      <div>{`Current window width: ${width}`}</div>
      <button
        className="frow-container mb-15 mt-15"
        onClick={clickCount.onClick}
      >
        {`Clicked ${clickCount.title} times`}
      </button>
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
