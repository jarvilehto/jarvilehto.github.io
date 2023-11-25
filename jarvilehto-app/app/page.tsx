import Image from "next/image";

export default function Home() {
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
          <div className="  mb-5  p-4 rounded bg-white/30 backdrop-blur-sm text-white shadow-xl sm:w-3/5 sm:mr-2 sm:mb-0">
            <h1 className="font-bold underline">My skill set.</h1>
            <br />
            <p>
              During my studies I have learned the basics of programming that
              later evolved into being specialized in web-development and mobile
              applications. I have been involved in many projects that have b
            </p>
          </div>
          <div className=" h-1/3 p-3 rounded bg-white/30 backdrop-blur-sm justify-between text-white shadow-xl flex sm:w-2/5 sm:ml-2 flex-col">
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
