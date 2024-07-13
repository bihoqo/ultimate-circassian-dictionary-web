import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "6rem",
          "2xl": "6rem",
        },
      },
      delay: {
        2000: "2000ms",
        3000: "3000ms",
      },
      scale: {
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        91: "0.91",
        92: "0.92",
        93: "0.93",
        94: "0.94",
        95: "0.95",
        96: "0.96",
        97: "0.97",
        98: "0.98",
        99: "0.99",
        102: "1.02",
        103: "1.03",
        140: "1.4",
        200: "2",
      },
      keyframes: {
        newFeedItem: {
          "0%": { opacity: "0", transform: "scale(0.85)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        opacityShow: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        raising: {
          "0%": { opacity: "0", transform: "scale(1)" },
          "15%": { opacity: "1", transform: "scale(2)" },
          "75%": { opacity: "1", transform: "scale(2)" },
          "100%": { opacity: "0", transform: "scale(2.5)" },
        },
        slideDownGlobalFeed: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(64px)" },
        },
        opacityPulse: {
          from: { opacity: "0" },
          "50%": { opacity: "0.6" },
          to: { opacity: "0" },
        },
        opacityHalfPulse: {
          from: { opacity: "0.5" },
          "50%": { opacity: "1" },
          to: { opacity: "0.5" },
        },
        stars: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "0 10000%" },
        },
      },
      animation: {
        stars: "stars 100s linear infinite",
        tooltip: "opacityShow 0.1s ease-in-out",
        raising: "raising 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        newFeedItem: "newFeedItem 0.25s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        slideDownGlobalFeed: "slideDownGlobalFeed 0.3s cubic-bezier(0.4, 0, 0.6, 1) forwards",
        opacityPulse: "opacityPulse 4s ease infinite",
        opacityHalfPulse: "opacityHalfPulse 2.5s ease infinite",
      },
      gridTemplateColumns: {
        "battle-royale-table": "2fr 1fr 1fr",
        "trader-row-desktop": "2fr 1fr 1fr 1fr 1fr 1fr 2fr",
        "trader-row": "3fr 1.3fr 1.3fr 1.2fr",
        "trader-row-mobile": "3fr 1.3fr 1.3fr 1.2fr",
        "position-active-manager": "10fr 8fr 10fr 10fr 10fr 10fr 11fr 11fr 10fr 14fr",
        "position-active-investor": "10fr 8fr 10fr 10fr 10fr 10fr 11fr 11fr 10fr 14fr",
        "position-active-investor-mobile": "12.5fr minmax(0, 12fr) repeat(2, 10fr)",
        "position-closed": "10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr 10fr",
        "position-order-table": "10fr 10fr 10fr 10fr 10fr 10fr 10fr",
        "position-closed-mobile": "15fr repeat(3, 10fr)",
        "history-grid": "9fr 9fr 11fr 9fr 9fr 9fr 9fr 9fr 8fr",
        "orders-mobile": "15fr repeat(3, 10fr)",
        "token-row": "1.5fr 1fr 1fr 1fr",
        "token-row-mobile": "28px 28fr 60fr 55fr",
        "invest-one": "370px",
        "create-stv-form": "1fr 3fr",
        "create-stv-page": "1fr 320px",
        "profile-table-manager":
            "minmax(100px,150px) minmax(80px,120px) minmax(200px, 260px) minmax(144px, 1fr) minmax(220px,1fr)",
        "profile-table-investor":
            "minmax(100px,150px) minmax(80px,120px) minmax(50px,70px) minmax(200px, 260px) minmax(144px, 1fr) minmax(220px,1fr)",
        "leaderboard-table-1280": "28px 1fr 60px",
        "leaderboard-table-1324": "40px 1fr 60px",
        "leaderboard-table": "60px 1fr 100px",
        "leaderboard-table-br": "50px 1fr 1fr 50px",
        "leaderboard-table-br-desktop": "50px 1.5fr 1fr 0.6fr",
        "edit-profile-socials": "44px 1fr 120px",
        "portfolio-account-data": "16.4% repeat(4, 9.375%) 20%",
        "portfolio-activity": "15.29% 13.14% 7.83% 15.67% 20.22% 12.89%",
        "portfolio-deposit-history": "12.5% 12.87% 7% 7.95% 12.62% 9.46% 5.17% 73px",
        "subscriptions-table": "25.36% 16% 17% 15.65% minmax(164px, 1fr)",
        "subscriptions-table-body": "25.36% 16% 17% 15.65% minmax(100px, 1fr)",
      },
      fontSize: {
        xxs: "0.65rem",
        32: "2rem",
        10: "0.625rem",
      },
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        110: "110",
        120: "120",
        250: "250",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
        1000: "1000",
        8000: "8000",
        9000: "9000",
        9899: "9899",
        9900: "9900",
        9901: "9901",
        9902: "9902",
        9903: "9903",
        9904: "9904",
        9905: "9905",
        9999: "9999",
      },
      aspectRatio: {
        vault: "768 / 568",
        "stv-card": "261.33 / 285",
        "subscribe-card-mobile": "370 / 284",
        "stv-card-mobile": "354 / 332",
        "subscribe-card": "189/214 auto",
        "subscribe-card-2xl": "217.5 / 230",
      },
      opacity: {
        1: "0.01",
        2: "0.02",
        2.5: ".025",
        4: "0.04",
        5: "0.05",
        6: "0.06",
        7: "0.07",
        8: "0.08",
        10: "0.1",
        12: ".12",
        16: ".16",
        15: ".15",
        30: "0.30",
        35: ".35",
        64: ".64",
        40: ".4",
        46: ".46",
        80: ".8",
      },
      borderWidth: {
        0.5: "0.5px",
      },
      maxWidth: {
        "6.5xl": "1150px",
        "6.8xl": "1200px",
        "7xl": "1284px",
        "7.5xl": "1350px",
        "8xl": "1420px",
        stvCardWidth: "23rem",
      },
      minWidth: {
        "6.5xl": "1150px",
        "6.8xl": "1200px",
        "7xl": "1284px",
        "7.5xl": "1350px",
        "8xl": "1420px",
      },
      width: {
        7.5: "1.875rem",
        12.5: "3.125rem",
        22.5: "5.625rem",
        100: "6.25rem",
      },
      height: {
        7.5: "1.875rem",
        9.5: "2.375rem",
        12.5: "3.125rem",
        stvCardHeight: "24.563rem",
      },
      padding: {
        52: "3.25rem",
      },
      margin: {
        52: "3.25rem",
      },
      colors: {
        traderCardBg: "#10141C",
        tooltipBg: "#43434A",
        feedItemHover: "#181B21",
        bgNavigation: "#0e1118",
        componentBody: "#10131B",
        inputBg: "#1C1F27",
        navy: "#0B263F",
        blue: "#082034",
        blue2: "#5BA4FF",
        blue3: "#1d88ec",
        blue4: "#082034",
        gray: "#949292",
        "text-gray": "#888A8F",
        "gray-explorer": "#6e6e71",
        white50: "ffffff50",
        darkGreen: "#039350",
        boostGreenHover: "#00A355",
        green: "#00CC6A",
        greenButtonHover: "#039350",
        lightGreen: "#00bc35",
        purple: "#B879FF",
        purpleBtnHover: "#4C2B71",
        purpleBtn: "#6C3DA2",
        purpleBtnBorder: "#793FBC",
        purple2: "#A700A0",
        purple3: "#6A3BA0",
        purple4: "#793FBC",
        red: "#f84646",
        redButtonHover: "#9D3838",
        yellow: "#FFC600",
        yellowDarken: "#CC9E00",
        dashedGray: "rgba(255, 255, 255, 0.1)",
        textGreen: "#00CC6A",
        headerColor: "#FFFFFF",
        textGrey: "#888A8F",
        textRed: "#FA3D60",
        borderColor: "#282b32",
        sectionColor: "#11141c",
        bgVeryDark: "#10131B",
        bgDark: "#1B1F28",
        customGrey: "#4a4b4f",
        customGrey2: "#43434A",
        white: "#FFFFFF",
        imageMask: "#101118",
        chatBg: "#12151B",
        // socials
        discord: "#5865F2",
        twitter: "#1D9BF0",
        twitterHover: "#166AA3",
        telegram: "#36ADE2",
        linkTwitter: "#41ABE1",
        mobileMenuIcon: "#B9BABD",
        popupBG: "#1D2029",
        overlay: "#0D1016",

        sliderDefaultGrey: "#FEFFFE12",
        popupBg: "#151820",
        // 2.0
        "black-main": "#0B0C13",
        "black-input": "#151922",

        "vault-loop-sidebar-bg": "#161921",
        assetPanelBG: "rgba(21, 24, 32, 0.90)",

        "black-sheet": "#151820",

        // button
        disabled: "#2D3037",
        buttonGray: "#434348",
        //staking
        pink: "#DB49B5",

        chatItemBg: "rgba(219,224,237,0.08)",
      },
      screens: {
        "<sm": { max: "639px" },
        "<md": { max: "767px" },
        md2: "900px",
        "2xl": "1324px",
        "3xl": "1536px",
        "4xl": "1920px",
        1440: "1440px",
        "hover-hover": { raw: "(hover: hover)" },
      },
      boxShadow: {
        mobileMenu: "0px -2px 40px 0px rgba(0, 0, 0, 0.40)",
        totalRaisedPill: "0px -1px 14px 0px rgba(255, 178, 1, 0.15) inset",
        totalRaisedPillHover: "0px -1px 14px 0px rgba(255, 178, 1, 0.32) inset",
        modal: "0 4px 4px 0 rgba(0, 0, 0, 0.52)",
        greenButon: "0px 2px 0px rgba(0, 63, 18, 0.53)",
        greenInnerShadow:
            "0px 0px 58px 0px rgba(0, 204, 106, 0.21) inset, 0px 0px 4px 0px rgba(255, 255, 255, 0.25) inset",
        subscribeCardShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.44)",
        emptyAvatarLeaderboard: "0px 0px 30.87721px 0px rgba(255, 224, 115, 0.20)",
        subscriptionBannerCardHoverShadow: "0px 0px 15px 0px #69277B",
      },
      borderColor: {
        "blue-faded": "rgba(255, 255, 255, 0.1)",
      },
      dropShadow: {
        s: "0px 0px 150px rgba(255, 199, 0, 0.05)",
        yellow: "0px 0px 3px rgba(255, 199, 0, 1)",
      },
      backgroundSize: {
        "50%": "50%",
        16: "4rem",
      },
      backgroundImage: {
        circleReferral: `radial-gradient(50% 50% at 50% 50%, rgba(0, 204, 106, 0.00) 64.58%, rgba(0, 204, 106, 0.22) 96.35%, rgba(111, 255, 186, 0.36) 100%)`,
        rankingBattleRoyale: `url('/mobile/BattleRoyaleLeaderboard.png')`,
        reflinkDesktop: `url('/referral/ref_desktop.png')`,
        battleRoyaleBanner: `url("/battle-royale-main.webp")`,
        battleRoyaleMobile: `url('/battle_royale_mobile_bg.png')`,
        pointsIndicatorBg: `linear-gradient(90deg, #00CC6A -13.75%, #3CAAB1 123.75%)`,
        pointsBg: `url('/mobile/bg.svg')`,
        jungle: `url('/mobile/jungle/.png')`,
        pnlGreen: `url('/pnl-card-green@2x.png')`,
        pnlRed: `url('/pnl-card-red@2x.png')`,
        s2b: "url('/banner/s2b.png')",
        mothership: "url('/banner/mothership.png')",
        competition: "url('/banner/competition.png')",
        copytrading: "url('/banner/copytrading_2.png')",
        pwaGradient: `linear-gradient(90deg, #00CC6A -11.99%, #83C3ED 71.52%, #EBE4FF 129.91%)`,
        subscribe: `linear-gradient(86deg, #10131B 4.48%, rgba(0, 0, 0, 0.00) 132.44%, #10131B 132.44%), url('/banner/subscribe.png')`,
        lbManager: "url('/leaderboard/manager-bg.png')",
        "leaderboard-investor-bg": "url('/leaderboard/investor-bg.png')",
        battleRoyalePrize: `linear-gradient(0deg, #FFC600 0.6%, #FFEEB4 73.33%)`,
        gradient: "linear-gradient(90deg, #37E6AF 0%, #FFC700 170.35%)",
        profileBgGradient:
            "linear-gradient(180deg, rgba(11, 12, 19, 0.00) 0%, rgba(11, 12, 19, 0.56) 41.15%, #0B0C13 100%)",
        profileBg: `linear-gradient(180deg, rgba(11, 12, 19, 0.00) 0%, rgba(11, 12, 19, 0.56) 41.15%, #0B0C13 100%), url('~/public/profile-bg.png')`,
        managerProfileBg:
            "linear-gradient(180deg, rgba(11, 12, 19, 0) 0%, rgba(11, 12, 19, 0.56) 40.18%, #0B0C13 89.5%),url('~/public/managerProfileBg.jpeg')",
        investorProfileBg:
            "linear-gradient(180deg, rgba(11, 12, 19, 0) 0%, rgba(11, 12, 19, 0.56) 40.18%, #0B0C13 89.5%),url('~/public/investorProfileBg.jpeg')",
        maintenanceBg:
            "linear-gradient(180deg, rgba(11, 12, 19, 0) 0%, rgba(11, 12, 19, 0.56) 40.18%, #0B0C13 89.5%),url('~/public/maintenanceBg.jpg')",
        stakeToBoostCardBg:
            "linear-gradient(81.85deg, #10131B 19.09%, rgba(0, 0, 0,0) 182.27%, #10131B 182.27%)",
        tierBronze:
            "radial-gradient(96.24% 66.02% at 48.48% -15.84%, rgba(255, 255, 255, 0.00) 0%, rgba(195, 74, 34, 0.10) 22.92%, rgba(239, 122, 84, 0.10) 45.83%, rgba(0, 0, 0, 0.00) 100%)",
        tierSilver:
            "radial-gradient(80.85% 55.45% at 50.13% -5.28%, rgba(255, 255, 255, 0.10) 0%, rgba(254, 254, 254, 0.10) 22.92%, rgba(146, 146, 146, 0.07) 45.83%, rgba(0, 0, 0, 0.00) 100%)",
        tierGold:
            "radial-gradient(80.85% 55.45% at 50.13% -5.28%, rgba(255, 255, 255, 0.20) 0%, rgba(255, 198, 0, 0.20) 22.92%, rgba(255, 200, 92, 0.14) 45.83%, rgba(0, 0, 0, 0.00) 100%)",
        tierDiamond:
            "linear-gradient(180deg, rgba(16, 19, 27, 0.00) 0%, #11141B 92.19%), radial-gradient(99.01% 99.01% at 50.90% 0.99%, rgba(255, 255, 255, 0.40) 0%, rgba(226, 48, 255, 0.14) 10.42%, rgba(0, 194, 255, 0.12) 57.81%, rgba(0, 0, 0, 0.00) 100%)",
        statsCustomBg:
            "linear-gradient(59deg, #12151B 0%, rgba(18, 21, 27, 1) 45%,rgba(18, 21, 27, 0.07) 100%)",
        statsCharBg:
            "linear-gradient(360deg, rgba(0, 204, 106, 0.06) 0%, rgba(0, 204, 106, 0.00) 100%)",
        globalChatTopGradient: "linear-gradient(360deg,#0E1118 0%, rgba(14, 17, 24, 0.00) 100%)",
        tierBronzeText:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,140,103,1) 63%, rgba(167,46,7,1) 85%)",
        tierSilverText:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(159,192,231,1) 57%, rgba(62,83,112,1) 81%)",
        tierGoldText:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,242,119,1) 50%, rgba(255,207,30,1) 70%, rgba(255,98,8,1) 85%)",
        tierDiamondText:
            "linear-gradient(184deg, rgba(255,255,255,1) 12%, rgba(216,70,240,1) 56%, rgba(29,155,240,1) 88%, rgba(19,106,165,1) 90%, rgba(0,51,173,1) 115%)",
        tierBronzeBorder:
            "linear-gradient(175deg, rgba(200,193,186,0.7) 0%, rgba(65,43,17,0.7) 24%, rgba(62,51,14,0.7) 50%, rgba(31,27,12,0.7) 65%, rgba(0,0,0,0.7) 76%, rgba(40,43,50,1) 100%)",
        tierSilverBorder:
            "linear-gradient(159deg, rgba(239,239,239,0.7) 0%, rgba(223,223,223,0.7) 24%, rgba(108,104,89,0.7) 50%, rgba(55,54,51,0.7) 75%, rgba(40,43,50,1) 100%)",
        tierGoldBorder:
            "linear-gradient(165deg, rgba(255,231,149,0.7) 0%, rgba(255,198,0,0.7) 24%, rgba(171,143,43,0.7) 50%, rgba(92,85,57,0.7) 75%, rgba(40,43,50,1) 100%)",
        tierDiamondBorder:
            "linear-gradient(192deg, rgba(208,234,252,1) 0%, rgba(29,155,240,1) 24%, rgba(216,70,240,1) 50%, rgba(19,106,165,1) 75%, rgba(40,43,50,1) 90%)",
        stars: "url('/stake/tiers/stars.png')",
        roadmap1:
            "radial-gradient(48.50% 48.79% at 50.00% 62.24%, #E4F9FF 0%, #1D9BF0 64.06%, #000 100%)",
        roadmap2:
            "radial-gradient(48.50% 48.79% at 50.00% 62.24%, #E4FFF2 0%, #00CC6A 64.06%, #000 100%)",
        roadmap3:
            "radial-gradient(48.50% 48.79% at 50.00% 62.24%, #E8E4FF 0%, #8140FF 64.06%, #000 100%)",
        usageGradient: "linear-gradient(180deg, rgba(0, 204, 106, 0.2) 50%, rgb(0, 204, 106) 50%)",
        subscribeCardGradient:
            "linear-gradient(180.95deg, rgba(78, 62, 96, 0.75) 8.89%, rgba(50, 40, 62, 0.26) 60.52%)",
        subscribeCardHover:
            "linear-gradient(180deg, rgba(85, 47, 128, 0.15) 0%, rgba(0, 0, 0, 0) 57.24%)",
        marginPercentGreen:
            "linear-gradient(90deg, rgba(0, 204, 106, 0.70) -13.75%, rgba(60, 170, 177, 0.70) 123.75%)",
        marginPercentRed:
            "linear-gradient(90deg, rgba(248, 70, 70, 0.70) -13.75%, rgba(248, 70, 70, 0.70) 123.75%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
            "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-safe-area")],
};
export default config;