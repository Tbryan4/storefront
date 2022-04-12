import React from 'react';

import Styles from './styles.module.css'

function User ({children,name,username,email, ...props})  {
  return (
        <aside className={Styles.user}>
           <header>
             <h2>{name}</h2>
             <p>{username}</p>
           </header>
           <p>{email}</p>

        </aside>
  )
}

export default User