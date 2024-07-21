import { Selection } from "./components/selection";

export default function Home() {
  return (
    <main className="flex justify-center items-start p-4 min-h-screen bg-gray-50 lg:max-h-full flex-1 overflow-y-auto overflow-x-hidden">
      <Selection />
    </main>
  );
}