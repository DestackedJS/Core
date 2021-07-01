import compose from 'compose-function';
import { withDestackedDatabase } from '@destacked/database';
import { withDestackedMembers } from '@destacked/members';
import { withDestackedInterface } from '@destacked/interface';
import { withDestackedBlocks } from '@destacked/blocks';
import { withDestackedMarketing } from '@destacked/marketing';
import { withDestackedAffiliates } from '@destacked/affiliates';
import { withDestackedSupport } from '@destacked/support';
import { withDestackedPay } from '@destacked/pay';
import { withDestackedGamification } from '@destacked/gamification';

import { withDestackedCore, useDestackedCore } from './provider';

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
    withDestackedBlocks,
    withDestackedMarketing,
    withDestackedAffiliates,
    withDestackedSupport,
    withDestackedPay,
    withDestackedGamification
)(Destacked);
