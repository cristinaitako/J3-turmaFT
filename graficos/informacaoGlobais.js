const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/tree/Aula01/trabalho'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasEmpregadas = (dados.total_pessoas_empregadas/1e9) 
    const pessoasNoMundo = (dados.total_pessoas_mundo/1e9) 
    const horas = parseInt(dados.tempo_medio_trabalho_por_semana)
    const minutos = Math.round((dados.tempo_medio_trabalho_por_semana-horas)*60)
    const porcentagemConectadas =((pessoasEmpregadas/pessoasNoMundo)*100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML =`Você sabia que o mundo tem <span> ${pessoasNoMundo} </span> de pessoas e que aproximadamente <span> ${pessoasEmpregadas} </span> estão empregadas em serviços registrados. Eles trabalham <span> ${horas} </span> horas e <span> ${minutos} </span> minutos por semana.<br> Isso que significa que aproximandamente <span> ${porcentagemConectadas}% </span> pessoas conectadas em alguma rede social.`
    const container = document.getElementById('graficos-container')
container.appendChild(paragrafo);

}
vizualizarInformacoesGlobais()
