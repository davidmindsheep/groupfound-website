import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert max-w-none space-y-6 text-foreground-secondary">
            <p>
              <strong className="text-foreground">Last updated:</strong> April
              2026
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              1. Information We Collect
            </h2>
            <p>
              When you join our waitlist, we collect your email address. When the
              app launches, we will collect additional information necessary to
              provide the service, including profile information, usage data, and
              content you create.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              2. How We Use Your Information
            </h2>
            <p>
              We use your information to provide and improve our services,
              communicate with you about updates and launches, and personalise
              your experience through features like Mirror AI.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              3. Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may share data with
              service providers who help us operate the platform, subject to
              strict confidentiality agreements.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              4. Data Security
            </h2>
            <p>
              We implement appropriate technical and organisational measures to
              protect your personal data against unauthorised access, alteration,
              or destruction.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              5. Your Rights
            </h2>
            <p>
              You have the right to access, correct, or delete your personal
              data. Contact us at{" "}
              <a
                href="mailto:contact@groupfound.com"
                className="text-solar-orange hover:underline"
              >
                contact@groupfound.com
              </a>{" "}
              to exercise these rights.
            </p>

            <h2 className="text-xl font-semibold text-foreground mt-8">
              6. Contact
            </h2>
            <p>
              For questions about this privacy policy, contact us at{" "}
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
