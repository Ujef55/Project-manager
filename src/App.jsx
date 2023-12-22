import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";

function App() {
  return (
    <>
      <main className="h-screen my-8 flex gap-8">
          <ProjectSidebar />
          <NewProject />
      </main>
    </>
  );
}

export default App;
