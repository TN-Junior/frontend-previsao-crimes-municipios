document.getElementById("previsaoForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = {
      ano: parseFloat(document.getElementById("ano").value),
      municipio: document.getElementById("municipio").value,
      ideb: parseFloat(document.getElementById("ideb").value),
      ensino_fundamental_docentes: parseFloat(document.getElementById("ensFundDocentes").value),
      ensino_fundamental_escolas: parseFloat(document.getElementById("ensFundEscolas").value),
      ensino_fundamental_matriculas: parseFloat(document.getElementById("ensFundMatriculas").value),
      ensino_infantil_docentes: parseFloat(document.getElementById("ensInfDocentes").value),
      ensino_infantil_escolas: parseFloat(document.getElementById("ensInfEscolas").value),
      ensino_infantil_matriculas: parseFloat(document.getElementById("ensInfMatriculas").value),
      ensino_medio_docentes: parseFloat(document.getElementById("ensMedDocentes").value),
      ensino_medio_escolas: parseFloat(document.getElementById("ensMedEscolas").value),
      ensino_medio_matriculas: parseFloat(document.getElementById("ensMedMatriculas").value),
  };

  try {
      const response = await fetch("https://api-previsao-crimes-production.up.railway.app/previsao-total-crimes/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
          document.getElementById("resultado").innerText = `Previsão de Total de Crimes: ${data.TotalCrimesPrevisto}`;
      } else {
          document.getElementById("resultado").innerText = `Erro: ${data.error}`;
      }
  } catch (error) {
      document.getElementById("resultado").innerText = `Erro: ${error.message}`;
  }
});
