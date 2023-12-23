import { useState } from "react";
import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";


function App() {

  const[projectState, setProjectState] = useState({
    selectedProjectID: undefined,
    project: []
  });

  let content;

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  if (projectState.selectedProjectID === null) {
    content = <NewProject />
  } else if (projectState.selectedProjectID === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
          <ProjectSidebar onStartAddProject={handleStartProject} />
          {content}
      </main>
    </>
  );
}

export default App;
