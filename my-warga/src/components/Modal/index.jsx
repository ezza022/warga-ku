import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDataToAPI, changeShowModal } from "../../config/redux/action";
import Form from "../Form";

export default function Modal() {
  const showModal = useSelector((state) => state.showModal);
  const [data, setData] = useState({
    fname: "",
    lName: "",
    num: "",
    sex: "",
    birth: "",
    date: "",
    month: "",
    year: "",
  });

  const dispatch = useDispatch();

  const handleAddChange = (e, type) => {
    setData({ ...data, [type]: e });
  };

  const handleSaveUser = async () => {
    if (
      (data.fName || data.lName) &&
      data.num &&
      data.sex &&
      data.birth !== "" &&
      data.date &&
      data.month &&
      data.year !== 0
    ) {
      try {
        dispatch(await addDataToAPI(data));
      } catch (e) {
        console.log(e);
      }
      dispatch(changeShowModal(false));
    } else {
      alert("data tidak boleh kosong");
    }
  };

  return (
    <>
      <button
        className="ml-8 cursor-pointer bg-blue-400 border-0 hover:bg-blue-600  px-3 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        style={{ transition: "all .15s ease" }}
        onClick={() => dispatch(changeShowModal(true))}
      >
        Tambah
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="mt-8 text-center border-4">
                  <h5 className=" text-2xl font-semibold">Tambah Data</h5>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <Form handleAddChange={handleAddChange} sex={data.sex} />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-0 rounded-b">
                  <button
                    className="border-0 cursor-pointer text-red-500 background-transparent hover:bg-gray-200 rounded-sm font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={() => dispatch(changeShowModal(false))}
                  >
                    Close
                  </button>
                  <button
                    className="border-0 cursor-pointer bg-green-500 hover:bg-green-600 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{ transition: "all .15s ease" }}
                    onClick={handleSaveUser}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
