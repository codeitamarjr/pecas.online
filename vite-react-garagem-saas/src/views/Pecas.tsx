import { useEffect, useState } from "react";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";
import { userStateContext } from "../contexts/ContextProvider";

interface Peca {
    id: number;
    marca: string;
    modelo: string;
    nome: string;
    created_at: string;
}

function Pecas() {
    const [pecas, setPecas] = useState<Peca[]>([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { setNotification } = userStateContext();

    useEffect(() => {
        getPecas(currentPage);
    }, [currentPage]); // Fetch data when the currentPage changes

    const onDelete = (p: Peca) => {
        if (!window.confirm("Deseja realmente excluir?")) {
            return;
        }

        axiosClient.delete(`/pecas/${p.id}`).then(() => {
            setNotification("Peça excluída com sucesso!");
            // Update the list of pecas after deleting
            getPecas(currentPage); // Refetch data for the current page after deletion
        });
    };

    const getPecas = (page: number) => {
        setLoading(true);
        axiosClient
            .get(`/pecas?page=${page}`)
            .then(({ data }) => {
                setLoading(false);
                setPecas(data.data);
                setTotalPages(data.meta.last_page); // Set the total number of pages from the response
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Peças</h1>
                <Link to="/pecas/create" className="btn-add">
                    Adicionar
                </Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Nome</th>
                            <th>Localização</th>
                            <th>Criado em</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td colSpan={7} className="text-center">
                                    Carregando...
                                </td>
                            </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                            {pecas.map((p) => (
                                <tr key={p.id}>
                                    {" "}
                                    {/* Add a unique key */}
                                    <td>{p.id}</td>
                                    <td>{p.marca}</td>
                                    <td>{p.modelo}</td>
                                    <td>{p.nome}</td>
                                    <td>sss</td>
                                    <td>{p.created_at}</td>
                                    <td>
                                        <Link
                                            to={`/pecas/${p.id}/edit`}
                                            className="btn-edit"
                                        >
                                            Editar
                                        </Link>
                                        &nbsp;
                                        <button
                                            onClick={() => onDelete(p)}
                                            className="btn-delete"
                                        >
                                            Excluir
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
            <div>
                <button onClick={prevPage} disabled={currentPage === 1}>
                    Previous
                </button>
                <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pecas;
