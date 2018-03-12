import React, { Component } from 'react'
/*get the number of earthquakes using data*/
class EarthquakeInfo extends Component {

  render () {
    return (
      <div className='supertitle'>
        {this.props.earthquakes.features.length > 0 &&
          <div>This is a list of {this.props.earthquakes.features.length} Earthquakes occurring in the last hour across the United States.
          </div>
        }
      </div>
    )
  }
}
export default EarthquakeInfo
