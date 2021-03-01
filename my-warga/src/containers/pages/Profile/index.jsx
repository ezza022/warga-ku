import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getUserAPI, updateUserAPI } from "../../../config/redux/action";

export default function Profile() {
  let user = useSelector((state) => state.user);
  const [data, setData] = useState({
    fName: "",
    lName: "",
    num: "",
    birth: "",
    date: 0,
    month: 0,
    year: 0,
  });
  const dispatch = useDispatch();
  let { id } = useParams();

  const handleChangeUpdate = (e, type) => {
    setData({
      ...data,
      [type]: e,
    });
    console.log("data :", data);
  };

  const handleSaveUpdate = async () => {
    try {
      dispatch(await updateUserAPI(data, id));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch(await getUserAPI(id));
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    setData({
      fName: user.fName,
      lName: user.lName,
      num: user.num,
      birth: user.birth,
      date: user.date,
      month: user.month,
      year: user.year,
    });
  }, [
    dispatch,
    id,
    user.fName,
    user.lName,
    user.num,
    user.birth,
    user.date,
    user.month,
    user.year,
  ]);
  return (
    <div className="px-10">
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                {`${user.fName} ${user.lName}`}
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt, nam? Vitae maiores nostrum doloremque repellendus,
                saepe delectus totam eius et nobis accusamus incidunt, dicta
                neque esse quisquam est, earum nisi.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="mb-5">
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Ganti
                      </button>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama awal
                      </label>
                      <input
                        value={data.fName}
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "fName")
                        }
                      ></input>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nama akhir
                      </label>
                      <input
                        value={data.lName}
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "lName")
                        }
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Nomor Handphone
                      </label>
                      <input
                        value={data.num}
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "num")
                        }
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Jenis kelamin
                      </label>
                      <select
                        value={data.sex}
                        defaultValue={user.sex}
                        id="country"
                        name="country"
                        autoComplete="country"
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "sex")
                        }
                      >
                        <option value={user.sex} selected disabled>
                          {user.sex}
                        </option>
                        <option value="Laki - Laki">Laki - Laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                    </div>
                    <div className="col-span-6">
                      <label
                        htmlFor="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tempat lahir
                      </label>
                      <input
                        value={data.birth}
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "birth")
                        }
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tanggal Lahir
                      </label>
                      <input
                        value={data.date}
                        type="text"
                        name="city"
                        id="city"
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "date")
                        }
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Bulan lahir
                      </label>
                      <input
                        value={data.month}
                        type="text"
                        name="state"
                        id="state"
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "month")
                        }
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tahun lahir
                      </label>
                      <input
                        value={data.year}
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        className="mt-1 text-center focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) =>
                          handleChangeUpdate(e.target.value, "year")
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="space-x-4 px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link
                    type="button"
                    className="no-underline cursor-pointer inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    to="/"
                  >
                    Kembali
                  </Link>
                  <Link
                    type="button"
                    className="no-underline cursor-pointer inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={handleSaveUpdate}
                    to="/"
                  >
                    Simpan
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </div>
  );
}
