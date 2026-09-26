import "./globals.css";

export const metadata = {
  title: "Diário com Deus",
  description: "Meu diário pessoal de oração e reflexão",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
