import React from 'react'

import HeaderContext from '../../store/headerContext'

export default () => (
    <header>
      <h1 class="logo">ADhere</h1>
      <HeaderContext.Consumer>
        {
          value => <p>{value}</p>
        }
      </HeaderContext.Consumer>
      <p class="username">Lise Boulot</p>
    </header>
)
