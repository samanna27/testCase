import { ConnectedProps, connect } from 'react-redux';
import { State } from '../../types/state';
import ManagerLevelEmployee from './manager-level-employee';

type DepartmentToManagerProps = {
  departmentName: string,
};

const mapStateToProps = ({departmentsStructure}: State) => ({
  departmentsStructure,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & DepartmentToManagerProps;

function DepartmentToManager({departmentName, departmentsStructure}: ConnectedComponentProps):JSX.Element {

  return (
    <>
      {departmentsStructure[departmentName].slice().map((item) => (
        <ManagerLevelEmployee key={item[0]} departmentName={departmentName} managerStructure={item}/>
      ))}
    </>

  );
}

export default connector(DepartmentToManager);
