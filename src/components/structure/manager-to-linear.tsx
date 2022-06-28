import { ConnectedProps, connect } from 'react-redux';
import { State } from '../../types/state';
import LinearLevelEmployee from './linear-level-employee';

type ManagerToLinearProps = {
  departmentName: string,
  managerStructure: number[],
};

const mapStateToProps = ({departmentsStructure}: State) => ({
  departmentsStructure,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & ManagerToLinearProps;

function ManagerToLinear({departmentName, departmentsStructure, managerStructure}: ConnectedComponentProps):JSX.Element {

  return (
    <>
      {managerStructure.slice(1).map((item) => (
        <LinearLevelEmployee key={item} departmentName={departmentName} managerStructure={managerStructure} linearEmployee={item}/>
      ))}
    </>

  );
}

export default connector(ManagerToLinear);
