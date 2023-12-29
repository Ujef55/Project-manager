import { useState } from "react";
import ProjectSidebar from "./Components/ProjectSidebar";
import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import SelectedProject from "./Components/SelectedProject";


function App() {

  const[projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    project: [],
    task: []
  });


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
        id: projectId,
      }

      return {
        ...prevState,
        selectedProjectId: undefined,
        project: [...prevState.project, newProject] 
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

  function handleSelectProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        project: prevState.project.filter(
        (project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };

      return {
        ...prevState,
        task: [...prevState.task, newTask],
      };
    });
  }

  function handleDeleteTask() {

  }

  const selectedProject = projectState.project.find(
    (project) => project.id === projectState.selectedProjectId
  );


  let content = <SelectedProject projects={selectedProject} onDelete={handleDeleteProject}
  onAddTasks={handleAddTask} onDeleteTasks={handleDeleteTask} taskData={projectState.task} />

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
          <ProjectSidebar onStartAddProject={handleStartProject}
          projects={projectState.project}
          onSelectProject={handleSelectProject}
          selectedProjectId={projectState.selectedProjectId} />
          {content}
      </main>
    </>
  );
}

export default App;
