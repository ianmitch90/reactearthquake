import React, { Component } from 'react'
/*build list that populates by looping over using map*/
import moment from 'moment'

class EarthquakeList extends Component {

  render () {
    return (
      <div className='quake-list'>
        <div className='row'>
          {this.props.earthquakes.features.map(quake => {
            return <div className='cardigan' key={quake.id}>
              <div className='card' >
                <div className='cardBlock'>
                  <h1 className='cardTitle'>{quake.properties.place}</h1>
                  <h2 className='cardStuff'>Magnitude: {quake.properties.mag}</h2>
                  <h3 className='cardStuff'>Time: {moment(quake.properties.time).format('LLLL')}</h3>
                  <p className='cardStuff'>Coordinates: {quake.geometry.coordinates}</p>
                  <a href={quake.properties.url} className='cardLink'>USGS Event Link</a>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    )
  }
}
export default EarthquakeList
