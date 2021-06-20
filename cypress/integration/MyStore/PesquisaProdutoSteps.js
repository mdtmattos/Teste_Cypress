/* global Given, Then, When */

import MyStore_Page from '../../support/Pages/MyStorePages/MyStore_Pages'
const mystorePage = new MyStore_Page


Given('Que eu acesse o site',() => {
	mystorePage.acessarSite();
})

When('Eu pesquisar um produto',() => {
	mystorePage.buscarProduto();
    mystorePage.clickBtnProcura();
})

Then('Eu valido se o produto mostrado é o desejado',() => {
	mystorePage.validarBusca();
})


