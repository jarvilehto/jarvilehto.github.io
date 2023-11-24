import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="">
        <div className="flex items-center w-1/2 bg-slate-800 p-20">
          {/*Rounded Icon */}
          <div className="rounded-full h-50 w-50 bg-black"></div>
          {/*Name and links to git / linkedint ETC*/}
          <div></div>
        </div>
        <div className="flex items-center w-1/2 bg-slate-800 p-24">
          {/*Information of studies hobbies etc*/}
          <div></div>
          {/*Coding skills + list of projects */}
          <div></div>
        </div>
      </div>
    </main>
  );
}
