import { Page, Locator } from "@playwright/test";
import { CartPageLocators } from "../selector/Locators";

export class CartPage {
    readonly page: Page;
    readonly shoppingCartLink: Locator;
    readonly productName: Locator;
    readonly quantity: Locator;
    readonly updateCartButton: Locator;
    readonly country: Locator;
    readonly stateProvince: Locator;
    readonly zipCode: Locator;
    readonly estimateShipping: Locator;
    readonly subTotal: Locator;
    readonly shippingTotal: Locator;
    readonly taxTotal: Locator;
    readonly orderTotal: Locator;
    readonly termsOfServiceCheckbox: Locator;
    readonly checkoutButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;

        const locators = CartPageLocators;

        this.shoppingCartLink = page.locator(locators.shoppingCartLink);
        this.productName = page.locator(locators.productName);
        this.quantity = page.locator(locators.quantity);
        this.updateCartButton = page.locator(locators.updateCartButton);
        this.country = page.locator(locators.country);
        this.stateProvince = page.locator(locators.stateProvince);
        this.zipCode = page.locator(locators.zipCode);
        this.estimateShipping = page.locator(locators.estimateShipping);
        this.subTotal = page.locator(locators.subTotal);
        this.shippingTotal = page.locator(locators.shippingTotal);
        this.taxTotal = page.locator(locators.taxTotal);
        this.orderTotal = page.locator(locators.orderTotal);
        this.termsOfServiceCheckbox = page.locator(locators.termsOfServiceCheckbox);
        this.checkoutButton = page.locator(locators.checkoutButton);
        this.emptyCartMessage = page.locator(locators.emptyCartMessage);
    }

    async gotoShoppingCart() {
        await this.shoppingCartLink.click();
        await this.page.waitForURL("**/cart");
        await this.page.waitForSelector('.order-summary-content', { state: 'visible', timeout: 10000 });
    }

    async clearCart() {
        await this.gotoShoppingCart();
        if (await this.emptyCartMessage.isVisible()) {
            return;
        }
        const removeCheckboxes = this.page.locator('input[name="removefromcart"]');
        const count = await removeCheckboxes.count();
        if (count > 0) {
            for (let i = 0; i < count; i++) {
                await removeCheckboxes.nth(i).check();
            }
            await this.updateCartButton.click();
            await this.emptyCartMessage.waitFor({ state: "visible" });
        }
    }

    async getCartItems() {
        return await this.productName.all();
    }

    async getCartItemsCount() {
        return await this.productName.count();
    }

    /**
     * Checks and returns the individual product quantity added in the shopping cart
     * @param productName Name of the product
     */
    async getProductQuantity(productName: string): Promise<number> {
        const row = this.page.locator("tr.cart-item-row", {
            has: this.page.locator("a.product-name", { hasText: productName })
        });
        const qtyInput = row.locator("input.qty-input");
        await qtyInput.waitFor({ state: "visible" });
        const value = await qtyInput.inputValue();
        return parseInt(value, 10);
    }

    /**
     * Estimate the shipping by selecting country, province/state, and inputting zip code
     */
    async estimateShippingDetails(country: string, state: string, zip: string) {
        await this.country.selectOption({ label: country });
        // The State list might refresh after country selection. We wait for it to be enabled.
        await this.stateProvince.waitFor({ state: "visible" });
        await this.stateProvince.selectOption({ label: state });
        await this.zipCode.fill(zip);
        await this.estimateShipping.click();
        // Wait for shipping estimation results to load/update
        await this.orderTotal.waitFor({ state: "visible" });
    }

    /**
     * Retrieves and displays the overall totals (Sub-Total, Shipping, Tax, Total)
     */
    async getOrderTotals() {
        await this.subTotal.waitFor({ state: "visible" });
        const subtotal = (await this.subTotal.textContent())?.trim() || "";
        const shipping = (await this.shippingTotal.textContent())?.trim() || "";
        const tax = (await this.taxTotal.textContent())?.trim() || "";
        const total = (await this.orderTotal.textContent())?.trim() || "";

        console.log(`Order Totals:`);
        console.log(`- Sub-Total: ${subtotal}`);
        console.log(`- Shipping: ${shipping}`);
        console.log(`- Tax: ${tax}`);
        console.log(`- Total: ${total}`);

        return { subtotal, shipping, tax, total };
    }

    /**
     * Accepts terms of service and proceeds to checkout
     */
    async proceedToCheckout() {
        await this.termsOfServiceCheckbox.check();
        await this.checkoutButton.click();
    }
}