import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'building-a-philippines-based-data-reconciliation-team');
export default function Page(){return renderAug21Article('blog', 'building-a-philippines-based-data-reconciliation-team')}
