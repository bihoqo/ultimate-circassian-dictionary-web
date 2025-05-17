import React, { useState } from "react";
import { FaHome, FaTimes, FaBars } from "react-icons/fa";
import { MdMenuBook, MdContactSupport, MdOutlineFileDownload } from "react-icons/md";
import { useRouter } from "next/navigation";
import { cn } from "~/utils/classNames";
import Image from "next/image";
import useWindowSize from "~/hooks/useWindowDimensions";
import SearchContainer from "~/containers/header/searchContainer";
import { usePathname } from "next/navigation";
import { INavBarItem } from "~/interfaces";
import SettingsPanel from "~/components/settingsPanel";
import SettingsSvg from "~/components/svg/settingsSvg";

function Logo({ onClick }: { onClick: () => void }) {
  return (
    <div className="h-10 w-10">
      <Image
        src="/fav/icon-256x256.png"
        className="cursor-pointer object-contain"
        onClick={onClick}
        width={40}
        height={40}
        alt="logo"
      />
    </div>
  );
}

function NavItem({ item, onClick }: { item: INavBarItem; onClick: () => void }) {
  if (!item.isVisible) {
    return null;
  }

  return (
    <button
      className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold text-white transition hover:bg-green-700"
      onClick={onClick}
    >
      {item.icon}
      {item.title}
    </button>
  );
}

function MobileNavItem({ item, onClick }: { item: INavBarItem; onClick: () => void }) {
  if (!item.isVisible) {
    return null;
  }

  return (
    <button
      className="flex w-full items-center justify-start gap-3 px-6 py-4 text-left text-lg font-semibold text-green-800 transition hover:bg-green-100"
      onClick={onClick}
    >
      {item.icon}
      {item.title}
    </button>
  );
}

const NAV_ITEMS: INavBarItem[] = [
  { title: "Home", link: "/", icon: <FaHome />, isVisible: true },
  { title: "Dictionary", link: "/dictionary", icon: <MdMenuBook />, isVisible: true },
  {
    title: "The Language Path",
    link: "/the-language-path",
    icon: <MdMenuBook />,
    isVisible: true,
  },
  { title: "Grammar", link: "/grammar", icon: <MdMenuBook />, isVisible: true },
  { title: "Download", link: "/download", icon: <MdOutlineFileDownload />, isVisible: true },
  { title: "Contact Us", link: "/contact-us", icon: <MdContactSupport />, isVisible: true },
];

export default function Header() {
  const { width } = useWindowSize();
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false); // State for settings panel

  const navigateTo = (link: string) => {
    router.push(link);
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
  };

  // Check if current path is "/the-language-path" to show the setting icon
  const isOnLanguagePath = pathname?.startsWith("/the-language-path");

  if (width < 640) {
    return (
      <div className={cn("z-50 w-full", { fixed: pathname?.includes("dictionary") })}>
        <div className="relative z-50 flex flex-row gap-4 bg-green-800 p-2 shadow">
          <div className="mx-auto flex w-full flex-row items-center gap-1">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaBars size={36} />
            </button>
            <SearchContainer showOnMobile={true} />

            {/* Settings icon added on mobile next to the search input */}
            {isOnLanguagePath && (
              <SettingsSvg
                className="ml-auto cursor-pointer text-[#303f2e] hover:text-[#637f5e]/50"
                onClick={() => setIsSettingsOpen(true)}
              />
            )}
          </div>

          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 z-50 w-full rounded-b-lg border-t border-gray-200 bg-white shadow-lg">
              {NAV_ITEMS.map((item) => (
                <MobileNavItem key={item.title} item={item} onClick={() => navigateTo(item.link)} />
              ))}
              <MobileNavItem
                item={{ title: "Close", link: "", icon: <FaTimes />, isVisible: true }}
                onClick={() => setIsMobileMenuOpen(false)}
              />
            </div>
          )}
        </div>

        {/* Settings panel */}
        <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      </div>
    );
  }

  return (
    <div className="relative z-50 flex w-full flex-row items-center justify-between bg-green-800 px-6 py-3 shadow">
      <Logo onClick={() => navigateTo("/")} />
      <div className="flex items-center gap-6">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.title} item={item} onClick={() => navigateTo(item.link)} />
        ))}
      </div>
      {isOnLanguagePath && (
        <SettingsSvg
          className="cursor-pointer text-white transition hover:text-green-300"
          onClick={() => setIsSettingsOpen(true)}
        />
      )}
    </div>
  );
}
