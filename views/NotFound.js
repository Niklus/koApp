import Layout from "./Layout.js";

const NotFound = () => {
  return Layout({
    content: /*html*/ `
      <main>
        <p>
          Sorry, cant find that page. <a href="/">Go Back Home?</a>
        </p>
      </main>
    `,
  });
};

export default NotFound;
