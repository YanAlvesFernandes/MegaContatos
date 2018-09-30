import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeSave, employeeUpdate, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';
//Formulário para edição de funcionários
class EmployeeEdit extends Component {
  state = { showModal: false };

  //Recebendo os dados 
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onTextPress() {
    const { phone, address } = this.props;

    Communications.text(address, `Seu endereço e: ${address}`);
  }

  onButtonPress() {
    const { name, phone, address } = this.props;
    this.props.employeeSave({ name, phone, address, uid: this.props.employee.uid });
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.employeeDelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Fire Employee
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    )
  }
}

//Exportação dos dados alterados no formulário
const mapStateToProps = (state) => {
  const { name, phone, address } = state.employeeForm;

  return { name, phone, address };
}

export default connect(mapStateToProps, { employeeSave, employeeUpdate, employeeDelete })(EmployeeEdit);
