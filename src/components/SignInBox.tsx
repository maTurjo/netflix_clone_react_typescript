import React from "react";

const SignInBox = () => {
  return (
      <div className="bg-black w-[100vw]  sm:max-w-[400px]   sm:min-h-[500px] sm:flex  sm:justify-start px-10 py-10 bg-opacity-80">
        <div className="h-full">
          <div className="mt-5">
            <h1 className="text-4xl">Sign In</h1>
          </div>
          <div className="flex flex-col pt-5">
            <input
              className="mt-4 px-4 py-2 rounded-lg text-black"
              type="email"
              placeholder="Email"

            />
            <input
              className="mt-4 px-4 py-2 rounded-lg text-black"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mt-10">
            <button className="bg-red-600 w-full py-2 rounded-md text-2xl">
              Sign In
            </button>
          </div>
          <div className="flex justify-between mt-4 text-neutral-300">
            <div className="flex items-center">
              <input
                className="scale-150 accent-neutral-500"
                type="checkbox"
                name=""
                id=""
              />
              <label className="px-2" htmlFor="">
                Remember me
              </label>
            </div>
            <div>Need Help ?</div>
          </div>
          <div className="text-neutral-500 mt-20">
            <p>
              New to Netflix ?{" "}
              <span className="text-white px-1">Sign up now.</span>
            </p>
            <p>
              This page is protecte by Google reCAPTCHA to ensure you're not a
              bot.<span className="text-blue-700 px-1">Learn more</span>
            </p>
          </div>
        </div>
      </div>
  );
};

export default SignInBox;
