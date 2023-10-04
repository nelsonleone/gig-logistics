import AppPanel from "@/components/assets/Tabs/AppPanel"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="page text-[#374151] relative">
      <AppPanel />
      {children}
    </div>
  )
}