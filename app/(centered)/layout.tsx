export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-100">
      <head>
        <meta charSet="utf-8" />
        <title>Sell a digital product</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="bootstrap.min.css" />
      </head>
      <body className="h-100 d-flex flex-column justify-content-center align-items-center">
        {children}
      </body>
    </html>
  )
}
