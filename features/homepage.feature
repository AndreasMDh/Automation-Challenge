Feature: 99.co App Homepage
  
  Background: 
    Given 99.co app is opened

  # Homepage first loaded

  Scenario: Verify homepage is displayed
    Then I should see the search bar
    And I should see the filter button
    And I should see the sorting filter
    And I should see the kisaran harga filter
    And I should see the luas tanah filter
    And I should see the property listing category 
    And I should see the property listings

  # Homepage features

  Scenario: Verify homepage search field is displayed
    Then I should see the search bar
    And the search bar should display its placeholder

  Scenario: Open filter page from homepage
    When I tap the Filter button
    Then the filter page should be displayed

  Scenario: Open sorting from homepage
    When I tap the sorting filter
    Then the sorting popup should be displayed

  Scenario: Open kisaran harga from homepage
    When I tap the kisaran harga filter
    Then the kisaran harga popup should be displayed

  Scenario: Open luas tanah from homepage
    When I tap the luas tanah filter
    Then the luas tanah popup should be displayed

  Scenario: Verify homepage property type
    Then the new properties category should be displayed
    And the bank asset category should be displayed

  Scenario: Verify listed property information
    Then I should see the property category
    And I should see the property price
    And I should see the property title
    And I should see the property location
    And I should see the land area

  # Homepage navigation

  Scenario: Verify bottom navigation
    Then I should see the Cari navigation
    And I should see the Hunian Baru navigation
    And I should see the Iklan Saya navigation
    And I should see the Buat Iklan navigation
    And I should see the Akun Saya navigation

  Scenario: Navigate to Hunian Baru
    When I tap the Hunian Baru navigation
    Then the Hunian Baru page should be displayed

  Scenario: Navigate to Iklan Saya
    When I tap the Iklan Saya navigation
    Then the Iklan Saya page should be displayed

  Scenario: Navigate to Buat Iklan
    When I tap the Buat Iklan navigation
    Then the Buat Iklan page should be displayed

  Scenario: Navigate to Akun Saya
    When I tap the Akun Saya navigation
    Then the Akun Saya page should be displayed

    Scenario: Verify Hunian Baru navigation
    Given 99.co app is opened
    When I tap the Hunian Baru navigation
    Then the Hunian Baru page should be displayed

  Scenario: Verify Iklan Saya navigation without login
    Given 99.co app is opened
    When I tap the Iklan Saya navigation
    Then the login required message should be displayed

  Scenario: Verify Buat Iklan navigation without login
    Given 99.co app is opened
    When I tap the Buat Iklan navigation
    Then the login required message should be displayed

  Scenario: Verify Akun Saya navigation without login
    Given 99.co app is opened
    When I tap the Akun Saya navigation
    Then the login required message should be displayed