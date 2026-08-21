import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'philippines-outsourcing-incident-response-playbook');
export default function Page(){return renderAug21Article('blog', 'philippines-outsourcing-incident-response-playbook')}
