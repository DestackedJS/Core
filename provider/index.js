import compose from 'compose-function';

import { FireblazeInterface } from '@fireblaze/interface';
import { FireblazeDatabase } from '@fireblaze/database';
import { FireblazeMembers } from '@fireblaze/members';
import { FireblazeMarketing } from '@fireblaze/marketing';
import { FireblazeAffiliates } from '@fireblaze/affiliates';

const Fireblaze = (props) => props.children;

const withFireblazeInterface = (Component) => (props) => {
    return props.interface ? (
        <FireblazeInterface args={props.interface}>
            <Component {...props} />
        </FireblazeInterface>
    ) : (
        <Component {...props} />
    );
};

const withFireblazeDatabase = (Component) => (props) =>
    props.database ? (
        <FireblazeDatabase args={props.database}>
            <Component {...props} />
        </FireblazeDatabase>
    ) : (
        <Component {...props} />
    );

const withFireblazeMembers = (Component) => (props) =>
    props.members ? (
        <FireblazeMembers args={props.members}>
            <Component {...props} />
        </FireblazeMembers>
    ) : (
        <Component {...props} />
    );

const withFireblazeMarketing = (Component) => (props) =>
    props.marketing ? (
        <FireblazeMarketing args={props.marketing}>
            <Component {...props} />
        </FireblazeMarketing>
    ) : (
        <Component {...props} />
    );

const withFireblazeAffiliates = (Component) => (props) =>
    props.affiliates ? (
        <FireblazeAffiliates args={props.affiliates}>
            <Component {...props} />
        </FireblazeAffiliates>
    ) : (
        <Component {...props} />
    );

export default compose(
    withFireblazeInterface,
    withFireblazeDatabase,
    withFireblazeMembers,
    withFireblazeAffiliates,
    withFireblazeMarketing
)(Fireblaze);
