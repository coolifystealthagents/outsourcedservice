import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('research', 'service-delivery-tooling-fragmentation-research');
export default function Page(){return renderAug21Article('research', 'service-delivery-tooling-fragmentation-research')}
