import AdminSidebar from "@/src/components/pages/admin/sidebar";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-black grid-pattern">
      <AdminSidebar className="fixed"></AdminSidebar>
    </main>
  )
}