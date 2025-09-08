import { Header } from "@/src/components/body/header"
import UsersPageHeader from "@/src/components/pages/admin/users/headerUsers";

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-black grid-pattern">
      <Header></Header>
      <main className="container mx-auto px-4 py-8">
        <UsersPageHeader></UsersPageHeader>
      </main>
    </main>
  );
}