"use client";

import React, { useRef } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore, Persistor } from "redux-persist";
import reduxStore from "@/app/redux";

export let persister = persistStore(reduxStore);

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const persisterRef = useRef<Persistor | null>(null);

  if (!persisterRef.current) {
    persisterRef.current = persister ?? persistStore(reduxStore);
  }

  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persisterRef.current}>
        {children}
      </PersistGate>
    </Provider>
  );
}
