import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditMenu = () => {
  const [name, setName] = useState("");
  const [no_table, setNoTable] = useState("");
  const [status_menu, setStatusMenu] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getMenuById();
  }, []);

  const getMenuById = async () => {
    const response = await axios.get(`http://localhost:5000/menus/${id}`);
    setName(response.data.name);
    setNoTable(response.data.no_table);
    setStatusMenu(response.data.status_menu);
  };

  const updateMenu = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/menus/${id}`, {
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
        <form onSubmit={updateMenu}>
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
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMenu;
