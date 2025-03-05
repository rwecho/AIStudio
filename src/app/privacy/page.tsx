import MainLayout from "../components/MainLayout";

const PrivacyPage = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            At AI Studio, we respect your privacy and are committed to
            protecting your personal data. This privacy policy explains how we
            collect, use, and safeguard your information when you visit our
            website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Information We Collect
          </h2>
          <p className="mb-4">
            We may collect personal identification information (name, email
            address) when you fill out forms on our site. We also collect usage
            data and cookies to improve your browsing experience.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. How We Use Your Information
          </h2>
          <p className="mb-4">
            Your information helps us provide and improve our services. We may
            use your data to respond to your inquiries, send you information
            about our services, and improve our website functionality.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p className="mb-4">
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, disclosure, or
            destruction. However, no method of transmission over the internet is
            100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Third-Party Services
          </h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of these
            third-party sites and encourage you to review their privacy
            policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update our privacy policy from time to time. We will notify
            you of any changes by posting the new privacy policy on this page.
            You are advised to review this policy periodically.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy, please contact
            us at{" "}
            <a
              href="mailto:rwecho@live.com"
              className="text-blue-600 hover:underline"
            >
              rwecho@live.com
            </a>
            .
          </p>
        </section>
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
