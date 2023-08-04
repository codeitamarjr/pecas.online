import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../axios-client";
import { userStateContext } from "../contexts/ContextProvider";

function PecaForm() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState(false);
    const { setNotification } = userStateContext();
    const listaFabricantes = [
        "Chevrolet",
        "Volkswagen",
        "Fiat",
        "Ford",
        "Toyota",
        "Honda",
        "Renault",
        "Hyundai",
        "Nissan",
        "Jeep",
    ];

    const [peca, setPeca] = useState({
        id: null,
        sku: "",
        nome: "",
        descricao: "",
        marca: "",
        modelo: "",
        ano: "",
        valor: "",
        imagem: "",
        quantidade: "",
    });

    // Loading the peca data if the id is present in the URL
    if (id) {
        useEffect(() => {
            setLoading(true);
            axiosClient
                .get(`/pecas/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setPeca(data.data);
                })
                .catch(() => {
                    setLoading(false);
                });
        }, []);
    }

    // Handle the form input changes, update the state accordingly
    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        if (peca.id) {
            axiosClient
                .put(`/pecas/${peca.id}`, peca)
                .then(() => {
                    setNotification("Peça atualizada com sucesso!");
                    navigate("/pecas");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        } else {
            axiosClient
                .post("/pecas", peca)
                .then(() => {
                    setNotification("Peça criada com sucesso!");
                    navigate("/pecas");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response && response.status === 422) {
                        setErrors(response.data.errors);
                    }
                });
        }
    };

    return (
        <>
            {peca.id && <h1>Editar Peça: {peca.nome}</h1>}
            {!peca.id && <h1>Nova Peça</h1>}
            <div className="card animated fadeInDown">
                {errors && (
                    <div className="alert alert-danger">
                        <ul>
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}
                {loading && <div className="text-center">Carregando...</div>}
                {!loading && (
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label htmlFor="sku">SKU</label>
                            <input
                                type="text"
                                id="sku"
                                name="sku"
                                placeholder="SKU"
                                value={peca.sku}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        sku: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="nome">Nome</label>
                            <input
                                type="text"
                                id="nome"
                                name="nome"
                                placeholder="Nome"
                                value={peca.nome}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        nome: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="descricao">Descrição</label>
                            <input
                                type="text"
                                id="descricao"
                                name="descricao"
                                placeholder="Descrição"
                                value={peca.descricao}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        descricao: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="marca">Marca</label>
                            <select
                                className="form-control"
                                id="marca"
                                name="marca"
                                value={peca.marca}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        marca: ev.target.value,
                                    });
                                }}
                            >
                                <option value="">Selecione a fabricante</option>
                                {listaFabricantes.map((fabricante) => (
                                    <option key={fabricante} value={fabricante}>
                                        {fabricante}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="modelo">Modelo</label>
                            <input
                                type="text"
                                id="modelo"
                                name="modelo"
                                placeholder="Modelo"
                                value={peca.modelo}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        modelo: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="ano">Ano</label>
                            <input
                                type="text"
                                id="ano"
                                name="ano"
                                placeholder="Ano"
                                value={peca.ano}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        ano: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="valor">Valor</label>
                            <input
                                type="text"
                                id="valor"
                                name="valor"
                                placeholder="Valor"
                                value={peca.valor}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        valor: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="imagem">Imagem</label>
                            <input
                                type="text"
                                id="imagem"
                                name="imagem"
                                placeholder="Imagem"
                                value={peca.imagem}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        imagem: ev.target.value,
                                    });
                                }}
                            />

                            <label htmlFor="quantidade">Quantidade</label>
                            <input
                                type="text"
                                id="quantidade"
                                name="quantidade"
                                placeholder="Quantidade"
                                value={peca.quantidade}
                                onChange={(ev) => {
                                    setPeca({
                                        ...peca,
                                        quantidade: ev.target.value,
                                    });
                                }}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Salvar
                        </button>
                    </form>
                )}
            </div>
        </>
    );
}

export default PecaForm;
