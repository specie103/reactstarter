import React, {useContext} from 'react'
import {appContext} from './contextTutorial'

function user() {
    const {username} = useContext(appContext)
  return (
    <div>user : {username}</div>
  )
}

export default user