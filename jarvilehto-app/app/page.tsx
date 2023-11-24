import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center min-h-screen w-full">
      <div className=" md:w-4/6 sm:w-full">
        <div className="flex h-1/6 shrink-0 items-center md:rounded-lg bg-blue-500 p-4 md:mt-8 sm:rounded-none mb-8">
          {/*Rounded Icon */}
          <Image
            src="/patrol.jpg"
            width={110}
            height={110}
            className="rounded-full ml-10"
            alt="A picture of buckethead used as a placeholder for the meanwhile"
          />

          {/*Name and links to git / linkedint ETC*/}
          <div></div>
        </div>

        <div className="flex items-center  bg-slate-800 p-24 mb-8">
          {/*Information of studies hobbies etc*/}
          <div></div>
          {/*Coding skills + list of projects */}
          <div></div>
        </div>

        <div className="flex items-center  bg-slate-800 p-24">
          {/*Information of studies hobbies etc*/}
          <div></div>
          {/*Coding skills + list of projects */}
          <div></div>
        </div>
      </div>
    </main>
  );
}
