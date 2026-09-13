import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import {
  ShieldCheck,
  Calendar,
  Lock,
  Database,
  Users,
  Shirt,
  Receipt,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  UserX,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kwizera Shop",
  description:
    "Official Privacy Policy for Kwizera Shop mobile application (rw.kwizerashop.app). Learn how your data is collected, protected, and used in accordance with Google Play and international privacy laws.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "August 3, 2026";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF9] dark:bg-[#140D0A] text-[#2C1A14] dark:text-[#F5EBE6] antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Header Hero Banner */}
        <section className="relative overflow-hidden border-b border-brand-primary/15 bg-linear-to-b from-brand-primary/5 via-[#FAF6F4] to-transparent dark:from-brand-primary/20 dark:via-[#1A110D] dark:to-transparent py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 dark:bg-brand-primary/25 px-3.5 py-1 text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-4 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-primary dark:text-[#E8D6CE]" />
              <span>Google Play Data Safety &amp; Legal Compliance</span>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-brand-primary dark:text-white">
              Privacy Policy
            </h1>
            <p className="mt-3 text-base sm:text-lg text-brand-primary/80 dark:text-[#E8D6CE]/80 max-w-2xl">
              Official data protection and privacy policy for <strong>Kwizera Shop</strong> (<code>rw.kwizerashop.app</code>). We are dedicated to maintaining the highest security and transparency standards for our shop owners and staff.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-xs font-medium text-brand-primary/70 dark:text-[#E8D6CE]/70">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-brand-primary" />
                Last Updated: {lastUpdated}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-brand-success" />
                Package: rw.kwizerashop.app
              </span>
            </div>
          </div>
        </section>

        {/* Policy Body */}
        <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
          <div className="rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-6 sm:p-10 shadow-sm space-y-10">

            {/* Quick Summary Box */}
            <div className="rounded-xl border border-brand-primary/20 bg-brand-primary/5 dark:bg-brand-primary/15 p-5">
              <h3 className="text-sm font-bold text-brand-primary dark:text-[#E8D6CE] flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-brand-primary dark:text-[#E8D6CE] shrink-0" />
                <span>Summary of Our Privacy Commitment</span>
              </h3>
              <p className="text-sm text-[#2C1A14]/90 dark:text-[#E8D6CE]/90 leading-relaxed">
                Kwizera Shop only processes operational records necessary to run your shop (inventory catalog, sales transactions, staff accounts, and unpaid loan tracking). We <strong>never sell</strong> your personal information, nor do we run behavioral advertising SDKs or monetize your shop records.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">1</span>
                Information We Collect
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>
                  To provide shop management features, we process the following categories of data:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-3">
                  <div className="p-4 rounded-xl border border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712]">
                    <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-white mb-1">
                      <Users className="w-4 h-4 text-brand-primary" />
                      <h4>User &amp; Staff Account Data</h4>
                    </div>
                    <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                      Full name, username, secure cryptographic password hash, and assigned role (Shop Owner / Admin or Worker / Sales Staff).
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712]">
                    <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-white mb-1">
                      <Shirt className="w-4 h-4 text-brand-primary" />
                      <h4>Inventory &amp; Stock Data</h4>
                    </div>
                    <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                      Item names (shirts, clothing apparel), stock quantities, unit prices, and inventory update logs managed by shop admins.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712]">
                    <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-white mb-1">
                      <Receipt className="w-4 h-4 text-brand-primary" />
                      <h4>Sales, Loans &amp; Financials</h4>
                    </div>
                    <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                      Sales records, quantities sold, amounts paid, remaining loan balances, payment methods (Cash / Mobile Money), and timestamps.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712]">
                    <div className="flex items-center gap-2 font-bold text-brand-primary dark:text-white mb-1">
                      <Smartphone className="w-4 h-4 text-brand-primary" />
                      <h4>Device &amp; Session Data</h4>
                    </div>
                    <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                      Local app storage for active session authentication (JWT), app version number, and error diagnostics for uptime stability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">2</span>
                How We Use Your Information
              </h2>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Core Shop Operations:</strong> Authorizing worker logins, conducting point-of-sale transactions, and synchronizing inventory levels in real-time.</li>
                  <li><strong>Loan &amp; Debt Tracking:</strong> Managing partial payments, tracking unpaid balances, and helping shop owners resolve customer debts cleanly.</li>
                  <li><strong>Business Analytics:</strong> Computing daily, weekly, monthly, and yearly revenue metrics, stock valuation, and worker performance reports.</li>
                  <li><strong>Access Isolation &amp; Security:</strong> Enforcing strict Role Guards (NestJS backend) to protect administrative controls and sensitive sales logs.</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">3</span>
                Cloud Storage &amp; Third-Party Services
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>
                  Kwizera Shop processes data using secure enterprise-grade cloud database infrastructure:
                </p>
                <div className="p-4 rounded-xl border border-brand-primary/20 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712]">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-brand-primary dark:text-white flex items-center gap-2">
                      <Database className="w-4 h-4 text-brand-primary" />
                      Supabase / PostgreSQL Encrypted Database
                    </span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-brand-success/10 text-brand-success border border-brand-success/30 font-semibold">
                      SOC2 / ISO 27001
                    </span>
                  </div>
                  <p className="mt-2 text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                    All application records, stock catalogs, and hashed passwords are stored in encrypted databases. Network communication uses strict TLS 1.3 encryption.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">4</span>
                Security Safeguards
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>We deploy layered security defenses across the entire application stack:</p>
                <div className="grid sm:grid-cols-3 gap-3 pt-1">
                  <div className="rounded-xl p-4 border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                    <Lock className="w-5 h-5 text-brand-primary mb-2" />
                    <h5 className="font-bold text-xs text-brand-primary dark:text-white">Bcrypt Passwords</h5>
                    <p className="text-[11px] text-brand-primary/70 dark:text-[#E8D6CE]/70 mt-1">Passwords are salted and cryptographically hashed before persistent storage.</p>
                  </div>
                  <div className="rounded-xl p-4 border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                    <ShieldCheck className="w-5 h-5 text-brand-primary mb-2" />
                    <h5 className="font-bold text-xs text-brand-primary dark:text-white">JWT Authentication</h5>
                    <p className="text-[11px] text-brand-primary/70 dark:text-[#E8D6CE]/70 mt-1">Sessions are signed with secure tokens that auto-expire upon logout.</p>
                  </div>
                  <div className="rounded-xl p-4 border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                    <Users className="w-5 h-5 text-brand-primary mb-2" />
                    <h5 className="font-bold text-xs text-brand-primary dark:text-white">Role Guarding</h5>
                    <p className="text-[11px] text-brand-primary/70 dark:text-[#E8D6CE]/70 mt-1">Worker roles cannot view or modify administrative logs or employee lists.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">5</span>
                Your Rights &amp; Account Deletion
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>
                  You hold full rights under applicable data protection laws (including GDPR and CCPA) to access, correct, or request the deletion of your personal account data.
                </p>
                <div className="mt-3 rounded-xl border border-brand-error/20 dark:border-brand-error/30 bg-brand-error/5 dark:bg-brand-error/10 p-5">
                  <div className="flex items-center gap-2 text-brand-error font-bold text-sm">
                    <UserX className="w-4 h-4 text-brand-error" />
                    <span>How to Delete Your Account</span>
                  </div>
                  <p className="text-xs text-[#2C1A14]/80 dark:text-[#E8D6CE]/80 mt-1.5 leading-relaxed">
                    You may delete your account at any time through our self-service online portal or directly within the mobile application settings.
                  </p>
                  <Link
                    href="/account-deletion"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-brand-error hover:underline"
                  >
                    <span>Proceed to Account Deletion Request Portal</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">6</span>
                Children&apos;s Privacy
              </h2>
              <div className="mt-4 space-y-2 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>
                  Kwizera Shop is strictly designed for workplace and business operations by adult retail staff. We do not knowingly solicit or collect data from children under the age of 13 (or under 16 where applicable by law).
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl font-bold text-brand-primary dark:text-white flex items-center gap-2.5 pb-2 border-b border-brand-primary/15 dark:border-brand-primary/30">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand-primary text-xs font-bold text-white">7</span>
                Contact Information
              </h2>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#2C1A14]/80 dark:text-[#E8D6CE]/80">
                <p>
                  If you have any questions, suggestions, or privacy requests regarding Kwizera Shop:
                </p>
                <div className="p-4 rounded-xl border border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3] dark:bg-[#241712] text-xs space-y-1.5">
                  <p><strong className="text-brand-primary dark:text-white">Application Name:</strong> Kwizera Shop</p>
                  <p><strong className="text-brand-primary dark:text-white">Package Identifier:</strong> <code>rw.kwizerashop.app</code></p>
                  <p><strong className="text-brand-primary dark:text-white">Support &amp; Inquiries:</strong> <a href="mailto:support@kwizerashop.app" className="text-brand-primary dark:text-[#E8D6CE] underline">support@kwizerashop.app</a></p>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
