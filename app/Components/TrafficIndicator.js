import React from 'react';
import {
  Badge,
  Text
} from 'native-base';

function TrafficIndicator({trafficStatus}) {
  switch(trafficStatus)  {
    case 'L':
      return (
        <Badge success>
          <Text>{trafficStatus}</Text>
        </Badge>
      );
      break;
    case 'M':
      return (
        <Badge warning>
          <Text>{trafficStatus}</Text>
        </Badge>
      );
      break;
    case 'H':
      return (
        <Badge error>
          <Text>{trafficStatus}</Text>
        </Badge>
      );
      break;
  }
}

export default TrafficIndicator;
