import SideBar from "./(Components)/sideBar/page";
import MessageBar from "./(Components)/message/page";

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
