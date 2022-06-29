// admin page

import AddComponent from "./addComponent";
import AddPage from "./addPage";

function AdminPage() {
  return (
    <div className="p-12 items-center">
      <div className="grid grid-cols-2 gap-10 items-center">
        <AddPage />
        <AddComponent />
      </div>
    </div>
  );
}

export default AdminPage;
