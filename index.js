import compose from 'compose-function';

import withDestackedCore from './wrappers/withDestackedCore';
import withDestackedDatabase from './wrappers/withDestackedDatabase';
import withDestackedMembers from './wrappers/withDestackedMembers';
import withDestackedInterface from './wrappers/withDestackedInterface';
import withDestackedAffiliates from './wrappers/withDestackedAffiliates';
import withDestackedMarketing from './wrappers/withDestackedMarketing';
import withDestackedPay from './wrappers/withDestackedPay';
import { useDestackedCore } from './provider';

/**
 * Core
 */

const Destacked = ({ children }) => children;

/**
 *
 */

export { useDestackedCore };
export default compose(
    withDestackedCore,
    withDestackedDatabase,
    withDestackedMembers,
    withDestackedInterface,
    withDestackedAffiliates,
    withDestackedMarketing,
    withDestackedPay
)(Destacked);
