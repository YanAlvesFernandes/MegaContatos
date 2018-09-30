import _ from 'lodash';
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

//Lstagem de funcionários
class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  renderItem({ item }) {
    return <ListItem employee={item} />
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.uid}
      />
    );
  }
};

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return  { ...val, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
