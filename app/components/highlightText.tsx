function HighlightText(props: React.PropsWithChildren) {
  return <span className="text-accent font-black">{props.children}</span>;
}

export { HighlightText };
