import DepartmentLevelEmployee from './department-level-employee';
import { connect, ConnectedProps} from 'react-redux';
import { State } from '../../types/state';

const mapStateToProps = ({departmentsStructure}: State) => ({
  departmentsStructure,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux;

function Structure({departmentsStructure}: ConnectedComponentProps):JSX.Element {

  return (
    <ol className="structure__levels">
      {Object.keys(departmentsStructure).map((department) => (
        <DepartmentLevelEmployee key={department} />
      ))}
    </ol>
  );
}

export default connector(Structure);
