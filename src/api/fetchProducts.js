export const fetchProducts = async (query = "iphone") => {
    try {
        const response = await fetch(
            `https://api.mercadolibre.com/sites/MLB/search?q=${query}`
        );

        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }

        const data = await response.json();
        return data.results || []; // Garante que sempre retorne um array
    } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        return []; // Retorna array vazio em caso de erro
    }
};
