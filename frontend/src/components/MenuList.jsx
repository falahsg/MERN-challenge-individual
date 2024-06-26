import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MenuList = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    getMenus();
  }, []);

  const getMenus = async () => {
    try {
      const response = await axios.get("http://localhost:5000/menus");
      setMenu(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenu = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menus/${id}`);
      getMenus();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="columns is-centered">
        <div className="column is-three-quarters">
          <Link to="add" className="button is-success">
            Add New
          </Link>
          <table className="table is-fullwidth is-hoverable mt-3">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>No Table</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {menus.map((menu, index) => (
                <tr key={menu._id}>
                  <td>{index + 1}</td>
                  <td>{menu.name}</td>
                  <td>{menu.no_table}</td>
                  <td>{menu.status_menu}</td>
                  <td>
                    <Link
                      to={`edit/${menu._id}`}
                      className="button is-info is-small mr-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => deleteMenu(menu._id)}
                      className="button is-danger is-small"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
