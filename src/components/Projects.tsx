import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Define el tipo para representar un proyecto individual
interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    picture: string;
}

// Define las props del componente Projects
interface ProjectsProps {
    testMode: boolean; // Indica si está en modo de prueba o producción
}

const Projects: React.FC<ProjectsProps> = ({ testMode }) => {
    // Estados para manejar la paginación, los proyectos, el número total de páginas y el término de búsqueda
    const [page, setPage] = useState(0); // Página actual
    const [posts, setPosts] = useState<Project[]>([]); // Lista de proyectos de la página actual
    const [totalPages, setTotalPages] = useState(0); // Número total de páginas
    const [searchTerm, setSearchTerm] = useState(''); // Término de búsqueda para filtrar proyectos

    // URL base de la API
    const url: string = "http://localhost:8080/api/v1/projects";

    // Llama a la función `peti` cuando cambien la página o el término de búsqueda
    useEffect(() => {
        peti(page, searchTerm);
    }, [page, searchTerm]);

    // Función para realizar una solicitud a la API
    // Si se proporciona un término de búsqueda, busca proyectos por nombre
    // Si no, obtiene una lista de proyectos con paginación
    const peti = async (p = 0, search = '') => {
        if (search && search.length < 3) return; // Evita búsquedas con menos de 3 caracteres

        const requestUrl = search
            ? `${url}/${search}` // Endpoint para buscar proyectos por nombre
            : `${url}?size=3&page=${p}`; // Endpoint para obtener proyectos paginados

        const response = await fetch(requestUrl);
        const data = await response.json();

        if (search) {
            // Maneja la respuesta de búsqueda (solo un proyecto devuelto)
            const project = data.data ? {
                id: data.data.id,
                name: data.data.name,
                picture: data.data.picture,
                description: data.data.description,
                start_date: data.data.start_date,
            } : null;
            setPosts(project ? [project] : []); // Actualiza la lista con el proyecto encontrado o una lista vacía
            setTotalPages(1); // Solo una página de resultados para búsqueda
        } else {
            // Maneja la respuesta paginada
            setPosts(data.content.map((project: any) => ({
                id: project.id,
                name: project.name,
                description: project.description,
                picture: project.picture,
                start_date: project.start_date,
            })) || []);
            setTotalPages(data.totalPages || 1); // Actualiza el número total de páginas
        }
    };

    // Elimina un proyecto llamando al endpoint DELETE y actualiza la lista local
    const handleDelete = async (id: number) => {
        if (!testMode) {
            console.warn("Delete is disabled in production mode");
            return;
        }

        const response = await fetch(`${url}/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            setPosts(posts.filter(project => project.id !== id)); // Elimina el proyecto de la lista local
        } else {
            console.error('Error al eliminar el proyecto'); // Maneja errores
        }
    };

    // Componente para mostrar la información de un proyecto individual
    const ProjectCard = ({ project }: { project: Project }) => (
        <div className="bg-[#0B5E4F] w-80 h-auto p-4 gap-2 rounded-xl  flex flex-col items-center">
            {/* Imagen del proyecto */}
            <img
                src={project.picture}
                alt={project.name}
                className="w-72 h-48 object-cover rounded-xl"
            />
            {/* Nombre y descripción del proyecto */}
            <h2 className="text-xl font-semibold text-[#333333]">{project.name}</h2>
            <p className="mt-2 text-[#e8e5d7]">{project.description}</p>
            {/* Fecha de inicio del proyecto */}
            <p className="mt-4 font-semibold text-[#333333]">
                Start Date: {project.start_date}
            </p>
            {/* Botón para eliminar el proyecto (solo visible en modo test) */}
            {testMode && (
                <button
                    onClick={() => handleDelete(project.id)}
                    className="mt-4 bg-red-500 text-[#e8e5d7] w-24 py-2 rounded-md hover:bg-red-600 transition-all duration-300"
                >
                    Delete
                </button>
            )}
        </div>
    );

    return (
        <>
            {/* Campo de búsqueda para filtrar proyectos por nombre */}
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search projects by name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda
                    onKeyDown={(e) => e.key === 'Enter' && peti(page, searchTerm)} // Ejecuta búsqueda al presionar "Enter"
                    className="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                />
            </div>

            {/* Lista de proyectos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
                {posts.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            {/* Controles de navegación para la paginación */}
            <div className="mt-6 flex justify-center items-center space-x-4">
                {/* Botón para ir a la página anterior */}
                <button
                    onClick={() => setPage(page - 1)}
                    disabled={page === 0} // Deshabilitado si estamos en la primera página
                    className="bg-[#0B5E4F] text-white w-12 h-12 flex items-center justify-center rounded-full disabled:bg-gray-300 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                    <FaArrowLeft className="text-lg" />
                </button>
                {/* Texto que muestra la página actual */}
                <span className="text-lg font-semibold text-gray-700">
                    Página {page + 1}
                </span>
                {/* Botón para ir a la página siguiente */}
                <button
                    onClick={() => setPage(page + 1)}
                    disabled={posts.length === 0 || page === totalPages - 1} // Deshabilitado si estamos en la última página
                    className="bg-[#0B5E4F] text-white w-12 h-12 flex items-center justify-center rounded-full disabled:bg-gray-300 hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                >
                    <FaArrowRight className="text-lg" />
                </button>
            </div>
        </>
    );
};

export default Projects;
