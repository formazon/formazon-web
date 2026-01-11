import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";

export const metadata: Metadata = {
    title: "Privacy Policy — Formazon",
    description: "Privacy Policy and Cookie Policy for Formazon website.",
};

export default function PrivacyPolicyPage() {
    return (
        <PageShell>
            <div className="mb-16 max-w-3xl space-y-8">
                <div className="space-y-5">
                    <p className="caption">Privacy Policy</p>
                    <h1 className="h1">Privacy Policy & Cookie Policy</h1>
                </div>

                <div className="space-y-6 body [&>section:not(:first-child)>h3]:mt-16">
                    <section className="space-y-4">
                        <h3 className="h3">1. Introduction</h3>
                        <p>
                            This Privacy Policy explains how we collect, use, and protect your personal information 
                            when you visit our website. We are committed to protecting your privacy and ensuring 
                            transparency about our data practices.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">2. Information We Collect</h3>
                        <p>
                            When you visit our website, we may collect the following types of information:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Technical information: IP address, browser type, device information, operating system</li>
                            <li>Usage data: pages visited, time spent on pages, click patterns, referral sources</li>
                            <li>Cookies and similar tracking technologies</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">3. How We Use Your Information</h3>
                        <p>
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>To analyze website usage and improve user experience</li>
                            <li>To understand how visitors interact with our content</li>
                            <li>To optimize website performance and functionality</li>
                            <li>To generate aggregated, anonymized statistics about website traffic</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">4. Cookies and Tracking Technologies</h3>
                        <p>
                            We use cookies and similar tracking technologies to collect and store information about 
                            your interactions with our website. Cookies are small text files that are placed on your 
                            device when you visit a website.
                        </p>
                        <p>
                            We use the following analytics services:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong>Google Analytics</strong> — We use Google Analytics to understand how visitors 
                                use our site. Google Analytics uses cookies to collect information such as how often 
                                users visit the site, what pages they visit, and what other sites they used prior to 
                                coming to our site. For more information, please visit{" "}
                                <a 
                                    href="https://policies.google.com/privacy" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                                >
                                    Google&apos;s Privacy Policy
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Yandex Metrika</strong> — We use Yandex Metrika for website analytics and 
                                performance monitoring. Yandex Metrika collects anonymized data about user behavior. 
                                For more information, please visit{" "}
                                <a 
                                    href="https://yandex.com/legal/privacy/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                                >
                                    Yandex Privacy Policy
                                </a>
                                .
                            </li>
                        </ul>
                        <p>
                            You can control cookies through your browser settings. However, disabling cookies may 
                            affect your ability to use certain features of our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">5. Data Sharing and Disclosure</h3>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share 
                            anonymized, aggregated data with analytics service providers (Google Analytics and Yandex 
                            Metrika) for the purposes described in this policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">6. Your Rights</h3>
                        <p>
                            Depending on your location, you may have certain rights regarding your personal information, 
                            including:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>The right to access your personal data</li>
                            <li>The right to rectify inaccurate data</li>
                            <li>The right to erase your data</li>
                            <li>The right to restrict processing</li>
                            <li>The right to data portability</li>
                            <li>The right to object to processing</li>
                            <li>The right to withdraw consent</li>
                        </ul>
                        <p>
                            To exercise these rights, please contact us at{" "}
                            <a 
                                href="mailto:mail@formazon.com"
                                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                mail@formazon.com
                            </a>
                            .
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">7. Data Retention</h3>
                        <p>
                            We retain collected data for as long as necessary to fulfill the purposes outlined in this 
                            policy, unless a longer retention period is required or permitted by law.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">8. Security</h3>
                        <p>
                            We implement appropriate technical and organizational measures to protect your personal 
                            information. However, no method of transmission over the Internet or electronic storage 
                            is completely secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">9. Changes to This Policy</h3>
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by 
                            posting the new policy on this page and updating the &quot;Last updated&quot; date below.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="h3">10. Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a 
                                href="mailto:mail@formazon.com"
                                className="underline underline-offset-4 hover:opacity-80 transition-opacity"
                            >
                                mail@formazon.com
                            </a>
                            .
                        </p>
                    </section>

                    <div className="pt-4 border-t border-border-subtle text-text-muted caption">
                        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
