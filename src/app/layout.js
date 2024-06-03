import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  icons: {
    icon: '/icon.png',
  },
  title: "Maitre Cheik",
  description:
    "Découvrez Maître Mamba, marabout d'exception avec une tradition ancestrale de Ouagadougou, Burkina-Faso. Initié dès son jeune âge, il excelle dans les arts occultes tels que le maraboutage, la voyance et la médiumnité. Spécialiste des problématiques sentimentales et familiales, Maître Mamba vous guide vers le bonheur et la chance avec discrétion et professionnalisme. Que vous cherchiez de l'aide pour des soucis amoureux ou familiaux, Maître Mamba est là pour vous, quelle que soit votre origine ou croyance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
