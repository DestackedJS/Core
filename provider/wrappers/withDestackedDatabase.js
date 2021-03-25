import DestackedDatabase from '@destacked/database/provider';

const withDestackedDatabase = (Component) => (props) =>
    props.database ? (
        <DestackedDatabase args={props.database}>
            <Component {...props} />
        </DestackedDatabase>
    ) : (
        <Component {...props} />
    );

export default withDestackedDatabase;
