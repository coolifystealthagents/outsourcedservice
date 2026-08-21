import type { Metadata } from 'next';
import { getAug21Metadata, renderAug21Article } from '../../aug21-content';
export const metadata: Metadata = getAug21Metadata('blog', 'service-delivery-knowledge-transfer-gates');
export default function Page(){return renderAug21Article('blog', 'service-delivery-knowledge-transfer-gates')}
