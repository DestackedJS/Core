import DestackedInterface from '@destacked/interface/provider';

const withDestackedInterface = (Component) => (props) =>
    props.interface ? (
        <DestackedInterface args={props.interface}>
            <Component {...props} />
        </DestackedInterface>
    ) : (
        <Component {...props} />
    );

export default withDestackedInterface;
