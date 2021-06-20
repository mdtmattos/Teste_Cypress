/// <reference types="Cypress" />

import Elements from './MyStore_Elements'
const elements =  new Elements
const url = "http://automationpractice.com/"

class MyStore_Page {
    acessarSite(){
        cy.visit(url);
    }

    buscarProduto(){
        elements.CampoProcura().type("Blouse");
    }

    clickBtnProcura(){
        elements.btnSearch().click();
    }

    validarBusca(){
        elements.imagemProduto().should('be.visible');
        elements.tituloBusca().should('have.text', '\n            "Blouse"\n        ');
    }
}

export default MyStore_Page