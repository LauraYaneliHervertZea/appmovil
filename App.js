import React from 'react';
import {StyleSheet} from 'react-native'
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item, Label, Input, Icon} from "native-base";
const App: () => React$Node =() => {
  return (

    <Container>
        <Header />
        <Content padder contentContainerStyle = {misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style= {misEstilos.textCenter}>Registrarte, es gratis.</Text>
            </CardItem>
            <CardItem bordered>
              <Body style = {misEstilos.body}>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'envelope'></Icon>
                  <Input placeholder= 'E-mail'/>
                </Item>
                <Item inlineLabel>
                <Icon type= 'FontAwesome' name= 'user'></Icon>
                  <Input placeholder= 'Nombre de usuraio'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Contraseña'/>
                </Item>
                <Item inlineLabel last>
                <Icon type= 'FontAwesome' name= 'lock'></Icon>
                  <Input placeholder= 'Confirmar contraseña'/>
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
             <Icon type= 'FontAwesome' name= 'facebook-square'></Icon> 
             <Icon/>
             <Icon type= 'FontAwesome' name= 'google'></Icon>
              <Button primary style ={misEstilos.boton}><Text> Ingresar</Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>



  );
};

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton: {
    marginLeft: '46%',
  },
  body: {
    paddingVertical: 35,
  }
  
  



});

export default App;
