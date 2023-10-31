exports.ContactUs =
    class ContactUs {
        constructor(page) {
        this.page = page;
        this.nameInput = '#recipient-email';
        this.emailInput = '#recipient-name';
        this.messageInput = '#message-text';
        this.sendButton = '//button[normalize-space()="Send message"]';
        }
    
        async gotoContactUsPage() {
        await this.page.goto('https://www.demoblaze.com/index.html');
        await this.page.locator('//a[normalize-space()="Contact"]').click();
        }
    
        async fillMessage(name, email, message) {
        await this.page.locator(this.nameInput).fill(name);
        await this.page.locator(this.emailInput).fill(email);
        await this.page.locator(this.messageInput).fill(message);
        }
    }