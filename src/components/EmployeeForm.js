import React, { Component } from 'react';
import { Text, View, Picker } from 'react-native'
import { connect } from 'react-redux';
import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';

//Formulário de cadastro
class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Nome"
            placeholder="Nome"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Telefone"
            placeholder="55 55555 5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Endereço"
            placeholder="Rua X Número YYY"
            value={this.props.address}
            onChangeText={value => this.props.employeeUpdate({ prop: 'address', value })}
          />
        </CardSection>


      </View>
    );
  }
};

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, address } = state.employeeForm;
  return { name, phone, address };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeForm);
