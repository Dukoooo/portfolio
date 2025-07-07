import { useEffect, useState } from "react";

export default function Headroom({ children }) {
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setVisible(currentScroll < lastScroll || currentScroll < 50);
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      style={{
        position: "fixed",
        top: visible ? 0 : "-100px",
        transition: "top 0.3s ease",
        width: "100%",
        zIndex: 999,
      }}
    >
      {children}
    </div>
  );
}
