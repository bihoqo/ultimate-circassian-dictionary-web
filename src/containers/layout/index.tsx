import "react-toastify/dist/ReactToastify.css";
import React, { ReactNode } from "react";
import Header from "~/containers/header";
import { SocialIcon } from "react-social-icons";
import { useRouter } from "next/navigation";
import Image from "next/image";

function GlobalFooter() {
  const router = useRouter();
  const internalLinks = [
    {
      title: "Website",
      links: [
        { title: "About", href: "/about" },
        { title: "Contact", href: "/contact-us" },
      ],
    },
    {
      title: "Legal",
      links: [{ title: "Policy", href: "/policy" }],
    },
  ];

  const socialMedias = [
    {
      title: "YouTube",
      href: "https://www.youtube.com/channel/UCHB90-79TUQRfCY_DG7efkQ",
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/circassian.grammar/",
    },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Branding */}
          <div>
            <Image
              src="/fav/icon-1042x1042.png"
              alt="Company logo"
              width={60}
              height={60}
              className="mb-4"
            />
            <h2 className="text-xl font-bold text-white">LearnCircassian</h2>
            <p className="mt-2 text-sm text-gray-400">Preserving the Circassian Language.</p>
          </div>

          {/* Internal Links */}
          {internalLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold tracking-wider text-white uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white hover:underline"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div className="mt-6 flex justify-center gap-4 md:col-span-3 md:mt-0 md:justify-end">
            {socialMedias.map((media) => (
              <SocialIcon
                key={media.title}
                url={media.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 28, width: 28 }}
                bgColor="transparent"
                fgColor="currentColor"
                className="text-gray-400 transition hover:text-white"
              />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-700 pt-4 text-xs text-gray-500 sm:flex-row">
          <p>&copy; 2025 LearnCircassian. All rights reserved.</p>
          <a href="/policy" className="mt-2 transition hover:text-white hover:underline sm:mt-0">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

export interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div data-test-id="main-header z-50">
        <div className="z-50 w-full">
          <Header />
        </div>
      </div>
      <div className="bg-gray-700">
        <div className="relative flex w-full flex-row justify-center">{children}</div>
      </div>
      <GlobalFooter />
    </>
  );
}
