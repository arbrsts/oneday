export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between py-8">
        <h1 className="text-3xl text-[#08251C] font-bold font-sans">one day</h1>
        <div className="hidden lg:flex ml-auto mr-14 gap-12">
          <span className="text-xl tracking-wide">Mindfulness Journal</span>
          <span className="text-xl tracking-wide">Mood Tracker</span>
        </div>
        <div className="lg:hidden items-center h-11 p-3 ml-auto mr-4 space-y-2 bg-gray-500 rounded shadow">
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-100 animate-pulse"></span>
        </div>
        <div className="flex items-center py-2 h-11 tracking-wide font-serif font-bold text-xl rounded px-10 text-white bg-[#9AB8AE]">
          Login
        </div>
      </nav>
      <main className="">
        <section className="grid lg:grid-cols-7 gap-14">
          <div className="flex flex-col lg:col-span-3 bg-[#384B42] p-12 rounded-2xl">
            <h1 className="text-4xl lg:text-6xl leading-normal tracking-wide font-bold text-white mb-6">
              Your depression companion
            </h1>
            <span className="text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </span>
            <div className="ml-auto text-xl mt-12 bg-[#00A870]  inline-block py-4 px-8 text-white font-serif font-bold rounded">
              Create an account
            </div>
          </div>
          <div className="border p-8 lg:col-span-4 rounded-2xl">
            <h1 className="text-4xl lg:text-6xl leading-normal tracking-wide font-bold mb-6 text-gray-800">
              How does One Day help you?
            </h1>
            <div className="mb-4">
              <h2 className="text-xl mb-2 font-bold text-gray-800">
                Identify and replace depressive thought patterns using
                Mindfulness Journal
              </h2>
              <span className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>

            <div>
              <h2 className="mb-2 text-xl font-bold text-gray-800">
                Track your mood over time
              </h2>
              <span className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </span>
            </div>
          </div>
        </section>

        <section className="mt-24">
          <h1 className="text-4xl mb-2">How are you feeling right now?</h1>
          <hr />
          <div className="grid lg:grid-cols-3 gap-12 mt-6">
            <div className="flex flex-col gap-4 col-span-2">
              <div className="grid grid-cols-3">
                <span className="col-span-2 text-2xl font-thin">
                  Burn's Depression Index
                </span>
                <div className="flex gap-2 mt-auto mb-1">
                  <span className="text-center w-8">1</span>
                  <span className="text-center w-8">2</span>
                  <span className="text-center w-8">3</span>
                  <span className="text-center w-8">4</span>
                  <span className="text-center w-8">5</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <span className="font-thin col-span-2 text-xl text-content">
                  Feeling sad or down in the dumps
                </span>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    className="rounded-full border w-8 h-8"
                  ></input>
                  <input
                    type="checkbox"
                    className="rounded-full border w-8 h-8"
                  ></input>
                  <input
                    type="checkbox"
                    className="rounded-full border w-8 h-8"
                  ></input>
                  <input
                    type="checkbox"
                    className="rounded-full border w-8 h-8"
                  ></input>
                  <input
                    type="checkbox"
                    className="rounded-full border w-8 h-8"
                  ></input>
                </div>
              </div>
            </div>

            <div className="text-content text-xl leading-7 font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
              veritatis et quasi architecto beatae vitae dicta sunt explicabo
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
