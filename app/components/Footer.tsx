import Link from "next/link";
import { ShoppingBag, ShieldCheck, UserX, Mail, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-brand-primary/15 bg-[#FAF6F3] dark:border-brand-primary/30 dark:bg-[#100B08] mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-primary text-white">
              <ShoppingBag className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-primary dark:text-[#F5EBE6]">
                Kwizera Shop Management System
              </p>
              <p className="text-xs text-brand-primary/70 dark:text-[#E8D6CE]/60">
                Package: rw.kwizerashop.app
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-brand-primary/80 dark:text-[#E8D6CE]/80">
            <Link href="/" className="hover:text-brand-primary dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/privacy-policy" className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-white transition-colors">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Privacy Policy</span>
            </Link>
            <Link href="/account-deletion" className="flex items-center gap-1 hover:text-brand-error dark:hover:text-[#FF8A80] transition-colors">
              <UserX className="w-3.5 h-3.5" />
              <span>Account Deletion</span>
            </Link>
            <a href="mailto:support@kwizerashop.app" className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <span>Contact Support</span>
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-brand-primary/10 dark:border-brand-primary/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-brand-primary/60 dark:text-[#E8D6CE]/50">
          <p>© {new Date().getFullYear()} Kwizera Shop. All rights reserved.</p>
          <div className="flex items-center gap-2 font-medium">
            <CheckCircle2 className="w-4 h-4 text-brand-success" />
            <span>Google Play Data Safety &amp; GDPR Compliant</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
