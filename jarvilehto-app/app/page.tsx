import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <div className="flex flex-col items-center">
        {/*Mobile view.*/}
        <div
          id="Header"
          className="w-full bg-blue-200 flex justify-center h-auto p-10"
        >
          <Image
            src="/patrol.jpg"
            width={120}
            height={120}
            className="rounded-full border-white border-2"
            alt="A picture of buckethead used as a placeholder for the meanwhile"
          />
        </div>
        <div className="w-full bg-black p-20"></div>
        <div className="w-full bg-blue-400 p-20"></div>
        <div className="w-full bg-black bg-blue-600 p-20"></div>
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
