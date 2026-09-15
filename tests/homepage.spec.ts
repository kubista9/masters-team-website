import { expect, test } from "@playwright/test";

test("hero renders the team name and tagline", async ({ page }) => {
  await page.goto("/");
  const hero = page.locator("#top");
  await expect(hero.getByRole("heading", { name: "MASTERS" })).toBeVisible();
  await expect(hero.getByText(/online gaming platform/i)).toBeVisible();
});

test("project section describes the platform and links to it as coming soon", async ({ page }) => {
  await page.goto("/");
  const project = page.locator("#project");
  await expect(project.getByRole("heading", { name: "The Project" })).toBeVisible();
  await expect(project.getByText(/board game café/i)).toBeVisible();
  const launchLink = project.getByRole("link", { name: "See the platform" });
  await expect(launchLink).toHaveAttribute("href", "#");
  await expect(launchLink).toHaveAttribute("aria-disabled", "true");
  await expect(project.getByText("Coming soon")).toBeVisible();
});

test("team section renders all ten members with a Code of Conduct download", async ({ page }) => {
  await page.goto("/");
  const team = page.locator("#team");
  await expect(team.getByRole("heading", { name: "The Team" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Jakub Kuka" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Maryam Mirbagheri" })).toBeVisible();
  await expect(team.getByRole("heading", { name: "Alexander" })).toBeVisible();
  await expect(team.locator("article")).toHaveCount(10);

  const download = team.getByRole("link", { name: "Download Code of Conduct" });
  await expect(download).toHaveAttribute("href", "/docs/code-of-conduct.pdf");
  await expect(download).toHaveAttribute("download", "");
});

test("all team member photos actually load", async ({ page }) => {
  await page.goto("/");
  const photos = page.locator('#team img[alt^="Portrait"]');
  const count = await photos.count();
  expect(count).toBe(9); // 10 members, 1 (Alexander) has no photo

  for (let i = 0; i < count; i += 1) {
    const img = photos.nth(i);
    await expect(img).toBeVisible();
    const naturalWidth = await img.evaluate((el: HTMLImageElement) => {
      return el.complete ? el.naturalWidth : -1;
    });
    expect(naturalWidth).not.toBe(0);
  }
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

test("team cards show the full bio and no skills or LinkedIn links", async ({ page }) => {
  await page.goto("/");
  const jakubCard = page
    .locator("#team article")
    .filter({ has: page.getByRole("heading", { name: "Jakub Kuka" }) });

  // The bio should render in full, not truncated.
  await expect(
    jakubCard.getByText(
      "Software engineer and consultant based in Prague. Currently at Quadient, bridging clients and developers on AI/ML solutions. Previously interned at UCB in Brussels and worked as a web developer in Slovakia. Has a stand-up comedy background."
    )
  ).toBeVisible();

  // Skills and LinkedIn links live in team-data.ts but aren't rendered on the card.
  await expect(page.locator("#team").getByRole("link", { name: /LinkedIn/ })).toHaveCount(0);
  await expect(jakubCard.getByText("React")).toHaveCount(0);
});

test("footer shows the copyright and scrolls back to top", async ({ page }) => {
  await page.goto("/");
  const footer = page.locator("footer");
  const year = new Date().getFullYear().toString();
  await expect(footer.getByText(new RegExp(`©\\s*${year}\\s*Masters`))).toBeVisible();

  await footer.getByRole("button", { name: "Back to top" }).click();
  await expect(page.locator("#top")).toBeInViewport();
});
