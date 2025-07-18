import type { ReactNode } from "react";
import "./App.css";
import DemoButton from "./features/demo/button";
import DemoCollapse from "./features/demo/collapse";
import DemoInput from "./features/demo/input";
import DemoModal from "./features/demo/modal";
import DemoPicker from "./features/demo/picker";

interface ISection {
  title: string;
  children: ReactNode;
}

function App() {
  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <h1 className="font-semibold text-4xl text-center mb-10 text-[#F37647]">
        Intelin MiniApp UI
      </h1>

      <div className="space-y-8 max-w-3xl mx-auto">
        <Section title="Buttons">
          <DemoButton />
        </Section>

        <Section title="Collapse">
          <DemoCollapse />
        </Section>

        <Section title="Inputs">
          <DemoInput />
        </Section>

        <Section title="Modals">
          <DemoModal />
        </Section>

        <Section title="Pickers">
          <DemoPicker />
        </Section>
      </div>
    </div>
  );
}

function Section({ title, children }: ISection) {
  return (
    <div className="bg-white rounded-2xl shadow p-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div>{children}</div>
    </div>
  );
}

export default App;
