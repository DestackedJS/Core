import compose from 'compose-function';

/**
 * Import the module extensions.
 */

import withDestackedDatabase from './wrappers/withDestackedDatabase';
import withDestackedMembers from './wrappers/withDestackedMembers';
import withDestackedInterface from './wrappers/withDestackedInterface';
import withDestackedAffiliates from './wrappers/withDestackedAffiliates';
import withDestackedMarketing from './wrappers/withDestackedMarketing';

/**
 * Create the core component.
 *
 * @param {*} props
 * @returns
 */

const Destacked = (props) => props.children;

/**
 * Compose and export the Destacked core.
 */

export default compose(
    /**
     * Chain "Destacked Database" providers.
     */

    (chain) => {
        try {
            require.resolve('@fireblaze/database');
            return withDestackedDatabase(chain);
        } catch (e) {
            return chain;
        }
    },

    /**
     * Chain "Destacked Members" providers.
     */

    (chain) => {
        try {
            require.resolve('@fireblaze/members');
            return withDestackedMembers(chain);
        } catch (e) {
            return chain;
        }
    },

    /**
     * Chain "Destacked Interface" providers.
     */

    (chain) => {
        try {
            require.resolve('@fireblaze/interface');
            return withDestackedInterface(chain);
        } catch (e) {
            return chain;
        }
    },

    /**
     * Chain "Destacked Affiliates" providers.
     */

    (chain) => {
        try {
            require.resolve('@destacked/affiliates');
            return withDestackedAffiliates(chain);
        } catch (e) {
            return chain;
        }
    },

    /**
     * Chain "Destacked Marketing" providers.
     */

    (chain) => {
        try {
            require.resolve('@fireblaze/marketing');
            return withDestackedMarketing(chain);
        } catch (e) {
            return chain;
        }
    }
)(Destacked);
