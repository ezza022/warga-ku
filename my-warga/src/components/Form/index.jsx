import React from "react";

function Form({ handleAddChange }) {
  return (
    <div className="mt-5 md:mt-0 md:col-span-2  ">
      <form action="#" method="POST">
        <div className="overflow-hidden ">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium ">Nama Awal</label>
                <input
                  type="text"
                  name="first_name"
                  id="first"
                  autoComplete="given-name"
                  className="mt-1 block w-full rounded border border-blue-500 focus:outline-none py-1"
                  placeholder="Christopher"
                  onChange={(e) => handleAddChange(e.target.value, "fName")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium ">Nama Akhir</label>
                <input
                  type="text"
                  name="last_name"
                  id="last"
                  autoComplete="family-name"
                  placeholder="Asep"
                  className="mt-1 block w-full rounded border border-blue-500 focus:outline-none py-1"
                  onChange={(e) => handleAddChange(e.target.value, "lName")}
                />
              </div>

              <div className="col-span-6 sm:col-span-4">
                <label className="block text-sm font-medium">
                  Nomor Handphone
                </label>
                <input
                  type="text"
                  name="email_address"
                  id="email_address"
                  autoComplete="email"
                  placeholder="0812131xxx"
                  className="mt-1 block w-full py-1 px-3 border border-blue-500 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                  onChange={(e) => handleAddChange(e.target.value, "num")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <label className="block text-sm font-medium">
                  Jenis Kelamin
                </label>
                <select
                  id="gender"
                  name="gender"
                  autoComplete="gender"
                  className="mt-1 block w-full py-2 px-3 border border-blue-500 bg-white rounded-md shadow-sm focus:outline-none sm:text-sm"
                  onChange={(e) => handleAddChange(e.target.value, "sex")}
                >
                  <option selected={true} disabled={true}>
                    --- pilih ---
                  </option>
                  <option >Laki - Laki</option>
                  <option >Perempuan</option>
                </select>
              </div>

              <div className="col-span-6">
                <label className="block text-sm font-medium ">
                  Tempat Lahir
                </label>
                <input
                  type="text"
                  name="street_address"
                  id="street_address"
                  autoComplete="street-address"
                  placeholder="kampung Duren jln. keramat"
                  className="mt-1 focus:outline-none block w-full shadow-sm sm:text-sm border border-blue-500 rounded-md py-1"
                  onChange={(e) => handleAddChange(e.target.value, "birth")}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <label className="block text-sm font-medium">
                  Tanggal Lahir
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="DD"
                  className="mt-1 text-center block w-full rounded border border-blue-500 focus:outline-none py-1"
                  onChange={(e) => handleAddChange(e.target.value, "date")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium">Bulan Lahir</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="MM"
                  className="mt-1 text-center block w-full rounded border border-blue-500 focus:outline-none py-1"
                  onChange={(e) => handleAddChange(e.target.value, "month")}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <label className="block text-sm font-medium">Tahun Lahir</label>
                <input
                  type="text"
                  name="postal_code"
                  id="postal_code"
                  autoComplete="postal-code"
                  placeholder="YY"
                  className="mt-1 text-center block w-full rounded border border-blue-500 focus:outline-none py-1"
                  onChange={(e) => handleAddChange(e.target.value, "year")}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
