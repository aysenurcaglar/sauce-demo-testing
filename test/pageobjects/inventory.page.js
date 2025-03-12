class InventoryPage {
  get headerTitle() {
    return $('//div[@class="app_logo"]');
  }

  async getHeaderTitle() {
    const title = await this.headerTitle.getText();
    return title;
  }
}

module.exports = new InventoryPage();
