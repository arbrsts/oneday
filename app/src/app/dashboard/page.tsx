import { ReactElement, ReactNode } from "react";
import Graph from "./Graph";

const NavbarItem = ({
  active,
  children,
}: {
  active?: boolean;
  children: ReactNode;
}) => {
  return (
    <div
      className={`text-[#8F8A86] p-2 rounded ${
        active ? "bg-[#F1F4ED] text-[#575757]" : ""
      } `}
    >
      <div>{children}</div>
    </div>
  );
};

const Subpanel = ({
  title,
  subtitle,
  button,
  children,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  button?: ReactNode;
  children?: ReactNode;
}) => {
  return (
    <div className="">
      <div className="mb-2">
        <span className="flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button className="text-sm text-[#6C6C6C]">{button}</button>
        </span>
        <h3 className="text-[#6C6C6C] text-sm">{subtitle}</h3>
      </div>
      {children}
    </div>
  );
};

const SubpanelYourTasksItem = () => {
  return (
    <div className="flex justify-between rounded-lg p-4 items-center hover:bg-[#F4F4F3]">
      <div>
        <h3 className="font-bold text-lg">Mindfulness Journal</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div>+</div>
    </div>
  );
};

const SubpanelRecentJournalsItem = () => {
  return (
    <div className="flex  justify-between rounded-lg p-4 hover:bg-[#F4F4F3] border">
      <div>
        <div className="flex gap-1 mb-2">
          <p className="border rounded-full px-3 text-sm text-[#6C6C6C]">CBT</p>
          <p className="border rounded-full px-3 text-sm text-[#6C6C6C]">
            Anxiety
          </p>
        </div>
        <h3 className="font-bold text-lg">Mindfulness Journal</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
      <div className="text-sm text-[#C6C6C6]">5d</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex">
      <aside className="flex shrink-0 flex-col content-center justify-between h-screen sticky top-0 p-10">
        <h1 className="text-3xl text-[#08251C] font-bold font-sans">one day</h1>
        <div className="flex flex-col gap-3">
          <NavbarItem active={true}>Dashboard</NavbarItem>
          <NavbarItem>Your tasks </NavbarItem>
          <NavbarItem>Mood tracker</NavbarItem>
          <NavbarItem>Recent journals</NavbarItem>
        </div>
        <div>
          <NavbarItem>Help & Information</NavbarItem>
          <NavbarItem>Logout</NavbarItem>
        </div>
      </aside>
      <main className="grid grid-cols-2 p-10 w-full gap-6">
        <div className="flex flex-col gap-6">
          <Subpanel title="Your tasks" subtitle="Tasks to complete today">
            <SubpanelYourTasksItem></SubpanelYourTasksItem>
            <SubpanelYourTasksItem></SubpanelYourTasksItem>
          </Subpanel>
          <Subpanel
            title="Mood tracker"
            subtitle="Track your mood with questionnaires"
            button="Month"
          >
            <Graph />
          </Subpanel>
        </div>
        <div>
          <Subpanel
            title="Recently journals"
            subtitle="Journals to help improve mindfulness"
            button="View all"
          >
            <div className="flex flex-col gap-3">
              <SubpanelRecentJournalsItem></SubpanelRecentJournalsItem>
              <SubpanelRecentJournalsItem></SubpanelRecentJournalsItem>
              <SubpanelRecentJournalsItem></SubpanelRecentJournalsItem>
            </div>
          </Subpanel>
        </div>
      </main>
    </div>
  );
};

export default App;
