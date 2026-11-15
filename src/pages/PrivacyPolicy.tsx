import LegalDocument from '@/components/LegalDocument';
import content from '@/content/privacy-policy.md?raw';

const PrivacyPolicy = () => <LegalDocument title="Privacy Policy" content={content} />;

export default PrivacyPolicy;
