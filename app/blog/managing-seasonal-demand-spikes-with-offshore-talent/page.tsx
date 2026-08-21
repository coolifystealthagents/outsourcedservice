import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'managing-seasonal-demand-spikes-with-offshore-talent');
export default function Page(){return renderAug21Article('blog', 'managing-seasonal-demand-spikes-with-offshore-talent')}
