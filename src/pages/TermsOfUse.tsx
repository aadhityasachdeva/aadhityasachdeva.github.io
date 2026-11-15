import LegalDocument from '@/components/LegalDocument';
import content from '@/content/terms-of-use.md?raw';

const TermsOfUse = () => <LegalDocument title="Terms of Use" content={content} />;

export default TermsOfUse;
