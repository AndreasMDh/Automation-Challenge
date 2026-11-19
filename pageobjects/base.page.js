class BasePage {
    async waitForElement(element, timeout = 15000) {
        await element.waitForDisplayed({
            timeout,
            timeoutMsg: 'Element was not displayed within the expected time.'
        });
        return element;
    }

    async isDisplayed(element) {
        return await element.isDisplayed();
    }

    async click(element) {
        await this.waitForElement(element);
        await element.click();
    }

    async enterText(element, value) {
        await this.waitForElement(element);
        await element.setValue(String(value));
    }

    async getText(element) {
        await this.waitForElement(element);
        return await element.getText();
    }

    async getAttribute(element, attribute) {
        await this.waitForElement(element);
        return await element.getAttribute(attribute);
    }

    async clearField(element) {
        await this.waitForElement(element);
        await element.clearValue();
    }

    async getElementCount(elements) {
        const resolvedElements = await elements;
        return resolvedElements.length;
    }
}

module.exports = BasePage;