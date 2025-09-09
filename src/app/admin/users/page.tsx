import UsersPageHeader from "@/src/components/pages/admin/users/headerUsers";
import AdminSidebar from "@/src/components/pages/admin/sidebar";
import FilterUsers from "@/src/components/pages/admin/users/filterUsers";
import UsersList from "@/src/components/pages/admin/users/usersList";

export default function UsersPage() {
  
  return (
    <main className="min-h-screen bg-black grid-pattern">
      <div className="flex">
        <AdminSidebar></AdminSidebar>
        <div className="container mx-auto px-4 py-5">
          <UsersPageHeader></UsersPageHeader>
          <div className="flex flex-col gap-5">
            <FilterUsers></FilterUsers>
            <UsersList></UsersList>
          </div>
        </div>
      </div>
    </main>
  );
}