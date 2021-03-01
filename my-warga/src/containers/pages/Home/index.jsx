import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataAPI, getDataFromAPI } from "../../../config/redux/action";
import Input from "../../../components/Input";
import Table from "../../../components/Table";
import Modal from "../../../components/Modal";
import "./index.css"

function Home() {
  const [search, setSearch] = useState("");
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const searchChange = (e) => {
    setSearch(e);
  };

  const handleRemoveUser = async (id) => {
    try {
      dispatch(await deleteDataAPI(id));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        await dispatch(getDataFromAPI("users"));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="container-home">
        <div className="container-main-home">
          <div className="search-home">
            <Input searchChange={searchChange} />
            <Modal />
          </div>
          <div className="table-home">
            <Table
              users={users}
              search={search}
              handleRemoveUser={handleRemoveUser}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;