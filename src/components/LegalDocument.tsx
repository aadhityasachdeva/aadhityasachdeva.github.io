import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface LegalDocumentProps {
  content: string;
  title: string;
}

const LegalDocument = ({ content, title }: LegalDocumentProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = `${title} | Askit India`;
    return () => { document.title = previousTitle; };
  }, [title]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navigation />
      <main className="px-4 pb-16 pt-28 md:pt-32">
        <div className="mx-auto max-w-4xl">
          <nav aria-label="Legal documents" className="mb-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-border pb-5 text-sm">
            <Link to="/privacy-policy" aria-current={title === 'Privacy Policy' ? 'page' : undefined} className="text-primary hover:underline">Privacy Policy</Link>
            <Link to="/terms-of-use" aria-current={title === 'Terms of Use' ? 'page' : undefined} className="text-primary hover:underline">Terms of Use</Link>
          </nav>
          <article className="space-y-5 break-words leading-relaxed">
            <ReactMarkdown components={{
              h1: ({ children }) => <h1 className="mb-6 text-3xl font-bold font-poppins md:text-5xl">{children}</h1>,
              h2: ({ children }) => <h2 className="pt-6 text-xl font-semibold font-poppins md:text-2xl">{children}</h2>,
              p: ({ children }) => <p className="whitespace-pre-line text-muted-foreground">{children}</p>,
              ul: ({ children }) => <ul className="list-disc space-y-2 pl-6 text-muted-foreground">{children}</ul>,
              strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
              a: ({ href, children }) => <a href={href} className="text-primary underline underline-offset-4">{children}</a>,
            }}>{content}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalDocument;