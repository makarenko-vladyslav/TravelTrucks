import React from "react";
import Header from "../components/Header";

export default function NotFoundPage() {
  return (
    <>
      <Header />
      <section className="container h-svh">
        <h1 className="text-center p-8 pb-0 text-2xl text-text">
          Page not found 😢
        </h1>
        <p className="text-center text-xl text-text">
          Go to{" "}
          <a href="/" className="underline">
            home
          </a>
        </p>
      </section>
    </>
  );
}
