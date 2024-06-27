'use client'
import React from "react";
import { AnimatePresence as _AnimatePresence } from "framer-motion";

export default function AnimatePresence(props: React.PropsWithChildren) {
  return <_AnimatePresence mode="wait">{props.children}</_AnimatePresence>;
}
