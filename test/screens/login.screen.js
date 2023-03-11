class LoginScreen {
    get #storeAddress (){
        return $('android.widget.EditText')
    }

    get #continue () {
        return $('id:bottom_button')
    }

    get #continueWithStoreCredentials(){
        return $('id:login_site_creds')
    }

    get #username() {
        return $('android=new UiSelector().text("Username")')
    }

    //get #username (){ return $('id:input')}

    get #password() {
        return $('android=new UiSelector().text("Password")')
    }

    get #twoFactorPasswordBtn(){
        return $('id:login_enter_password')
    }

    async setStoreAddrees (url){
        this.#storeAddress.setvalue()
    }

    async continue (){
        await this.#continue.click()
    }

    async continuewith (){
        await this.#continueWithStoreCredentials.click()
    }

    async login (username, password){
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async goToTwoFactorAuth (){
        await this.#twoFactorPasswordBtn.click()
    }

    async twoFactorLogin(password){
        await this.#password.setValue(password)
        await this.continue.click()
    }
}

module.exports = new LoginScreen()