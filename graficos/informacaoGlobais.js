const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/tree/Aula01/trabalho'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_com_acesso_a_trabalho/1e9) 
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9) 
    const horas = parseInt(dados.tempo_medio_dia_trabalhando)
    const minutos = Math.round((dados.tempo_medio_dia_trabalhando - horas)*60)
    
const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML =`Você sabia que o mundo tem <span> ${dados.total_pessoas_mundo} </span> de pessoas e que aproximadamente <span> ${dados.total_pessoas_empregadas} </span> estão empregadas em serviços registrados. Eles trabalham <span> ${dados.tempo_medio_trabalho_por_semana} </span> horas por semana.`
    const container = document.getElementById('graficos-container')
container.appendChild(paragrafo);

}

vizualizarInformacoesGlobais()