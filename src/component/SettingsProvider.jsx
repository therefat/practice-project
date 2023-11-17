import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'


export const SettingsContext = createContext()

function SettingsProvider({children}) {
    const [settingData,setSettingData] = useState();
    useEffect(() => {
        axios.get('settings?platform=web')
        .then(response => {
            setSettingData(response.data)
        })
    },[])
  return (
    <SettingsContext.Provider value={settingData}>
        {children}
    </SettingsContext.Provider>
  )
}

export default SettingsProvider