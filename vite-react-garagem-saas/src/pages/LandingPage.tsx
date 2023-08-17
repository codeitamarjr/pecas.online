import "./LandingPage.css";

function LandingPage() {
    return (
        <div className="landing-container">
            <div className="top-bar">
                <div className="logo">Peças Online</div>
                <div className="auth-buttons">
                    <a href="/login" className="signin-button">
                        Login
                    </a>
                    <a href="/signup" className="signup-button">
                        Cadastre-se
                    </a>
                </div>
            </div>
            <div className="hero">
                <div className="hero-left">
                    <h1>Bem-vindo ao Peças Online</h1>
                    <p>
                        O sistema perfeito para administrar peças em sua
                        garagem.
                    </p>
                </div>
                <div className="hero-right">
                    <img src="public/screencapture.png" alt="System preview" />
                </div>
            </div>
            <div className="main-content">
                <div className="feature">
                    <h2>Administre suas peças</h2>
                    <p>
                        Organize e controle todas as peças do seu inventário de
                        forma eficaz.
                    </p>
                </div>
                <div className="feature">
                    <h2>Categorize e encontre facilmente</h2>
                    <p>
                        Classifique as peças por categorias e encontre o que
                        precisa rapidamente.
                    </p>
                </div>
                <div className="feature">
                    <h2>Controle de vendas</h2>
                    <p>
                        Marque peças como vendidas e tenha acesso a relatórios
                        detalhados de vendas.
                    </p>
                </div>
            </div>
            <div className="landing-cta">
                <h2>Comece hoje</h2>
                <a href="/signup" className="cta-button">
                    Cadastre-se agora
                </a>
            </div>
            <div className="landing-footer">
                <p>© 2023 Pecas.Online - Todos os direitos reservados</p>
            </div>
        </div>
    );
}

export default LandingPage;
