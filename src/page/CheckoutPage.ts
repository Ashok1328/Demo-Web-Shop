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
        // Wait for billing step to be active and load
        await this.page.waitForSelector('li#opc-billing.active', { state: 'visible', timeout: 15000 });
        await this.page.waitForSelector('#billing-address-select, #BillingNewAddress_FirstName', { state: 'visible', timeout: 15000 });

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
        // Wait for either the shipping address step OR the shipping method step to become active
        await this.page.waitForSelector('li#opc-shipping.active, li#opc-shipping_method.active', { state: 'visible', timeout: 15000 });

        if (await this.page.locator('li#opc-shipping.active').isVisible()) {
            await this.shippingAddressContinue.click();
        }
    }

    async selectShippingMethod(shippingMethod: string) {
        // Wait for shipping method step to be active
        await this.page.waitForSelector('li#opc-shipping_method.active', { state: 'visible', timeout: 15000 });
        // Wait for shipping options to load
        await this.page.waitForSelector('input[name="shippingoption"]', { state: 'visible', timeout: 10000 });
        await this.shippingMethodContinue.waitFor({ state: "visible" });
        await this.shippingMethodContinue.click();
    }

    async selectPaymentMethod(paymentMethod: string) {
        // Wait for payment method step to be active
        await this.page.waitForSelector('li#opc-payment_method.active', { state: 'visible', timeout: 15000 });
        // Wait for payment methods to load
        await this.page.waitForSelector('input[name="paymentmethod"]', { state: 'visible', timeout: 10000 });
        await this.paymentMethodContinue.waitFor({ state: "visible" });
        await this.paymentMethodContinue.click();
    }

    async selectPaymentInfo(paymentInfo: string) {
        // Wait for payment info step to be active
        await this.page.waitForSelector('li#opc-payment_info.active', { state: 'visible', timeout: 15000 });
        // Wait for payment info form load
        await this.page.waitForSelector('#checkout-payment-info-load', { state: 'visible', timeout: 10000 });
        await this.paymentInfoContinue.waitFor({ state: "visible" });
        await this.paymentInfoContinue.click();
    }

    async confirmOrder() {
        // Wait for confirm order step to be active
        await this.page.waitForSelector('li#opc-confirm_order.active', { state: 'visible', timeout: 15000 });
        await this.confirmOrderButton.waitFor({ state: "visible" });
        await this.confirmOrderButton.click();
    }

    async getOrderConfirmTitle() {
        // Wait for confirm order please-wait loader to hide
        await this.page.locator("#confirm-order-please-wait").waitFor({ state: "hidden", timeout: 15000 });
        await this.orderConfirmTitle.waitFor({ state: "visible", timeout: 15000 });
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