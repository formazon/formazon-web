import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { TextLink } from "@/components/ui/TextLink";
import { Dot } from "@/components/ui/Dot";

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

                <div className="space-y-6 body [&>section:not(:first-child)>.subtitle-medium]:mt-16">
                    <section className="space-y-4">
                        <h3 className="subtitle-medium">1. Introduction</h3>
                        <p className="body-16">
                            This Privacy Policy explains how we collect, use, and protect your personal information 
                            when you visit our website. We are committed to protecting your privacy and ensuring 
                            transparency about our data practices.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">2. Information We Collect</h3>
                        <p className="body-16">
                            When you visit our website, we may collect the following types of information:
                        </p>
                        <ul className="space-y-1.5 body-16">
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>Technical information: IP address, browser type, device information, operating system</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>Usage data: pages visited, time spent on pages, click patterns, referral sources</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>Cookies and similar tracking technologies</span>
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">3. How We Use Your Information</h3>
                        <p className="body-16">
                            We use the collected information for the following purposes:
                        </p>
                        <ul className="space-y-1.5 body-16">
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>To analyze website usage and improve user experience</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>To understand how visitors interact with our content</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>To optimize website performance and functionality</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>To generate aggregated, anonymized statistics about website traffic</span>
                            </li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">4. Cookies and Tracking Technologies</h3>
                        <p className="body-16">
                            We use cookies and similar tracking technologies to collect and store information about 
                            your interactions with our website. Cookies are small text files that are placed on your 
                            device when you visit a website.
                        </p>
                        <p className="body-16">
                            We use the following analytics services:
                        </p>
                        <ul className="space-y-1.5 body-16">
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>
                                    <span className="body-16-medium">Google Analytics</span> — We use Google Analytics to understand how visitors 
                                    use our site. Google Analytics uses cookies to collect information such as how often 
                                    users visit the site, what pages they visit, and what other sites they used prior to 
                                    coming to our site. For more information, please visit{" "}
                                    <TextLink 
                                        href="https://policies.google.com/privacy" 
                                        external
                                    >
                                        Google&apos;s Privacy Policy
                                    </TextLink>
                                    .
                                </span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>
                                    <span className="body-16-medium">Yandex Metrika</span> — We use Yandex Metrika for website analytics and 
                                    performance monitoring. Yandex Metrika collects anonymized data about user behavior. 
                                    For more information, please visit{" "}
                                    <TextLink 
                                        href="https://yandex.com/legal/privacy/" 
                                        external
                                    >
                                        Yandex Privacy Policy
                                    </TextLink>
                                    .
                                </span>
                            </li>
                        </ul>
                        <p className="body-16">
                            You can control cookies through your browser settings. However, disabling cookies may 
                            affect your ability to use certain features of our website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">5. Data Sharing and Disclosure</h3>
                        <p className="body-16">
                            We do not sell, trade, or rent your personal information to third parties. We may share 
                            anonymized, aggregated data with analytics service providers (Google Analytics and Yandex 
                            Metrika) for the purposes described in this policy.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">6. Your Rights</h3>
                        <p className="body-16">
                            Depending on your location, you may have certain rights regarding your personal information, 
                            including:
                        </p>
                        <ul className="space-y-1.5 body-16">
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to access your personal data</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to rectify inaccurate data</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to erase your data</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to restrict processing</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to data portability</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to object to processing</span>
                            </li>
                            <li className="flex gap-3 items-start">
                                <span className="mt-3 shrink-0">
                                    <Dot bgColor="bg-black-40" />
                                </span>
                                <span>The right to withdraw consent</span>
                            </li>
                        </ul>
                        <p className="body-16">
                            To exercise these rights, please contact us at{" "}
                            <TextLink 
                                href="mailto:mail@formazon.com"
                                external
                            >
                                mail@formazon.com
                            </TextLink>
                            .
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">7. Data Retention</h3>
                        <p className="body-16">
                            We retain collected data for as long as necessary to fulfill the purposes outlined in this 
                            policy, unless a longer retention period is required or permitted by law.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">8. Security</h3>
                        <p className="body-16">
                            We implement appropriate technical and organizational measures to protect your personal 
                            information. However, no method of transmission over the Internet or electronic storage 
                            is completely secure.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">9. Changes to This Policy</h3>
                        <p className="body-16">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by 
                            posting the new policy on this page and updating the &quot;Last updated&quot; date below.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h3 className="subtitle-medium">10. Contact Us</h3>
                        <p className="body-16">
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <TextLink 
                                href="mailto:mail@formazon.com"
                                external
                            >
                                mail@formazon.com
                            </TextLink>
                            .
                        </p>
                    </section>

                    <div className="pt-4 caption-medium">
                        Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                    </div>
                </div>
            </div>
        </PageShell>
    );
}
