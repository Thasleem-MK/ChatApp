import dynamic from "next/dynamic";

const SideBar = dynamic(() => import("./(Components)/sideBar/page"), {
  ssr: false,
});
const MessageBar = dynamic(() => import("./(Components)/message/page"), {
  ssr: false,
});

export default async function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="flex w-full h-full">
        <SideBar />
        <MessageBar />
      </div>
    </div>
  );
}
