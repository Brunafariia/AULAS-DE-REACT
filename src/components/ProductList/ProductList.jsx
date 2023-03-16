import { Product } from "../Product/Product";

export function ProductList() {
    return (
        <>
        {/* comunicacao direta componentes */}
        <Product 
        image="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg" 
        name="Floresta" 
        description= "Floresta Leggo 500 pecas"
        price="200"
        />

        <Product 
        image="https://m.media-amazon.com/images/I/81+xlh0eUIL._AC_UL320_.jpg" 
        name="Bonsai" 
        description= "Bonsai Lego 4200 pecas"
        price="200"
        />

        <Product 
        image="https://m.media-amazon.com/images/I/81qkKtQ49GL._AC_UL320_.jpg" 
        name="Policia" 
        description= "Policia Lego 4200 pecas"
        price="200"
        />
    </>
    );
}

// Crtl + space + enter p importat automatico