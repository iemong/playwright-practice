import { chromium } from "playwright"

const main = async () => {
  const browser = await chromium.launch()

  const page = await browser.newPage()
  await page.goto("http://whatsmyuseragent.org/")
  await page.screenshot({ path: "example.png" })

  await browser.close()
}

main()
