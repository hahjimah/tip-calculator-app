"use client";
import Image from "next/image";
import logo from "@/app/assets/logo.svg";
import { BiDollar } from "react-icons/bi";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

export default function Home() {
  const tips = [5, 10, 15, 25, 50];

  const [bill, setBill] = useState(0);
  const [tipPercent, setTipPercent] = useState(0);
  const [numPeople, setNumPeople] = useState(0);

  const tipAmountPerPerson = (bill * (tipPercent / 100)) / numPeople || 0;
  const totalPerPerson = bill / numPeople + tipAmountPerPerson || 0;

  function handleReset() {
    setBill(0);
    setTipPercent(0);
    setNumPeople(0);
  }

  return (
    <div className="bg-[#b3e0e5] min-h-screen w-full flex flex-col justify-center items-center p-2">
      {" "}
      <Image src={logo} alt="logo" />
      {/**Main section */}
      <main className="bg-white p-4 rounded-2xl flex flex-col md:flex-row gap-6 w-full max-w-[700px]">
        {/**Left section */}
        <div className="flex flex-col gap-8 md:w-1/2">
          {/**Bill */}
          <section className="flex gap-2 flex-col">
            <Label>Bill</Label>
            <div className="relative flex">
              <input
                onChange={(e) => setBill(e.target.valueAsNumber)}
                className="text-right bg-slate-100 w-full h-[32px] px-2 outline-[#4dd0e1] rounded font-bold text-[#4caf50]"
                type="number"
                placeholder="0"
                value={bill}
              />
              <BiDollar className="absolute top-2.5 left-1.5 text-[#c5cae9] text-sm" />
            </div>
          </section>
          {/**Tip */}
          <section className="flex gap-2 flex-col">
            <Label>Select Tip %</Label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {tips.map((tip, i) => (
                <TipButton onClick={() => setTipPercent(tip)} key={i}>
                  {tip}%
                </TipButton>
              ))}
              <input
                className="block bg-slate-100 h-[38px] px-2 outline-[#4dd0e1] rounded font-bold text-[#4caf50]"
                placeholder="Custom"
                type="number"
                value={tipPercent}
                onChange={(e) => setTipPercent(e.target.valueAsNumber)}
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
                value={numPeople}
                onChange={(e) => setNumPeople(e.target.valueAsNumber)}
              />
              <FaUser className="absolute top-2.5 left-1.5 text-[#c5cae9] text-xs" />
            </div>
          </section>
        </div>
        {/**Right section */}
        <div className="bg-[#7bdcb5] md:w-1/2 rounded-xl px-5 pt-8 pb-6 flex flex-col justify-between gap-6">
          {/**Top item */}
          <section className="flex flex-col gap-5">
            <PersonBill
              label="Tip Amount"
              bill={+tipAmountPerPerson.toFixed(2)}
            />
            <PersonBill label="Total" bill={+totalPerPerson.toFixed(2)} />
          </section>
          {/**button */}
          <button
            onClick={handleReset}
            className="w-full text-white bg-[#00796b] rounded-md font-bold h-[36px] hover:bg-[#e57373]"
          >
            RESET
          </button>
        </div>
      </main>
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
      className="text-white bg-[#00796b] font-semibold w-full h-[38px] rounded-md hover:bg-[#81c784]"
    />
  );
}

type PersonBillProps = {
  label: string;
  bill: number;
};

function PersonBill(props: PersonBillProps) {
  return (
    <div className="flex justify-between items-center">
      {/**left */}
      <div>
        <p className="text-white">{props.label}</p>
        <p className="text-xs text-gray-700">/ person</p>
      </div>
      {/**right */}
      <p className="fond-bold text-4xl text-[#004d40] ">${props.bill}</p>
    </div>
  );
}
