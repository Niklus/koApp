const Layout = ({ content }) => {
  return /* html */ `
    <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>koa</title>
        <link rel="stylesheet" href="/css/main.css"/>
      </head>
      <body>
        <header>
          <h1>KOA</h1>
        </header>
        ${content}
      </body>
    </html>
  `;
};

export default Layout;
