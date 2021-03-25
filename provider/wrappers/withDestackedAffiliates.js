import DestackedAffiliates from '@destacked/affiliates/provider';

const withDestackedAffiliates = (Component) => (props) =>
    props.affiliates ? (
        <DestackedAffiliates args={props.affiliates}>
            <Component {...props} />
        </DestackedAffiliates>
    ) : (
        <Component {...props} />
    );

export default withDestackedAffiliates;
