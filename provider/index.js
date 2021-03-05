import compose from 'compose-function';

import FireblazeInterface from '@fireblaze/interface/provider';
import FireblazeDatabase from '@fireblaze/database/provider';
import FireblazeMembers from '@fireblaze/members/provider';
import FireblazeMarketing from '@fireblaze/marketing/provider';
import FireblazeAffiliates from '@fireblaze/affiliates/provider';

const Fireblaze = (props) => props.children;

const withFireblazeInterface = (Component) => (props) =>
    props.interface ? (
        <FireblazeInterface args={props.interface}>
            <Component {...props} />
        </FireblazeInterface>
    ) : (
        <Component {...props} />
    );

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
    withFireblazeDatabase,
    withFireblazeMembers,
    withFireblazeInterface,
    withFireblazeAffiliates,
    withFireblazeMarketing
)(Fireblaze);
