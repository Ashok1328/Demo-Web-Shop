import { Locator, Page, test } from "@playwright/test";
import { CheckoutPageLocators } from "../selector/Locators";

export class CheckoutPage {
    readonly page: Page;
    readonly onePageCheckoutLink: Locator;
    readonly billingAddressSelect: Locator;
    readonly billingAddressFirstName: Locator;
    readonly billingAddressLastName: Locator;
    readonly billingAddressEmail: Locator;
    readonly billingAddressCountry: Locator;
    readonly billingAddressStateProvince: Locator;
    readonly billingAddressCity: Locator;
    readonly billingAddressAddress1: Locator;
    readonly billingAddressZipPostalCode: Locator;
    readonly billingAddressPhoneNumber: Locator;
    readonly billingAddressContinueButton: Locator;
    readonly shippingAddressContinueButton: Locator;
    readonly billingAddressContinue: Locator;
    readonly shippingAddressContinue: Locator;
    readonly shippingMethodContinue: Locator;
    readonly paymentMethodContinue: Locator;
    readonly paymentInfoContinue: Locator;
    readonly confirmOrderButton: Locator;
    readonly orderConfirmTitle: Locator;
    readonly orderNumber: Locator;
    readonly orderSuccessMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        const locators = CheckoutPageLocators;

        this.onePageCheckoutLink = page.locator(locators.onePageCheckoutLink);
        this.billingAddressSelect = page.locator(locators.billingAddressSelect);
        this.billingAddressFirstName = page.locator(locators.billingAddressFirstName);
        this.billingAddressLastName = page.locator(locators.billingAddressLastName);
        this.billingAddressEmail = page.locator(locators.billingAddressEmail);
        this.billingAddressCountry = page.locator(locators.billingAddressCountry);
        this.billingAddressStateProvince = page.locator(locators.billingAddressStateProvince);
        this.billingAddressCity = page.locator(locators.billingAddressCity);
        this.billingAddressAddress1 = page.locator(locators.billingAddressAddress1);
        this.billingAddressZipPostalCode = page.locator(locators.billingAddressZipPostalCode);
        this.billingAddressPhoneNumber = page.locator(locators.billingAddressPhoneNumber);
        this.billingAddressContinueButton = page.locator(locators.billingAddressContinueButton);
        this.shippingAddressContinueButton = page.locator(locators.shippingAddressContinueButton);
        this.billingAddressContinue = page.locator(locators.billingAddressContinue);
        this.shippingAddressContinue = page.locator(locators.shippingAddressContinue);
        this.shippingMethodContinue = page.locator(locators.shippingMethodContinue);
        this.paymentMethodContinue = page.locator(locators.paymentMethodContinue);
        this.paymentInfoContinue = page.locator(locators.paymentInfoContinue);
        this.confirmOrderButton = page.locator(locators.confirmOrderButton);
        this.orderConfirmTitle = page.locator(locators.orderConfirmTitle);
        this.orderNumber = page.locator(locators.orderNumber);
        this.orderSuccessMessage = page.locator(locators.orderSuccessMessage);
    }

    async gotoOnePageCheckout() {
        await this.onePageCheckoutLink.click();
        await this.page.waitForURL(/.*\/onepagecheckout/);
    }

    async fillBillingAddress(billingAddress: any) {
        // Wait for the billing step to load and either selector to become visible
        await this.page.waitForSelector('#billing-address-select, #BillingNewAddress_FirstName', { state: 'visible', timeout: 10000 });

        if (await this.billingAddressSelect.isVisible()) {
            // A saved address is present and selected by default. Just click continue.
            await this.billingAddressContinue.click();
        } else {
            await this.billingAddressFirstName.fill(billingAddress.firstName);
            await this.billingAddressLastName.fill(billingAddress.lastName);
            await this.billingAddressEmail.fill(billingAddress.email);
            await this.billingAddressCountry.selectOption({ label: billingAddress.country });
            // The State list might refresh after country selection. We wait for it to be enabled.
            await this.billingAddressStateProvince.waitFor({ state: "visible" });
            await this.billingAddressStateProvince.selectOption({ label: billingAddress.stateProvince });
            await this.billingAddressCity.fill(billingAddress.city);
            await this.billingAddressAddress1.fill(billingAddress.address1);
            await this.billingAddressZipPostalCode.fill(billingAddress.zipPostalCode);
            await this.billingAddressPhoneNumber.fill(billingAddress.phoneNumber);
            await this.billingAddressContinue.click();
        }
    }

    async fillShippingAddress(shippingAddress: any) {
        // If Shipping Method continue button is already visible, the Shipping Address step was skipped
        if (await this.shippingMethodContinue.isVisible()) {
            return;
        }
        // If not skipped, click continue on shipping address if visible
        try {
            await this.shippingAddressContinue.waitFor({ state: "visible", timeout: 2000 });
            await this.shippingAddressContinue.click();
        } catch (e) {
            console.log("Shipping address continue button not visible/skipped.");
        }
    }

    async selectShippingMethod(shippingMethod: string) {
        await this.shippingMethodContinue.waitFor({ state: "visible" });
        await this.shippingMethodContinue.click();
    }

    async selectPaymentMethod(paymentMethod: string) {
        await this.paymentMethodContinue.waitFor({ state: "visible" });
        await this.paymentMethodContinue.click();
    }

    async selectPaymentInfo(paymentInfo: string) {
        await this.paymentInfoContinue.waitFor({ state: "visible" });
        await this.paymentInfoContinue.click();
    }

    async confirmOrder() {
        await this.confirmOrderButton.waitFor({ state: "visible" });
        await this.confirmOrderButton.click();
    }

    async getOrderConfirmTitle() {
        await this.orderConfirmTitle.waitFor({ state: "visible" });
        return await this.orderConfirmTitle.textContent();
    }

    async getOrderNumber() {
        await this.orderNumber.waitFor({ state: "visible" });
        return await this.orderNumber.textContent();
    }

    async getOrderSuccessMessage() {
        await this.orderSuccessMessage.waitFor({ state: "visible" });
        return await this.orderSuccessMessage.textContent();
    }
}   