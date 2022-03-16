
import React, {useContext, useState} from 'react';

const mainContext = React.createContext();

export function useMainContext() {
    return useContext(mainContext);
}

export function ContextProvider({children}) {
    //All of the data from NASA EONET
    const [data, setEventData] = useState([]);
    console.log(data)
    //Used to store the event that the user wants to go to
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [targetRealTime, settargetRealTime] = useState(null);
    console.log(selectedEvent)
    //Need to re-render markers because user has changed filer option
    const [reRenderMarkers, setReRenderMarkers] = useState(null);


    const value = {
        data,
        setEventData,
        selectedEvent,
        setSelectedEvent,
        targetRealTime,
        settargetRealTime,
        reRenderMarkers,
        setReRenderMarkers
    }

    return(
        <mainContext.Provider value={value}>
        {children}
        </mainContext.Provider>
    )
}
