import { useState } from 'react';

function Home() {
    // Guarda a posição do botão do "Não"
    const [posicao, setPosicao] = useState({ top: 'auto', left: 'auto' });

    const fugir = () => {
        // Gera valores aleatórios entre 10% e 85% para o botão não sumir da tela
        const randomTop = Math.floor(Math.random() * 75) + 10;
        const randomLeft = Math.floor(Math.random() * 75) + 10;

        setPosicao({
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            position: 'absolute' // Ativa o posicionamento absoluto ao interagir
        });
    };

    const aceitou = () => {
        alert("Oba! Sabia que me amava. Quero um combo com batata frita! 🍔🍟");
    };

    return (
        <div style={{ 
            textAlign: 'center', 
            padding: '40px 20px', 
            fontFamily: 'sans-serif',
            height: '100vh',
            boxSizing: 'border-box',
            position: 'relative', // Necessário para o botão absoluto não fugir da tela inteira
            overflow: 'hidden'
        }}>
            <h1> Sabrina eu te amo.</h1>
            <h2>Se tu me ama me paga um lanche de janta hoje</h2>

            <div style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
                {/* Botão SIM */}
                <button 
                    onClick={aceitou}
                    style={{
                        padding: '12px 24px',
                        fontSize: '18px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Sim!
                </button>

                {/* Botão NÃO (O fujão) */}
                <button 
                    onMouseEnter={fugir} // Funciona no computador (passar o mouse)
                    onTouchStart={fugir}  // Funciona no mobile (primeiro toque)
                    style={{
                        padding: '12px 24px',
                        fontSize: '18px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        // Aplica a posição dinâmica
                        position: posicao.position || 'static',
                        top: posicao.top,
                        left: posicao.left,
                        transition: 'all 0.1s ease' // Deixa o movimento mais suave
                    }}
                >
                    Não
                </button>
            </div>
        </div>
    );
}

export default Home;