const { Given, When, Then } = require('@wdio/cucumber-framework');

const homepagePage = require('../../pageobjects/homepage.page');
const filterPage = require('../../pageobjects/filter.page');

// Background

Given('99.co app is opened', async () => {
    await homepagePage.waitForHomepage();
});

// Homepage display

Then('I should see the search bar', async () => {
    await expect(homepagePage.searchBar).toBeDisplayed();
});

Then('I should see the filter button', async () => {
    await expect(homepagePage.filterButton).toBeDisplayed();
});

Then('I should see the sorting filter', async () => {
    await expect(homepagePage.sortingFilter).toBeDisplayed();
});

Then('I should see the kisaran harga filter', async () => {
    await expect(homepagePage.kisaranHargaFilter).toBeDisplayed();
});

Then('I should see the luas tanah filter', async () => {
    await expect(homepagePage.luasTanahFilter).toBeDisplayed();
});

Then('I should see the property listing category', async () => {
    await expect(homepagePage.propertiBaruCategory).toBeDisplayed();
    await expect(homepagePage.asetBankCategory).toBeDisplayed();
});

Then('I should see the property listings', async () => {
    const count = await homepagePage.getPropertyCount();
    expect(count).toBeGreaterThan(0);
});

// Search bar

Then('the search bar should display its placeholder', async () => {
    const description = await homepagePage.searchBar.getAttribute('content-desc');
    expect(description).toContain('Lokasi, area, project');
});

// Filter

When('I tap the Filter button', async () => {
    await homepagePage.openFilter();
});

Then('the filter page should be displayed', async () => {
    await filterPage.waitForFilterPage();
    await expect(filterPage.pageTitle).toBeDisplayed();
});

When('I tap the sorting filter', async () => {
    await homepagePage.openSortingFilter();
});

Then('the sorting popup should be displayed', async () => {
    await expect(homepagePage.sortPopupTitle).toBeDisplayed();
});

When('I tap the kisaran harga filter', async () => {
    await homepagePage.openKisaranHargaFilter();
});

Then('the kisaran harga popup should be displayed', async () => {
    await expect(homepagePage.kisaranHargaPopupTitle).toBeDisplayed();
});

When('I tap the luas tanah filter', async () => {
    await homepagePage.openLuasTanahFilter();
});

Then('the luas tanah popup should be displayed', async () => {
    await expect(homepagePage.luasTanahPopupTitle).toBeDisplayed();
});

// Property category

Then('the new properties category should be displayed', async () => {
    await expect(homepagePage.propertiBaruCategory).toBeDisplayed();
});

Then('the bank asset category should be displayed', async () => {
    await expect(homepagePage.asetBankCategory).toBeDisplayed();
});

Then('I should see the property category', async () => {
    await expect(homepagePage.propertyCategory).toBeDisplayed();
});

// Listed properties

Then('I should see a property price', async () => {
    const data = await homepagePage.getPropertyCardData(0);
    expect(data.price).toBeTruthy();
});

Then('I should see a property title', async () => {
    const data = await homepagePage.getPropertyCardData(0);
    expect(data.title).toBeTruthy();
});

Then('I should see a property location', async () => {
    const data = await homepagePage.getPropertyCardData(0);
    expect(data.location).toBeTruthy();
});

Then('I should see the land area', async () => {
    const data = await homepagePage.getPropertyCardData(0);
    expect(data.landArea).toBeTruthy();
});

// Bottom navigation display

Then('I should see the Cari navigation', async () => {
    await expect(homepagePage.cariNavigation).toBeDisplayed();
});

Then('I should see the Hunian Baru navigation', async () => {
    await expect(homepagePage.hunianBaruNavigation).toBeDisplayed();
});

Then('I should see the Iklan Saya navigation', async () => {
    await expect(homepagePage.iklanSayaNavigation).toBeDisplayed();
});

Then('I should see the Buat Iklan navigation', async () => {
    await expect(homepagePage.buatIklanNavigation).toBeDisplayed();
});

Then('I should see the Akun Saya navigation', async () => {
    await expect(homepagePage.akunSayaNavigation).toBeDisplayed();
});

// Bottom navigation interaction

When('I tap the Hunian Baru navigation', async () => {
    await homepagePage.openHunianBaru();
});

Then('the Hunian Baru page should be displayed', async () => {
    await expect(homepagePage.hunianBaruPageTitle).toBeDisplayed();
});

When('I tap the Iklan Saya navigation', async () => {
    await homepagePage.openIklanSaya();
});

When('I tap the Buat Iklan navigation', async () => {
    await homepagePage.openBuatIklan();
});

When('I tap the Akun Saya navigation', async () => {
    await homepagePage.openAkunSaya();
});

Then('the login required message should be displayed', async () => {
    await expect(homepagePage.loginRequiredMessage).toBeDisplayed();
});