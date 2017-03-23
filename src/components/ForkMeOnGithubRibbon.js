import React from 'react'

const PROJECT_URL = 'https://github.com/alanrsoares/redux-game-of-life'

const ribbon = (
  <div className='github-fork-ribbon'>
    <a href={PROJECT_URL}>Fork me on Github</a>
  </div>
)

export default () => (
  <div>
    <div className='github-fork-ribbon-wrapper right-bottom visible-xs'>
      {ribbon}
    </div>
    <div className='github-fork-ribbon-wrapper right hidden-xs'>
      {ribbon}
    </div>
  </div>
)
