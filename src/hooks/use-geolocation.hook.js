import React, { useEffect, useState } from 'react';

function useGeolocationHook() {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: '', lng: '' }
    });

    function onSuccess(location) {
        setLocation({
            loaded: true,
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    }

    function onError(error) {
        setLocation({
            loaded: true,
            error
        });
    }

    useEffect(() => {
        if (!('geolocation' in navigator)) {
            onError({
                code: 0,
                message: 'Geolocation is not supported',
            });
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, []);


    return location;
}

export default useGeolocationHook;
