import { projects, Project } from '@/lib/projects'

export default function ProjectsPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Projelerim</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="border p-4 rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-3">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Projeyi Görüntüle →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
