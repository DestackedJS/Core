import FireblazeMarketing from '@destacked/marketing/provider';

const withDestackedMarketing = (Component) => (props) =>
    props.marketing ? (
        <FireblazeMarketing args={props.marketing}>
            <Component {...props} />
        </FireblazeMarketing>
    ) : (
        <Component {...props} />
    );

export default withDestackedMarketing;
