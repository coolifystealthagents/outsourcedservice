import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'outsourced-service-team-metrics-alignment');
export default function Page(){return renderAug21Article('blog', 'outsourced-service-team-metrics-alignment')}
