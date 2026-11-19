const BasePage = require('./base.page');

class FilterPage extends BasePage {
    // Element pages
    get pageTitle() {
        return $('~Filter');
    }

    // Tipe listing
    get dijualOption() {
        return $('~Dijual');
    }

    get disewaOption() {
        return $('~Disewa');
    }

    // Tipe properti
    get rumahOption() {
        return $('~Rumah');
    }

    get apartmentOption() {
        return $('~Apartment');
    }

    get rukoOption() {
        return $('~Ruko');
    }

    get tanahOption() {
        return $('~Tanah');
    }

    get kostOption() {
        return $('~Kost');
    }

    get kiosOption() {
        return $('~Kios');
    }

    get lihatSemuaTipePropertiOption() {
        return $('~Lihat Semua Tipe Properti');
    }

    // Jangkauan harga
    get minimumPriceInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
    }

    get maximumPriceInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }

    get pricePreset100To350() {
        return $('~100 - 350 Jt');
    }

    get pricePreset350To600() {
        return $('~350 - 600 Jt');
    }

    get pricePreset600To800() {
        return $('~600 - 800 Jt');
    }

    get pricePreset800To1M() {
        return $('~800 Jt - 1M');
    }

    get pricePresetAbove1M() {
        return $('~> 1M');
    }

    // Pengurutan 
    get diutamakanSortOption() {
        return $('~Diutamakan');
    }

    get terbaruSortOption() {
        return $('~Terbaru');
    }

    get hargaTerendahSortOption() {
        return $('~Harga Terendah');
    }

    get hargaTertinggiSortOption() {
        return $('~Harga Tertinggi');
    }

    get luasTanahTerkecilSortOption() {
        return $('~Luas Tanah Terkecil');
    }

    get lihatSemuaSortOption() {
        return $('~Lihat Semua');
    }

    // Luas tanah
    get minimumLandAreaInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(2)');
    }

    get maximumLandAreaInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(3)');
    }

    // Luas bangunan
    get minimumBuildingAreaInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(4)');
    }

    get maximumBuildingAreaInput() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(5)');
    }

    get resetButton() {
        return $('android=new UiSelector().className("android.widget.Button").description("Reset")');
    }

    get applyButton() {
        return $('android=new UiSelector().className("android.widget.Button").description("Terapkan")');
    }

    async waitForFilterPage() {
        await this.waitForElement(this.pageTitle);
    }

    async selectListingType(type) {
        const options = {
            dijual: this.dijualOption,
            disewa: this.disewaOption
        };

        const option = options[String(type).toLowerCase()];
        if (!option) throw new Error(`Unsupported listing type: ${type}`);
        await this.click(option);
    }

    async selectPropertyType(type) {
        const options = {
            rumah: this.rumahOption,
            apartment: this.apartmentOption,
            ruko: this.rukoOption,
            tanah: this.tanahOption,
            kost: this.kostOption,
            kios: this.kiosOption
        };

        const option = options[String(type).toLowerCase()];
        if (!option) throw new Error(`Unsupported property type: ${type}`);
        await this.click(option);
    }

    async enterPriceRange(minimum, maximum) {
        await this.clearField(this.minimumPriceInput);
        await this.enterText(this.minimumPriceInput, minimum);
        await this.clearField(this.maximumPriceInput);
        await this.enterText(this.maximumPriceInput, maximum);
    }

    async enterLandAreaRange(minimum, maximum) {
        await this.clearField(this.minimumLandAreaInput);
        await this.enterText(this.minimumLandAreaInput, minimum);
        await this.clearField(this.maximumLandAreaInput);
        await this.enterText(this.maximumLandAreaInput, maximum);
    }

    async enterBuildingAreaRange(minimum, maximum) {
        await this.clearField(this.minimumBuildingAreaInput);
        await this.enterText(this.minimumBuildingAreaInput, minimum);
        await this.clearField(this.maximumBuildingAreaInput);
        await this.enterText(this.maximumBuildingAreaInput, maximum);
    }

    async resetFilters() {
        await this.click(this.resetButton);
    }

    async applyFilters() {
        await this.click(this.applyButton);
    }
}

module.exports = new FilterPage();