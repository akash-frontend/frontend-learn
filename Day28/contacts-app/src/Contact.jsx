import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Contact() {
  const data = useLoaderData();
  console.log(data);
  return (
    <section>
    Contact
    </section>
    
  );
}
