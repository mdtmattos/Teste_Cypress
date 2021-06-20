class Elements {
    CampoProcura() {
        return cy.get('[id=search_query_top]');
    }
    btnSearch() {
        return cy.get('[name=submit_search]');
    }
    tituloBusca() {
        return cy.get('.lighter');
    }
    imagemProduto() {
        return cy.get('.product_img_link > .replace-2x');
    }
}

export default Elements