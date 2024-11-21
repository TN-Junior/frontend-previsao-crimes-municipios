const form = document.querySelector('form');
const preco = document.getElementById('preco');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = {
    ano: parseInt(formData.get('ano')),
    municipio: formData.get('municipio'),
    total_crimes: parseInt(formData.get('totalCrimes')),
    serie_1: parseInt(formData.get('serie1')),
    serie_2: parseInt(formData.get('serie2')),
    serie_3: parseInt(formData.get('serie3')),
    serie_4: parseInt(formData.get('serie4')),
    anos_finais_docentes: parseInt(formData.get('anosFinaisDocentes')),
    anos_finais_escolas: parseInt(formData.get('anosFinaisEscolas')),
    anos_iniciais_docentes: parseInt(formData.get('anosIniciaisDocentes')),
    anos_iniciais_escolas: parseInt(formData.get('anosIniciaisEscolas')),
    creche_docentes: parseInt(formData.get('crecheDocentes')),
    creche_escolas: parseInt(formData.get('crecheEscolas')),
    creche_matriculas: parseInt(formData.get('crecheMatriculas')),
    fundamental_docentes: parseInt(formData.get('fundamentalDocentes')),
    fundamental_escolas: parseInt(formData.get('fundamentalEscolas')),
    fundamental_matriculas: parseInt(formData.get('fundamentalMatriculas')),
    infantil_docentes: parseInt(formData.get('infantilDocentes')),
    infantil_escolas: parseInt(formData.get('infantilEscolas')),
    infantil_matriculas: parseInt(formData.get('infantilMatriculas')),
    medio_docentes: parseInt(formData.get('medioDocentes')),
    medio_escolas: parseInt(formData.get('medioEscolas')),
    medio_matriculas: parseInt(formData.get('medioMatriculas')),
    estadual_docentes: parseInt(formData.get('estadualDocentes')),
    estadual_escolas: parseInt(formData.get('estadualEscolas')),
    estadual_matriculas: parseInt(formData.get('estadualMatriculas')),
    federal_docentes: parseInt(formData.get('federalDocentes')),
    federal_escolas: parseInt(formData.get('federalEscolas')),
    federal_matriculas: parseInt(formData.get('federalMatriculas')),
    municipal_docentes: parseInt(formData.get('municipalDocentes')),
    municipal_escolas: parseInt(formData.get('municipalEscolas')),
    municipal_matriculas: parseInt(formData.get('municipalMatriculas')),
    nao_seriada_matriculas: parseInt(formData.get('naoSeriada')),
    privado_docentes: parseInt(formData.get('privadoDocentes')),
    privado_escolas: parseInt(formData.get('privadoEscolas')),
    privado_matriculas: parseInt(formData.get('privadoMatriculas')),
    pre_escolar_docentes: parseInt(formData.get('preEscolarDocentes')),
    pre_escolar_escolas: parseInt(formData.get('preEscolarEscolas')),
    pre_escolar_matriculas: parseInt(formData.get('preEscolarMatriculas')),
    ideb: parseFloat(formData.get('ideb')),
  };
  const price = callApiToGetPredictions(data);

  price.then((result) => {
    preco.textContent = `Preço estimado: R$ ${result.precoPrevisto}`;
    preco.style.display = 'block';
  });
});

const callApiToGetPredictions = async (data) => {
  console.log(data);
  const response = await fetch('https://api-educxseg.onrender.com/dados', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  console.log(result);
  return result;
};
