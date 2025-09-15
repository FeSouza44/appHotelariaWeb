export default function Checkin(){

    const chekinDiv = document.createElement('div');
    chekinDiv.className = 'dateSelector';
    chekinDiv.innerHTML = `
<div>
    <label for="option1">Opção 1:</label>
    <select id="option1" name="option1">        
    </select>
</div>

<div>
    <label for="option2">Opção 2:</label>
    <select id="option2" name="option2">
    
    </select>
</div>

<div>
    <label for="option3">Opção 3:</label>
    <select id="option3" name="option3">
        
    </select>
</div>
    `
    return chekinDiv;

}