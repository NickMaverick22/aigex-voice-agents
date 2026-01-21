import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/5 pt-[60px] pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <Link href="/">
            <Image
              src="/aigex-logo.png"
              alt="AIGEX"
              width={55}
              height={55}
              className="h-[55px] w-auto object-contain"
            />
          </Link>

          <div className="flex flex-wrap justify-center gap-8">
            <Link
              href="/privacy"
              className="text-gray-500 no-underline text-sm transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 no-underline text-sm transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 no-underline text-sm transition-colors hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/company/aigex"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-300 no-underline transition-all hover:bg-primary/20 hover:border-primary/30 hover:text-white"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center pt-8 border-t border-white/5">
          <p className="text-[0.85rem] text-gray-500">
            AIGEX — The Smartest and Most Efficient AI Solutions
          </p>
        </div>
      </div>
    </footer>
  );
}
