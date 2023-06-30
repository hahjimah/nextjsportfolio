import Image from "next/image";

export default function Page() {
  return (
    <main className="p-6 mx-auto">
      <div className="text-3xl text-center dark:text-white">
        Hello and Welcome 👋&nbsp;
        <span>
          I'm<span className="font-bold"> Yong.</span>
        </span>
        <div className="m-2.5 text-sm">
          Click on my Picture to see my Resume!
        </div>
      </div>
    </main>
  );
}
