import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'establishing-data-privacy-guardrails-for-remote-teams');
export default function Page(){return renderAug21Article('blog', 'establishing-data-privacy-guardrails-for-remote-teams')}
