import FireblazeDatabase from '@fireblaze/database/provider';

const withDestackedDatabase = (Component) => (props) =>
    props.database ? (
        <FireblazeDatabase args={props.database}>
            <Component {...props} />
        </FireblazeDatabase>
    ) : (
        <Component {...props} />
    );

export default withDestackedDatabase;
