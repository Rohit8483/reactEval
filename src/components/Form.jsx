import "./Form.css";
import { useEffect, useState } from "react";
export const Form = () => {
  const [game, setgame] = useState({
    gamename: "",
    gameauthor: "",
    gameprice: "",
    gametags: "",
    forkids: true,
    gamedesc: " ",
    gamerating: "",
  });
  const [show, setShow] = useState([]);
  const handleChange = (e) => {
    const { name } = e.target;
    setgame({ ...game, [name]: e.target.value });
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    fetch("https://myfirstapp8483.herokuapp.com/games")
      .then((d) => d.json())
      .then((res) => setShow(res));
  };
  return (
    <>
      <form
        id="addgame"
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://myfirstapp8483.herokuapp.com/games", {
            method: "POST",
            body: JSON.stringify(game),
            headers: { "content-type": "application/json" },
          });
        }}
      >
        <input
          name="gamename"
          placeholder="gamename"
          onChange={handleChange}
          type="text"
        ></input>
        <input
          name="gameauthor"
          placeholder="gameauthor"
          onChange={handleChange}
          type="text"
        ></input>
        <input
          name="gametags"
          placeholder="gametags"
          onChange={handleChange}
          type="text"
        ></input>
        <input
          name="gameprice"
          placeholder="gameprice"
          onChange={handleChange}
          type="text"
        ></input>
        <h5>
          if ForKids then Tick<span></span>
          <input
            type="checkbox"
            name="forkids"
            placeholder="forkids"
            onChange={handleChange}
          ></input>{" "}
        </h5>
        <textarea
          name="gamedesc"
          placeholder="gamedesc"
          onChange={handleChange}
          type="text"
        ></textarea>
        <div id="rating"><select
          name="gamerating"
          id="gamerating"
          placeholder="gamerating"
          onChange={handleChange}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>Rating</div>
        <input type="submit" />
      </form>
      <div>
        <table id="table">
          <tr>
            <th>
              {show.map((item, index) => (
                
                  <>
                  <tr>Game Name-{item.gamename}</tr>
                  <tr>Game author-{item.gameauthor}</tr>
                  <tr>Game price-{item.gameprice}</tr>
                  <tr>Game tags-{item.gametags}</tr>
                  <th>Game for kids or not-{item.forkids}</th>
                  <th>Game description-{item.gamedesc}</th>
                  <th>Game Rating-{item.gamerating}</th>
                  <hr></hr>
                  </>
                
                
              ))}
            </th>
          </tr>
        </table>
      </div>
      <button onClick={(a,b)=>{return a.gameprice-b.gameprice}}>sort by price</button>
    </>
  );
};
{/* <table><thead><tr>...</tr></thead> <tbody>...</tbody></table> */}