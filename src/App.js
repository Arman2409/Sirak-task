import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { changeDialogStatus } from './store/dialogSlice';
import Dialog from "./components/Dialog/Dialog";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [dialogStatus, setDialogStatus] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const dispatch = useDispatch();
  const status = useSelector((state) => {
    return state.dialog.dialogStatus;
  })

  const openDialog = () => {
    dispatch(changeDialogStatus());
  };

  useEffect(() => {
      setDialogStatus(status);
  }, [status])

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api2.binance.com/api/v3/ticker/24hr"
      );
      setPosts(response.data);
      setLoading(false);
    };

    loadPosts();
  }, []);

  return (
    <div className="App">
      {dialogStatus ? <Dialog/> : null}
      <h3>Search Filter</h3>
      <input
        style={{ width: "30%", height: "25px" }}
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTitle(e.target.value)}
      />
      <div className="sections">
                <h3>Coints list</h3>
                <h3>Bid list</h3>
              </div>

      {loading ? (
        <h4>Loading ...</h4>
      ) : (
        posts
          .filter((value) => {
            if (searchTitle === "") {
              return value;
            } else if (
              value.symbol.toLowerCase().includes(searchTitle.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item) => (
            <div>
              <div>
                <button onClick={openDialog}>buy</button> <button>sell</button>
                <h5 key={item.id}>{item.symbol}</h5>
                <p>{item.priceChangePercent}</p>
              </div>
              <div>
                <p>{item.lastPrice}</p>
                <p>{item.volume}</p>
              </div>
            </div>
          ))
      )}
    </div>
  );
}

export default App;
