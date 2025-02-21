import Sidebar from "../../components/Sidebar";

interface SidebarLayoutProps {
  children: React.ReactNode;
}

function SidebarLayout({ children }: SidebarLayoutProps) {
    return (
      <div className="flex">
        <Sidebar/>
        <main className="flex-1">
          {children}
        </main>
      </div>
    );
}

export default SidebarLayout;
  