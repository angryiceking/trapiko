import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import {
  Container,
  Header,
  Left,
  Title,
  Button,
  Icon,
  Body,
  Right,
  Content,
  Text,
} from 'native-base';
import TrafficRouteList from './Containers/TrafficRouteList';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Trapiko</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <TrafficRouteList />
        </Content>
      </Container>
    );
  }
}

export default App;
