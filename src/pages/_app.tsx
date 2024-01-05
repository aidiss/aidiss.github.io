import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";
import { Roboto } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Roboto({ subsets: ["latin"], weight: "300" });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />;
    </>
  );
};

export default MyApp;
