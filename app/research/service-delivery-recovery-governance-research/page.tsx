import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('research','service-delivery-recovery-governance-research');
export default function Page(){return renderAug20Article('research','service-delivery-recovery-governance-research')}
