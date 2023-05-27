import { useState } from "react";
import Header from "./layouts/header";

function App() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    accept: false,
  });

  const onSubmit = () => {};

  // e => Event Handler
  const onChange = (e) => {
    console.log(e);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="h-screen">
      <Header></Header>
      <div className="px-6 h-full">
        <form className="pt-8 mx-auto w-full max-w-4xl" onSubmit={() => {}}>
          <p>Nama</p>
          <input className="mb-[10px]" name="name" type="text" />
          <p>Alamat</p>
          <input className="mb-[10px]" name="address" type="text" />
          <p>Nomor KK</p>
          <input className="mb-[10px]" name="identity" type="number" />
          <p>Email</p>
          <input
            className="mb-[10px]"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
          />
          <p>Password</p>
          <input
            className="mb-[10px]"
            name="password"
            type="password"
            value={form.password}
          />
          <p>Konfirmasi Password</p>
          <input
            className="mb-[10px]"
            name="password"
            type="password"
            value={form.password}
          />
          <div className="flex space-x-1 mb-6">
            <input
              type="checkbox"
              className="w-4 h-4"
              name="accept"
              value={form.accept}
            />
            <label>
              I agree with the{" "}
              <a className="text-blue-700 font-medium">
                The terms and condition
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="bg-indigo-500 text-white w-full py-2 text-xl rounded-md"
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
