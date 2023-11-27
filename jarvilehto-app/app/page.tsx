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
      {/*Mobile Stuff*/}
      <div className="flex flex-col items-center lg:hidden">
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
            Hello! I am <strong>Juho Järvilehto</strong>
          </h1>
          <br />
          <p className="pb-5">
            I am an 24 year old engineering student at metropolia. I am
            interested in games, music and programming. <br />
            Currently focusing on web-development and personal projects.
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
                <h1 className="font-bold underline mb-5">My skill set.</h1>
                <p>
                  During my studies I have learned the basics of programming
                  that later evolved into being specialized in web-development
                  and mobile applications. Here I have listed those which I have
                  used the most in development for assignments, work and
                  personal projects.
                </p>
                <p className="mt-1 font-bold">click me.</p>
              </>
            )}

            {skill && (
              <>
                <div>
                  <div
                    id="class-table"
                    className=" flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50"
                  >
                    <table className="w-full border-collapse text-left">
                      <thead className="border-b mb-4">
                        <tr>
                          <th className="leading-6 font-semibold text-white">
                            <div className=" py-2">language</div>
                          </th>
                          <th className="leading-6 font-semibold text-white">
                            <div className="py-2">skill</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="align-baseline">
                        <tr className="">
                          <td className="font-mono">JavaScript</td>
                          <td className="font-mono">My ultimate ability</td>
                        </tr>
                        <tr>
                          <td className="font-mono">React</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Java/kotlin</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Node</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">MySQL</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Wordpress</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">php</td>
                          <td className="font-mono ">familiar</td>
                        </tr>
                      </tbody>
                      <p className="mt-2">and many more...</p>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" h-5/5  justify-between text-white shadow-xl flex sm:w-2/5 sm:ml-2 flex-col sm:h-4/5">
            <div className="flex flex-col rounded bg-white/30 backdrop-blur-sm p-4 rounded w-full">
              <div className="h-auto">
                <h1 className="font-bold underline mb-2">Contact</h1>
                <p>
                  The most convenient way to contact me is to send an email to
                  <strong> jarvilehtojuho@gmail.com</strong>.
                </p>
              </div>
            </div>
            <div className="bg-white/50 rounded p-2 mt-4 flex flex-row w-full justify-start">
              <a href="https://github.com/jarvilehto" target="_blank">
                <Image
                  src={"/github.png"}
                  width={30}
                  height={30}
                  className="ml-1 hover:scale-110"
                  alt="A small github Logo"
                />
              </a>

              <Image
                src={"/linkedin.png"}
                width={30}
                height={30}
                className=" ml-3 color-grey"
                alt="A small github Logo"
              />
            </div>
          </div>
        </div>
      </div>

      {/*Desktop Stuff*/}
      <div className="flex flex-col items-center justify-center lg:block hidden pt-20">
        <div
          id="Header"
          className="max-w-6xl flex justify-center  mx-auto rounded w-8/12 rounded bg-white/30 backdrop-blur-sm p-3"
        >
          <div className="flex flex-row w-full justify-around items-center p-2">
            <div className="">
              <Image
                src="/patrol.jpg"
                width={170}
                height={170}
                className="rounded-full border-white border-2 shadow-xl"
                alt="A picture of buckethead used as a placeholder for the meanwhile"
              />
            </div>
            <div className=" text-white/90  text-center p-2 max-w-md">
              <h1 className="pt-2">
                Hello! I am <strong>Juho Järvilehto</strong>
              </h1>
              <br />
              <p className="">
                I am an 24 year old engineering student at metropolia. I am
                interested in games, music and programming. <br />
                Currently focusing on web-development and personal projects.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl w-4/6 flex  flex-row pt-7 justify-center m-auto">
          <div
            onClick={changeCard}
            className=" w-1/2 mb-5  p-4 rounded bg-white/30 backdrop-blur-sm text-white shadow-xl sm:w-3/5 sm:mr-2 sm:mb-0
             transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-105 hover:bg-indigo-500 duration-300 ..."
          >
            {!skill && (
              <>
                <h1 className="font-bold underline mb-5">My skill set.</h1>
                <p>
                  During my studies I have learned the basics of programming
                  that later evolved into being specialized in web-development
                  and mobile applications. Here I have listed those which I have
                  used the most in development for assignments, work and
                  personal projects.
                </p>
                <p className="mt-1 font-bold">click me.</p>
              </>
            )}

            {skill && (
              <>
                <div>
                  <div
                    id="class-table"
                    className=" flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50"
                  >
                    <table className="w-full border-collapse text-left">
                      <thead className="border-b mb-4">
                        <tr>
                          <th className="leading-6 font-semibold text-white">
                            <div className=" py-2">language</div>
                          </th>
                          <th className="leading-6 font-semibold text-white">
                            <div className="py-2">skill</div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="align-baseline">
                        <tr className="">
                          <td className="font-mono">JavaScript</td>
                          <td className="font-mono">My ultimate ability</td>
                        </tr>
                        <tr>
                          <td className="font-mono">React</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Java/kotlin</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Node</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">MySQL</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">Wordpress</td>
                          <td className="font-mono">Intermediate</td>
                        </tr>
                        <tr>
                          <td className="font-mono">php</td>
                          <td className="font-mono ">familiar</td>
                        </tr>
                      </tbody>
                      <p className="mt-2">and many more...</p>
                    </table>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className=" h-5/5  justify-between text-white shadow-xl flex sm:w-2/5 sm:ml-2 flex-col sm:h-4/5">
            <div className="flex flex-col rounded bg-white/30 backdrop-blur-sm p-4 rounded w-full">
              <div className="h-auto">
                <h1 className="font-bold underline mb-2">Contact</h1>
                <p>
                  The most convenient way to contact me is to send an email to
                  <strong> jarvilehtojuho@gmail.com</strong>.
                </p>
              </div>
            </div>
            <div className="bg-white/50 rounded p-2 mt-4 flex flex-row w-full justify-start">
              <a href="https://github.com/jarvilehto" target="_blank">
                <Image
                  src={"/github.png"}
                  width={30}
                  height={30}
                  className="ml-1 hover:scale-110"
                  alt="A small github Logo"
                />
              </a>

              <Image
                src={"/linkedin.png"}
                width={30}
                height={30}
                className=" ml-3 color-grey"
                alt="A small github Logo"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
