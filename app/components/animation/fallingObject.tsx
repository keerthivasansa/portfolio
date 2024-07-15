"use client";
import React, { useEffect, useRef, useState } from "react";
import { getRandValue } from "@/app/utils";

interface FallingObjProps extends React.PropsWithChildren {
  deleteFn: () => void;
}

function FallingObject(props: FallingObjProps) {
  const x = useRef(getRandValue(0, window.innerWidth));
  const acceleration = useRef(getRandValue(10, 25));
  const [y, setY] = useState(-40);
  let timer = useRef<NodeJS.Timeout | null>(null);

  function increaseY() {
    setY((y) => y + acceleration.current);
  }

  useEffect(() => {
    timer.current = setInterval(increaseY, 250);
  }, []);

  useEffect(() => {
    if (y > window.outerHeight + 100 && timer.current) {
      props.deleteFn();
      clearTimeout(timer.current);
    }
  }, [y]);

  return (
    <div
      style={{
        transform: `translateY(${y}px)`,
        left: `${x.current}px`,
        transitionDuration: `${acceleration.current * 60}ms`,
      }}
      className={`z-[999] transition-all absolute top-0 ease-linear duration-300`}
    >
      {props.children}
    </div>
  );
}

export default FallingObject;
