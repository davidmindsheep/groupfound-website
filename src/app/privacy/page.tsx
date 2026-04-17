import { Header } from "@/components/Header";
import { MiniFooter } from "@/components/MiniFooter";

export const metadata = {
  title: "Privacy Policy — GroupFound",
  description:
    "How GroupFound Limited collects, uses, and protects your personal data under UK GDPR.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            GroupFound — Privacy Policy
          </h1>
          <p className="text-sm text-foreground-muted mb-10">
            Last updated: 10 April 2026
          </p>

          <div className="space-y-5 text-foreground-secondary leading-relaxed">
            <p>
              This privacy policy applies to GroupFound Limited (<strong>we</strong>,{" "}
              <strong>us</strong> or <strong>our</strong>). We are committed to
              protecting your privacy. This policy explains how we collect, use
              and share your personal data. It applies to all personal data we
              handle, whether we collect it through our website, in person, or
              through other means.
            </p>

            <Section title="Information we collect">
              <SubSection title="Identity and contact details">
                <List
                  items={[
                    "Name, address, email address and phone number",
                    "Professional details",
                    "Images of you",
                  ]}
                />
              </SubSection>

              <SubSection title="Service related information">
                <List
                  items={[
                    "Transaction details for products and services you've purchased from us or enquiries about our products and services",
                    "Your preferences for our services and your marketing preferences and where relevant information related to loyalty programmes",
                    "Feedback, complaints and compliments and survey responses",
                  ]}
                />
              </SubSection>

              <SubSection title="Financial and payment information">
                <List
                  items={[
                    "Payment details for products and services you've purchased from us (including where relevant, credit reference information) and where relevant banking or payment card information",
                  ]}
                />
              </SubSection>

              <SubSection title="Digital information">
                <List
                  items={[
                    "IP address and general location information derived from your IP address",
                    "Search and browsing behaviour and user journeys",
                    "Website usage patterns",
                    "Cookie preferences and tracking",
                    "Geo-location data and city-level location derived from your device",
                  ]}
                />
              </SubSection>

              <SubSection title="Professional information (for job applicants and workers)">
                <List
                  items={[
                    "Employment history",
                    "Professional experience",
                    "Required authorisations and licences",
                    "Professional registrations",
                    "Information about your right to work in the UK",
                  ]}
                />
              </SubSection>
            </Section>

            <Section title="How we collect personal data">
              <List
                items={[
                  <>
                    <strong className="text-foreground">Directly from you</strong>{" "}
                    when you interact with us, contact us, or fill out forms.
                  </>,
                  <>
                    <strong className="text-foreground">Automatically</strong>{" "}
                    when you visit our website, use our technologies, or interact
                    with our online services.
                  </>,
                  <>
                    <strong className="text-foreground">From third parties</strong>
                    : service providers, business partners, previous employers,
                    government organisations and organisations or people
                    authorised by you.
                  </>,
                  <>
                    <strong className="text-foreground">
                      From publicly available sources
                    </strong>
                    : such as Companies House and professional networking sites
                    such as LinkedIn.
                  </>,
                ]}
              />
            </Section>

            <Section title="How we use your information">
              <p>
                Data protection law requires us to have proper legal reasons for
                using your personal data. We can only use your information when
                we have one or more of these legal bases:
              </p>
              <List
                items={[
                  <>
                    <strong className="text-foreground">Consent</strong> — You
                    have clearly agreed to us using your personal data for a
                    specific purpose.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Performance of a contract
                    </strong>{" "}
                    — We need to use your information to fulfil a contract with
                    you, or because you've asked us to do something before
                    entering into a contract.
                  </>,
                  <>
                    <strong className="text-foreground">Legal duty</strong> — We
                    must use your information to comply with the law.
                  </>,
                  <>
                    <strong className="text-foreground">Vital interests</strong>{" "}
                    — We need to use your information to protect someone's life.
                  </>,
                  <>
                    <strong className="text-foreground">Public interest</strong>{" "}
                    — We need to use your information to perform a task in the
                    public interest or carry out official functions that have a
                    clear legal basis.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Legitimate interests
                    </strong>{" "}
                    — We have a genuine business reason to use your information,
                    or a third party does, but only if this doesn't unfairly
                    override your rights and interests.
                  </>,
                ]}
              />
              <p>
                Where we rely on legitimate interests as our legal basis, we have
                conducted balancing tests to ensure our interests do not override
                your fundamental rights and freedoms. These assessments consider:
              </p>
              <List
                items={[
                  "The nature of our legitimate interest",
                  "The impact on you",
                  "Any safeguards we can implement",
                  "Your reasonable expectations",
                  "The broader context of our relationship",
                ]}
              />
              <p>
                We may process your personal data for more than one legal basis
                depending on the specific purpose for which we are using your
                data. Please reach out to us if you need further details about
                the specific legal basis we are relying on to process your
                personal data.
              </p>

              <SubSection title="Managing your account and providing our services">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>
                </p>
                <List
                  items={[
                    "To enable you to access and use our software, including providing login credentials",
                    "To provide our services to you, including enabling you to create a profile, connect with other users and access platform features",
                    "To contact and communicate with you about our services, including responding to support requests and enquiries and for dealing with complaints or claims",
                    "Internal record keeping, administrative, invoicing and billing purposes",
                  ]}
                />
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Performance of a Contract; Legal Duty (for billing and
                  record-keeping); Legitimate interests.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  Identity and contact details; Service related information;
                  Financial information; Digital information.
                </p>
              </SubSection>

              <SubSection title="Website enquiries and customer service">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>{" "}
                  To contact and communicate with you about any enquiries you
                  make with us via our website.
                </p>
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Legitimate interests.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  Identity and Contact Data; Digital Information.
                </p>
              </SubSection>

              <SubSection title="Business improvement and development">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>
                </p>
                <List
                  items={[
                    "Analytics including profiling on our website",
                    "Market research and business development",
                    "To operate and improve our services, associated applications and associated social media platforms",
                  ]}
                />
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Legitimate interests.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  Digital Information.
                </p>
              </SubSection>

              <SubSection title="Marketing and communications">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>
                </p>
                <List
                  items={[
                    "To send you promotional information about our events and experiences and information that we consider may be of interest to you",
                    "To run promotions, competitions and offer additional benefits to you",
                  ]}
                />
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Legitimate interests.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  Identity and Contact Data; Digital Information.
                </p>
              </SubSection>

              <SubSection title="Recruitment and employment purposes">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>
                </p>
                <List
                  items={[
                    "To consider your application if you have applied to work with us and to keep you up to date with its progress",
                    "In relation to self-declared disabilities in order for us to make reasonable adjustments to support your application and any possible future employment",
                    "In relation to any diversity or equal opportunities monitoring questionnaire data, to monitor and report on our equality and diversity composition and ensure fairness in the recruitment process",
                    "In relation to any right to work information we collect, in order to ensure we comply with the law in employing you",
                    "To keep you updated on any other suitable vacancies",
                  ]}
                />
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Legitimate interests; Legal Duty; Consent; Performance of a
                  Contract.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  Identity and Contact Data; Professional Data.
                </p>
              </SubSection>

              <SubSection title="Legal compliance">
                <p>
                  <strong className="text-foreground">
                    What we use your information for:
                  </strong>{" "}
                  Comply with our legal obligations or if otherwise required or
                  authorised by law.
                </p>
                <p>
                  <strong className="text-foreground">Legal basis:</strong>{" "}
                  Legal Duty.
                </p>
                <p>
                  <strong className="text-foreground">
                    Types of information we use:
                  </strong>{" "}
                  All relevant Personal Data.
                </p>
              </SubSection>
            </Section>

            <Section title="Our disclosures of personal data to third parties">
              <p>We may disclose personal data to:</p>

              <SubSection title="Service providers">
                <List
                  items={[
                    "IT service providers including Vercel",
                    "Data storage providers including Vercel and Supabase",
                    "Web hosting and server providers (Vercel)",
                    "Payment processors (where applicable)",
                    "Marketing and advertising providers",
                    "AI service providers including OpenAI and Anthropic",
                    "Analytics providers",
                  ]}
                />
              </SubSection>

              <SubSection title="Professional advisers">
                <List
                  items={[
                    "Bankers",
                    "Auditors",
                    "Insurers and insurance brokers",
                    "Legal advisers",
                  ]}
                />
              </SubSection>

              <SubSection title="Business partners">
                <List
                  items={[
                    "Our existing or potential agents",
                    "Our business partners or contractors",
                  ]}
                />
              </SubSection>

              <SubSection title="Corporate transactions">
                <p>
                  If we merge with or are acquired by another company, or sell
                  our business assets:
                </p>
                <List
                  items={[
                    "Your information may be disclosed to our advisers",
                    "Your information may be disclosed to the potential purchaser's advisers",
                    "Your information may be included in the transferred assets",
                  ]}
                />
              </SubSection>

              <SubSection title="Legal and regulatory bodies">
                <List
                  items={[
                    "Courts and tribunals",
                    "Regulatory authorities including as required for reporting obligations",
                    "Law enforcement officers",
                  ]}
                />
              </SubSection>

              <SubSection title="Other parties">
                <List
                  items={[
                    "Third parties you have authorised",
                    "Emergency services when necessary",
                    "Any other parties as required or permitted by law",
                  ]}
                />
              </SubSection>
            </Section>

            <Section title="Overseas transfers">
              <SubSection title="Where we store and access your information">
                <p>
                  We store your personal data in the United Kingdom. However,
                  your information may be transferred to locations outside the
                  United Kingdom in these circumstances:
                </p>
                <List
                  items={[
                    "When our service providers are located overseas",
                    "When we work with overseas business partners",
                    "When using cloud-based services or data storage solutions",
                    "When required by law or legal proceedings",
                  ]}
                />
              </SubSection>

              <SubSection title="Our approach to overseas transfers">
                <p>
                  When we transfer your personal data outside the United
                  Kingdom, we ensure it receives appropriate protection by:
                </p>
                <List
                  items={[
                    "Only transferring your information to countries that UK data protection law recognises as providing adequate protection for personal data, or",
                    "Putting in place a contract with the third party that means they must protect personal data to the same standards as the UK.",
                    "Transferring personal data to organisations that are part of specific agreements on cross-border data transfers with the UK.",
                  ]}
                />
              </SubSection>

              <SubSection title="What this means for you">
                <p>
                  We only transfer the minimum amount of personal data necessary
                  and require all recipients to:
                </p>
                <List
                  items={[
                    "Protect your information to the same standards required by UK law",
                    "Use your information only for the purposes we've agreed",
                    "Allow us to monitor how they handle your information",
                    "Provide you with the same rights over your information that you have under UK law",
                  ]}
                />
              </SubSection>
            </Section>

            <Section title="Children's personal data">
              <p>
                We do not knowingly collect or process personal data from
                children under 13 years of age without appropriate parental or
                guardian consent.
              </p>
              <p>
                If you are under 13, please do not provide personal data to us
                without first asking your parent or guardian for permission.
              </p>
              <p>
                If we become aware that we have collected personal data from a
                child under 13 without verified parental consent, we will take
                steps to delete that information as quickly as possible.
              </p>
              <p>Parents and guardians have the right to:</p>
              <List
                items={[
                  "Review any personal data we hold about their child",
                  "Request correction or deletion of their child's personal data",
                  "Refuse or withdraw consent for further collection or use of their child's data",
                  "Contact us with any concerns about their child's privacy",
                ]}
              />
              <p>
                If you are a parent or guardian and believe your child has
                provided us with personal data without your consent, please
                contact us immediately using the details provided in this
                policy.
              </p>
            </Section>

            <Section title="Data retention">
              <SubSection title="How long we keep your information">
                <p>We only keep your personal data for as long as we need it to:</p>
                <List
                  items={[
                    "Provide our services to you",
                    "Meet our legal, tax, accounting or regulatory obligations",
                    "Handle any complaints or legal issues that may arise",
                  ]}
                />
                <p>We may keep your information for longer periods if:</p>
                <List
                  items={[
                    "You make a complaint that we need to investigate or respond to",
                    "We reasonably believe legal action involving our relationship with you might occur",
                    "The law requires us to keep it for specific timeframes",
                  ]}
                />
              </SubSection>

              <SubSection title="How we decide retention periods">
                <p>When determining how long to keep your information, we consider:</p>
                <List
                  items={[
                    "How much information we have and how sensitive it is",
                    "The risk of harm if the information was accessed without permission",
                    "Whether we can achieve our purposes in other ways",
                    "What legal, regulatory, tax or accounting rules require",
                    "The nature of our relationship with you and the services we provide",
                  ]}
                />
              </SubSection>

              <SubSection title="What happens when we no longer need your information">
                <p>
                  Once we no longer need your personal data, we will securely
                  delete or destroy it in accordance with our data retention
                  policies and legal requirements.
                </p>
              </SubSection>

              <SubSection title="Your rights">
                <p>
                  You can request information about retention periods for your
                  data and ask for early deletion where legally possible.
                </p>
              </SubSection>
            </Section>

            <Section title="Your privacy rights and choices">
              <SubSection title="Providing information">
                <p>
                  You can choose whether to provide personal data to us, however,
                  if you don't provide certain information, we may not be able to
                  provide some services. Let us know if you don't want to provide
                  information and we will let you know when information is
                  required versus optional.
                </p>
              </SubSection>

              <SubSection title="Right of Access">
                <p>
                  You have the right to ask us for copies of your personal data.
                  You can request other information such as details about where
                  we get personal data from and who we share personal data with.
                  There are some exemptions which means you may not receive all
                  the information you ask for.
                </p>
              </SubSection>

              <SubSection title="Right to Rectification">
                <p>
                  You have the right to ask us to correct or delete personal
                  data you think is inaccurate or incomplete.
                </p>
              </SubSection>

              <SubSection title="Right to Erasure ('Right to be forgotten')">
                <p>
                  You can request deletion of your personal data in certain
                  limited circumstances as set out in data protection law, such
                  as where the data is no longer necessary or has been
                  unlawfully processed. This right is not absolute and we may be
                  required or entitled to retain your data for legal, regulatory
                  or legitimate business reasons.
                </p>
              </SubSection>

              <SubSection title="Right to Restrict Processing">
                <p>You can ask us to suspend processing where:</p>
                <List
                  items={[
                    "You contest the accuracy of the data",
                    "Processing is unlawful but you don't want erasure",
                    "We no longer need the data but you need it for legal claims",
                    "You've objected to processing pending verification of our legitimate grounds",
                  ]}
                />
              </SubSection>

              <SubSection title="Right to opt-out of marketing communications">
                <p>
                  You can opt-out of receiving marketing communications at any
                  time. Each marketing communication will include an unsubscribe
                  option. You can change your marketing preferences by
                  contacting us. We will process your request as soon as
                  practicable.
                </p>
              </SubSection>

              <SubSection title="Right to Data Portability">
                <p>
                  Where technically feasible, you can receive your personal data
                  in a structured, commonly used format or have it transmitted
                  to another controller where:
                </p>
                <List
                  items={[
                    "Processing is based on consent or contract",
                    "Processing is automated",
                  ]}
                />
              </SubSection>

              <SubSection title="Right to Object">
                <p>
                  You can object to processing based on legitimate interests or
                  for direct marketing purposes. We will stop processing unless
                  we can demonstrate compelling legitimate grounds.
                </p>
              </SubSection>

              <SubSection title="Right to Withdraw Consent">
                <p>
                  Where processing is based on consent, you can withdraw it at
                  any time without affecting the lawfulness of prior processing.
                </p>
              </SubSection>

              <SubSection title="How to Exercise Your Rights">
                <p>
                  To exercise any of these rights, contact us using the details
                  below. We may ask for proof of identity and will respond
                  within one month (extendable to three months for complex
                  requests).
                </p>
                <p>
                  These rights are available under data protection law, though
                  some may not apply in every situation. We'll let you know if
                  any limitations apply when you make a request.
                </p>
              </SubSection>
            </Section>

            <Section title="Making a complaint">
              <p>
                If you're unhappy with how we've used your personal data, please
                get in touch with us first using the contact details at the end
                of this policy. When you contact us:
              </p>
              <List
                items={[
                  "Give us full details about your complaint",
                  "We'll investigate your concerns promptly",
                  "We'll respond to you in writing explaining what we found and what we'll do to address your complaint",
                ]}
              />

              <SubSection title="Your right to complain to the regulator">
                <p>
                  You can also make a complaint directly to the Information
                  Commissioner's Office (ICO), the UK's data protection
                  regulator, at any time.
                </p>
                <div className="glass p-5 my-4 not-prose">
                  <p className="text-foreground font-medium mb-1">
                    Information Commissioner's Office
                  </p>
                  <p className="text-sm">
                    Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF
                    <br />
                    Helpline: 0303 123 1113
                    <br />
                    Website:{" "}
                    <a
                      href="https://www.ico.org.uk/make-a-complaint"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-solar-orange hover:underline"
                    >
                      ico.org.uk/make-a-complaint
                    </a>
                  </p>
                </div>
                <p>
                  You don't have to contact us first before going to the ICO,
                  but we'd appreciate the opportunity to try to resolve your
                  concerns directly with you.
                </p>
              </SubSection>
            </Section>

            <Section title="Protecting your information">
              <p>We use multiple layers of security to protect your information.</p>

              <SubSection title="Technical safeguards">
                <List
                  items={[
                    "Enterprise-grade encryption for data storage and transmission",
                    "Regular security testing and monitoring",
                    "Automated threat detection systems",
                  ]}
                />
              </SubSection>

              <SubSection title="Operational security">
                <List
                  items={[
                    "Staff training on security and privacy",
                    "Strict access controls based on job requirements",
                    "Regular security audits and incident response procedures testing",
                  ]}
                />
              </SubSection>

              <SubSection title="Physical security">
                <List
                  items={[
                    "Secure premises with controlled access",
                    "Secure disposal of physical documents",
                    "Equipment security protocols",
                  ]}
                />
              </SubSection>

              <SubSection title="Public information">
                <p>
                  Please note that any information you choose to share publicly
                  on online platforms (such as comments or reviews) can be
                  accessed and used by others. We cannot control or protect
                  information that you make publicly available.
                </p>
              </SubSection>
            </Section>

            <Section title="Cookies and analytics">
              <SubSection title="What are cookies?">
                <p>
                  Cookies are small text files that are stored on your device
                  when you visit our website. They help us remember your
                  preferences and understand how you use our site.
                </p>
              </SubSection>

              <SubSection title="Types of cookies we use">
                <List
                  items={[
                    <>
                      <strong className="text-foreground">Essential cookies</strong>
                      : Necessary for the website to function properly
                    </>,
                    <>
                      <strong className="text-foreground">Performance cookies</strong>
                      : Help us understand how visitors interact with our website
                    </>,
                    <>
                      <strong className="text-foreground">Functionality cookies</strong>
                      : Remember your preferences and settings
                    </>,
                    <>
                      <strong className="text-foreground">Marketing cookies</strong>
                      : Used to deliver relevant advertisements and track
                      campaign effectiveness
                    </>,
                  ]}
                />
              </SubSection>

              <SubSection title="Cookie consent">
                <p>
                  When you first visit our website, you will see a cookie notice
                  explaining our use of cookies. You can choose which types of
                  cookies to accept through our cookie preference centre.
                </p>
              </SubSection>

              <SubSection title="Managing your preferences">
                <p>You can change your cookie preferences at any time by:</p>
                <List
                  items={[
                    "Using our cookie preference centre on the website",
                    "Adjusting your browser settings to refuse or delete cookies",
                    "Visiting our cookie policy for detailed information about specific cookies",
                  ]}
                />
                <p>
                  Please note that disabling certain cookies may affect the
                  functionality of our website and your user experience.
                </p>
              </SubSection>

              <SubSection title="Google Analytics">
                <p>
                  We use Google Analytics to understand how people use our
                  website. This involves cookies that collect information about
                  your browsing activity. You can opt out of Google's
                  advertising features through your Google account settings,
                  browser add-ons, or your device's privacy settings.
                </p>
              </SubSection>

              <SubSection title="Meta advertising tools">
                <p>
                  We use Meta's advertising tools (such as Meta Pixel) to
                  understand how our ads perform and to show you more relevant
                  advertisements on Meta platforms like Facebook and Instagram.
                  You can manage whether we connect information from our website
                  with your Meta account for advertising purposes by adjusting
                  your settings within your Meta account preferences.
                </p>
              </SubSection>
            </Section>

            <Section title="When you sign in with another account (like Apple or Google)">
              <SubSection title="What we collect">
                <p>
                  When you use single sign-on to connect with us, we'll receive
                  personal data from that provider based on your privacy
                  settings with them. This may include your name, username,
                  profile picture, and other details you've chosen to share.
                </p>
              </SubSection>

              <SubSection title="How we use it">
                <p>
                  We use this information to create your profile on our
                  platform and give you access to our services.
                </p>
              </SubSection>
            </Section>

            <Section title="Use of location services data">
              <p>
                We collect your precise or approximate location via our mobile
                application for the following purposes:
              </p>
              <List
                items={[
                  "To display your approximate city-level location on your profile to other users",
                  "To suggest connections and matches based on geographic proximity",
                  "To update your location when you travel to enable networking in new locations",
                  "For security and safety",
                  "To prevent and detect fraud",
                  "As permitted by law",
                ]}
              />
              <p>
                We collect this information when you enable our mobile
                application to use your device's location services. If you do
                not want us to use your location for the purposes above, you
                should turn off the location services in your mobile phone
                settings. If you do not provide geolocation data to us, it may
                affect our ability to provide core features of the platform.
              </p>
            </Section>

            <Section title="Artificial Intelligence (AI) Technologies">
              <SubSection title="Overview">
                <p>
                  We use artificial intelligence and machine learning
                  technologies in our business operations and services,
                  including AI tools provided by third parties. We only use
                  these technologies when legally permitted and necessary for
                  our business.
                </p>
              </SubSection>

              <SubSection title="How we use AI">
                <p>We may use AI technologies to:</p>
                <List
                  items={[
                    "Conduct analysis and data processing",
                    "Generate and modify content and coding",
                    "Improve and optimise our services and operations",
                    "Automate routine tasks and communications",
                    "Personalise your experience with our services",
                    "Support quality assurance processes",
                    "Assist with customer support and queries",
                  ]}
                />
              </SubSection>

              <SubSection title="Data protection and security">
                <p>
                  When we work with third-party AI providers, we ensure they
                  handle your personal data in accordance with privacy laws
                  through contractual requirements and appropriate safeguards.
                </p>
              </SubSection>

              <SubSection title="Your rights and our commitments">
                <p>
                  Any information generated or inferred about you by AI
                  technologies is treated as personal data, and you maintain all
                  the rights outlined in this privacy policy. When using AI with
                  your personal data, we commit to:
                </p>

                <p className="text-foreground font-medium mt-4">
                  Transparency and control
                </p>
                <List
                  items={[
                    "We'll inform you when AI is used to make decisions that may significantly affect you",
                    "We maintain human oversight and review of significant AI-generated decisions",
                    "Our staff are trained to understand AI limitations and verify outputs before relying on them",
                    "We implement processes to verify the accuracy of AI-generated outputs",
                  ]}
                />

                <p className="text-foreground font-medium mt-4">Security</p>
                <List
                  items={[
                    "We use appropriate technical and organisational measures to maintain the security and integrity of your personal data",
                    "We regularly test and monitor AI outputs for accuracy and reliability",
                  ]}
                />

                <p className="text-foreground font-medium mt-4">Risk mitigation</p>
                <List
                  items={[
                    "We regularly assess and document risks associated with using AI to process personal data",
                    "We implement appropriate measures to address these risks",
                    "We continuously monitor AI performance and regularly review their impact",
                  ]}
                />
              </SubSection>
            </Section>

            <Section title="Amendments">
              <p>
                We may update this policy at any time by posting the revised
                version on our website. We recommend that you review our website
                regularly to stay current with any policy changes.
              </p>
            </Section>

            <Section title="Our contact details">
              <div className="glass p-5 not-prose">
                <p className="text-foreground font-medium mb-2">
                  Privacy contact
                </p>
                <p className="text-sm">
                  Email:{" "}
                  <a
                    href="mailto:contact@groupfound.com"
                    className="text-solar-orange hover:underline"
                  >
                    contact@groupfound.com
                  </a>
                  <br />
                  Privacy Officer: David Taylor
                  <br />
                  Company: GroupFound Limited
                </p>
              </div>
              <p className="text-sm text-foreground-muted mt-6">
                Last update: 10 April 2026
              </p>
            </Section>
          </div>
        </div>
      </main>
      <MiniFooter />
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-8">
      <h2 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-5">
      <h3 className="text-base md:text-lg font-medium text-foreground mb-2">
        {title}
      </h3>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc list-outside space-y-2 pl-5 marker:text-solar-orange/60">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
