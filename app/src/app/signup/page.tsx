import { Dropdown, TextInput } from "@/components/input";
import Navbar from "@/components/navigation/Navbar";
import SignupForm from "@/components/forms/SignupForm";

export default function Signup() {
  return (
    <div className="lg:px-12">
      <Navbar />
      <main className="mb-16 flex justify-center">
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