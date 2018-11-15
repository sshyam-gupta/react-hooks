import { useEffect, useState } from 'react'

/**
 * Wraps `Observe Localstorage`. Triggers when localstorage with specified key updates.
 * @param {string} key localstorage key
 * @return {any}
 */

const getValueFromLocalStorage = (key) => {
  return new Promise(
    (resolve, reject) => {
      try {
        resolve(localStorage.getItem(key));
      } catch (reason) {
        reject(reason);
      }
    }
  );
}

export default function useLocalStorageObserver(key) {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      try {
        getValueFromLocalStorage(key)
          .then(valueRetrieved => {
            if (value !== valueRetrieved) {
              console.groupCollapsed(`'${key}' state changed`);
              console.log('%cprev', 'font-weight: bold; color: red;', value);
              console.log('%cnext', 'font-weight: bold; color: orange;', valueRetrieved);
              console.groupEnd();

              setValue(valueRetrieved);
            }
        });
      } catch (er) {
        console.error(er);
        setValue(null);
      }
    }, 500);

    return () => clearInterval(id);
  }, [value]);

  return value;
}