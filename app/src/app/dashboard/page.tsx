const NavbarItem = () => {
  return (
    <div>
      <div>Mindfulness Journal</div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col content-center justify-between h-screen sticky top-0 border">
        <h1 className="text-3xl text-[#08251C] font-bold font-sans">one day</h1>
        <div className="">
          <NavbarItem />
          <NavbarItem />
        </div>
        hi
      </aside >
      <main className="flex">
        <div className="flex-col h-[2000px]">
          <div>
            <h2>Your tasks</h2>
            <ul>
              <li>Hi</li>
              <li>Hello</li>
            </ul>
          </div>
          <div>
            <h2>Your tasks</h2>
            <ul>
              <li>Hi</li>
              <li>Hello</li>
            </ul>
          </div>
        </div>
        <div>
          <div>
            <h2>Your tasks</h2>
            <ul>
              <li>Hi</li>
              <li>Hello</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
