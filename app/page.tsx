import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  ShoppingBag,
  ShieldCheck,
  UserX,
  Shirt,
  Receipt,
  Lock,
  ArrowRight,
  CheckCircle2,
  FileText,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF9] dark:bg-[#140D0A] text-[#2C1A14] dark:text-[#F5EBE6] antialiased">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 border-b border-brand-primary/15 bg-linear-to-b from-brand-primary/5 via-[#FAF6F4] to-transparent dark:from-brand-primary/20 dark:via-[#1A110D] dark:to-transparent">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/20 bg-brand-primary/10 dark:bg-brand-primary/25 px-3.5 py-1 text-xs font-semibold text-brand-primary dark:text-[#E8D6CE] mb-6 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-success"></span>
              <span>Official Account &amp; Compliance Portal</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-brand-primary dark:text-white">
              Kwizera Shop
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-brand-primary/80 dark:text-[#E8D6CE]/80">
              User account management, data governance, and Google Play compliance hub for the Kwizera Shop Management System.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/privacy-policy"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-brand-primary/25 hover:bg-brand-hover transition-colors"
              >
                <ShieldCheck className="w-4 h-4 text-white" />
                <span>Read Privacy Policy</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
              <Link
                href="/account-deletion"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-error/30 bg-brand-error/10 px-6 py-3 text-sm font-semibold text-brand-error hover:bg-brand-error/20 dark:border-brand-error/40 dark:bg-brand-error/20 dark:text-[#FF8A80] transition-colors"
              >
                <UserX className="w-4 h-4" />
                <span>Account Deletion Portal</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Cards / Hub Section */}
        <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold tracking-tight text-brand-primary dark:text-white sm:text-3xl">
              User Privacy &amp; Data Control
            </h2>
            <p className="mt-2 text-sm text-brand-primary/70 dark:text-[#E8D6CE]/70">
              Access official policy documentation and self-service account removal requests.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Privacy Policy Card */}
            <div className="group rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-8 shadow-sm hover:shadow-md hover:border-brand-primary/30 transition-all flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-primary/10 text-brand-primary dark:bg-brand-primary/25 dark:text-[#E8D6CE] mb-5 font-bold">
                  <ShieldCheck className="w-6 h-6 text-brand-primary dark:text-[#E8D6CE]" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary dark:text-white group-hover:text-brand-hover dark:group-hover:text-[#E8D6CE] transition-colors">
                  Privacy Policy
                </h3>
                <p className="mt-2 text-sm text-brand-primary/80 dark:text-[#E8D6CE]/80 leading-relaxed">
                  Understand how your clothing shop inventory, staff accounts, sales logs, and loan records are gathered and securely stored on encrypted cloud databases.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-lg bg-brand-primary/5 border border-brand-primary/15 px-2.5 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-[#E8D6CE]">
                    GDPR Compliant
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-brand-primary/5 border border-brand-primary/15 px-2.5 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-[#E8D6CE]">
                    TLS 1.3 Encryption
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-brand-primary/5 border border-brand-primary/15 px-2.5 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-[#E8D6CE]">
                    No Third-Party Ads
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-primary/10 dark:border-brand-primary/20">
                <Link
                  href="/privacy-policy"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary dark:text-[#E8D6CE] hover:gap-2.5 transition-all"
                >
                  <span>View Privacy Policy</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Account Deletion Card */}
            <div className="group rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D] p-8 shadow-sm hover:shadow-md hover:border-brand-error/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-error/10 text-brand-error dark:bg-brand-error/20 dark:text-[#FF8A80] mb-5 font-bold">
                  <UserX className="w-6 h-6 text-brand-error dark:text-[#FF8A80]" />
                </div>
                <h3 className="text-xl font-bold text-brand-primary dark:text-white group-hover:text-brand-error transition-colors">
                  Account Deletion
                </h3>
                <p className="mt-2 text-sm text-brand-primary/80 dark:text-[#E8D6CE]/80 leading-relaxed">
                  Request the permanent deletion of your Kwizera Shop login credentials, staff profile, and personal identifiers via our online form or inside the mobile app.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-lg bg-brand-error/10 border border-brand-error/20 px-2.5 py-1 text-xs font-semibold text-brand-error dark:text-[#FF8A80]">
                    Google Play Safety
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-brand-primary/5 border border-brand-primary/15 px-2.5 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-[#E8D6CE]">
                    Self-Service Form
                  </span>
                  <span className="inline-flex items-center rounded-lg bg-brand-primary/5 border border-brand-primary/15 px-2.5 py-1 text-xs font-semibold text-brand-primary dark:bg-brand-primary/20 dark:text-[#E8D6CE]">
                    Instant Revocation
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-brand-primary/10 dark:border-brand-primary/20">
                <Link
                  href="/account-deletion"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-error dark:text-[#FF8A80] hover:gap-2.5 transition-all"
                >
                  <span>Request Account Deletion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* System Capabilities Section */}
        <section className="border-t border-brand-primary/15 dark:border-brand-primary/30 bg-[#FAF6F3]/50 dark:bg-[#1A110D]/50 py-12 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <h3 className="text-center text-lg font-bold text-brand-primary dark:text-white mb-8">
              Core Architecture &amp; System Capabilities
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-center sm:text-left">
              <div className="p-5 rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-3">
                  <Shirt className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="font-bold text-sm text-brand-primary dark:text-white">Smart Inventory &amp; Stock</h4>
                <p className="mt-1 text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                  Real-time stock deduction, inventory monitoring, and out-of-stock prevention.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-3">
                  <Receipt className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="font-bold text-sm text-brand-primary dark:text-white">Sales &amp; Loan Bookkeeping</h4>
                <p className="mt-1 text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                  Instant POS entry, partial payment detection, and automated outstanding debt tracking.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-brand-primary/15 dark:border-brand-primary/30 bg-white dark:bg-[#1A110D]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-3">
                  <Lock className="w-5 h-5 text-brand-primary" />
                </div>
                <h4 className="font-bold text-sm text-brand-primary dark:text-white">Role-Based Security</h4>
                <p className="mt-1 text-xs text-brand-primary/70 dark:text-[#E8D6CE]/70">
                  Strict access control separating Admin analytics from Worker sales operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
