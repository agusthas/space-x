import Header from "./Header";

const Layout: React.FC = ({ children }) => (
  <div>
    <Header />
    <main className="max-w-[600px] mx-auto text-gray-900 px-4">{children}</main>
  </div>
);

export default Layout;
