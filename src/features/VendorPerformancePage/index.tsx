import { useState } from "react"
import DetailVendorPage from "./components/DetailVendorView"
import VendorPerformancePage from "./components/VendorPerformanceView"

const VendorView = () => {
  const [view, setView] = useState<"vendor" | "detail">("vendor")

  return (
    <>
      {view === 'vendor' ? (<VendorPerformancePage setDetailView={() => {setView("detail")}} />)
      :(<DetailVendorPage setVendorView={() =>setView("vendor") } />)}
    </>)
}
export default VendorView