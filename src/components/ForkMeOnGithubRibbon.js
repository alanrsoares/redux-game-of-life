import React from 'react'

const PROJECT_URL = 'https://github.com/alanrsoares/redux-game-of-life'

export default class ForkMeOnGithubRibbon extends React.Component {
  render () {
    return (
      <div>
        <div className='github-fork-ribbon-wrapper right-bottom visible-xs'>
          {this.renderRibbon()}
        </div>
        <div className='github-fork-ribbon-wrapper right hidden-xs'>
          {this.renderRibbon()}
        </div>
      </div>
    )
  }

  renderRibbon () {
    return (
      <div className='github-fork-ribbon'>
        <a href={PROJECT_URL}>Fork me on Github</a>
      </div>
    )
  }
}
