import React from 'react';
import {
  CardItem,
  Text,
  H3,
  Body,
} from 'native-base';
import {
  Col,
  Row,
  Grid,
} from 'react-native-easy-grid';
import TrafficIndicator from './TrafficIndicator';

function TrafficRouteItem(props) {
  return (
    <CardItem>
      <Body>
        <Grid>
          <Col size={90}>
            <H3>{props.name}</H3>
            <Text>{props.date}</Text>
          </Col>
          <Col size={10}>
            <TrafficIndicator trafficStatus={props.trafficStatus} />
          </Col>
        </Grid>
      </Body>
    </CardItem>
  );
}

export default TrafficRouteItem;
