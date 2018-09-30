import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ backgroundColor: '#FFF' }}>
      <Scene key="root" hideNavBar>
        <Scene key="auth" initial title="Login">
          <Scene key="login" component={LoginForm} />
        </Scene>

        <Scene key="main">
          <Scene
            initial
            key="employeeList"
            component={EmployeeList}
            title="Funcionários"
            rightTitle="Adicionar"
            onRight={() => Actions.employeeCreate()}
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Cdastrar funcionário"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Editar funcionário"
          />
        </Scene>
      </Scene>
    </Router>
  );
}

export default RouterComponent;
