const homeScreen = require ("../screens/home.screen");
const loginScreen = require ("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let urlLoja = 'http://lojaebac.ebaconline.art.br/'
let usuario = 'gerente'
let senha = 'GD*peToHNJ1#c$sgk08EaYJQ'
describe('Acess admin Painel', () => {
    it('should login with valid credencials', async () => {
        await homeScreen.goToSkip()
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddrees(urlLoja)
        await loginScreen.continue()
        await loginScreen.login(usuario, senha)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(senha)
        
        expect(await myStoreScreen.myStoreLogoIsDisplayed()).toBeTruthy()
        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - SHOP')

        
    });
    
});