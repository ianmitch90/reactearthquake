import React, { Component } from 'react';
import '../styles/App.css';
import Clock from 'react-live-clock';
import EarthquakeList from './EarthquakeList'
import EarthquakeInfo from './EarthquakeInfo'


class App extends Component {


  constructor (props) {
    super(props)

    this.state = {
      earthquakes: {
        features: []
      }
    }
  }
  //mount w/ api and then set the new state from above with api info
  componentWillMount () {
      fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
      .then(r => r.json())
      .then(json => {
        this.setState({
          earthquakes: json
        })

      })
      //intervalllllllllll!!!
      this.interval = setInterval(() => {
        fetch('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson')
        .then(r => r.json())
        .then(json => {
          this.setState({
            earthquakes: json
          })
          console.log('updated with entire dataset!', json)
        })
      }, 20000)
    }
    //must clear old data out after refresh
    componentWillUnmount () {
      clearInterval(this.interval)
    }
  render () {
    return (
      <div className='App'>
        <div className='title'>
          <div className='my-header'>
            Whats shaking? Earthquake!
          </div>
          <EarthquakeInfo earthquakes={this.state.earthquakes} />
                      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} className='time' />
        </div>
        <EarthquakeList earthquakes={this.state.earthquakes} />
      </div>
    )
  }
}

export default App;
