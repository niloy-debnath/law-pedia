"use client";
import React from "react";
import Image from "next/image";
import loginImg from "@/../public/login.png";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import bcrypt from "bcryptjs";

const Login = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { email, password } = Object.fromEntries(formData.entries());

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        alert(res.error); // Simple feedback for bad credentials
      } else {
        router.push("/"); // Redirect user to home screen upon success
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-[85vh] w-full flex items-center justify-center ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-7xl items-center">
        {/* Left Side: Login Form Card */}
        <div className="w-full flex justify-center md:justify-end order-2 md:order-1">
          <div className="card bg-base-100 w-full max-w-md shadow-xl border border-base-200">
            {/* Added onSubmit handler here */}
            <form className="card-body gap-4" onSubmit={handleLogin}>
              <div>
                <h2 className="card-title text-2xl font-bold tracking-tight">
                  Welcome Back
                </h2>
                <p className="text-sm text-base-content/60 mt-1">
                  Please enter your details to sign in.
                </p>
              </div>

              <fieldset className="fieldset gap-2 p-0">
                <div className="form-control w-full">
                  <label className="label-text mb-1 font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email" // <-- ADDED NAME ATTRIBUTE
                    className="input input-bordered w-full"
                    placeholder="name@company.com"
                    required
                  />
                </div>

                <div className="form-control w-full mt-2">
                  <label className="label-text mb-1 font-medium">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password" // <-- ADDED NAME ATTRIBUTE
                    className="input input-bordered w-full"
                    placeholder="••••••••"
                    required
                  />
                </div>

                <div className="flex justify-between items-center mt-3 text-xs">
                  <label className="label cursor-pointer gap-2 p-0">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-xs rounded"
                    />
                    <span className="label-text">Remember me</span>
                  </label>
                  <a
                    href="#"
                    className="link link-hover text-neutral font-medium"
                  >
                    Forgot password?
                  </a>
                </div>

                {/* Submit button inside form without manual inline onClick */}
                <button type="submit" className="btn btn-neutral w-full mt-6">
                  Sign In
                </button>
              </fieldset>

              <p className="text-center text-sm text-base-content/60 mt-2">
                Do not have an account?{" "}
                <Link
                  href={"/register"}
                  className="link link-hover text-neutral font-medium"
                >
                  Register here
                </Link>
              </p>
            </form>
          </div>
        </div>

        {/* Right Side: Image Asset */}
        <div className="w-full flex justify-center md:justify-start order-1 md:order-2 hidden md:flex">
          <div className=" w-full aspect-square relative transition-transform duration-500 hover:scale-105">
            <Image
              src={loginImg}
              alt="Login illustration"
              width={750}
              height={200}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
