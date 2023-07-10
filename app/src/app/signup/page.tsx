import { Dropdown, TextInput } from "@/components/input";
import Navbar from "@/components/navigation/Navbar";
import SignupForm from "@/components/forms/SignupForm";

export default function Signup() {
  return (
    <div className="lg:px-12 flex flex-col h-[95vh]">
      <Navbar />
      <main className="mb-5 flex-1 flex items-center justify-center">
        <SignupForm />
      </main>
      <footer className="flex justify-between">
        <div className="flex flex-col gap-2 font-medium capitalize tracking-wider">
          <div className="  ">PRIVACY & LEGAL</div>
          <div className="">CONTACT</div>
        </div>
        <div>© 2023 - One Day, All rights reserved.</div>
      </footer>
    </div>
  );
}