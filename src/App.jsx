import { useState } from "react";
import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";


function App() {

  const[projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: []
  });

  let content;

  function handleStartProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectState(prevState => {

      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [prevState.project, newProject] 
      }
    })
  }

  function handleCancelProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
          <ProjectSidebar onStartAddProject={handleStartProject}
          projects={projectState.project} />
          {content}
      </main>
    </>
  );
}

export default App;
