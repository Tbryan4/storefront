import React from 'react';

import {button} from './styles.module.scss'

function Button ({children, label, ...props})  {
  return (
        <div className={button}>
           {label}
           {children}

        </div>
  )
}

export default Button