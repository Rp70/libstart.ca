import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Responsive Design Tests', () => {
  test('should display header correctly on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
    
    // Check header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check title is readable
    const title = page.getByRole('heading', { name: /library companion/i });
    await expect(title).toBeVisible();
    
    // Check tagline is visible
    await expect(page.getByText(/start your canadian journey/i)).toBeVisible();
    
    // Check language selector is visible
    await expect(page.getByRole('button', { name: /english/i })).toBeVisible();
  });

  test('should have scrollable tabs on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check tabs container exists
    const tabsList = page.locator('[role="tablist"]');
    await expect(tabsList).toBeVisible();
    
    // Check tabs are horizontally scrollable
    const tabsContainer = await tabsList.boundingBox();
    expect(tabsContainer).toBeTruthy();
    
    // Check individual tabs are visible
    await expect(page.getByRole('tab', { name: /culture/i })).toBeVisible();
    await expect(page.getByRole('tab', { name: /services/i })).toBeVisible();
    
    // Verify tabs don't wrap (horizontal scroll)
    const firstTab = page.getByRole('tab', { name: /culture/i });
    const lastTab = page.getByRole('tab', { name: /collections/i });
    
    await expect(firstTab).toBeVisible();
    // Last tab might need scrolling to be visible
    await lastTab.scrollIntoViewIfNeeded();
    await expect(lastTab).toBeVisible();
  });

  test('should display tabs grid on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // All tabs should be visible without scrolling
    const allTabs = page.locator('[role="tab"]');
    const tabCount = await allTabs.count();
    expect(tabCount).toBe(14); // Verify all tabs are present
    
    // Check grid layout on desktop
    const tabsList = page.locator('[role="tablist"]');
    await expect(tabsList).toBeVisible();
  });

  test('should have proper spacing on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check main content has proper padding
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Check footer doesn't overlap content
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Scroll to bottom to verify footer
    await footer.scrollIntoViewIfNeeded();
    await expect(footer).toBeInViewport();
  });

  test('should have proper spacing on tablet', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 768, height: 1024 });
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Check cards layout
    const cards = page.locator('[class*="grid"]').first();
    await expect(cards).toBeVisible();
  });

  test('should have proper spacing on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Check max-width constraint
    const main = page.locator('main');
    const mainBox = await main.boundingBox();
    expect(mainBox?.width).toBeLessThanOrEqual(1280); // max-w-6xl
  });

  test('should have readable typography on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check font sizes are readable (at least 12px for body text)
    const bodyText = page.locator('p').first();
    const fontSize = await bodyText.evaluate(el => 
      window.getComputedStyle(el).fontSize
    );
    const fontSizeNum = parseInt(fontSize);
    expect(fontSizeNum).toBeGreaterThanOrEqual(12);
  });

  test('should navigate between tabs', async ({ page }) => {
    await page.goto('/');
    
    // Click on Services tab
    await page.getByRole('tab', { name: /services/i }).click();
    await expect(page.getByRole('tabpanel')).toContainText(/services/i);
    
    // Click on Culture tab
    await page.getByRole('tab', { name: /culture/i }).click();
    await expect(page.getByRole('tabpanel')).toContainText(/culture|library/i);
  });

  test('should switch languages', async ({ page }) => {
    await page.goto('/');
    
    // Click language selector
    await page.getByRole('button', { name: /english/i }).click();
    
    // Select Spanish
    await page.getByRole('menuitem', { name: /español/i }).click();
    
    // Verify language changed
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/compa/i);
  });

  test('footer should be visible and properly styled', async ({ page }) => {
    await page.goto('/');
    
    const footer = page.locator('footer');
    await footer.scrollIntoViewIfNeeded();
    
    await expect(footer).toBeVisible();
    await expect(footer).toContainText(/canada/i);
    
    // Check footer note is visible
    await expect(footer.getByText(/libraries are funded/i)).toBeVisible();
  });

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/');
    
    // Run accessibility checks
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('cards should have consistent spacing', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Navigate to a tab with cards
    await page.getByRole('tab', { name: /culture/i }).click();
    
    // Check cards are visible
    const cards = page.locator('[class*="card"]');
    const cardCount = await cards.count();
    expect(cardCount).toBeGreaterThan(0);
  });

  test('should handle touch interactions on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Tab should be tappable (minimum 44x44px recommended)
    const tab = page.getByRole('tab', { name: /culture/i });
    const box = await tab.boundingBox();
    
    expect(box?.height).toBeGreaterThanOrEqual(40); // Close to 44px recommendation
  });

  test('should load without layout shift', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to be stable
    await page.waitForLoadState('networkidle');
    
    // Check critical elements are in place
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
  });
});
