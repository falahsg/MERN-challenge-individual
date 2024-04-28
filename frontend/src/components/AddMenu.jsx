import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMenu = () => {
  const [name, setName] = useState("");
  const [no_table, setNoTable] = useState("");
  const [status_menu, setStatusMenu] = useState("preparing");
  const navigate = useNavigate();

  const saveMenu = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/menus", {
        name,
        no_table,
        status_menu,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveMenu}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">No Table</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={no_table}
                onChange={(e) => setNoTable(e.target.value)}
                placeholder="No Table"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select
                  value={status_menu}
                  onChange={(e) => setStatusMenu(e.target.value)}
                >
                  <option value="preparing">preparing</option>
                  <option value="prepare">prepare</option>
                  <option value="on the way">on the way</option>
                  <option value="delivered">delivered</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMenu;
