import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'evaluating-service-provider-compliance-frameworks');
export default function Page(){return renderAug21Article('blog', 'evaluating-service-provider-compliance-frameworks')}
