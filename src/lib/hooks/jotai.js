import { useAtom, atom } from 'jotai';
import { useEffect } from 'react';

const map = {};

/**
 * Hook that returns a state persisted to the local storage.
 * Useful to store application related settings.
 * @param {*} name - The name of the setting
 * @param {*} defaultValue - The default value of the state
 * @param {*} atm - An optional atom to hold the state (you will need this if you use the same state multiple times)
 * @returns
 */
export const useLocalStorage = (name, defaultValue, atm) => {
    if (!atom) throw new Error('No atom passed to useLocalStorage');
    const [value, setValue] = useAtom(atm);
    useEffect(() => {
        const storedValue = localStorage[name];

        try {
            let parsedValue;
            try {
                parsedValue = storedValue
                    ? JSON.parse(storedValue)
                    : defaultValue;
            } catch (e) {
                parsedValue = null;
            }
            if (!storedValue) localStorage[name] = defaultValue;

            if (!map[name]) {
                map[name] = true;
                setValue(parsedValue);
            }
        } catch (e) {
            throw new Error(e);
        }

        return () => {
            map[name] = false;
        };
    }, []);

    const setPersistentValue = (val) => {
        const string = JSON.stringify(val);
        localStorage[name] = string;
        setValue(val);
    };

    return [value, setPersistentValue, setValue];
};
