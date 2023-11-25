"use client";
import Image from "next/image";
import React from "react";

export default function Home() {
  const [skill, setSkill] = React.useState(false);

  function changeCard() {
    setSkill(!skill);
  }

  return (
    <main className="min-h-screen w-full backdrop-blur-sm bg-blue-300/10 pb-6">
      <div className="flex flex-col items-center lg:hidden">
        {/*Mobile view.*/}
        <div
          id="Header"
          className="w-11/12 flex justify-center  p-10 mt-3 rounded"
        >
          <div className="">
            <Image
              src="/patrol.jpg"
              width={150}
              height={150}
              className="rounded-full border-white border-2 shadow-xl"
              alt="A picture of buckethead used as a placeholder for the meanwhile"
            />
          </div>
        </div>
        <div className="w-11/12  mt-4 p-4  border-t-2  border-b-2 border-white/80 text-white/90  text-center">
          <h1 className="pt-2">
            Hello! I'm <strong>Juho Järvilehto</strong>
          </h1>
          <br />
          <p className="pb-5">
            I'm a 24 year old computer science student at metropolia. I'm
            interested in games, music and programming. <br />
            Currently working on improving UI/UX skills
          </p>
        </div>
        <div className=" w-11/12 flex  flex-col pt-7 sm:flex-row sm:justify-center">
          <div
            onClick={changeCard}
            className="  mb-5  p-4 rounded bg-white/30 backdrop-blur-sm text-white shadow-xl sm:w-3/5 sm:mr-2 sm:mb-0
             transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 ..."
          >
            {!skill && (
              <>
                <h1 className="font-bold underline">My skill set.</h1>
                <br />
                <p>
                  During my studies I have learned the basics of programming
                  that later evolved into being specialized in web-development
                  and mobile applications. Some of the languages I have used
                  during my studies and personal development projects and work
                  have been.
                </p>
                <p className="mt-1 font-bold">click me.</p>
              </>
            )}

            {skill && (
              <>
                <div className="w-full">
                  <div className="flex justify-around font-bold border-b-2 pb-2">
                    <h1>Language </h1>
                    <p>Skill</p>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" h-3/5 p-3 rounded bg-white/30 backdrop-blur-sm justify-between text-white shadow-xl flex sm:w-2/5 sm:ml-2 flex-col">
            <div className="">
              <p></p>
            </div>
            <div className="bg-white/50 rounded-full p-3 mt-3"></div>
          </div>
        </div>
      </div>

      {/*
        Desktop Stuff
        <div className=" md:w-4/6 sm:w-full">
        <div className="flex h-1/6 shrink-0 items-center justify-between md:rounded-lg bg-blue-500 p-4 md:mt-8 sm:rounded-none mb-8">
          <Image
            src="/patrol.jpg"
            width={150}
            height={150}
            className="rounded-full ml-10"
            alt="A picture of buckethead used as a placeholder for the meanwhile"
          />
          <div className="mr-9">
            <h1>Juho Järvilehto</h1>
            <p>Programmer</p>
          </div>
        </div>

        <div className="flex items-center  bg-slate-800 p-24 mb-8">
          <div></div>
          <div></div>
        </div>

        <div className="flex items-center  bg-slate-800 p-24">
          <div></div>
          <div></div>
        </div>
      </div>*/}
    </main>
  );
}
