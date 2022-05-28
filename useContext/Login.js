import React, {useContext} from 'react'
import {appContext} from './contextTutorial'

function user() {
    const {username} = useContext(appContext)
  return (
    <div>
        <input onChange={} />
    </div>
  )
}

export default user