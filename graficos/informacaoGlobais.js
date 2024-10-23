const url='https://github.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/tree/Aula01/trabalho'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados)
}
vizualizarInformacoesGlobais()