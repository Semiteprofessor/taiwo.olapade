"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { Download } from "lucide-react";

const HackerBtn = ({ label }: { label: string }) => {
  const [displaText, setDisplayText] = useState(label);
  const charset = "abcdefghijklmnopqrstuvwxyz";

  const randomChars = (length: number) => {
    return Array.from(
      { length },
      () => charset[Math.floor(Math.random() * charset.length)]
    ).join(" ");
  };

  const scramble = async (input: string) => {
    let prefix = "";
    for (let i = 0; i < input.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      prefix += input.charAt(i);
      setDisplayText(prefix + randomChars(input.length - prefix.length));
    }
  };

  const startScrambling = () => {
    scramble(label);
    setTimeout(() => console.log("Submitted"), label.length * 50);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  return (
    <Button
      size={"lg"}
      className="text-base px-5 py-6"
      onMouseEnter={startScrambling}
    >
      <Download className="mx-1">{displaText}</Download>
    </Button>
  );
};

export default HackerBtn;
