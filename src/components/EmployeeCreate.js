import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm'

//Componente formulário de criação de funcionários para cadastro
class EmployeeCreate extends Component {

  onButtonPress() {
    const { name, phone, address } = this.props;
    this.props.employeeCreate({ name, phone, address });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button onClick={this.onButtonPress.bind(this)} >
            Cadastrar
          </Button>
        </CardSection>
     </Card>
    );
  }
}
//Exporatação dos dados no formulário
const mapStateToProps = (state) => {
  const { name, phone, address } = state.employeeForm;

  return { name, phone, address };
};

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
