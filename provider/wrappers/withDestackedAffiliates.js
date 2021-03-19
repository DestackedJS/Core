import FireblazeAffiliates from '@fireblaze/affiliates/provider';

const withDestackedAffiliates = (Component) => (props) =>
    props.affiliates ? (
        <FireblazeAffiliates args={props.affiliates}>
            <Component {...props} />
        </FireblazeAffiliates>
    ) : (
        <Component {...props} />
    );

export default withDestackedAffiliates;
