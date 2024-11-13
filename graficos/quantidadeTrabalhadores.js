
async function quantidadeTrabalhadores() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/trabalho/trabalho-dados-gerais.json'
    const res = await fetch(url)
    const dados = await res.json()
    const nomeTrabalhadores = Object.keys(dados)
    const quantidadeDeTrabalhadores= Object.values(dados)

    const data = [
        {
            x: nomeTrabalhadores, 
            y: quantidadeTrabalhadores, 
            type: 'bar',
        ]
        }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, laytout)
         

quantidadeTrabalhadores()
      

