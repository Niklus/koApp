import xss from "xss";
import Layout from "./Layout.js";

const Home = ({ title, rows }) => {
  return Layout({
    content: /*html*/ `
      <main>
        <h2>${title}</h2>
        <form action="/" method="POST">
          <input 
            name="todo" 
            id="todo" 
            type="text" 
            placeholder="Enter a todo" 
            required
          />
          <input type="submit" value="Submit" />
        </form>
        <ul>
          ${rows
            .map(
              (row) => /*html*/ `
              <li>${xss(row.todo)} <button onclick="app.delete(${
                row.id
              })">X</button></li>
            `
            )
            .join("")}
        </ul>
      </main>
      <script src="/js/home.js"></script>
    `,
  });
};

export default Home;
