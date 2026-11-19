const BasePage = require('./base.page');

class HomepagePage extends BasePage {
    // Homepage elements
    get searchBar() {
        return $('~Lokasi, area, project');
    }

    get filterButton() {
        return $('~Filter');
    }

    // Quick filters
    get sortingFilter() {
        return $('~Diutamakan');
    }

    get kisaranHargaFilter() {
        return $('~Kisaran Harga');
    }

    get luasTanahFilter() {
        return $('~Luas Tanah');
    }

    // Quick filter popups
    get sortPopupTitle() {
        return $('~Urutkan');
    }

    get kisaranHargaPopupTitle() {
        return $('~Kisaran Harga');
    }

    get luasTanahPopupTitle() {
        return $('~Luas Tanah');
    }

    // Homepage categories
    get propertiBaruCategory() {
        return $('~Properti Baru');
    }

    get asetBankCategory() {
        return $('~Aset Bank');
    }

    // Property listings
    get propertyCards() {
        return $$(
            'android=new UiSelector().descriptionContains("Cicilan Mulai")'
        );
    }

    get propertyCategory() {
        return $('android=new UiSelector().descriptionMatches("Villa|Rumah|Apartemen|Tanah")');
    }

    // Bottom navigation
    get cariNavigation() {
        return $('~Cari\nTab 1 of 5');
    }

    get hunianBaruNavigation() {
        return $('~Hunian Baru\nTab 2 of 5');
    }

    get iklanSayaNavigation() {
        return $('~Iklan Saya\nTab 3 of 5');
    }

    get buatIklanNavigation() {
        return $('~Buat Iklan\nTab 4 of 5');
    }

    get akunSayaNavigation() {
        return $('~Akun Saya\nTab 5 of 5');
    }

    // Homepage state
    async isHomepageDisplayed() {
        return await this.searchBar.isDisplayed().catch(() => false);
    }

    async waitForHomepage() {
        await this.waitForElement(this.searchBar);
    }

    // Homepage interactions
    async openSearch() {
        await this.click(this.searchBar);
    }

    async openFilter() {
        await this.click(this.filterButton);
    }

    async openSortingFilter() {
        await this.click(this.sortingFilter);
    }

    async openKisaranHargaFilter() {
        await this.click(this.kisaranHargaFilter);
    }

    async openLuasTanahFilter() {
        await this.click(this.luasTanahFilter);
    }

    // Property listing methods
    async getPropertyCount() {
        return await this.getElementCount(this.propertyCards);
    }

    async isPropertyCardDisplayed(index = 0) {
        const cards = await this.propertyCards;

        if (index < 0 || index >= cards.length) {
            return false;
        }

        return await cards[index].isDisplayed();
    }

    async getPropertyCardData(index = 0) {
        const cards = await this.propertyCards;

        if (index < 0 || index >= cards.length) {
            throw new Error(`Property card index ${index} does not exist.`);
        }

        const description = await cards[index].getAttribute('content-desc');

        if (!description) {
            throw new Error('Property card accessibility description is empty.');
        }

        const lines = description
            .split('\n')
            .map(line => line.trim());

        return {
            price: lines[0] || null,
            installment: lines[1] || null,
            title: lines[2] || null,
            location: lines[3] || null,
            bedrooms: lines[4] || null,
            bathrooms: lines[5] || null,
            landArea: lines[6]
                ? `${lines[6]} ${lines[7] || ''}`.trim()
                : null,
            buildingArea: lines[8]
                ? `${lines[8]} ${lines[9] || ''}`.trim()
                : null,
            updatedAt: lines[10] || null,
            agent: lines[11] || null,
            description
        };
    }

    // Bottom navigation interactions
    async openHunianBaru() {
        await this.click(this.hunianBaruNavigation);
    }

    get hunianBaruPageTitle() {
        return $('~Properti Pilihan 99.co');
    }

    async openIklanSaya() {
        await this.click(this.iklanSayaNavigation);
    }

    async openBuatIklan() {
        await this.click(this.buatIklanNavigation);
    }

    async openAkunSaya() {
        await this.click(this.akunSayaNavigation);
    }

    // Login requirement
    get loginRequiredMessage() {
        return $('~Untuk mengakses halaman Akun Saya silahkan Login / Daftar Terlebih Dahulu');
    }
}

module.exports = new HomepagePage();