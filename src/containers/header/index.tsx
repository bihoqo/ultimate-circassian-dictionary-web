import React, { useState } from "react";
import { FaHome, FaTimes, FaHamburger } from "react-icons/fa";
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
    <div className="size-0 sm:size-[40px] md:size-[50px] lg:size-[60px] xl:size-[65px]">
      <Image
        src="/fav/icon-1042x1042.png"
        className={cn("cursor-pointer text-xl font-bold")}
        onClick={onClick}
        width={0}
        height={0}
        sizes="60vw"
        style={{ width: "100%", height: "auto" }} // optional
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
      className={cn(
        "flex items-center gap-1 rounded-lg px-2 py-2 font-bold text-[#303f2e] hover:text-[#637f5e]/50",
        "3xl:text-4xl text-xl lg:text-xl xl:text-2xl 2xl:text-3xl",
      )}
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
      className={cn(
        "text-lightGreen hover:text-lightGreen/70 flex w-full items-center justify-center gap-2 py-4 text-lg font-bold",
      )}
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
        <div className="relative z-50 flex flex-row gap-4 bg-[#afdda7] p-2 shadow">
          <div className="mx-auto flex w-full flex-row items-center gap-1">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <FaHamburger size={36} />
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
            <div className="absolute top-16 left-0 z-60 w-full bg-white shadow-lg">
              {NAV_ITEMS.map((item) => {
                return (
                  <MobileNavItem
                    key={item.title}
                    item={item}
                    onClick={() => navigateTo(item.link)}
                  />
                );
              })}

              <MobileNavItem
                item={{ title: "Close", link: "", icon: <FaTimes />, isVisible: true }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
    <div className="relative z-50 flex flex-row gap-4 bg-[#afdda7] p-2 shadow sm:gap-2 sm:px-0">
      <div className="mx-auto flex w-11/12 flex-row items-center gap-1 sm:gap-4">
        <Logo onClick={() => navigateTo("/")} />

        <div className="flex">
          {NAV_ITEMS.map((item) => {
            return <NavItem key={item.title} item={item} onClick={() => navigateTo(item.link)} />;
          })}
        </div>

        {/* Conditional rendering of SettingSvg for the-language-path */}
        {isOnLanguagePath && (
          <div className="ml-auto">
            <SettingsSvg
              className="cursor-pointer text-[#303f2e] hover:text-[#637f5e]/50"
              onClick={() => setIsSettingsOpen(true)}
            />
          </div>
        )}

        {/* Settings panel */}
        <SettingsPanel isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
      </div>
    </div>
  );
}
