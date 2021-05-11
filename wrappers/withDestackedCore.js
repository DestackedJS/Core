import DestackedCore from '@destacked/core/provider';

const withDestackedCore = (Component) => (props) =>
    (
        <DestackedCore args={props.core}>
            <Component {...props} />
        </DestackedCore>
    );

export default withDestackedCore;
