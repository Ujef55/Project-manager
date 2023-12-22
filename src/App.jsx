import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";

function App() {
  return (
    <>
      <main className="h-screen my-8">
          <ProjectSidebar />
      </main>
      <NewProject />
    </>
  );
}

export default App;
