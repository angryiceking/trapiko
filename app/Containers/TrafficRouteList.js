import React, { Component } from 'react';
import { Card } from 'native-base';
import TrafficRouteItem from 'app/Components/TrafficRouteItem';

class TrafficRouteList extends Component {
  render() {
    return (
      <Card>
        <TrafficRouteItem
          name="EDSA - Mall of Asia"
          trafficStatus="L"
          date="Monday July 18, 2017" />
        <TrafficRouteItem
          name="EDSA - Macapagal Avenue"
          trafficStatus="M"
          date="Monday July 18, 2017"
        />
        <TrafficRouteItem
          name="EDSA - Roxas Boulevard"
          trafficStatus="H"
          date="Monday July 18, 2017"
        />
      </Card>
    );
  }
}

export default TrafficRouteList;
