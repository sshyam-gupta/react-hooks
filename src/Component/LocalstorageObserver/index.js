import React from 'react'
import useLocalStorageObserver from '../../Hooks/useLocalStorageObserver';

function LocalStorageObserver() {
  const localStorage = useLocalStorageObserver('testrer');
  console.log('localStorage: ', localStorage);

  return (
    <div>{JSON.stringify(localStorage)}</div>
  )
}

export default LocalStorageObserver;