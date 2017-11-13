import React from 'react';
import { Jumbotron, Button, Table, Label } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <div className="text-white">
        <div className="mx-5 img-responsive phones float-right" >
        <img src={require('./images/phones.png')} />
        <br /><br />
        <Button color="secondary float-right text-center mt-2 grey-bg" size="lg" ><strong>Download</strong></Button>
        </div>
        <div>
        <h1  className="mt-5 mx-5 ">Lorem ipsum</h1>
        <p className="mx-5">  sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <h1  className="mt-5 mx-5">Dolor Sit Amet</h1>
        <p className="mx-5">  sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <h1 className="text-center mt-5"><em><strong>Nunc ut Libeo</strong></em></h1>
<div className="row mx-5">

        <Table>

        <tbody>
          <tr>
            <th scope="row">Title:</th>
            <td colspan="2">Test App</td>
          </tr>
          <tr>
            <th scope="row">Description:</th>
            <td colspan="2">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</td>
          </tr>
          <tr>
            <th scope="row">Test URL:</th>
            <td colspan="2">arteric-test.firebaseapp.com</td>
          </tr>
          <tr>
          <th scope="row">Versions:</th>
          <td className="text-center">Version 1</td>
          <td className="text-center">Version 2</td>
        </tr>
        </tbody>
      </Table>
      <div>
      <Button outline color="secondary" className="white-bg span5 align-left p-5"><h3>Download Version 1</h3></Button>
      <Button outline color="secondary" className="white-bg span5 align-right p-5"><h3>Download Version 2</h3></Button>
      </div>
      </div>


      </div>
      </div>



    );
  }
}