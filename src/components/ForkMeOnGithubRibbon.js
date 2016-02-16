import React from 'react'

const PROJECT_URL = 'https://github.com/alanrsoares/redux-game-of-life'

export default () =>
  <div>
    <div className='github-fork-ribbon-wrapper right-bottom visible-xs'>
      <div className='github-fork-ribbon'>
        <a href={PROJECT_URL}>Fork me on Github</a>
      </div>
    </div>
    <div className='github-fork-ribbon-wrapper right hidden-xs'>
      <div className='github-fork-ribbon'>
        <a href={PROJECT_URL}>Fork me on Github</a>
      </div>
    </div>
  </div>
