export function FormQuartos(){

    const forms = document.createElement('form');
    forms.className = "CadQuartoForm";
    forms.innerHTML= 
    `
    <form>
  <div class="mb-3">
    <label for="InputQuarto" class="form-label">Nome do Quarto</label>
    <input type="text" class="form-control" id="InputQuarto" aria-describedby="quartoHelp">
  </div>
  <div class="mb-3">
    <label for="InputNum" class="form-label">Nº</label>
    <input type="text" class="form-control" id="InputNumero">
  </div>
    <div class="mb-3">
    <label for="InputQtdSolteiro" class="form-label">Camas de Solteiro</label>
    <input type="text" class="form-control" id="InputQuarto" aria-describedby="quartoHelp">
  </div>
    <div class="mb-3">
    <label for="InputQtdCasal" class="form-label">Camas de Casal</label>
    <input type="text" class="form-control" id="InputQuarto" aria-describedby="quartoHelp">
  </div>

  <button type="submit" class="btn btn-primary">Cadastrar</button>
</form>
    `
    return forms;
}