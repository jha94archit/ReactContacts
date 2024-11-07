import ContactsListing from "./components/webapp/ContactsListing";
import LoginForm from "./components/webapp/LoginForm";

export default function App() {
  return (
    <main className="p-4 flex flex-col items-center w-full">
      <h1 className="text-2xl font-bold">React Contacts</h1>
      <LoginForm />
    </main>
  )
}