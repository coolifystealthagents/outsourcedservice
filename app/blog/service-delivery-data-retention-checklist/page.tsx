import type { Metadata } from 'next';
import { getAug20Metadata, renderAug20Article } from '../../aug20-content';
export const metadata: Metadata = getAug20Metadata('blog','service-delivery-data-retention-checklist');
export default function Page(){return renderAug20Article('blog','service-delivery-data-retention-checklist')}
