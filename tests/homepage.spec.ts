import { expect, test } from "@playwright/test";

test("hero renders the team name and tagline", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("#top");
  await expect(hero.getByRole("heading", { name: "MASTERS" })).toBeVisible();
  await expect(hero.getByText(/online gaming platform/i)).toBeVisible();
});

test("desktop nav shows section links", async ({ page, isMobile }) => {
  test.skip(isMobile, "desktop nav is hidden below the sm breakpoint");
  await page.goto("/");
  const nav = page.getByRole("navigation", { name: "Primary" }).first();
  await expect(nav.getByRole("link", { name: "Team", exact: true })).toBeVisible();
  await expect(nav.getByRole("link", { name: "Code of Conduct" })).toBeVisible();
});

test("mobile menu toggles open and closed with the keyboard", async ({ page, isMobile }) => {
  test.skip(!isMobile, "mobile menu only renders on small viewports");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.click();
  const mobileMenu = page.locator("#mobile-menu");
  await expect(mobileMenu.getByRole("link", { name: "Team", exact: true })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(mobileMenu).toBeHidden();
});

test("project section describes the platform and links to it as coming soon", async ({ page }) => {
  await page.goto("/");
  const project = page.locator("#project");
  await expect(project.getByRole("heading", { name: "The Project" })).toBeVisible();
  await expect(project.getByText(/board game café/i)).toBeVisible();
  const launchLink = project.getByRole("link", { name: "Launch the platform" });
  await expect(launchLink).toHaveAttribute("href", "#");
  await expect(launchLink).toHaveAttribute("aria-disabled", "true");
  await expect(project.getByText("Coming soon")).toBeVisible();
});

test("team section renders all ten members", async ({ page }) => {
  await page.goto("/");
  const team = page.locator("#team");
  await expect(team.getByRole("heading", { name: "The Team" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Jakub Kuka" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Maryam Mirbagheri" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Alexander" })).toBeVisible();
  await expect(team.locator("article")).toHaveCount(10);
});

test("team order reshuffles between page loads", async ({ page }) => {
  await page.goto("/");
  const firstOrder = await page
    .locator("#team article h3")
    .allTextContents();

  let reshuffled = false;
  for (let attempt = 0; attempt < 5 && !reshuffled; attempt += 1) {
    await page.reload();
    const nextOrder = await page.locator("#team article h3").allTextContents();
    reshuffled = nextOrder.join() !== firstOrder.join();
  }

  expect(reshuffled).toBe(true);
});
