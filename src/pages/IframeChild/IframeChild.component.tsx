import { useEffect, useState } from "react";

const IframeChild = ({ children }: any) => {
  const [height, setHeight] = useState(10);
  const [recievedMessage, setRecievedMessage] = useState("");
  const [elements, setElements] = useState<number[]>([]);

  const htmlTag: HTMLElement | null = document.querySelector("html");
  if (htmlTag) htmlTag.style.overflow = "hidden";

  const addElement = () => {
    setElements([...elements, height]);
  };
  const sendMessageToPranet = () => {
    window.parent.postMessage({ type: "COLOR", color: "red" }, "*");
  };

  const setMessageFromPranet = (e: MessageEvent) => {
    setRecievedMessage("Got this message from parent: " + e.data);
  };

  const whenIframeLoad = () => {
    if (htmlTag) {
      setHeight(htmlTag.offsetHeight);
      window.removeEventListener("DOMContentLoaded", whenIframeLoad);
    }
  };

  const heightChange = () => {
    if (htmlTag) {
      setHeight(htmlTag.offsetHeight);
      window.removeEventListener("mouseover", heightChange);
    }
  };
  window.addEventListener("DOMContentLoaded", whenIframeLoad);
  window.addEventListener("message", setMessageFromPranet);
  window.addEventListener("mouseover", heightChange);

  useEffect(() => {
    window.parent.postMessage({ type: "WINDOW_HEIGHT", height }, "*");
  }, [height]);

  return (
    <div>
      {/* {elements.map((data) => (
        <h2 key={data}>Child iFrame</h2>
      ))}
      <h2>Child iFrame</h2>
      <button onClick={sendMessageToPranet}>Send message to parent</button>
      <button onClick={addElement}>addElement</button>
      <p>{recievedMessage}</p> */}
      {children}
    </div>
  );
};

export default IframeChild;
