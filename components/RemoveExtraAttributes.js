"use client";
import { useEffect } from "react";

export default function RemoveExtraAttributes({ children }) {
  useEffect(() => {
    // Hapus atribut 'cz-shortcut-listen' dari <body> jika ada
    document.body.removeAttribute("cz-shortcut-listen");
  }, []);

  return children;
}
