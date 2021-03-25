import DestackedMarketing from '@destacked/marketing/provider';

const withDestackedMarketing = (Component) => (props) =>
    props.marketing ? (
        <DestackedMarketing args={props.marketing}>
            <Component {...props} />
        </DestackedMarketing>
    ) : (
        <Component {...props} />
    );

export default withDestackedMarketing;
