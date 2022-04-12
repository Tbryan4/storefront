import React from 'react';

import Styles from './styles.module.css'

function Button ({children, label, ...props})  {
  return (
        <div className={Styles.button}>
           {label}
           {children}

        </div>
  )
}

export default Button