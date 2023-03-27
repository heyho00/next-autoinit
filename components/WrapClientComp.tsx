export default function WrapClientComp({ children }: { children: any }) {
  console.log("client or server side?");
  return <div>wrap client comp{children}</div>;
}
