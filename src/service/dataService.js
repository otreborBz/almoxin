import dados from '../dados.json';

if (!Array.isArray(dados)) {
  console.error('Dados não é um array:', dados);
  throw new Error('Formato de dados inválido');
}

export const searchTools = (searchText) => {
  if (!searchText) return dados;
  
  // Converte o texto de busca para minúsculo e remove espaços extras
  const searchTerms = searchText.toLowerCase().trim().split(' ');
  
  return dados.filter(item => {
    try {
      // Verifica se os campos existem e são strings antes de converter
      const itemCode = typeof item?.Item === 'string' ? item.Item.toLowerCase() : '';
      const description = typeof item?.["Item Description"] === 'string' ? item["Item Description"].toLowerCase() : '';
      const location = typeof item?.Locator === 'string' ? item.Locator.toLowerCase() : '';
      
      // Combina código e descrição para busca geral
      const searchableText = `${itemCode} ${description} ${location}`;
      
      // Verifica se todos os termos de busca estão presentes
      return searchTerms.every(term => searchableText.includes(term));
    } catch (error) {
      console.warn('Erro ao processar item:', item);
      return false;
    }
  });
};

export const getAllTools = () => {
  // Filtra itens inválidos do array
  return dados.filter(item => 
    item && 
    typeof item === 'object' && 
    typeof item.Item === 'string' && 
    typeof item["Item Description"] === 'string'
  );
};

export const addNewItem = (newItem) => {
  // Gera um ID único para o novo item
  newItem.id = Math.random().toString(36).substring(7);
  
  // Adiciona o novo item ao array de dados
  dados.unshift(newItem);
  
  return newItem;
}; 