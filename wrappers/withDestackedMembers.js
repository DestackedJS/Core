import DestackedMembers from '@destacked/members/provider';

const withDestackedMembers = (Component) => (props) =>
    props.members ? (
        <DestackedMembers args={props.members}>
            <Component {...props} />
        </DestackedMembers>
    ) : (
        <Component {...props} />
    );

export default withDestackedMembers;
