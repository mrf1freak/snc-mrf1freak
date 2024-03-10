import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

const Context = createContext<{
  enableLogs: boolean;
  setEnableLogs: Dispatch<SetStateAction<boolean>>;
}>({
  enableLogs: false,
  setEnableLogs: () => undefined,
});

export function LogsContext({ children }: { children: ReactNode }) {
  const [enableLogs, setEnableLogs] = useState(false);
  return (
    <Context.Provider value={{ enableLogs, setEnableLogs }}>
      {children}
    </Context.Provider>
  );
}

export function useLogs() {
  const context = useContext(Context);
  if (!context) {
    throw new Error(`You can't use useLogs outside of the provider`);
  }
  return context;
}
