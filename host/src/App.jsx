import React from "react";
const RemoteApp = React.lazy(() => import('portalApp/PortalApp'));

function App() {
  return (
      <React.Suspense fallback={'Loading ....'}>
            <RemoteApp />
      </React.Suspense>
  )
}

export default App
