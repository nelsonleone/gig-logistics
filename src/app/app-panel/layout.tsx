import AppPanel from "@/components/assets/Tabs/AppPanel"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page text-[#374151] relative pt-8 lg:flex lg:justify-between">
      <AppPanel />
      <div className="lg:ms-[22em] lg:basis-[75%]">
       {children}
      </div>
    </div>
  )
}