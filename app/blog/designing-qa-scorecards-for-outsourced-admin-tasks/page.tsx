import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'designing-qa-scorecards-for-outsourced-admin-tasks');
export default function Page(){return renderAug21Article('blog', 'designing-qa-scorecards-for-outsourced-admin-tasks')}
