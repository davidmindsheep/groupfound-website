import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 text-foreground-secondary">
            <p>
              <strong className="text-foreground">Last updated:</strong> April
              2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using GroupFound, you agree to be bound by these
              Terms of Service. If you do not agree to these terms, please do
              not use our services.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              2. Description of Service
            </h2>
            <p>
              GroupFound is a social platform that enables users to connect
              through interest-based Circles, track personal growth habits, and
              use AI-powered tools for profile management and networking.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              3. User Accounts
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities that occur under your
              account.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              4. User Content
            </h2>
            <p>
              You retain ownership of content you post on GroupFound. By posting
              content, you grant us a licence to display and distribute it
              within the platform as necessary to provide the service.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              5. Acceptable Use
            </h2>
            <p>
              You agree not to use GroupFound for any unlawful purpose, to
              harass or harm others, or to post content that is abusive,
              defamatory, or otherwise objectionable.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              6. Limitation of Liability
            </h2>
            <p>
              GroupFound is provided "as is" without warranties of any kind. We
              shall not be liable for any indirect, incidental, or consequential
              damages arising from your use of the platform.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              7. Contact
            </h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href="mailto:contact@groupfound.com"
                className="text-solar-orange hover:underline"
              >
                contact@groupfound.com
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
