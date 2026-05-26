import React from "react";
import Image from "next/image";
// Assuming you have a register illustration, otherwise you can reuse loginImg
import registerImg from "@/../public/login.png";
import Link from "next/link";

const Register = () => {
  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
        {/* Right Side: Image Asset (Hidden on mobile) */}
        <div className="w-full flex justify-center md:justify-start order-1 md:order-2 hidden md:flex">
          <div className="w-full aspect-square relative transition-transform duration-500 hover:scale-105">
            <Image
              src={registerImg}
              alt="Register illustration"
              width={750}
              height={200}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Left Side: Register Form Card */}
        <div className="w-full flex justify-center md:justify-end order-2 md:order-1">
          <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-200">
            <form className="card-body gap-4">
              {/* Header Text */}
              <div>
                <h2 className="card-title text-2xl font-bold tracking-tight">
                  Create an Account
                </h2>
                <p className="text-sm text-base-content/60 mt-1">
                  Please enter your details to sign up.
                </p>
              </div>

              {/* Form Fields */}
              <fieldset className="fieldset gap-2 p-0">
                {/* Name Field */}
                <div className="form-control w-full">
                  <label className="label-text mb-1 font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="form-control w-full mt-2">
                  <label className="label-text mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="input input-bordered w-full"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                {/* Password Field */}
                <div className="form-control w-full mt-2">
                  <label className="label-text mb-1 font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    className="input input-bordered w-full"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Utilities: Terms and Conditions */}
                <div className="flex justify-between items-center mt-3 text-xs">
                  <label className="label cursor-pointer gap-2 p-0">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs rounded"
                      required
                    />
                    <span className="label-text">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="link link-hover text-neutral font-medium"
                      >
                        Terms & Conditions
                      </a>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-neutral w-full mt-6">
                  Sign Up
                </button>
              </fieldset>

              {/* Footer Link */}
              <p className="text-center text-sm text-base-content/60 mt-2">
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  className="link link-hover text-neutral font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
