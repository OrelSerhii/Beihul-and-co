import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Контакти",
  description: "Beihul & Partners — контакти та форма звʼязку.",
};


export default function ContactsPage() {
  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold mb-4">Контакти</h1>
      <p className="mb-4">Залиште заявку — ми звʼяжемося з вами.</p>
      <ContactForm />
    </main>
  );
}
