import FireblazeInterface from '@fireblaze/interface/provider';

const withDestackedInterface = (Component) => (props) =>
    props.interface ? (
        <FireblazeInterface args={props.interface}>
            <Component {...props} />
        </FireblazeInterface>
    ) : (
        <Component {...props} />
    );

export default withDestackedInterface;
