import React, { useState, useEffect } from 'react';

function APICall() {
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoader(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((res) => {
      setData(res);
      setLoader(false);
    })
    .catch(err => {
      setError(err);
      setLoader(false);
    });
  }, []);

  if (loader) {
    return <div>Loading ...</div>
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>
  }

  return (
    <div>{data && data.map(res => (
      <div className="frow text-capitalize" key={res.id}>{`${res.id}. ${res.title}`}</div>
    ))}</div>
  )
}

export default APICall;