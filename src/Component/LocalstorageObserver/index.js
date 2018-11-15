import React from 'react'
import useLocalStorageObserver from '../../Hooks/useLocalStorageObserver';

function LocalStorageObserver() {
  const localStorage = useLocalStorageObserver('testrer');

  return (
    <div>{localStorage}</div>
  )
}

export default LocalStorageObserver;