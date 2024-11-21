const form = document.querySelector('form');
const preco = document.getElementById('preco');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Criação do objeto de dados a partir do formulário
  const formData = new FormData(form);
  const data = {
    ano: parseInt(formData.get('ano')) || 0,
    municipio: formData.get('municipio') || '',
    total_crimes: parseFloat(formData.get('totalCrimes')) || 0,
    serie_1: parseFloat(formData.get('serie1')) || 0,
    serie_2: parseFloat(formData.get('serie2')) || 0,
    serie_3: parseFloat(formData.get('serie3')) || 0,
    serie_4: parseFloat(formData.get('serie4')) || 0,
    anos_finais_docentes: parseFloat(formData.get('anosFinaisDocentes')) || 0,
    anos_finais_escolas: parseFloat(formData.get('anosFinaisEscolas')) || 0,
    anos_iniciais_docentes: parseFloat(formData.get('anosIniciaisDocentes')) || 0,
    anos_iniciais_escolas: parseFloat(formData.get('anosIniciaisEscolas')) || 0,
    creche_docentes: parseFloat(formData.get('crecheDocentes')) || 0,
    creche_escolas: parseFloat(formData.get('crecheEscolas')) || 0,
    creche_matriculas: parseFloat(formData.get('crecheMatriculas')) || 0,
    fundamental_docentes: parseFloat(formData.get('fundamentalDocentes')) || 0,
    fundamental_escolas: parseFloat(formData.get('fundamentalEscolas')) || 0,
    fundamental_matriculas: parseFloat(formData.get('fundamentalMatriculas')) || 0,
    infantil_docentes: parseFloat(formData.get('infantilDocentes')) || 0,
    infantil_escolas: parseFloat(formData.get('infantilEscolas')) || 0,
    infantil_matriculas: parseFloat(formData.get('infantilMatriculas')) || 0,
    medio_docentes: parseFloat(formData.get('medioDocentes')) || 0,
    medio_escolas: parseFloat(formData.get('medioEscolas')) || 0,
    medio_matriculas: parseFloat(formData.get('medioMatriculas')) || 0,
    estadual_docentes: parseFloat(formData.get('estadualDocentes')) || 0,
    estadual_escolas: parseFloat(formData.get('estadualEscolas')) || 0,
    estadual_matriculas: parseFloat(formData.get('estadualMatriculas')) || 0,
    federal_docentes: parseFloat(formData.get('federalDocentes')) || 0,
    federal_escolas: parseFloat(formData.get('federalEscolas')) || 0,
    federal_matriculas: parseFloat(formData.get('federalMatriculas')) || 0,
    municipal_docentes: parseFloat(formData.get('municipalDocentes')) || 0,
    municipal_escolas: parseFloat(formData.get('municipalEscolas')) || 0,
    municipal_matriculas: parseFloat(formData.get('municipalMatriculas')) || 0,
    nao_seriada_matriculas: parseFloat(formData.get('naoSeriada')) || 0,
    privado_docentes: parseFloat(formData.get('privadoDocentes')) || 0,
    privado_escolas: parseFloat(formData.get('privadoEscolas')) || 0,
    privado_matriculas: parseFloat(formData.get('privadoMatriculas')) || 0,
    pre_escolar_docentes: parseFloat(formData.get('preEscolarDocentes')) || 0,
    pre_escolar_escolas: parseFloat(formData.get('preEscolarEscolas')) || 0,
    pre_escolar_matriculas: parseFloat(formData.get('preEscolarMatriculas')) || 0,
    ideb: parseFloat(formData.get('ideb')) || 0,
  };

  // Chamando a API e lidando com erros
  try {
    const result = await callApiToGetPredictions(data);
    preco.textContent = `Preço estimado: R$ ${result.precoPrevisto.toFixed(2)}`;
    preco.style.display = 'block';
  } catch (error) {
    console.error('Erro ao chamar a API:', error);
    preco.textContent = 'Erro ao calcular o preço. Tente novamente mais tarde.';
    preco.style.display = 'block';
  }
});

// Função para chamar a API
const callApiToGetPredictions = async (data) => {
  try {
    console.log('Enviando dados para a API:', data);

    const response = await fetch('https://api-educxseg.onrender.com/dados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro retornado pela API:', errorData);
      throw new Error(`Erro na API: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Resposta da API:', result);
    return result;
  } catch (error) {
    console.error('Erro ao comunicar com a API:', error);
    throw error; // Relança o erro para ser tratado no `form.addEventListener`
  }
};
