import {useState, useEffect} from 'react';

export default () => {
    // Attach state hooks.
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // As we want to invoke arrow function just once (componentDidMount behavior)
    // we putting [] as a second param as a fixed value which not be changed
    // at any point of time.
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []);

    // Return the value.
    return [lat, errorMessage];
};