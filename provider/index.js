import compose from 'compose-function';

/**
 * Import the module extensions.
 */

import withDestackedDatabase from './wrappers/withDestackedDatabase';
import withDestackedMembers from './wrappers/withDestackedMembers';
import withDestackedInterface from './wrappers/withDestackedInterface';
import withDestackedAffiliates from './wrappers/withDestackedAffiliates';
import withDestackedMarketing from './wrappers/withDestackedMarketing';
import withDestackedPay from './wrappers/withDestackedPay';

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
    withDestackedDatabase,
    withDestackedMembers,
    withDestackedInterface,
    withDestackedAffiliates,
    withDestackedMarketing,
    withDestackedPay
)(Destacked);
