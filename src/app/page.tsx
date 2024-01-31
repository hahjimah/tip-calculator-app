import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { BiDollar } from "react-icons/bi";
import { HtmlHTMLAttributes } from "react";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="bg-[#b3e0e5] min-h-screen w-full flex flex-col justify-center items-center gap-10">
      {" "}
      <Image src={logo} alt="logo" />
      {/**Main section */}
      <section className="bg-white p-4 rounded-2xl">
        {/**Left section */}
        <div className="flex flex-col gap-4">
          {/**Bill */}
          <section className="flex gap-2 flex-col">
            <Label>Bill</Label>
            <div className="relative flex">
              <input
                className="text-right bg-slate-100 w-full h-[32px] px-2 outline-[#4dd0e1] rounded font-bold text-[#4caf50]"
                type="number"
                placeholder="0"
              />
              <BiDollar className="absolute top-2.5 left-1.5 text-[#c5cae9] text-sm" />
            </div>
          </section>
          {/**Tip */}
          <section className="flex gap-2 flex-col">
            <Label>Select Tip %</Label>
            <div className="grid grid-cols-3 gap-2">
              {tips.map((tip, i) => (
                <TipButton key={i}>{tip}%</TipButton>
              ))}
              <input
                className="text-right bg-slate-100 w-[90px] h-[38px] px-2 outline-[#4dd0e1] rounded font-bold text-[#4caf50]"
                placeholder="Custom"
                type="number"
              />
            </div>
          </section>
          {/**Number of people */}
          <section className="flex gap-2 flex-col">
            <Label>Number of People</Label>
            <div className="relative flex">
              <input
                className="text-right bg-slate-100 w-full h-[32px] px-2 outline-[#4dd0e1] rounded font-bold text-[#4caf50]"
                type="number"
                placeholder="0"
              />
              <FaUser className="absolute top-2.5 left-1.5 text-[#c5cae9] text-xs" />
            </div>
          </section>
        </div>
        {/**Right section */}
      </section>
    </div>
  );
}

function Label(props: React.HtmlHTMLAttributes<HTMLLabelElement>) {
  return <label {...props} className="text-[#969696] text-xs font-semibold" />;
}

function TipButton(props: React.HtmlHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="text-white bg-[#00796b] font-semibold w-full h-[38px] rounded-md"
    />
  );
}
