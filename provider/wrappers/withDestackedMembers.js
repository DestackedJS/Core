import FireblazeMembers from '@fireblaze/members/provider';

const withDestackedMembers = (Component) => (props) =>
    props.members ? (
        <FireblazeMembers args={props.members}>
            <Component {...props} />
        </FireblazeMembers>
    ) : (
        <Component {...props} />
    );

export default withDestackedMembers;
